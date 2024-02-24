import {SubmitHandler, useForm} from "react-hook-form";
import {CreateTeacherModal} from "../../components/CreateTeacherModal/CreateTeacherModal";
import {ICreateTeacher} from "../../store/admin/adminSlice.type";
import {CreateTeacherModalProps} from "./CreateTeacherModal.type";
import {useAppDispatch} from "../../store/hooks";
import {createStudent, createTeacher} from "../../store/admin/requests";

export function CreateTeacherModalContainer({open, closeWindow}: CreateTeacherModalProps) {

    const {
        register,
        handleSubmit,
        getValues
    } = useForm<ICreateTeacher>({mode: "onBlur"})

    const dispatch = useAppDispatch()

    const onSubmit = (data: ICreateTeacher) => {
        dispatch(createTeacher(data))
        closeWindow()
    }


    return <CreateTeacherModal register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} open={open} closeWindow={closeWindow} />

}