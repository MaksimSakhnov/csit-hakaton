import {CreateTeacherModalProps} from "./CreateTeacherModal.type";
import {Button, Form, Input, Modal} from "antd";
import styles from './CreateTeacher.module.scss'
import {TextField} from "@mui/material";

export function CreateTeacherModal({handleSubmit, onSubmit, open, register, closeWindow}: CreateTeacherModalProps) {


    return (
            <Modal title="Создать преподавателя" open={open} onCancel={closeWindow} footer={[


            ]}>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.form_body}>
                    <div className={styles.item}>
                        <TextField placeholder="Имя" {...register("firstName", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Фамилия" {...register("lastName", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Университет"
                               type={'number'} {...register("university", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Email" {...register("email", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="git handler" {...register("gitHandle")} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Пароль" {...register("password", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div>

                        <Button key="back" onClick={closeWindow}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" htmlType="submit" >
                            Создать
                        </Button>
                    </div>
                </div>
                </form>

            </Modal>

    )

}