import { ReactNode } from "react";

export type BasicComponentProps = {
  scale?: number;
  color?: string;
};

export type BasicStyleComponentProps = {
  background?: string;
  text?: string;
};

export type BasicChildrenProps = {
  children: ReactNode;
};

export type scrappedProductDetailsResult = {
  name?: string,
  category?: string,
  vendor?: string,
  price?: number,
  currency?: string,
  deliveryTime?: string,
  imageUrl?: string
};