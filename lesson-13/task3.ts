interface Printable {
  print(): void;
}

abstract class User {
  private static nextId: number = 1000;
  public readonly id: number;
  public email: string;
  private _password: string;

  constructor(email: string, password: string) {
    this.id = User.nextId++;
    this.email = email;
    if (password.length < 6) {
      console.log("Password too short!");
      this._password = ""; // Optionally prevent setting it
    } else {
      this._password = password;
    }
  }

  getPasswordPreview(): string {
    const len = this._password.length;
    if (len < 2) return this._password;
    return this._password[0] + "•".repeat(len - 2) + this._password[len - 1];
  }

  protected changePassword(newPassword: string): void {
    if (newPassword.length < 6) {
      console.log("Password too short!");
    } else {
      this._password = newPassword;
    }
  }

  abstract showProfile(): void;
}

class Admin extends User implements Printable {
  public isActive: boolean;

  constructor(email: string, password: string, isActive: boolean = true) {
    super(email, password);
    this.isActive = isActive;
  }

  showProfile(): void {
    if (this.isActive) {
      console.log(`https://softserve/profile/${this.id}`);
    } else {
      console.log("https://softserve/login");
    }
  }

  print(): void {
    console.log("Admin");
  }
}
