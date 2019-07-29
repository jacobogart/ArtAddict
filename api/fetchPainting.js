const paintingCleaner = (results) => {
  const painting = results[0];
  return {
    imageURL: painting.primaryimageurl,
    title: painting.title,
    period: painting.period || "Unkown",
    credit: painting.creditline,
    medium: painting.medium,
    artist: painting.people 
      ? painting.people[0].name 
      : "Unknown",
    height: painting.images[0].height,
    width: painting.images[0].width
  };
}

export const fetchPainting = (pageNum) => {
  const url = `https://api.harvardartmuseums.org/object?classification=Paintings&size=1&apikey=${
    process.env.VUE_APP_API_KEY
  }&page=${pageNum}`;
  return fetch(url)
    .then(res => res.json())
    .then(results => paintingCleaner(results.records))
    .catch(err => console.log(err));
}