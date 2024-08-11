import { stateTSection } from "./TopSection";

export interface ForLoad {
  states: stateTSection | null;
  setStates: React.Dispatch<React.SetStateAction<stateTSection | null>>;
}
