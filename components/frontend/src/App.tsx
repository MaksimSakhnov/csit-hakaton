import './App.css'
import {Route, Routes} from 'react-router-dom'
import {ADMIN, COURSE, MAIN} from "./routes/route";
import PageAdmin from "./pages/PageAdmin";
import PageMain from "./pages/PageMain";
import PageCourse from "./pages/PageCourse";

function App() {

    return (
        <Routes>
            <Route path={ADMIN} element={<PageAdmin/>}/>
            <Route path={MAIN} element={<PageMain/>}/>
            <Route path={COURSE} element={<PageCourse/>}/>

        </Routes>
    )
}

export default App
