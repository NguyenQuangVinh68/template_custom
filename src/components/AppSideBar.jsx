import {
  CSidebar,
  CSidebarBrand,
  CSidebarToggler,
  CSidebarHeader,
  CCloseButton,
  CSidebarFooter,
} from "@coreui/react";
// sidebar nav config
import AppSidebarNav from "./AppSidebarNav";
import navigation from "../dataInit/_nav";
import { useStore, action } from "../store";

function AppSideBar() {
  const [state, dispatch] = useStore();
  return (
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
  );
}
export default AppSideBar;
