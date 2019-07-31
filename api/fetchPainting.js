const imageChecker = (results) => {
  return (results.records[0].images.length)
}

const paintingCleaner = (results, pageNum) => {
  const painting = results[0];
  const cleanPainting = {
    imageURL: painting.primaryimageurl,
    title: painting.title,
    period: painting.period || "Unkown",
    credit: painting.creditline,
    medium: painting.medium,
    artist: painting.people ? painting.people[0].name : "Unknown",
    height: painting.images[0].height,
    width: painting.images[0].width
  };
  return { cleanPainting, pageNum };
};

export const fetchPainting = (pageNum) => {
  console.log(process.env)
  const url = `https://api.harvardartmuseums.org/object?classification=Paintings&size=1&apikey=${
    process.env.VUE_APP_API_KEY
  }&page=${pageNum}&hasimage=1`;
  return fetch(url)
    .then(res => res.json())
    .then(results => {
      if (!imageChecker(results)){
        return fetchPainting(pageNum + 1);
      } else {
        return paintingCleaner(results.records, pageNum)
      }
    })
    .catch(err => console.log(err));
}