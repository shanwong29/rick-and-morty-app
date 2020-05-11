export const timeStampFormatter = (timeStamp) => {
  let monthDict = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  let formattedDate = new Date(timeStamp);
  let date = formattedDate.getDate();
  let monthNum = formattedDate.getMonth();
  let month = monthDict[monthNum];
  let year = formattedDate.getFullYear();

  return `${date} ${month} ${year}`;
};
