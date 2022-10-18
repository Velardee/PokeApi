import React from "react";
import { Stack, IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Paginations = (props) => {
  const { page, setPage, total } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <Grid
        style={{ paddingTop: "2%" }}
        // className="containerPagination"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <Stack
            justifyContent="flex-end"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <IconButton color="primary" onClick={lastPage}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <div>
              {page + 1} de {total}
            </div>
            <IconButton>
              <ArrowForwardIosIcon color="primary" onClick={nextPage} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};
