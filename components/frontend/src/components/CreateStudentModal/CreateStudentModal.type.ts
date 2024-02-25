import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {ICreateStudent} from "../../store/admin/adminSlice.type";

export type CreateStudentModalProps = {
    register: UseFormRegister<ICreateStudent>;
    handleSubmit: UseFormHandleSubmit<ICreateStudent>;
    onSubmit: (data: ICreateStudent) => void;
    open: boolean;
    closeWindow: () => void

}