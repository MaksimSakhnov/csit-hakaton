import { Table } from "antd";
import {ColumnsType} from "antd/es/table";
import {ITeacher} from "../../store/admin/adminSlice.type";
import {TeachersTableProps} from "./TeachersTable.type";

const columns: ColumnsType<ITeacher> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Имя',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Университет',
        dataIndex: 'university',
        key: 'university',
    },
    {
        title: 'Почта',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'git Handler',
        dataIndex: 'gitHandler',
        key: 'gitHandler',
    },
    {
        title: 'Пароль',
        dataIndex: 'password',
        key: 'password',
    },


];

export function TeachersTable({data}: TeachersTableProps){

    return <Table columns={columns} dataSource={data} />

}