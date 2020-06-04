import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";
import { Media } from "../../../lib";
import "./image-gallery.scss";
export const ProductGallery = props => {
    console.log('props', props);
    let photos = props.data.photos;
    photos = photos.map(el => ({
        original: el,
        thumbnail: el,
    }))
    
    if (props.data) {
        console.log('photos', props.data.photos);
        if (photos.length) {
            return (
                <GalleryWrapper>
                    <ImageGallery items={photos.concat(photos).concat(photos).concat(photos).concat(photos).concat(photos).concat(photos)} />
                </GalleryWrapper>
            )
        }
        return null;
    }
    return null;
}

const GalleryWrapper = styled.div`
    flex: 1 1 40%;
    max-width: 40%;
    ${Media.tablet} {
        flex: 1 1 100%;
        max-width: 100%;
    }
`