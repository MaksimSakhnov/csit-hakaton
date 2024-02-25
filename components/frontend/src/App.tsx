import './App.css'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {ADMIN, ADMIN_LOGIN, COURSE, MAIN} from "./routes/route";
import PageAdmin from "./pages/PageAdmin";
import PageMain from "./pages/PageMain";
import PageCourse from "./pages/PageCourse";
import {useEffect} from "react";
import {useAppDispatch} from "./store/hooks";
import {useSelector} from "react-redux";
import {selectAdminData} from "./store/admin/selectors";
import {adminActions} from "./store/admin/actions";
import {AdminLoginPage} from "./components/AdminLoginPage/AdminLoginPage";

function App() {

    const dispatch = useAppDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const adminStoreData = useSelector(selectAdminData)

    useEffect(() => {
        const path = location.pathname;

        if(path === '/admin'){

            const adminData = localStorage.getItem('adminData')
            if(adminData && !adminStoreData){
                // @ts-ignore
                dispatch(adminActions.setAdminData(JSON.parse(adminData)))
            }
            else{
                if(adminStoreData){
                    localStorage.setItem('adminData', JSON.stringify(adminStoreData))
                }
                else{
                    navigate('/admin/login')
                }
            }

        }


    }, [location.pathname, adminStoreData]);

    useEffect(() => {
        const path = location.pathname;
        if(adminStoreData && path !== '/admin'){
            navigate('/admin')
        }
    }, [location.pathname, adminStoreData]);

    return (
        <Routes>
            <Route path={ADMIN_LOGIN} element={<AdminLoginPage/>}/>
            <Route path={ADMIN} element={<PageAdmin/>}/>
            <Route path={MAIN} element={<PageMain/>}/>
            <Route path={COURSE} element={<PageCourse/>}/>

        </Routes>
    )
}

export default App
