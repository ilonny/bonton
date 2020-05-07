import React from "react";
import { Header } from "../organisms";
import { Sidebar, SideBar } from "../../sidebar";
export const HomeTemplate = ({ children }) => (
    <>
        <Header />
        <SideBar />
        {children}
    </>
);
