import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {ICreateStudent} from "../../store/admin/adminSlice.type";

export type CreateTeacherModalProps = {
    register: UseFormRegister<ICreateStudent>;
    handleSubmit: UseFormHandleSubmit<ICreateStudent>;
    onSubmit: () => void;
    open: boolean;
    closeWindow: () => void

}