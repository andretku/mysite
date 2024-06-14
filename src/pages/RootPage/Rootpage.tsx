import { Outlet } from "react-router-dom"
import Header from "../../widgets/Header/ui/Header"
import Footer from "../../widgets/Footer/ui/Footer"
import { Fragment } from "react/jsx-runtime"




export const RootPage = () => {

    return (
      <Fragment>
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    )
  }