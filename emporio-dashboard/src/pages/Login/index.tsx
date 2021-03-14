import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { LogoShield, LogoTextBox } from "../../components/Images/Logo"
import { postLoginRequest } from "../../stores/ducks/user/actions"
import { Button, TextField, Grid, Typography, Container } from '@material-ui/core';
import { useLoginStyles } from "../../hooks/useLoginStyles"
import { Helmet } from "react-helmet"

export default function LoginPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const inputLogin = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const classes = useLoginStyles();

    const login = () => {
        const requisicao = {
            email: inputLogin?.current?.value,
            password: inputPassword?.current?.value
        }
        return dispatch(postLoginRequest(requisicao))
    };

    return (
        <div >
            <Helmet>
                <title>Login - Dashboard Empório da Cerveja</title>
            </Helmet>
            {isLogged && <Redirect to="/" exact />}
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <div>
                        <span><LogoShield h="100" /><LogoTextBox h="100" /></span>
                        <hr />
                    </div>
                    <Typography component="h1" variant="h5">Acesso restrito | Ambev</Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <label hidden aria-hidden="false">Digite seu e-mail</label>
                                <TextField
                                    margin="normal"
                                    required fullWidth
                                    type="email" label="Seu e-mail"
                                    inputRef={inputLogin} autoFocus />
                            </Grid>
                            <Grid item xs={12}>
                                <label hidden aria-hidden="false">Digite sua senha</label>
                                <TextField
                                    margin="normal"
                                    required fullWidth
                                    type="password" label="Sua senha"
                                    inputRef={inputPassword} />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={login}
                            className={classes.submit}>
                            Entrar
                        </Button>
                    </form>
                </div>
            </Container>
        </div >
    )
}