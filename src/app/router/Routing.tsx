import { Navigate, Route, Routes } from "react-router-dom"
import { RootPage } from "../../pages/RootPage/Rootpage"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"


export const Routing = () => {



    return (
        <Routes>
            <Route path='/' element={<Navigate to='main' />} />
            <Route path='main' element={<RootPage />}>
                <Route index element={<Navigate to='/main/home' />} />
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                {/* <Route path='lab' element={<Laboratory />} /> */}
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}