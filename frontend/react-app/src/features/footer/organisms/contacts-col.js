import React from "react";
import styled from "styled-components";
import { ColTitle } from "../atoms";
import { SocialLinks } from "../../common/organisms";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
import { WithTag } from "../../styled-components-layout"
import { Link } from "react-router-dom";
export const ContactsCol = (props) => (
    <MenuColStyled {...props}>
        {props.disableTitle ? '' : <ColTitle>Контакты</ColTitle>}
        <div>
            <Row>
                <FirstCol>
                    <LinkStyled>
                        <strong>Адрес:</strong> г. Сургут ,ТЦ Союз,2 этаж{" "}
                    </LinkStyled>
                    <LinkStyled>
                        <strong>Тел:</strong> +7 (922) 400-400-7
                    </LinkStyled>
                    <LinkStyled>
                        <strong>Напишите нам: </strong>
                        <Link to="/" className="wa">
                            WhatsApp
                        </Link>{" "}
                        <Link to="/" className="vb">
                            Viber
                        </Link>
                    </LinkStyled>
                    <LinkStyled>
                        <strong>Время работы:</strong> 10:00 - 22:00
                    </LinkStyled>
                    <LinkStyled>
                        <div style={{ marginLeft: -6 }}>
                            <SocialLinks />
                        </div>
                    </LinkStyled>
                </FirstCol>
            </Row>
        </div>
    </MenuColStyled>
);

const MenuColStyled = styled(WithTag)`
    flex: 1 1 100%;
    ${Media.tablet} {
        flex: 1 1 50%;
    }
    ${Media.mobile} {
        flex: 1 1 100%;
    }
`;
const LinkStyled = styled.div`
    font-size: 18px;
    line-height: 23px;
    display: block;
    margin-bottom: 10px;
    & strong {
        font-weight: 500;
    }
    & a {
        text-decoration: underline;
        font-weight: 500;
        &:hover {
            text-decoration: none;
        }
    }
    & .wa {
        color: #65bb57;
    }
    & .vb {
        color: #9445c5;
    }
`;

const FirstCol = styled.div`
    margin-right: 50px;
`;
