import React from "react";
import {
    HomeTemplate,
    Spacer,
} from "../../features/common";
import { SubscribeForm } from "../../features/subscribe-form";
import {Product} from "../../features";
export const ProductPage = props => {
    const {id} = props.match.params;
    return (
        <HomeTemplate>
            <Spacer />
            <Product id={id} />
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    )
}