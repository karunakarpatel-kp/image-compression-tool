import React, { useEffect, useState } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Box, Fab, Grid, Toolbar, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

import Footer from "@UI/Footer";
import Theme from "@Theme/Theme";
import Navigation from "@UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import { useRouter } from "next/router";
import RecentPosts from "@Components/UI/RecentPosts";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import bgSVGImage from "@Public/bgSVGImage.svg";
import DownloadPlugin from "@Components/YTDownloader/DownloadPlugin";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";

interface FullpageBlogPostLayoutProps {
  children?: React.ReactNode;
}

const ExtendFullPageLayout = (props: FullpageBlogPostLayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Navigation />
      <Grid container direction="row" spacing={0} mt={8} border={1}>
        <Box
          sx={{
            border: "1",
            backgroundColor: "primary.main",
            p: 3,
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="blogPostBrandTitle"
            sx={{ mb: { xs: 2, sm: 2, md: 3, lg: 3, color: "white" } }}
            id="title"
          >
            Youtube Video Downloader
          </Typography>
          <Box width={3 / 5} margin="auto" border={0} borderColor="white">
            <Typography variant="blogPostBrandSubheading" mb={6} mt={5}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis at quam, beatae optio magni libero sint
              tempore? Quae, ea voluptatibus quos expedita inventore enim similique amet a incidunt molestiae tenetur
              minus, fuga mollitia voluptas. In mollitia laborum cumque ullam laudantium.
            </Typography>
            <LastUpdateTags
              lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.lastUpdateTime)}
              tags={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.tags!}
            />
            <DownloadPlugin />
          </Box>
        </Box>
        {/* <Box border={1} mt={-7}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="414.248"
            viewBox="0 0 2352.142 414.248"
            style={{ padding: 0 }}
          >
            <path
              id="Path_2"
              data-name="Path 2"
              d="M-410,725.4S-190.807,556.073,34.344,533,347.359,628.548,490.6,633.1,632.786,522.6,632.786,522.6,755.87,677.3,819.534,542.1s-53.053,51.675,118.839,78,346.438-24.05,568.732,27.3,211.683,191.1,320.442,178.1,114.6-230.1,114.6-230.1V412.1H-410Z"
              transform="translate(410 -412.099)"
              fill="#36106a"
            />
          </svg>
        </Box> */}
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
