const getDogs = async () => {
  const url = "https://api.thedogapi.com/v1/images/search";
  const response = await fetch(url);
  const [data] = await response.json();

  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: 'random'
    }
  }
  const dog = { 
    image,
    breed,
  };

  return dog;
};

export default getDogs;
