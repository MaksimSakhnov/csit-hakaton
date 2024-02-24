import TeachersTable from "../../components/TeachersTable";
import {useSelector} from "react-redux";
import {selectStudentssData} from "../../store/admin/selectors";
import StudentsTable from "../../components/StudentsTable";

export function StudentsTableContainer(){

    const data = useSelector(selectStudentssData)

    return <StudentsTable data={data}/>
}