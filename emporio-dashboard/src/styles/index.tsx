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
            'Lato'
        ].join(','),
    },
})

export default theme