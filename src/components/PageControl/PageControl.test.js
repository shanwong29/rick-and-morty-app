import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../../App";
import { allCharData } from "../../__mocks__/data/allCharData";

import userEvent from "@testing-library/user-event";

jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn((props) =>
    props.transitionName ? (
      <FakeTransition>{props.children}</FakeTransition>
    ) : null
  );
  return { CSSTransitionGroup: FakeCSSTransition, Transition: FakeTransition };
});

beforeEach(async () => {
  render(<App />);
  const firstDisplayCharName = allCharData[0].name;

  await waitFor(() =>
    expect(screen.getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument()
  );
});

const lastPage = "13";

describe("When user click the last page", () => {
  beforeEach(async () => {
    userEvent.click(screen.getByText(lastPage, { selector: "button" }));
    await waitForElementToBeRemoved(() => screen.getByAltText("Morty Smith"));
  });

  it("should show the last character", () => {
    const lastChar = allCharData[allCharData.length - 1];
    expect(screen.getByAltText(lastChar.name)).toBeInTheDocument();
  });

  it("should still show the 1 page button and last page in page control navigation", () => {
    expect(screen.getByText("1", { selector: "button" })).toBeInTheDocument();
    expect(
      screen.getByText(lastPage, { selector: "button" })
    ).toBeInTheDocument();
  });

  it("should show the previous 9 page button in control navigation", () => {
    for (let i = lastPage - 1; i >= lastPage - 9; i--) {
      expect(screen.getByText(i, { selector: "button" })).toBeInTheDocument();
    }
  });

  it("should NOT show previous 10 or above page button in control navigation", () => {
    for (let i = lastPage - 10; i > 1; i--) {
      expect(
        screen.queryByText(i, { selector: "button" })
      ).not.toBeInTheDocument();
    }
  });
});

describe("When user click the 7th page", () => {
  const middlePage = "7";
  const middlePageNum = Number(middlePage);

  beforeEach(async () => {
    userEvent.click(screen.getByText(middlePage, { selector: "button" }));
    await waitForElementToBeRemoved(() => screen.getByAltText("Morty Smith"));
  });

  it("should show the 70th character", () => {
    const seventiethChar = allCharData[69];
    expect(screen.getByAltText(seventiethChar.name)).toBeInTheDocument();
  });

  it("should still show the 1 page and last page button in page control navigation", () => {
    expect(screen.getByText("1", { selector: "button" })).toBeInTheDocument();
    expect(
      screen.getByText(lastPage, { selector: "button" })
    ).toBeInTheDocument();
  });

  it("should show the previous 4 page and next 4 page button", () => {
    for (let i = middlePageNum - 1; i <= middlePageNum - 4; i--) {
      expect(screen.queryByText(i, { selector: "button" })).toBeInTheDocument();
    }

    for (let i = middlePageNum + 1; i <= middlePageNum + 4; i++) {
      expect(screen.queryByText(i, { selector: "button" })).toBeInTheDocument();
    }
  });

  it("should NOT show the 5th previous page and 5th next page button", () => {
    for (let i = middlePageNum - 5; i < 1 - 4; i--) {
      expect(
        screen.queryByText(i, { selector: "button" })
      ).not.toBeInTheDocument();
    }

    for (let i = middlePageNum + 5; i < lastPage; i++) {
      expect(
        screen.queryByText(i, { selector: "button" })
      ).not.toBeInTheDocument();
    }
  });
});
