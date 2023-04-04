import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        main: string;
        alternate: string;
      };
      secondary: {
        main: string;
        alternate: string;
      };
    };
  }
}
