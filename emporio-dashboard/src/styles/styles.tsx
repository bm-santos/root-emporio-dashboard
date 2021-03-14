import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#ffffff"
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


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        width: '50%', // Fix IE 11 issue.
        margin: theme.spacing(3, "25%", 2),
    },
}));
export function GlobalTheme(props: any) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme} >
            {props.children}
        </ThemeProvider>

    )
}

export default theme