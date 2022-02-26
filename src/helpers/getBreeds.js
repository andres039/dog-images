const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const response = await fetch(url);
  const data = await response.json();

  return data
};

export default getBreeds;
