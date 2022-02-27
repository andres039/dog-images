const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const response = await fetch(url);

  if (!response.ok) {
    const {url, status, statusText} = response
    throw Error(`${status} ${statusText} in fetch ${url}`)
  }
  const data = await response.json();

  return data
};

export default getBreeds;
