import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { Cards } from "../../components/Cards/Cards";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { getPokemonData, getPokemons } from "../../api";

export const SearchPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    setSearchPokemon(e.target.value);
  };

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(18, 18 * page);
      setLoading(false);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 18));
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div style={{ padding: "5%" }}>
        <div>
          <Grid
            style={{ paddingBottom: "3%" }}
            container
            direction="row"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <FormControl size="small" fullWidth>
                <InputLabel>Buscar Pokémon</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  label="Buscar Pokémon"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>

          <Cards
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
            loading={loading}
          />
        </div>
    </div>
  );
};
