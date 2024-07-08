import { Outlet } from "react-router-dom";
import Sidebar from "../components/AppSideBar";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function DefaultLayout() {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  );
}

export default DefaultLayout;
