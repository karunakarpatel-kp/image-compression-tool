import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Link from "next/link";
import React from "react";
import { themeColors } from "@Theme/Theme";

interface LastUpdatedTagsProps {
  lastUpdatedTime: string;
  tags: {
    tag: string;
    href: string;
  }[];
}

const LastUpdateTags = (props: LastUpdatedTagsProps) => {
  const { lastUpdatedTime, tags } = props;
  return (
    <>
      <Grid container direction="row" spacing={0}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ textAlign: { xs: "center", sm: "center", md: "center", lg: "center" } }}
        >
          <Typography
            fontWeight={500}
            variant="blog"
            color={themeColors.LastUpdateTagsColor}
            sx={{ fontFamily: "WotfardLight" }}
          >
            Last updated on {lastUpdatedTime}
          </Typography>
          <Box sx={{ "&.MuiBox-root": { marginTop: "10px" } }}>
            {tags.length > 0 &&
              tags.map((singleTag, index) => {
                return (
                  <Link href={singleTag.href} style={{ marginRight: "8px" }} key={index}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: themeColors.tagBgColor,
                        color: themeColors.tabtextColor,
                        fontWeight: "normal",
                        borderRadius: 13,
                        pt: 0,
                        pb: 0,
                        mt: 1,
                        "&:hover": {
                          backgroundColor: themeColors.tagBgColor,
                          textDecoration: "underline",
                        },
                      }}
                      disableElevation
                    >
                      {singleTag.tag}
                    </Button>
                  </Link>
                );
              })}
          </Box>
        </Grid>
        {/* <Grid
          item
          xs={12}
          sm={7}
          md={7}
          lg={7}
          mt={-1}
          sx={{ textAlign: { xs: "center", sm: "center", md: "center", lg: "center" } }}
        >
          <Box sx={{ "&.MuiBox-root": { marginTop: "-4px" } }}>
            {tags.length > 0 &&
              tags.map((singleTag, index) => {
                return (
                  <Link href={singleTag.href} style={{ marginRight: "8px" }} key={index}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: themeColors.tagBgColor,
                        color: themeColors.tabtextColor,
                        fontWeight: "normal",
                        borderRadius: 13,
                        pt: 0,
                        pb: 0,
                        mt: 1,
                        "&:hover": {
                          backgroundColor: themeColors.tagBgColor,
                          textDecoration: "underline",
                        },
                      }}
                      disableElevation
                    >
                      {singleTag.tag}
                    </Button>
                  </Link>
                );
              })}
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default LastUpdateTags;
