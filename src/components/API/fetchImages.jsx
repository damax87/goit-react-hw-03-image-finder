import axios from 'axios';


const fetchImages = async (inputValue, pageNumber) => {
  const KEY = '33041546-26ac1afd8f063f5e8fcd45f42';
  const response = await axios.get(`https://pixabay.com/api/?q=${inputValue}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`  
  );
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};

export default fetchImages;