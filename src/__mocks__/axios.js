import { mockCharData } from "../testStore/mockCharData";

const get = () => {
  return Promise.resolve({ data: mockCharData });
};

exports.get = get;
