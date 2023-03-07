import propTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.style";

const ImageGallery = ({ images, onImageClick }) => {

  return (

        <Gallery>
          {images.map((image, index) => (
            <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
          ))}
        </Gallery>  
  )
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onImageClick: propTypes.func.isRequired,
};

export default ImageGallery;
