import './App.css'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {ADMIN, ADMIN_LOGIN, COURSE, LOGIN, MAIN} from "./routes/route";
import PageAdmin from "./pages/PageAdmin";
import PageMain from "./pages/PageMain";
import PageCourse from "./pages/PageCourse";
import {useEffect} from "react";
import {useAppDispatch} from "./store/hooks";
import {useSelector} from "react-redux";
import {selectAdminData} from "./store/admin/selectors";
import {adminActions} from "./store/admin/actions";
import {AdminLoginPage} from "./components/AdminLoginPage/AdminLoginPage";
import {PageLoginUser} from "./pages/PageLoginUser/PageLoginUser";
import {selectRole, selectUserData} from "./store/app/selectors";
import {appActions} from "./store/app/actions";

function App() {

    const dispatch = useAppDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const adminStoreData = useSelector(selectAdminData)
    const userData = useSelector(selectUserData)
    const userRole = useSelector(selectRole)

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

    useEffect(() => {
        const path = location.pathname;
        if(path !== '/admin' && path !== '/admin/login' && !userData){
                navigate('/login')
        }
        // @ts-ignore
        else if(path === '/login' && userData){
            navigate('')
        }
    }, [userData, location.pathname]);

    return (
        <Routes>
            <Route path={ADMIN_LOGIN} element={<AdminLoginPage/>}/>
            <Route path={ADMIN} element={<PageAdmin/>}/>
            <Route path={MAIN} element={<PageMain/>}/>
            <Route path={COURSE} element={<PageCourse/>}/>
            <Route path={LOGIN} element={<PageLoginUser/>}/>
        </Routes>
    )
}

export default App
