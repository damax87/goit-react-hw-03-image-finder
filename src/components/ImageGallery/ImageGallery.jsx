import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import propTypes from 'prop-types';
import { Gallery } from "./ImageGallery.style";

export const ImageGallery = ({ images, onImageClick }) => {

        <Gallery>
          {images.map((image, index) => (
            <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
          ))}
        </Gallery>  
};

ImageGallery.propTypes = {
    images: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
      })
    ),
    onImageClick: propTypes.func.isRequired,
  };