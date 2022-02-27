const getDogs = async (breedId) => {
  const url =
    !breedId || breedId === 0
      ? "https://api.thedogapi.com/v1/images/search"
      : `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;

  console.log(url);
  const response = await fetch(url);

  if (!response.ok) {
    const {url, status, statusText} = response
    throw Error(`${status} ${statusText} in fetch ${url}`)
  }

  const [data] = await response.json();

  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
    };
  }
  const dog = {
    image,
    breed,
  };

  return dog;
};

export default getDogs;
