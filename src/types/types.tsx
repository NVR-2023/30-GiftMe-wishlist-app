import { ReactNode } from 'react';

export type BasicComponentProps = {
  scale?: number;
  color?: string;
};

export type BasicStyleComponentProps = {
  background?: string;
  text?: string;
};

export type BasicChildrenProp = {
  children: ReactNode;
};