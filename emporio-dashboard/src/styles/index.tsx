import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#FFFFFF"
        },
        primary: {
            main: "#FFA935",
        },
        secondary: {
            main: "#FC591F",
        },
    },
    typography: {
        fontFamily: [
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
        ].join(','),
    },
})

export default theme