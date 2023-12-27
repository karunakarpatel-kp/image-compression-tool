import { AddLink, Backspace } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import React, { useRef, useState } from "react";

const URL = "https://youtu.be/tPEE9ZwTmy0?si=sUoY0k8I47petUoB";

// export const handleDownload = async () => {
//   try {
//     const options: any = {
//       url: "https://youtu.be/tPEE9ZwTmy0?si=sUoY0k8I47petUoB",
//       folder: "downloads", // optional, default: "youtube-exec"
//       filename: "filename", // optional, default: video title
//       resolution: 720, // 144, 240, 360, 480, 720, 1080, 1440, 2160, or 4320; default: 480
//     };
//     const data = await youtubeDl(options);
//     console.log("Video downloaded successfully! 🎥🎉", data);
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

const handleDownload = async () => {
  const downloadData = {
    url: "https://youtu.be/QntqP3PrW3c?si=5-nv8itZGbMq3R0T",
    folder: "downloads",
    filename: "filename",
    resolution: 720,
  };

  try {
    const response = await fetch("/api/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(downloadData),
    });

    const data = await response.json();
    // setDownloadStatus(data.message || data.error);
    console.log("IncomingDataRes@Client", data);
  } catch (error) {
    console.error("An error occurred From Client:", error);
    // setDownloadStatus("Error downloading video");
  }
};

const DownloadPlugin = () => {
  const userInputRef = useRef<HTMLInputElement>();
  const [userInputLink, setUserInputLink] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const onStartClickHandler = () => {
    const captureUserInput = userInputRef.current!.value;
    if (captureUserInput.length === 0 && captureUserInput === "") {
      setInputError(true);
    } else {
      setInputError(false);
      setUserInputLink(captureUserInput);
      // handleDownload();
    }
  };

  const onBackSpaceClickHandler = () => {
    userInputRef.current!.value = "";
    setUserInputLink("");
  };

  const onBlurHandler = () => {
    const captureUserInput = userInputRef.current!.value;
    if (captureUserInput.length > 0) {
      setInputError(false);
    } else {
      setTimeout(() => {
        setInputError(false);
      }, 1000);
    }
  };

  console.log(userInputLink, "INPUT_LINK");

  return (
    <>
      <Box border={0}>
        <FormControl fullWidth sx={{ m: 1 }} error={inputError}>
          <Stack direction="row" spacing={1}>
            <InputLabel htmlFor="outlined-adornment-amount">Link</InputLabel>
            <OutlinedInput
              placeholder="Please paste the url to download"
              inputRef={userInputRef}
              onBlur={onBlurHandler}
              sx={{ width: 4 / 5 }}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <AddLink />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onBackSpaceClickHandler}>
                    <Backspace />
                  </IconButton>
                </InputAdornment>
              }
              label="Amount"
            />
            <Button variant="contained" onClick={onStartClickHandler}>
              Start Download
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default DownloadPlugin;
