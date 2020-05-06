import React from "react";
import { Header } from "../organisms";
export const HomeTemplate = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);
