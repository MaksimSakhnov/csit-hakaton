import { useForm} from "react-hook-form";
import {ICreateCourse} from "../../store/admin/adminSlice.type";
import {CreateCourseModalProps} from "./CreateCourseModal.type";
import CreateCourseModal from "../../components/CreateCourseModal";
import {useAppDispatch} from "../../store/hooks";
import {createCourses} from "../../store/admin/requests";

export function CreateCourseModalContainer({open, closeWindow}: CreateCourseModalProps) {

    const {
        register,
        handleSubmit,
    } = useForm<ICreateCourse>({mode: "onBlur"})

    const dispatch = useAppDispatch()
    const onSubmit = (data: ICreateCourse) => {
        const newData = {
            ...data,
            teachers: data.teachers.split(', ').map(Number)
        }
        // @ts-ignore
        dispatch(createCourses(newData))
        closeWindow()
    }


    return <CreateCourseModal register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} open={open} closeWindow={closeWindow} />

}