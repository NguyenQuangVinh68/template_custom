import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"></CIcon>,
  },
  {
    component: CNavTitle,
    name: "Test",
  },
  {
    component: CNavItem,
    name: "Table dynamic",
    to: "/table",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Product",
    to: "/product",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: "Components",
  },
  {
    component: CNavGroup,
    name: "Droplist",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: "Chirld Droplist",
        items: [
          {
            component: CNavItem,
            name: "item chirld 1",
            to: "/listmain?PgmNo=1",
          },
          {
            component: CNavItem,
            name: "item chirld 2",
            to: "/listmain?PgmNo=2",
          },
        ],
      },
      {
        component: CNavItem,
        name: "Item 1",
        to: "/listmain?PgmNo=1",
      },
    ],
  },

  {
    component: CNavItem,
    name: "Login",
    to: "/login",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
];

export default _nav;
