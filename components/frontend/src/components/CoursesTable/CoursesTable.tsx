import {Table, Tag} from "antd";
import {ColumnsType} from "antd/es/table";
import {ICourse} from "../../store/admin/adminSlice.type";
import {CoursesTableProps} from "./CoursesTable.type";

const columns: ColumnsType<ICourse> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Пароль',
        dataIndex: 'password',
        key: 'password',
    },
    {
        title: 'Репозиторий',
        dataIndex: 'repository',
        key: 'repository',
    },
    {
        title: 'Преподователи',
        dataIndex: 'teachers',
        key: 'teachers',
        render: (_, {teachers})=>{
            return (
                <>
                    {teachers.map(el => <Tag>{el}</Tag>)}
                </>
                )

        }
    },




];

export function CoursesTable({data}: CoursesTableProps){

    return <Table columns={columns} dataSource={data} />

}