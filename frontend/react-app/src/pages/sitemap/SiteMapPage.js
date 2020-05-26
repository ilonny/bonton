// import styled from "styled-components";
import React from "react";
import {
    HomeTemplate,
    Spacer,
    CategoryTitle,
    PageTitle
} from "../../features/common";
import { SubscribeForm } from "../../features/subscribe-form";
export const SiteMapPage = props => {
    return (
        <HomeTemplate>
            <Spacer />
            <PageTitle>Карта сайта</PageTitle>
            <CategoryTitle>Контент скоро будет...</CategoryTitle>
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    )
}

// const Wrapper = styled.div`
//     & .contacts {
//         flex: 1 1 40%;
//         ${Media.tablet} {
//             flex: 1 1 100%;
//         }
//     }
// `