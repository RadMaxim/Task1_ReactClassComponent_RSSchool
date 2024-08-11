import { ElementType } from "./BottomSection";

export interface ProportesElement {
  homeworld: string;
  name: string;
  url: string;
}

export interface Cards {
  key: string;
  info: ElementType;
  id: string;
  favorite: boolean;
}
