import React, { useState } from "react";
// import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Input, Button } from "../atoms";
import { request, Color } from "../../../lib";

export const Form = () => {
    const [message, setMessage] = useState('');
    const [inputVal, setInputVal] = useState('');
    const submit = e => {
        e.preventDefault();
        if (inputVal.length > 3) {
            request({
                method: 'POST',
                url: `send-mail`,
                data: {
                    mail: inputVal,
                    type: 'subscribe'
                }
            }).then((response) => {
                console.log('res sendmail', response);
                setMessage(response.message);
                setTimeout(() => {
                    setMessage('');
                    setInputVal('');
                }, 2000);
            });
        } else {
            setMessage('Заполните e-mail');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        }
    }
    return (
        <div>
            <Row align="center" tablet_wrap="true">
                <form onSubmit={e => submit(e)}>
                    <Input
                        name="email"
                        type="text"
                        placeholder="Ваш e-mail"
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                    />
                    <Button>Подписаться</Button>
                </form>
                <span style={{ padding: '10px', color: Color.red }}>{message}</span>
            </Row>
        </div>
    )
}