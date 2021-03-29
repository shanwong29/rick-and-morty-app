import { allCharData } from "./data/allCharData";
import { allEpisodeData } from "./data/allEpisodeData";

const mockApiCharResponse = (params) => {
  const { page, name, species, status } = params;
  const nameRegex = new RegExp(name, "i");
  const speciesRegex = new RegExp(species, "i");

  const requestedChar = allCharData.filter((el) => {
    const nameMatched = name ? nameRegex.test(el.name) : true;

    const speciesMatched = species ? speciesRegex.test(el.species) : true;

    const statusMatched = status
      ? el.status.lowercase().startsWith(status.lowercase())
      : true;

    return nameMatched && speciesMatched && statusMatched;
  });

  const pagesCount = Math.ceil(requestedChar.length / 20);

  const requestedPage = page ? Number(page) : 1;

  let nextPage = requestedPage + 1;
  let prevPage = requestedPage - 1;
  if (requestedPage === pagesCount) {
    nextPage = null;
  } else if (requestedPage === 1) {
    prevPage = null;
  }

  return {
    info: {
      count: requestedChar.length,
      pages: pagesCount,
      next:
        nextPage &&
        `https://rickandmortyapi.com/api/character/?page=${nextPage}`,
      prev:
        prevPage &&
        `https://rickandmortyapi.com/api/character/?page=${prevPage}`,
    },
    results: requestedChar,
  };
};

const mockEpisodeData = (strOfEpiNum) => {
  const arrOfEpiNum = strOfEpiNum.split(",");

  const requestedEpi = arrOfEpiNum.map((epNum) => {
    allEpisodeData[epNum - 1];
  });
  return requestedEpi;
};

const get = (url, { params }) => {
  console.log("???", url, params);
  if (url.includes("episode")) {
    const strOfEpiNum = url.slice(url.lastIndexof("/") + 1);
    return Promise.resolve({ data: mockEpisodeData(strOfEpiNum) });
  } else if (url.includes("character")) {
    return Promise.resolve({ data: mockApiCharResponse(params) });
  } else {
    throw new Error("collection not registered");
  }
};

exports.get = get;
