import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

const MainContainer = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default MainContainer;