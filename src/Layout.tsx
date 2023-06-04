import React from "react";
import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom";

interface LayoutProps {
}

class Layout extends React.Component<LayoutProps> {

  render() { 
    return (
    <header className = {styles.header}>
      <Outlet/>
    </header>
    )
  }
}

export default Layout;