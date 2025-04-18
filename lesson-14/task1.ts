//task 1
function display(message: string): void;
function display(message1: string, message2: string): void;
function display(messages: string[]): void;

function display(
  messageOrMessages: string | string[],
  message2?: string
): void {
  if (Array.isArray(messageOrMessages)) {
    messageOrMessages.forEach((msg) => console.log(msg));
  } else if (message2) {
    console.log(messageOrMessages);
    console.log(message2);
  } else {
    console.log(messageOrMessages);
  }
}
