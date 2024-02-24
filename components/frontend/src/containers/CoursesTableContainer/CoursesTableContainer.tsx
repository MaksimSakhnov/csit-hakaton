import {useSelector} from "react-redux";
import {selectCoursessData} from "../../store/admin/selectors";
import CoursesTable from "../../components/CoursesTable";
import {useAppDispatch} from "../../store/hooks";
import {useEffect} from "react";
import {getCourses} from "../../store/admin/requests";

export function CoursesTableContainer(){

    const data = useSelector(selectCoursessData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCourses())
    }, []);

    return <CoursesTable data={data}/>
}