export const getEpiNumReqStr = (episodeUrlArr) => {
  let episodeNumArr = [];
  episodeNumArr = episodeUrlArr.map((url, i) => {
    let episodeNum = 1;
    for (let i = url.length - 1; i >= 0; i--) {
      if (url[i] === "/") {
        episodeNum = url.slice(i + 1);
        break;
      }
    }
    return episodeNum;
  });

  return episodeNumArr.join();
};
