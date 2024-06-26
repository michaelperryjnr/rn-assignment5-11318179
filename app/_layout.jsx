import React from "react";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
import TabLayout from "./tabs";



const Layout = () => { 
  return (
    <>
      <ThemeProvider>
        <TabLayout />
      </ThemeProvider>
    </>
  );
};


export default Layout;
