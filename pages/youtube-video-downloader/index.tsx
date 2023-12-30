import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Stack, ThemeProvider, Typography } from "@mui/material";

import Link from "next/link";

import MainLayout from "@Layout/MainLayout";
import HeaderSection from "@SEO/Head";

import seo from "@Public/seo.jpg";
import coding from "@Public/coding.jpg";

import ImageOnTopCard from "@UI/HomePageCards/ImageOnTopCard";
import Theme, { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { DateMonthYearForBlogPost, SEO_OBJ, blogPostsObj } from "Essentials";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import ExtendFullPageLayout from "@Components/Layout/ExtendFullPage";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import DownloadPlugin from "@Components/YTDownloader/DownloadPlugin";
import HeadingFive from "@Components/Elements/Headings/HeadingFive";
import Footer from "@Components/UI/Footer";
import Navigation from "@Components/UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import SingleVideoCard from "@Components/YTDownloader/SingleVideoCard";

const YoutubeVideoDownloader: NextPageWithLayout = () => {
  const [data, setCompleteData] = useState({
    data: null,
    errorStatus: false,
    loadingStatus: false,
  });

  const getData = (incomingData: any) => {
    console.log(incomingData);
    setCompleteData({ ...data, data: incomingData });
  };
  const getErrorStatus = (incomingErrorStatus: any) => {
    console.log(incomingErrorStatus);
    setCompleteData({ ...data, errorStatus: incomingErrorStatus });
  };

  const getLoadingStatus = (incomingLoadingStatus: any) => {
    console.log({ ...data, loadingStatus: incomingLoadingStatus });
  };

  console.log("HI", data);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <HeaderSection
          title={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.title}
          description={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.description!}
          image={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.featuredImage}
          url={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.absoluteURL}
          publishedTime={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.publishedTime}
          lastUpdatedTime={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.lastUpdateTime}
        />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis at quam, beatae optio magni libero
                sint tempore? Quae, ea voluptatibus quos expedita inventore enim similique amet a incidunt molestiae
                tenetur minus, fuga mollitia voluptas. In mollitia laborum cumque ullam laudantium.
              </Typography>
              <LastUpdateTags
                lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.lastUpdateTime)}
                tags={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.tags!}
              />
              <DownloadPlugin getData={getData} getErrorStatus={getErrorStatus} getLoadingStatus={getLoadingStatus} />
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
            <SingleVideoCard completeData={data} />
            {/* Center Content */}

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
    </>
  );
};

export default YoutubeVideoDownloader;

// YoutubeVideoDownloader.getLayout = function getLayout(page) {
//   return <ExtendFullPageLayout>{page}</ExtendFullPageLayout>;
// };
