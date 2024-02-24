import TeachersTable from "../../components/TeachersTable";
import {useSelector} from "react-redux";
import {selectTeachersData} from "../../store/admin/selectors";
import {useAppDispatch} from "../../store/hooks";
import {useEffect} from "react";
import {getTeachers} from "../../store/admin/requests";

export function TeachersTableContainer(){


    const data = useSelector(selectTeachersData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTeachers())
    }, []);

    return <TeachersTable data={data}/>
}