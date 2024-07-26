import { Navigate, Route, Routes } from "react-router-dom"
import { RootPage } from "../../pages/RootPage/Rootpage"
import HomePage from "../../pages/Home/HomePage"
import AboutPage from "../../pages/About/AboutPage"
import EnglishPage from "../../pages/English/EnglishPage"
import CardsPage from "../../pages/Cards/CardsPage"


export const Routing = () => {



    return (
        <Routes>

            <Route path='/' element={<Navigate to='en' />} />
            <Route path='en' element={<RootPage />}>
                <Route index element={<Navigate to='/en/home' />} />
                <Route path='home' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='eng' element={<EnglishPage />}>
                    <Route index element={<Navigate to='/en/home' />} />
                </Route>

                <Route path='eng/cards' element={<CardsPage />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}