import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import PokemonLogo from "../../assets/PokemonLogo.svg";
import Pokedex from "../../assets/Pokedex.svg";
import "./styles.css";

export const Welcome = () => {

    const navigate = useNavigate();

  //Animations
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
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
    <div className="background">
      <motion.div variants={container} initial="hidden" animate="visible">
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="cropLogo">
              <motion.img
                className="welcomeImg"
                src={PokemonLogo}
                alt="Pokemon Logo"
                variants={item}
              />
            </div>
          </Grid>
        </Grid>

        <Grid style={{ paddingTop: "2%", paddingLeft: "1%", paddingRight: "1%" }} direction="row" alignItems="center" container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="cropPokedex">
              <motion.img
                className="welcomeImg"
                src={Pokedex}
                alt="Pokedex"
                variants={item}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <motion.div variants={item}>
              <Typography
                className="welcomeText"
                style={{ fontWeight: "600", color: "white" }}
                variant="h3"
                color="initial"
              >
                Conoce la lista de <br />
                Pokémons registrados <br />
                en la pokedex
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Grid style={{ paddingLeft: "5%", paddingRight: "5%" }} direction="row" justifyContent="flex-end" container>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Button onClick={() => navigate('search')} fullWidth size="large" variant="contained" style={{ backgroundColor: "#FFCB05" }}>
              Empezar
            </Button>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};
