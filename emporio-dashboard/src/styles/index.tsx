import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        background: {
            default: "white"
        },
        primary: {
            main: "#FC591F",
        },
        secondary: {
            main: "#FFA935",
        },
    },
    typography: {
        fontFamily: [
            'Lato'
        ].join(','),
    },
})

export default theme