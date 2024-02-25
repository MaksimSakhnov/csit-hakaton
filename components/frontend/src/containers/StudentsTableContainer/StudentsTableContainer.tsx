import {useSelector} from "react-redux";
import {selectStudentssData} from "../../store/admin/selectors";
import StudentsTable from "../../components/StudentsTable";
import {useEffect} from "react";
import {useAppDispatch} from "../../store/hooks";
import {getStudents} from "../../store/admin/requests";

export function StudentsTableContainer() {


    const data = useSelector(selectStudentssData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getStudents())
    }, []);

    return <StudentsTable data={data}/>
}