import React, { useEffect } from "react";

export const ProductTemplate = props => {
    console.log('ProductTemplate', props);
    const { id, getCurrentProduct } = props;
    useEffect(() => {
        getCurrentProduct(id);
    }, [id, getCurrentProduct])
    return (
        <div>
            <p>product template</p>
        </div>
    )
}