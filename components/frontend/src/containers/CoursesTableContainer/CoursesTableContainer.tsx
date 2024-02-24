import {useSelector} from "react-redux";
import {selectCoursessData} from "../../store/admin/selectors";
import CoursesTable from "../../components/CoursesTable";

export function CoursesTableContainer(){

    const data = useSelector(selectCoursessData)

    return <CoursesTable data={data}/>
}