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
                <>
                    <div className="logo">
                        <span><LogoShield h="35" /><LogoTextBox h="35" /></span>
                    </div>
                    <div className="user">
                        Olá, <span><strong>{name}</strong></span> <span className={role}>{role}</span>
                    </div>
                    <div className="logout">
                        <button onClick={() => dispatch(logoutUser())}><span>Sair</span></button>
                    </div>
                </>
            }
        </>
    )
}