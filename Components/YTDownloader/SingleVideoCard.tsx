import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, IconButton, Paper, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { sendVideoURL, setOpenModal } from "store/utilitySlice";
import EmptySVG from "@Public/empty.svg";
import { CheckCircle } from "@mui/icons-material";

const SingleVideoCard: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ytAPIServiceOBJ = useSelector((state: RootState) => state.YTAPISlice);

  const onDownloadClickHandler = (url: string, index: string) => {
    dispatch(setOpenModal(true));
    const incomingYTData = ytAPIServiceOBJ.data.data;
    dispatch(sendVideoURL(incomingYTData.info[index].url));
  };

  if (ytAPIServiceOBJ.status === "PENDING") {
    return (
      <>
        {[1, 2].map((index: any) => {
          return (
            <React.Fragment key={index}>
              <Grid
                container
                direction="row"
                border={0}
                mt={2}
                mb={2}
                component={Paper}
                elevation={4}
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
                  {/* <iframe width="100%" height="320" src={url} title="video" /> */}
                  <Skeleton height={329} width="100%" animation="wave" variant="rectangular" sx={{ margin: 0, p: 0 }} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  border={0}
                  p={2}
                  position="relative"
                  display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
                >
                  <Stack spacing={1}>
                    <Skeleton variant="rectangular" animation="wave" height={90} />
                    <Skeleton variant="rectangular" animation="wave" height={50} />
                    <Skeleton variant="rectangular" animation="wave" height={60} />
                    <Skeleton variant="rectangular" animation="wave" height={100} />
                  </Stack>
                </Grid>
              </Grid>
            </React.Fragment>
          );
        })}
      </>
    );
  }

  if (ytAPIServiceOBJ.status === "REJECTED") {
    return (
      <>
        <Grid
          container
          direction="column"
          border={0}
          mt={2}
          component={Paper}
          elevation={0}
          // sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
          minHeight={400}
          p={5}
          textAlign="center"
        >
          <Box margin="auto" mb={2}>
            <Image src={EmptySVG} width={300} height={300} alt="Hi" />
          </Box>

          <Paragraph>The URL That you had pasted was unable to fetch please enter some other url</Paragraph>
        </Grid>
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
                  {/* For Desktops */}
                  <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }} position="relative">
                    <Image
                      src={incomingYTMetaInfa.thumbnails[incomingYTMetaInfa.thumbnails.length - 1].url}
                      width={480}
                      height={300}
                      alt={url}
                    />
                    <ButtonGroup
                      variant="contained"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bgcolor: "red",
                        backgroundColor: "red",
                        ".MuiButtonGroup-grouped": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      <Button variant="contained" sx={{ bgColor: "red" }}>
                        {qualityLabel ? qualityLabel : "NA"}
                      </Button>
                      <Button variant="contained">{container ? container : "NA"}</Button>
                    </ButtonGroup>
                  </Box>
                  {/* For Mobile Images */}
                  <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }} position="relative">
                    <Image
                      src={incomingYTMetaInfa.thumbnails[incomingYTMetaInfa.thumbnails.length - 1].url}
                      width={360}
                      height={250}
                      alt={url}
                    />
                    <Button sx={{ position: "absolute", left: 0, top: 0, bgcolor: "red" }} variant="contained">
                      {qualityLabel ? qualityLabel : "NA"}, {container ? container : "NA"}
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  border={0}
                  p={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  position="relative"
                >
                  <Paragraph>
                    <span style={{ color: "primary.main", fontWeight: "bold" }}>Title</span>: {incomingYTMetaInfa.title}
                  </Paragraph>
                  <Paragraph>
                    <span style={{ color: "primary.main", fontWeight: "bold" }}>Description</span>:{" "}
                    {incomingYTMetaInfa.description !== null
                      ? incomingYTMetaInfa.description.split("").slice(0, 120)
                      : "There is no description for this video"}
                  </Paragraph>
                  <Stack
                    direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
                    border={0}
                    display="flex"
                    mt={5}
                    spacing={2}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Alert severity={hasVideo ? "success" : "error"}>
                        <AlertTitle>Video</AlertTitle>
                        {hasVideo ? "True" : "False"}
                      </Alert>
                      {/* <Paragraph>Has Video: {hasVideo ? "True" : "False"}</Paragraph> */}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Alert severity={hasAudio ? "success" : "error"}>
                        <AlertTitle>Audio</AlertTitle>
                        {hasAudio ? "True" : "False"}
                      </Alert>
                      {/* <Paragraph>Has Audio: {hasAudio ? "True" : "False"}</Paragraph> */}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Alert severity="info">
                        <AlertTitle>Label</AlertTitle>
                        {qualityLabel}
                      </Alert>
                      {/* <Paragraph>Label : {qualityLabel}</Paragraph> */}
                    </Box>
                  </Stack>
                  <Box textAlign="center" mt={3} mb={2}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ width: 4 / 5 }}
                      onClick={() => onDownloadClickHandler(url, index)}
                    >
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
