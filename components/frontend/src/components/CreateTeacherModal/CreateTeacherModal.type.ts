import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {ICreateStudent, ICreateTeacher} from "../../store/admin/adminSlice.type";

export type CreateTeacherModalProps = {
    register: UseFormRegister<ICreateTeacher>;
    handleSubmit: UseFormHandleSubmit<ICreateTeacher>;
    onSubmit: (data: ICreateTeacher) => void;
    open: boolean;
    closeWindow: () => void

}