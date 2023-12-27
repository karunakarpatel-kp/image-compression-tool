import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Link from "next/link";

import MainLayout from "@Layout/MainLayout";
import HeaderSection from "@SEO/Head";

import seo from "@Public/seo.jpg";
import coding from "@Public/coding.jpg";

import ImageOnTopCard from "@UI/HomePageCards/ImageOnTopCard";
import { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { DateMonthYearForBlogPost, SEO_OBJ, blogPostsObj } from "Essentials";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import ExtendFullPageLayout from "@Components/Layout/ExtendFullPage";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import DownloadPlugin from "@Components/YTDownloader/DownloadPlugin";

const YoutubeVideoDownloader: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.title}
        description={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.description!}
        image={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.featuredImage}
        url={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.lastUpdateTime}
      />

      <Grid
        container
        direction="column"
        border={1}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <HeadingOne title={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.title} id="title" />
          <Subtitle text={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.lastUpdateTime)}
            tags={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.tags!}
          />
          {/* Image For Desktop Screens */}
        </Grid>
        <Box sx={{ width: "70%", textAlign: "center", margin: "auto", marginTop: "20px" }}>
          <HeaderImageFullBlogPost
            image={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.featuredImage}
            alt={SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.featuredImageAltText}
          />
        </Box>
        <Box p={2}>
          <Paragraph>Here is the simple page with youtube downloader paragraph dude...!</Paragraph>
        </Box>
        <Box p={2}>
          <DownloadPlugin />
        </Box>
      </Grid>
    </>
  );
};

export default YoutubeVideoDownloader;

YoutubeVideoDownloader.getLayout = function getLayout(page) {
  return <ExtendFullPageLayout>{page}</ExtendFullPageLayout>;
};
