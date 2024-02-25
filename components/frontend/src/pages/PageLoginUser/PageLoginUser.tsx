import styles from "../../components/AdminLoginPage/AdminLoginPage.module.scss";
import {Button, Input, Radio} from "antd";
import {useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import {login} from "../../store/app/requests";


export function PageLoginUser() {

    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'TEACHER'>('STUDENT')

    const onSubmit = ()=>{
        dispatch(login({data: {email: email, password: password, role: selectedRole}, role: selectedRole}));
    }


    return <div className={styles.form_wrapper}>
        <div className={styles.form}>
            <div className={styles.select_role}>
                <Radio.Group onChange={(e) => setSelectedRole(e.target.value)} defaultValue={selectedRole} buttonStyle={'solid'}>
                    <Radio.Button value='STUDENT' >Студент</Radio.Button>
                    <Radio.Button value='TEACHER' >Преподаватель</Radio.Button>
                </Radio.Group>
            </div>

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


}