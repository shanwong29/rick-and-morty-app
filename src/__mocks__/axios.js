import { mockCharData } from "../testStore/mockCharData";

const get = () => {
  console.log("using global mock");
  return Promise.resolve({ data: mockCharData });
};

exports.get = get;
