import {Button, Input} from "antd";
import {useState} from "react";
import styles from './AdminLoginPage.module.scss'
import {useAppDispatch} from "../../store/hooks";
import {loginAdmin} from "../../store/admin/requests";

export function AdminLoginPage() {

    const dispatch = useAppDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const onSubmit = ()=>{
        dispatch(loginAdmin({email: email, password: password, role: "ADMINISTRATOR"}))
    }


    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form}>
                <div className={styles.item}>
                    <label>Почта</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className={styles.item}>
                    <label>Пароль</label>
                    <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className={styles.actions}>
                    <Button disabled={email === '' || password === ''} onClick={onSubmit}>Войти</Button>
                </div>
            </div>
        </div>
    )
}