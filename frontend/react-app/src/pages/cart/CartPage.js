import React from "react";
import {
    HomeTemplate,
    Spacer,
} from "../../features/common";
import { SubscribeForm } from "../../features/subscribe-form";
import { Cart } from "../../features";
export const CartPage = props => {
    return (
        <HomeTemplate>
            <Spacer />
            <Cart />
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    )
}