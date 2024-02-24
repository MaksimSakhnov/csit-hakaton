import {CreateStudentModalProps} from "./CreateStudentModal.type";
import {Button, Modal} from "antd";
import styles from './CreateStudentTeacher.module.scss'
import {TextField} from "@mui/material";

export function CreateStudentModal({handleSubmit, onSubmit, open, register, closeWindow}: CreateStudentModalProps) {


    return (
        <Modal title="Создать студента" open={open} onCancel={closeWindow} footer={[]}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.form_body}>
                    <div className={styles.item}>
                        <TextField placeholder="Имя" {...register("firstName", {required: 'Обязательное поле'})}
                                   sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Фамилия" {...register("lastName", {required: 'Обязательное поле'})}
                                   sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Университет"
                                   type={'number'} {...register("university", {required: 'Обязательное поле'})}
                                   sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Факультет"
                                   {...register("department", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Группа"
                                   {...register("group", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Email" {...register("email", {required: 'Обязательное поле'})}
                                   sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="git handler" {...register("gitHandler")} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Пароль" {...register("password", {required: 'Обязательное поле'})}
                                   sx={{width: '100%'}}/>
                    </div>

                    <div>

                        <Button key="back" onClick={closeWindow}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" htmlType="submit">
                            Создать
                        </Button>
                    </div>
                </div>
            </form>

        </Modal>

    )

}