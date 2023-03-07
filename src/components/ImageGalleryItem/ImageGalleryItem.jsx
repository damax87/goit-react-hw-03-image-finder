import propTypes from 'prop-types';
import { GalleryItem } from "./ImageGalleryItem.style";
import { GalleryItemImage } from "./ImageGalleryItem.style";

const ImageGalleryItem = ({ image, onclick }) => (
  <GalleryItem id={image.id} onClick={onclick}>
    <GalleryItemImage
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
    />
  </GalleryItem>

);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};

export default ImageGalleryItem;