import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { CBadge, CNavLink, CSidebarNav } from "@coreui/react";
import { CNavGroup, CNavItem } from "@coreui/react";

const AppSidebarNav = ({ items }) => {
  const getComponentFromText = (text) => {
    if (text === "CNavGroup") return CNavGroup;
    else return CNavItem;
  };

  const navLink = (pgm_nm, indent = false) => {
    return (
      <>
        {indent && (
          <span className="nav-icon">
            <span className="nav-icon-bullet"></span>
          </span>
        )}
        {pgm_nm && pgm_nm}
      </>
    );
  };

  const navItem = (item, index, indent = false) => {
    const { pgm_component, pgm_nm, ...rest } = item;
    const Component = getComponentFromText(pgm_component);
    return (
      <Component as="div" key={index}>
        {rest.pgm_plc ? (
          <CNavLink
            {...(rest.pgm_plc && { as: NavLink })}
            to={rest.pgm_plc.replace("~/tco", "").replace(".aspx", "")}
            {...rest}
          >
            {navLink(pgm_nm, indent)}
          </CNavLink>
        ) : (
          navLink(pgm_nm, indent)
        )}
      </Component>
    );
  };

  const navGroup = (item, index) => {
    const { pgm_component, pgm_nm, items, ...rest } = item;
    const Component = getComponentFromText(pgm_component);
    return (
      <Component
        compact
        as="div"
        key={index}
        toggler={navLink(pgm_nm)}
        {...rest}
      >
        {item.items !== null &&
          item.items?.map((item, index) => {
            return item.items
              ? navGroup(item, index)
              : navItem(item, index, true);
          })}
      </Component>
    );
  };

  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </CSidebarNav>
  );
};

// AppSidebarNav.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
// };

export default AppSidebarNav;
