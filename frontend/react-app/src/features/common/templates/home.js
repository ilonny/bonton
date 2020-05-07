import React from "react";
import { Header } from "../../header";
import { SideBar } from "../../sidebar";
export const HomeTemplate = ({ children }) => (
    <>
        <Header />
        <SideBar />
        {children}
    </>
);
