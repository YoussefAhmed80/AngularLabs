export interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img : string;
}

export interface ICategory{
  Id: number;
  Name: string;
}

export interface IUser{
  name : string;
  username : string;
  email : string;
}

export interface IPost{
  id : number;
  title : string;
  body : string;
}
