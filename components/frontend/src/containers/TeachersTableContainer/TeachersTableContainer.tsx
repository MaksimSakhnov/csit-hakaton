import TeachersTable from "../../components/TeachersTable";
import {useSelector} from "react-redux";
import {selectTeachersData} from "../../store/admin/selectors";

export function TeachersTableContainer(){

    const data = useSelector(selectTeachersData)

    return <TeachersTable data={data}/>
}