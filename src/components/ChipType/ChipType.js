import { Chip, Stack } from "@mui/material";
import React from "react";
import "./styles.css";

export const ChipType = (props) => {
  const { PokemonType } = props;
  console.log(PokemonType);
  return (
    <div>
      <Stack direction="row" spacing={1}>
        {PokemonType.map((pokeType, index) => {
          return (
            <Chip
              key={index}
              label={pokeType.type.name}
              className={pokeType.type.name}
            />
          );
        })}
      </Stack>
    </div>
  );
};
