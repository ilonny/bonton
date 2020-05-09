import React from "react";
import { HomeTemplate } from "../../features/common";
import { Banner } from "../../features/banner";
import {pageData} from './data';

export const HomePage = () => (
    <HomeTemplate>
        <Banner data={pageData.big}/>
        <Banner data={pageData.small1} small={true}/>
    </HomeTemplate>
);
