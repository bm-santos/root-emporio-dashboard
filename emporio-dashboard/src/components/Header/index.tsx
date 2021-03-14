import clsx from 'clsx';
import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { useDashboardStyles } from "../../hooks/useDashboardStyles"
import { logoutUser } from "../../stores/ducks/user/actions"
import { LogoShield, LogoTextBox } from "../Images/Logo"
import { useState } from 'react';

export default function Header() {
    const { role, email, name } = useSelector((action: any) => action.userReducer)
    const dispatch = useDispatch()
    const classes = useDashboardStyles()
    const [open, setOpen] = useState(false);

    const [isHomeClicked, setIsHomeClicked] = useState(true);
    const [isCurrencyClicked, setIsCurrencyClicked] = useState(false);
    const [isFinanceClicked, setIsFinanceClicked] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false);

    function clicouHome() {
        setIsHomeClicked(true)
        setIsCurrencyClicked(false)
        setIsFinanceClicked(false)
    }

    function clicouCurrency() {
        setIsHomeClicked(false)
        setIsCurrencyClicked(true)
        setIsFinanceClicked(false)
    }

    function clicouFinance() {
        setIsHomeClicked(false)
        setIsCurrencyClicked(false)
        setIsFinanceClicked(true)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const handleClickOpen = () => {
        setOpenConfirmation(true);
    };

    const handleClose = () => {
        setOpenConfirmation(false);
    };
    return (
        <>
            {name !== undefined &&
                <header>
                    <div>
                        <span><LogoShield /><LogoTextBox /></span>
                    </div>
                    <div>
                        Olá, {name} ({email}) <span>{role}</span>
                    </div>
                    <div>
                        <button onClick={() => dispatch(logoutUser())}>Sair</button>
                    </div>
                </header>
            }
            {/* <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        > */}
            {/* <MenuIcon /> */}
            {/* MenuIcon
                    </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            <div>
                                <span><LogoShield /><LogoTextBox /></span>
                            </div>
                        </Typography>
                        <div>
                            Olá, {name} ({email}) <span>{role}</span>
                        </div>
                        <div>
                            <button onClick={() => dispatch(logoutUser())}>Sair</button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div> */}

        </>
    )
}