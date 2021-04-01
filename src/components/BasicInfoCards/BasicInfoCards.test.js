import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import { allCharData } from "../../__mocks__/data/allCharData";
import { allEpisodeData } from "../../__mocks__/data/allEpisodeData";

import userEvent from "@testing-library/user-event";

beforeEach(async () => {
  render(<App />);
  const firstDisplayCharName = allCharData[0].name;

  await waitFor(() =>
    expect(screen.getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument()
  );
});

describe("When user click a character card", () => {
  const selectedChar = allCharData[6];
  beforeEach(async () => {
    userEvent.click(screen.getByAltText(selectedChar.name));
    await screen.findByText("Appeared Episode");
  });
  it("should show all the epsode the character appeared", () => {
    const appearedEpisode = selectedChar.episode.map((epLink) => {
      const epNum = Number(epLink.slice(epLink.lastIndexOf("/") + 1));

      const epName = allEpisodeData[epNum - 1].name;
      return epName;
    });

    for (const epName of appearedEpisode) {
      expect(screen.getByText(epName)).toBeInTheDocument();
    }
  });

  it("should show gender, origin, location and created date of the character", () => {
    const expectedTexts = [
      "Earth (Replacement Dimension)",
      "Testicle Monster Dimension",
      "Male",
    ];

    for (const expectedText of expectedTexts) {
      expect(screen.getByText(expectedText)).toBeInTheDocument();
    }

    expect(
      screen.getByText("4 Nov 2017", { exact: false })
    ).toBeInTheDocument();
  });

  describe("When user click clear button", () => {
    it("should close the pop up card", async () => {
      userEvent.click(screen.getByText("CLEAR"));
      await expect(
        screen.queryByText("Appeared Episode")
      ).not.toBeInTheDocument();
    });
  });

  describe("When user click cross button", () => {
    it("should close the pop up card", async () => {
      userEvent.click(screen.getByText("\u2715"));
      await expect(
        screen.queryByText("Appeared Episode")
      ).not.toBeInTheDocument();
    });
  });
});
