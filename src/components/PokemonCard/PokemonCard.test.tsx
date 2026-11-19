import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { TeamProvider } from "../../contexts/TeamContext";
import { Header } from "../Header";
import { userEvent } from "@testing-library/user-event";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { ToastProvider } from "../../contexts/ToastContext";
import { MemoryRouter } from "react-router";

function renderWithProviders(){
  return ( <MemoryRouter >
      <ThemeProvider>
        <ToastProvider>
          <TeamProvider>
            <Header />
            <PokemonCard id={1} name={"bulbasour"} />
          </TeamProvider>
        </ToastProvider>
      </ThemeProvider>
      </MemoryRouter>)
} 


describe("pokemon card", () => {
  test("testing bulbasour", () => {
    render(renderWithProviders());

    expect(
      screen.getByRole("listitem", { name: "Pokemon Card" }),
    ).toBeInTheDocument();
  });
  test(" Given a specific pokemon alt label says 'name image'", () => {
    render(renderWithProviders());
    expect(screen.getAllByAltText("bulbasour image"));
  });
  test(" Given a specific pokemon name is rendered", () => {
    render(renderWithProviders());
    expect(screen.getByText("BULBASOUR")).toBeInTheDocument;
  });
  test(" Given a specific pokemon id is rendered", () => {
    render(renderWithProviders());
    expect(screen.getByText("#01")).toBeInTheDocument;
  });

  test("Given a specific Pokemon adding it to the team increases the team counter", async () => {
    const user = userEvent.setup();
    render(renderWithProviders());
    await user.click(screen.getByRole("button", { name: "Add to my team" }))
    expect(screen.findByText("1"))
  })
});
