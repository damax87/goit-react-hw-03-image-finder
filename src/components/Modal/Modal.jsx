import * as basicLightbox from 'basiclightbox'
import { Overlay } from "./Modal.style";
import { Modal } from "./Modal.style";

export const Instance = () => {
    basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

Instance.show()
}