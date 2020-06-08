import React from 'react';
import styled from 'styled-components';
import { Media } from "../../../lib";
import { HeaderTemplateMobile } from './mobile-header-template';
import { HeaderTemplateDektop } from './desktop-header-template';
export const HeaderTemplate = props => {
    return (
        <>
            <DesktopWrapper>
                <HeaderTemplateDektop {...props} />
            </DesktopWrapper>
            <MobileWrapper>
                <HeaderTemplateMobile {...props} />
            </MobileWrapper>
        </>
    )
}
const DesktopWrapper = styled.div`
    ${Media.tablet} {
        display: none;
    }
`
const MobileWrapper = styled.div`
        display: none;
        ${Media.tablet} {
        display: block;
    }
`