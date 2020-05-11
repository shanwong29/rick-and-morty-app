import { mockCharData } from "./mockCharData";

const mockResults = mockCharData.results;
const mockDataInfo = mockCharData.info;

export const initialState = {
  characterData: mockResults,
  dataInfo: mockDataInfo,
  episodeData: [],
  isDataNotFound: false,
  currentApiPage: 1,
  showSecondPart: false,
  activeCharPosition: null,
  speciesQuery: "",
  statusQuery: "",
  startDateQuery: "",
  endDateQuery: "",
};
