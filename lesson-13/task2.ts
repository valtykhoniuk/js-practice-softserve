enum PackageStatus {
  Pending,
  InTransit,
  Delivered,
  Lost,
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface Parcel {
  readonly id: number;
  weight: number;
  dimensions: Dimensions;
  description?: string;
  sender: number | string;
  status: PackageStatus;

  deliver(isSuccess: boolean): void;

  readonly statusName: string; //getter
}
