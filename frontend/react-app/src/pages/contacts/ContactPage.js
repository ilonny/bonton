import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import styled from "styled-components";
import React from "react";
import {
    HomeTemplate,
    Spacer,
    CategoryTitle
} from "../../features/common";
import { SubscribeForm } from "../../features/subscribe-form";
import { Row } from "../../features/styled-components-layout";
import { ContactsCol } from "../../features/footer/organisms/contacts-col";
import { Media } from "../../lib";
export const ContactPage = props => {
    return (
        <HomeTemplate>
            <Spacer />
            <CategoryTitle>Контакты</CategoryTitle>
            <Wrapper>
                <Row align="flex-start" className="rowWrap" tablet_wrap="true">
                    <ContactsCol disableTitle={true} className="contacts" />
                    <MapWrapper>
                        <YMaps style={{ width: '100%' }}>
                            <Map
                                defaultState={{
                                    center: [61.2539503, 73.4329273],
                                    zoom: 16,
                                    controls: [],
                                }}
                                style={{ width: '100%', height: '300px' }}
                            >
                                <ZoomControl options={{ float: 'right' }} />
                                <Placemark geometry={[61.2539503, 73.4329273]} />
                            </Map>
                        </YMaps>
                    </MapWrapper>
                </Row>
            </Wrapper>
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    )
}

const MapWrapper = styled.div`
    flex: 1 1 100%;
    $ ${ContactsCol} {
        flex: 1 1 30%;
    }
`

const Wrapper = styled.div`
    & .contacts {
        flex: 1 1 40%;
        ${Media.tablet} {
            flex: 1 1 100%;
        }
    }
`