import { useParams } from "react-router";
import usePokemon from "../components/hooks/usePokemon";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import NotFoundPage from "./NotFoundPage";

export default function PokemonPage() {
    const { id } = useParams()
    if (typeof (id) === "undefined") {
        return <p>Invalid Pokemon id: {id}</p>
    }

    if(!Number(id) || Number(id) ===0 ){
       return <>
       <NotFoundPage/>
       <p>Invalid Pokemon id: {id}</p>
       </>
    }

    const { pokemon, isLoading, fetchError, refetch } = usePokemon(id)



    if (typeof (pokemon) !== "undefined") {
        return (
            <>
                <PokemonCard id={pokemon.id} name={pokemon.name} />
            </>
        )
    }else{
        return(
            <>
            <NotFoundPage/>
            <p>Pokemon not found</p>
            </>
        )
    }
}