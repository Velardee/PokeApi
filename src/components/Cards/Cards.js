import React from "react";
import { motion } from "framer-motion";
import { Grid, Typography, Card, CardContent, CardMedia, Box, CircularProgress } from "@mui/material";
import { ChipType } from "../ChipType/ChipType";
import { Paginations } from "../Pagination/Paginations";

export const Cards = ({ pokemons, page, setPage, total, loading }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      {
        loading ? (
          <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress />
          </Box>
        ) : (
      <motion.div variants={container} initial="hidden" animate="visible">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, index) => {
            return (
              <Grid key={index} item xs={12} sm={12} md={12} lg={4} xl={4}>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card style={{ cursor: "pointer" }} sx={{ display: "flex" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        style={{ textTransform: "capitalize" }}
                        variant="h5"
                        color="initial"
                      >
                        {pokemon.name}
                      </Typography>
                      <Typography variant="h6" color="initial">
                        #{pokemon.id}
                      </Typography>
                      <ChipType PokemonType={pokemon.types} />
                    </CardContent>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>

        )
      }
          <Paginations page={page} setPage={setPage} total={total} />
    </div>
  );
};
