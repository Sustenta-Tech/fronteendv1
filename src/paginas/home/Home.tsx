import React from "react";
import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'
import Carrossel from "../../components/carrossel/Carrossel";

function Home() {
    return (
        <>
            <Grid container style={{ marginTop: "8px" }}>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;