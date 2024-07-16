import {
  CSidebar,
  CSidebarBrand,
  CSidebarToggler,
  CSidebarHeader,
  CCloseButton,
  CSidebarFooter,
} from "@coreui/react";
import { useEffect, useState } from "react";

import Loading from "./Loading";
import AppSidebarNav from "./AppSidebarNav";
import { useStore, action } from "../store";
import { ApiMenu } from "../api";

function AppSideBar() {
  const [state, dispatch] = useStore();

  const [navigation, setNavigation] = useState([]);

  const getNavigation = async () => {
    try {
      dispatch(action.isReq(true));
      await ApiMenu.getMenu(state.userInfomation.emp_no).then((res) => {
        console.log(res.data);
        setNavigation(res.data);
        dispatch(action.isReq(false));
      });
    } catch (error) {
      console.log("error get data menu!");
      console.log(error);
    }
  };
  useEffect(() => {
    getNavigation();
  }, []);

  return (
    <>
      {action.isLoad ? (
        <Loading></Loading>
      ) : (
        <CSidebar
          className="border-end"
          colorScheme="dark"
          position="fixed"
          // unfoldable={unfoldable}
          visible={state.showSidebar}
          onVisibleChange={(visible) => {
            dispatch(action.setShowSidebar(visible));
          }}
        >
          <CSidebarHeader className="border-bottom">
            <CSidebarBrand to="/">Logo</CSidebarBrand>
            <CCloseButton
              className="d-lg-none"
              dark
              onClick={() => dispatch(action.setShowSidebar(false))}
            />
          </CSidebarHeader>
          <AppSidebarNav items={navigation} />
        </CSidebar>
      )}
    </>
  );
}
export default AppSideBar;
