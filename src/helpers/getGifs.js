
export const getGifs = async (category) => {
  const key = "fvs9AwDk1cJlHvKtIvF73Ar2ncHRisep";
  const limit = 5;
  const host = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${key}`;
  const res = await fetch(host);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      urlImg: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};