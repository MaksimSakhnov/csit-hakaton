import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {ICreateCourse, ICreateStudent} from "../../store/admin/adminSlice.type";

export type CreateCourseModalProps = {
    register: UseFormRegister<ICreateCourse>;
    handleSubmit: UseFormHandleSubmit<ICreateCourse>;
    onSubmit: (data: ICreateCourse) => void;
    open: boolean;
    closeWindow: () => void

}