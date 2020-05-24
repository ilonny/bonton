import React from "react";
import { PaginationTextLink, PaginationButton } from "../organisms";
import { Row } from "../../styled-components-layout";
export const CatalogPaginationTemplate = (props) => {
    const { currentPage, pages } = props;
    console.log('currentPage, pages', currentPage, pages);
    let p_arr = [currentPage - 1, currentPage, currentPage + 1, '...', pages].filter(el => el !== 0);
    console.log(p_arr);
    if (pages > 1) {
        return (
            <Row justify="center" align="center" mobile_wrap="true">
                <PaginationTextLink text="Предыдущая" />
                {p_arr.map(p => (
                    <PaginationButton
                        key={p}
                        active={p === currentPage}
                        clickable={p !== '...'}
                    >{p}</PaginationButton>
                ))}
                <PaginationTextLink text="Следующая" />
            </Row>
        );
    }
};
