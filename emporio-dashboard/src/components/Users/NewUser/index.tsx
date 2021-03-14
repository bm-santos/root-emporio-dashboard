import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormStyles } from "../../../hooks/useFormStyles"
import { newUserRequest } from "../../../stores/ducks/user/actions";

export default function NewUser() {
    const inputName = useRef<HTMLInputElement>(null)
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const [showSection, setShowSection] = useState<boolean>(false)
    const [roleType, setRoleType] = useState<string>('')

    const dispatch = useDispatch()

    const classes = useFormStyles()

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoleType((event.target as HTMLInputElement).value);
    };
    const show = () => {
        setShowSection(!showSection)
    }
    const newUser = () => {
        const request = {
            name: inputName.current?.value,
            email: inputEmail.current?.value,
            password: inputPassword.current?.value,
            role: roleType
        }
        return dispatch(newUserRequest(request))
    }
    return (
        <div>
            {showSection
                ? <div className={classes.form}>
                    <div>
                        <TextField
                            aria-label="Nome"
                            placeholder="Nome"
                            type="name"
                            inputRef={inputName} />
                        <TextField
                            aria-label="Email"
                            placeholder="E-mail"
                            type="email"
                            inputRef={inputEmail} />
                        <TextField
                            aria-label="Senha"
                            placeholder="Senha"
                            type="password"
                            inputRef={inputPassword} />
                        <RadioGroup aria-label="Role" name="role" value={roleType} onChange={handleRadioChange}>
                            <span>
                                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                <FormControlLabel value="editor" control={<Radio />} label="Editor" /></span>
                        </RadioGroup>
                    </div>
                    <div>
                        <Button className={classes.button}
                            size="small"
                            variant="contained"
                            onClick={show} > Cancelar
                            </Button>
                        <Button className={classes.button}
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={newUser} >Salvar
                            </Button>
                    </div>
                </div>
                : <div>
                    <Button className={classes.button}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={show}>
                        <span>Cadastrar</span>
                    </Button>
                </div>
            }
        </div>
    )
}