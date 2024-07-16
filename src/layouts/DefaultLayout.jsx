import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/AppSideBar";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

import { useStore } from "../store";

function DefaultLayout() {
  const [state, dispatch] = useStore();

  return (
    <div>
      {!state.isLogin && <Navigate to="/login" />}
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
