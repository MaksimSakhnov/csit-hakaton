import './App.css'
import {Route, Routes} from 'react-router-dom'
import {ADMIN, MAIN} from "./routes/route";
import PageAdmin from "./pages/PageAdmin";
import PageMain from "./pages/PageMain";

function App() {

    return(
        <Routes>
            <Route path={ADMIN} element={<PageAdmin/>}/>
            <Route path={MAIN} element={<PageMain/>}/>

        </Routes>
    )
}

export default App
