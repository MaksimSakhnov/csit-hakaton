import { useForm} from "react-hook-form";
import {ICreateStudent, } from "../../store/admin/adminSlice.type";
import {CreateTeacherModalProps} from "./CreateStudentModal.type";
import CreateStudentModal from "../../components/CreateStudentModal";
import {useAppDispatch} from "../../store/hooks";
import {createStudent} from "../../store/admin/requests";

export function CreateStudentModalContainer({open, closeWindow}: CreateTeacherModalProps) {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        getValues
    } = useForm<ICreateStudent>({mode: "onBlur"})
    const onSubmit = (data: ICreateStudent) => {
        dispatch(createStudent(data))
        closeWindow()
    }


    return <CreateStudentModal register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} open={open} closeWindow={closeWindow} />

}