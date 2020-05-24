import React from "react";
import {
    HomeTemplate,
    Spacer,
} from "../../features/common";

import { SubscribeForm } from "../../features/subscribe-form";
export const ProductPage = props => {
    console.log('product page props', props);
    // const {id} = props.match.params;
    return (
        <HomeTemplate>
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    )
}