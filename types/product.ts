export interface IProduct {
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

export interface IProductServer {
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
