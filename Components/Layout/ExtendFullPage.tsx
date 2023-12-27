import React, { useEffect, useState } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Box, Fab, Grid, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

import Footer from "@UI/Footer";
import Theme from "@Theme/Theme";
import Navigation from "@UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import { useRouter } from "next/router";
import RecentPosts from "@Components/UI/RecentPosts";

interface FullpageBlogPostLayoutProps {
  children?: React.ReactNode;
}

const ExtendFullPageLayout = (props: FullpageBlogPostLayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Navigation />

      <Grid container direction="row" spacing={0} mt={8}>
        <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
          {/* Extra Space On The Left Side */}
        </Grid>

        <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh">
          {/* Center Content */}
          {props.children}

          {/* Recent Posts */}
          {/* <RecentPosts /> */}

          {/* Sharing Icon Container In Below */}
          <Grid
            container
            direction="row"
            spacing={3}
            mb={3}
            mt={-6}
            sx={{
              pl: { xs: 2, sm: 2, md: 0, lg: 0 },
              pr: { xs: 2, sm: 2, md: 0, lg: 0 },
              display: { xs: "block", md: "none", lg: "none" },
            }}
          >
            <Grid item md={8} lg={8}>
              {/* Please remove the title and make it dynamic....! */}
              <Sharing />
            </Grid>
          </Grid>
          {/* End of Sharing Container */}
        </Grid>

        <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
          {/* Extra Space On The Right Side */}
        </Grid>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
};

export default ExtendFullPageLayout;
