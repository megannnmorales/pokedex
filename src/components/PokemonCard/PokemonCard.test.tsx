import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("pokemon card", () => {
  test("testing bulbasour", () => {
    render(<PokemonCard id={1} name={"bulbasour"} />);

    expect(
      screen.getByRole("listitem", { name: "Pokemon Card" }),
    ).toBeInTheDocument();
  });
  test(" Given a specific pokemon alt label says 'name image'", () => {
    render(<PokemonCard id={1} name={"bulbasour"} />);
    expect(screen.getAllByAltText("bulbasour image"));
  });
  test(" Given a specific pokemon name is rendered", () => {
    render(<PokemonCard id={1} name={"bulbasour"} />);
    expect(screen.getByText("BULBASOUR")).toBeInTheDocument;
  });
  test(" Given a specific pokemon id is rendered", () => {
    render(<PokemonCard id={1} name={"bulbasour"} />);
    expect(screen.getByText("#01")).toBeInTheDocument;
  });
});
