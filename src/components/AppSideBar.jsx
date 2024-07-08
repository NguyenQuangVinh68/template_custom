// import { useEffect, useState } from "react";
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

function AppSideBar() {
  // const [menu, setMenu] = useState([])
  // const dispatch = useDispatch()
  // const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  // useEffect(() => {
  //     setMenu(dataMenu)
  // }, [])

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      // unfoldable={unfoldable}
      // visible={sidebarShow}
      // onVisibleChange={(visible) => {
      //     dispatch({ type: 'set', sidebarShow: visible })
      // }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
                    <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} /> */}
          Logo
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          // onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
        // onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  );
}
export default AppSideBar;
