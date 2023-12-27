import { AddLink, Backspace } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import { downloadVideo } from "yt-get";

const handleDownload = () => {
  fetch("/api/download")
    .then(() => {
      console.log("DOwnloaded From Client");
    })
    .catch((error: any) => {
      console.log(error);
    });
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
      handleDownload();
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
