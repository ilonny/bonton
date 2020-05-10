import React from "react";
// import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Input, Button } from "../atoms";

export const Form = () => (
    <div>
        <Row align="center" tablet_wrap="true">
            <Input name="email" type="email" placeholder="Ваш e-mail" />
            <Button>Подписаться</Button>
        </Row>
    </div>
);
