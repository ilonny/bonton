import React from "react";
import { ImageView } from "../../common";
import { Place } from "../atoms";
import { Col } from "../organisms/col";
import { Row } from "../../styled-components-layout";
export const HomePageAbout = (props) => (
    <Row align="flex-start" justify="space-between" gap={"20px"} tablet_wrap="true">
        <Col simple={true}>
            <ImageView src={require("../../../assets/images/logo_big.png")} />
            <Place />
        </Col>
        <Col
            title="О магазине"
            text="Онлайн-магазин BONTON позволит приобрести любые вещи не выходя из дома, в городе Сургуте. Мы работаем уже более трех лет и радуем тысячи довольных клиентов"
            linkText="Условия оплаты и доставки"
            linkHref="/"
        />
        <Col
            title="Гарантии"
            text="Оплата товара происходит после доставки товара. Вы имеете право обменять или сделать возврат товара без объяснения причин в течении 14 дней с момента покупки"
            linkText="Подробнее о гарантиях"
            linkHref="/"
        />
    </Row>
);
