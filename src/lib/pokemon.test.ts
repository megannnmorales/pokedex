import {idFromUrl} from './pokemon'
import { describe, expect, test } from "vitest";

describe("idFromUrl",() =>{
    test("returns the number when given URL with trailing slash", () =>{
        const input = "https://pokeapi.co/api/v2/pokemon/25/"
        expect(idFromUrl(input)).toBe(25)
    });
    test("returns the number when given URL without trailing slash", () =>{
        const input = "https://pokeapi.co/api/v2/pokemon/25"
        expect(idFromUrl(input)).toBe(25)
    });
    test("returns the number when given URL with trailing slash", () =>{
        const input = "https://pokeapi.co/api/v2/pokemon/abc"
        expect(idFromUrl(input)).throw
    });
})
