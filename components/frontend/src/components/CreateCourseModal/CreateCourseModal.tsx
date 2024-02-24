import {CreateCourseModalProps} from "./CreateCourseModal.type";
import {Button, Form, Input, Modal} from "antd";
import styles from './CreateCourse.module.scss'
import {TextField} from "@mui/material";

export function CreateCourseModal({handleSubmit, onSubmit, open, register, closeWindow}: CreateCourseModalProps) {


    return (
            <Modal title="Создать преподавателя" open={open} onCancel={closeWindow} footer={[


            ]}>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.form_body}>
                    <div className={styles.item}>
                        <TextField placeholder="Название" {...register("name", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Описание" {...register("description", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Пароль"
                               {...register("password", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Репозиторий" {...register("repository", {required: 'Обязательное поле'})} sx={{width: '100%'}}/>
                    </div>

                    <div className={styles.item}>
                        <TextField placeholder="Преподаватели" {...register("teachers")} sx={{width: '100%'}}/>
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