import React from "react";
import { PaginationTextLink, PaginationButton } from "../organisms";
import { Row } from "../../styled-components-layout";
export const CatalogPaginationTemplate = (props) => {
    const { currentPage, pages, setPage } = props;
    console.log('currentPage, pages', currentPage, pages);
    let p_arr = [
        currentPage - 1 > 2 ? 1 : 0,
        currentPage - 1 > 2 ? '...' : 0,
        currentPage - 1,
        currentPage,
        currentPage + 1 < pages ? currentPage + 1 : 0,
        (pages - currentPage > 1) && currentPage !== pages ? '...' : 0,
        currentPage !== pages ? pages : 0
    ].filter(el => el !== 0);
    console.log(p_arr);
    if (pages > 1) {
        return (
            <Row justify="center" align="center" mobile_wrap="true">
                {currentPage !== 1 && <PaginationTextLink onClick={() => setPage(currentPage - 1)}>Предыдущая</PaginationTextLink>}
                {p_arr.map(p => (
                    <PaginationButton
                        key={p}
                        active={p === currentPage}
                        clickable={p !== '...'}
                        onClick={() => setPage(p)}
                    >{p}</PaginationButton>
                ))}
                {currentPage !== pages && <PaginationTextLink onClick={() => setPage(currentPage + 1)}>Следующая</PaginationTextLink>}
            </Row>
        );
    }
};
