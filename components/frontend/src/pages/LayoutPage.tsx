import { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LayoutPage: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayoutPage