// import styled from "styled-components";
import React from "react";
import {
    HomeTemplate,
    Spacer,
    CategoryTitle,
    PageTitle
} from "../../features/common";
import { SubscribeForm } from "../../features/subscribe-form";
export const NotFoundPage = props => {
    return (
        <HomeTemplate>
            <Spacer />
            <PageTitle>Страница не найдена</PageTitle>
            <a href="/">
                <CategoryTitle>На главную</CategoryTitle>
            </a>
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