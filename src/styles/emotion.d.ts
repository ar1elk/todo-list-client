import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: {
        main: string;
        dark: string;
      };
      secondary: {
        main: string;
        dark: string;
      };
    };
  }
}
