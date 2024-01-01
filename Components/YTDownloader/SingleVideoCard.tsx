import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { setOpenModal } from "store/utilitySlice";

const SingleVideoCard: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ytAPIServiceOBJ = useSelector((state: RootState) => state.YTAPISlice);

  const onDownloadClickHandler = () => {
    dispatch(setOpenModal(true));
  };

  if (ytAPIServiceOBJ.status === "PENDING") {
    return (
      <>
        <Box>
          <Paragraph>Loadig...!</Paragraph>
        </Box>
      </>
    );
  }

  if (ytAPIServiceOBJ.status === "REJECTED") {
    return (
      <>
        <Box>
          <Paragraph>Rejected With Some Reason...!</Paragraph>
        </Box>
      </>
    );
  }

  if (ytAPIServiceOBJ.status === "FULFILLED") {
    const incomingYTData = ytAPIServiceOBJ.data.data;
    const incomingYTMetaInfa = ytAPIServiceOBJ.data.metaInfo.videoDetails;
    return (
      <>
        {incomingYTData.info.map((singleVideoInfo: any, index: any) => {
          const { quality, qualityLabel, url, hasVideo, hasAudio, container } = singleVideoInfo;
          return (
            <React.Fragment key={index}>
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
                  <iframe width="100%" height="320" src={url} title="video" />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} border={0} p={2} position="relative">
                  <Paragraph>
                    <span style={{ color: "primary.main", fontWeight: "bold" }}>Title</span>: {incomingYTMetaInfa.title}
                  </Paragraph>
                  <Paragraph>
                    <span style={{ color: "primary.main", fontWeight: "bold" }}>Description</span>:{" "}
                    {incomingYTMetaInfa.description.split("").slice(0, 120)}
                  </Paragraph>
                  <Stack direction="row" border={0} display="flex" mt={5}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Paragraph>Has Video: {hasVideo ? "True" : "False"}</Paragraph>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Paragraph>Has Audio: {hasAudio ? "True" : "False"}</Paragraph>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Paragraph>Label : {qualityLabel}</Paragraph>
                    </Box>
                  </Stack>
                  <Box textAlign="center" mt={3} mb={1}>
                    <Button variant="contained" onClick={onDownloadClickHandler}>
                      Download Video
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </React.Fragment>
          );
        })}
      </>
    );
  }
};

export default SingleVideoCard;

{
  /* {
  <div key={index}>
    <a href={formatName.url}>
      {formatName.mimeType.split(";")[0] + "  "}
      {formatName.hasVideo ? formatName.height + "p" : ""}
    </a>
  </div>
} */
}
