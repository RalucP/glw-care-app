import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const MainContainer = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default MainContainer;