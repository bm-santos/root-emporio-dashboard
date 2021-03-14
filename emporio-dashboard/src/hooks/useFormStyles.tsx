import { makeStyles } from '@material-ui/core';

export const useFormStyles = makeStyles((theme) => ({
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
        // width: '50%',
        lineHeight: "50px",
        marginBottom: "10px",
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
    },
    button: {
        // width: '50%',
        margin: theme.spacing(3, 0, 2),
    },
}));