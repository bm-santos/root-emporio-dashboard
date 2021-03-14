import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import clsx from 'clsx'

import { Drawer, Divider, List, ListItem, ListItemIcon, IconButton, ListItemText } from '@material-ui/core';
import { useDashboardStyles } from "../../hooks/useDashboardStyles";
import { useState } from "react";

export default function SideBar() {
    const { isAdmin, isLogged } = useSelector((action: any) => action.userReducer)
    const clicou = () => {
        console.log("clicou")
    }

    const [open, setOpen] = useState(false);
    const [isHomeClicked, setIsHomeClicked] = useState(true);
    const [isCurrencyClicked, setIsCurrencyClicked] = useState(false);
    const [isFinanceClicked, setIsFinanceClicked] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false);

    const classes = useDashboardStyles()

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
            {!isLogged && <Redirect to="/login" exact />}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {
                    isAdmin && <Link to="/users">Manage Users</Link>
                }
            </nav>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        Icone
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button
                        onClick={clicou}>
                        <ListItemIcon>
                            Icone
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button
                        onClick={clicou}>
                        <ListItemIcon>
                            Icone
                        </ListItemIcon>
                        <ListItemText primary="Produtos" />
                    </ListItem>
                    <ListItem button
                        onClick={clicou}>
                        <ListItemIcon>
                            Icone
                        </ListItemIcon>
                        <ListItemText primary="Gerenciar Usuários" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </>
    )
}