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

const ImageCompressionTool: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.title}
        description={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.description!}
        image={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.featuredImage}
        url={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.lastUpdateTime}
      />

      <Grid
        container
        direction="column"
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <HeadingOne title={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.title} id="title" />
          <Subtitle text={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.lastUpdateTime)}
            tags={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.tags!}
          />
          {/* Image For Desktop Screens */}
        </Grid>
      </Grid>
      {/* <Box sx={{ width: "70%", textAlign: "center", margin: "auto", marginTop: "20px" }}>
        <HeaderImageFullBlogPost
          image={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.featuredImage}
          alt={SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.featuredImageAltText}
        />
      </Box> */}
    </>
  );
};

export default ImageCompressionTool;

ImageCompressionTool.getLayout = function getLayout(page) {
  return <ExtendFullPageLayout>{page}</ExtendFullPageLayout>;
};
