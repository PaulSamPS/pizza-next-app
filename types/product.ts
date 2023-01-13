export interface IPizzaLocal {
  id: string;
  badge: string | null;
  name: string;
  description: string;
  price: number[];
  pathname: string;
  img: { regular: string; slim: string };
  promotion: boolean;
  weight: { regular: string; slim: string };
  size: string[];
  dough: string[];
  type: string;
}

export interface IPizzaServer {
  _id: string;
  badge: string | null;
  name: string;
  description: string;
  price: number[];
  pathname: string;
  img: { regular: string; slim: string };
  promotion: boolean;
  weight: { regular: string; slim: string };
  size: string[];
  dough: string[];
  type: string;
}

export interface IProductLocal {
  id: string;
  name: string;
  description: string;
  type: string;
  badge: string | null;
  pathname: string;
  promotion: boolean;
  img: string;
  price: number;
  weight: string | null;
}

export interface IProductServer {
  _id: string;
  name: string;
  description: string;
  type: string;
  badge: string | null;
  pathname: string;
  promotion: boolean;
  img: string;
  price: number;
  weight: string;
}
