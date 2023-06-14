import {PaletteOptions, ThemeOptions} from '@mui/material/styles';
import {deepPurple, pink} from "@mui/material/colors";
import f72Black from "../fonts/72-Black.woff2";
import f72Bold from "../fonts/72-Bold.woff2";
import f72BoldItalic from "../fonts/72-BoldItalic.woff2";
import f72Condensed from "../fonts/72-Condensed.woff2";
import f72CondensedBold from "../fonts/72-CondensedBold.woff2";
import f72Italic from "../fonts/72-Italic.woff2";
import f72Light from "../fonts/72-Light.woff2";
import f72Regular from "../fonts/72-Regular.woff2";
import {createTheme, PaletteMode} from "@mui/material";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import {Theme} from "@emotion/react";

/**
 * Font Family: 72.
 *
 * @see https://experience.sap.com/72/
 */
const styleOverrides =
    `
                @font-face {
                    font-family: "72 Regular";
                    src: local("72 Regular"),
                    url(${f72Regular}) format("woff2");
                }

                @font-face {
                    font-family: "72 Light";
                    src: local("72 Light"),
                    url(${f72Light}) format("woff2");
                }

                @font-face {
                    font-family: "72 Italic";
                    src: local("72 Italic"),
                    font-style: italic,
                    url(${f72Italic}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Condensed Bold";
                    src: local("72 Condensed Bold"),
                    url(${f72CondensedBold}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Condensed";
                    src: local("72 Condensed"),
                    url(${f72Condensed}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Bold Italic";
                    src: local("72 Bold Italic"),
                    font-style: italic,
                    url(${f72BoldItalic}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Bold";
                    src: local("72 Bold "),
                    url(${f72Bold}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Black";
                    src: local("72 Black"),
                    url(${f72Black}) format("woff2");
                }`
;

const fontFamily = [
    '"72 Regular"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');


export const darkTheme = {
    mode: 'dark',
    primary: {
        main: '#A9B4BE',
    },
    secondary: {
        main: '#FECBDA',
    },
    error: {
        main: '#FA6161',
    },
    warning: {
        main: '#FFDF72',
    },
    info: {
        main: '#4DB1FF',
    },
    success: {
        main: '#BDE986',
    },
    background: {
        default: '#12171C',
        paper: '#1D232A',
    },
    text: {
        primary: '#EAECEE',
        secondary: '#8396A8',
        disabled: '#8396A8',
    },
    divider: '#2e3742',
} as PaletteOptions;

export const lightTheme = {
    mode: 'light',

    primary: {
        main: deepPurple.A400,
    },

    secondary: {
        main: pink["500"],
    },

    error: {
        main: "#AA0808",
    },

    warning: {
        main: "#e76500",
    },

    info: {
        main: "#0070F2",
    },

    success: {
        main: "#256F3A",
    },

    text:
        {
            primary: "#1D2D3E",
            secondary: "#556B82",
            disabled: "#758ca4"
        }
} as PaletteOptions;


export const typographyOptions = {
    fontFamily: fontFamily,

    h1: {
        fontFamily: '"72 Black"',
    },

    h2: {
        fontFamily: '"72 Bold"',
    },

    h3: {
        fontFamily: '"72 Bold"',
    },

    h4: {
        fontFamily: '"72 Regular"',
    },

    h5: {
        fontFamily: '"72 Light"',
    },

    h6: {
        fontFamily: '"72 Light"',
    }
} as TypographyOptions;

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {

    return {
        palette: mode == 'dark' ? darkTheme : lightTheme,

        components: {

            MuiCssBaseline: {
                styleOverrides: styleOverrides
            }

        },

        typography: typographyOptions,
    }
}

export function getTheme(mode: PaletteMode): Theme {
    return createTheme(getDesignTokens(mode));
}
