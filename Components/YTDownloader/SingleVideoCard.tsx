import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/centralStore";

const SingleVideoCard = () => {
  const getDataFromYT = useSelector((state: RootState) => state.utilitySlice.getDataFromYT);
  console.log(getDataFromYT);
  return (
    <>
      <Grid
        container
        direction="row"
        border={0}
        mt={2}
        component={Paper}
        elevation={8}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
        minHeight={200}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          border={0}
          p={1}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <iframe width="570" height="320" src={""} title="video" />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} border={0} p={2} position="relative">
          <Paragraph>
            <span style={{ color: "primary.main", fontWeight: "bold" }}>Title</span>: Lorem ipsum dolor sit amet quis!
          </Paragraph>
          <Paragraph>
            <span style={{ color: "primary.main", fontWeight: "bold" }}>Description</span>: Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ullam quia placeat dicta, voluptate tempora esse at. Eos sapiente ducimus
            quis!
          </Paragraph>
          <Stack direction="row" border={0} display="flex" mt={5}>
            <Box sx={{ flexGrow: 1 }}>
              <Paragraph>Has Video:</Paragraph>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Paragraph>Has Video:</Paragraph>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Paragraph>Has Video:</Paragraph>
            </Box>
          </Stack>
          <Box textAlign="center" mt={3} mb={1}>
            <Button variant="contained">Download Video</Button>
          </Box>
        </Grid>
      </Grid>

      {/* {
        <div key={index}>
          <a href={formatName.url}>
            {formatName.mimeType.split(";")[0] + "  "}
            {formatName.hasVideo ? formatName.height + "p" : ""}
          </a>
        </div>
      } */}
    </>
  );
};

export default SingleVideoCard;
