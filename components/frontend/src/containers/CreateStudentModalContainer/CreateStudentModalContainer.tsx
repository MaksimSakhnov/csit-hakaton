import { useForm} from "react-hook-form";
import {ICreateStudent, } from "../../store/admin/adminSlice.type";
import {CreateTeacherModalProps} from "./CreateStudentModal.type";
import CreateStudentModal from "../../components/CreateStudentModal";

export function CreateStudentModalContainer({open, closeWindow}: CreateTeacherModalProps) {

    const {
        register,
        handleSubmit,
        getValues
    } = useForm<ICreateStudent>({mode: "onBlur"})
    const onSubmit = () => {
        const data = getValues()
        console.log(data)
        closeWindow()
    }


    return <CreateStudentModal register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} open={open} closeWindow={closeWindow} />

}