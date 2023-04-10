import axios from 'axios';

export const getAnimalImages = async (count) => {
  try {
    const images = [];
    for (let i = 0; i < count; i++) {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      images.push(response.data.message);
    }
    return images;
  } catch (error) {
    console.error(error);
  }

  return [];
};
