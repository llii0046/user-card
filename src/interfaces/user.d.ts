interface IUserName {
  title: string;
  first: string;
  last: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUserInformation {
  picture: IPicture;
  name: IUserName;
  email: string;
  gender: string;
}
