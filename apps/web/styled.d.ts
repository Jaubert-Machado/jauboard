import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      sidebar: string;
      accent: string;
    };
  }
}
