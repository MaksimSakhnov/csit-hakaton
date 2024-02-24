import {SubmitHandler, useForm} from "react-hook-form";
import {CreateTeacherModal} from "../../components/CreateTeacherModal/CreateTeacherModal";
import {ICreateTeacher} from "../../store/admin/adminSlice.type";
import {CreateTeacherModalProps} from "./CreateTeacherModal.type";

export function CreateTeacherModalContainer({open, closeWindow}: CreateTeacherModalProps) {

    const {
        register,
        handleSubmit,
        getValues
    } = useForm<ICreateTeacher>({mode: "onBlur"})
    const onSubmit = () => {
        const data = getValues()
        console.log(data)
        closeWindow()
    }


    return <CreateTeacherModal register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} open={open} closeWindow={closeWindow} />

}