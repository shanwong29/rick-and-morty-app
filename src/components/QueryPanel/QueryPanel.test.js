import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../../App";
import { allCharData } from "../../__mocks__/data/allCharData";
import userEvent, { specialChars } from "@testing-library/user-event";

const mockInputEvent = (label, inputValue) => {
  const nameInput = screen.getByLabelText(label, {
    selector: "input",
    exact: false,
  });

  userEvent.type(nameInput, `${inputValue}${specialChars.enter}`);
};

const mockStatusChange = (newStatus) => {
  const statusInput = screen.getByLabelText("status", { exact: false });
  userEvent.selectOptions(statusInput, [newStatus], { bubbles: true });
};

const continuousPageCheck = (lastConsecutivePage) => {
  for (let i = 1; i <= lastConsecutivePage; i++) {
    const pageBtn = screen.getByText(i, { selector: "button" });
    expect(pageBtn).toBeInTheDocument();
  }
};

const pageNotExist = (page) => {
  expect(
    screen.queryByText(page, { selector: "button" })
  ).not.toBeInTheDocument();
};

beforeEach(async () => {
  render(<App />);
  const firstDisplayCharName = allCharData[0].name;

  await waitFor(() =>
    expect(screen.getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument()
  );
});

describe("When user search by name 'sanchez'", () => {
  const inputValue = "sanchez";
  beforeEach(async () => {
    mockInputEvent("name", inputValue);

    await waitFor(() =>
      expect(screen.getByAltText("Diane Sanchez")).toBeInTheDocument()
    );
  });
  it("should show only characters with name that include 'sanchez'", () => {
    const displayedInfoCardImg = screen.getAllByAltText(inputValue, {
      exact: false,
    });
    const displayedCharInfoCard = screen.getAllByRole("img");
    expect(displayedInfoCardImg.length).toBe(3);
    expect(displayedCharInfoCard.length).toBe(3);
  });

  it("should only show 1 pages navigation", () => {
    continuousPageCheck(1);
    pageNotExist(2);
  });
});

describe("When user search by species 'alien'", () => {
  const inputValue = "alien";

  beforeEach(async () => {
    mockInputEvent("species", inputValue);

    await waitFor(() =>
      expect(screen.getByAltText("Alien Rick")).toBeInTheDocument()
    );
  });
  it("should show only characters with species 'alien'", () => {
    const basicInfoWithAlienTag = screen.getAllByText("| Alien |", {
      exact: false,
    });

    expect(basicInfoWithAlienTag.length).toBe(10);
  });

  it("should only show 4 pages navigation", () => {
    continuousPageCheck(4);
    pageNotExist(5);
  });
});

describe("When user select status 'alive'", () => {
  const selectedStatus = "alive";
  beforeEach(async () => {
    mockStatusChange(selectedStatus);

    await waitFor(() =>
      expect(screen.getByAltText("Annie")).toBeInTheDocument()
    );
  });

  it("should show only characters with status that match 'alive'", () => {
    const basicInfoWithAliveTag = screen.getAllByText("| Alive", {
      exact: false,
    });

    expect(basicInfoWithAliveTag.length).toBe(10);
  });

  it("should only show 6 pages navigation", () => {
    continuousPageCheck(6);
    pageNotExist(7);
  });
});

describe("When user made query to status, species and name", () => {
  beforeEach(async () => {
    const name = "R";
    const status = "alive";
    const species = "human";
    mockInputEvent("name", name);
    await waitForElementToBeRemoved(() => screen.getByAltText("Beth Smith"));

    mockInputEvent("species", species);
    await waitForElementToBeRemoved(() =>
      screen.getByAltText("Abadango Cluster Princess")
    );

    mockStatusChange(status);
    await waitForElementToBeRemoved(() =>
      screen.getByAltText("Abradolf Lincler")
    );
  });

  it("should show only show 3 pages navigation", () => {
    continuousPageCheck(3);
  });

  describe("When user click clear button", () => {
    beforeEach(async () => {
      userEvent.click(screen.getByText("CLEAR"));
      await screen.findByText("Morty Smith");
    });

    it("should show the first 10 characters again", () => {
      const firstDisplayCharName = allCharData[0].name;
      const lastDisplayCharName = allCharData[9].name;

      expect(
        screen.getByAltText(`${firstDisplayCharName}`)
      ).toBeInTheDocument();
      expect(screen.getByAltText(`${lastDisplayCharName}`)).toBeInTheDocument();
    });

    it("The inputs and select should be reset to empty ", () => {
      const emptyInputs = screen.getAllByPlaceholderText(
        "Press enter to submit"
      );
      expect(emptyInputs.length).toEqual(2);

      const statusSelect = screen.getByLabelText(/status/i, {
        selector: "select",
      });

      expect(statusSelect.value).toBe("");
    });
  });
});

describe("When no character matches user's query", () => {
  beforeEach(async () => {
    const name = "Refjsdlkfjsdfsd";

    mockInputEvent("name", name);
    await waitForElementToBeRemoved(() => screen.getByAltText("Beth Smith"));
  });

  it("should show a message indicating no result is found", () => {
    const noCharMsg = screen.getByText(
      "No characters fits this filter request",
      { exact: false }
    );
    expect(noCharMsg).toBeInTheDocument();
  });

  it("should show no character", () => {
    const charcterImg = screen.queryAllByRole("img");
    expect(charcterImg.length).toBe(0);
  });

  it("should show only show no pages navigation", () => {
    pageNotExist(1);
  });
});
