import { MaterialIconProps } from "./fonts/material/Material";
import { OcticonIconProps } from "./fonts/octicons2/Octicons2";

export * from "./fonts/material/Material";
export * from "./fonts/octicons2/Octicons2";

export type IconProp = {
  color?: any;
} & (
  | {
      family: "octicon";
      name: OcticonIconProps["name"];
    }
  | {
      family: "material";
      name: MaterialIconProps["name"];
    }
);
