import { Table } from "antd";
import {ColumnsType} from "antd/es/table";
import {IStudent} from "../../store/admin/adminSlice.type";
import {StudentsTableProps} from "./StudentsTable.type";

const columns: ColumnsType<IStudent> = [
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
        title: 'Факультет',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Группа',
        dataIndex: 'group',
        key: 'group',
    },
    {
        title: 'Почта',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'git handler',
        dataIndex: 'git_handler',
        key: 'git_handler',
    },
    {
        title: 'Пароль',
        dataIndex: 'password',
        key: 'password',
    },


];

export function StudentsTable({data}: StudentsTableProps){

    return <Table columns={columns} dataSource={data} />

}