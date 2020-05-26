// import styled from "styled-components";
import React from "react";
import {
    HomeTemplate,
    Spacer,
    CategoryTitle,
    PageTitle
} from "../../features/common";
import { SubscribeForm } from "../../features/subscribe-form";
import {Link} from "react-router-dom";
export const NotFoundPage = props => {
    return (
        <HomeTemplate>
            <Spacer />
            <PageTitle>Страница не найдена</PageTitle>
            <Link to="/">
                <CategoryTitle>На главную</CategoryTitle>
            </Link>
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