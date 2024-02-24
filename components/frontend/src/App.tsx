import './App.css'
import {Route, Routes } from 'react-router-dom'
import {ADMIN} from "./routes/route";
import PageAdmin from "./pages/PageAdmin";

function App() {

  return <Routes>
    <Route path={ADMIN} element={<PageAdmin />} />

  </Routes>

}

export default App
