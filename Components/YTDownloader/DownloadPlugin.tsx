import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { AddLink, Backspace } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";

const DownloadPlugin = () => {
  const userInputRef = useRef<HTMLInputElement>();
  const [userInputLink, setUserInputLink] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);
  const [dataFromYT, setDataFromYT] = useState(null);

  const handleDownload = async (incomingURL: string) => {
    try {
      const data: any = await axios.get(`/api/download?url=${incomingURL}`);
      setDataFromYT(data);
    } catch (error: any) {
      if (error.response.status === 500) {
        alert("Please Enter Correct Youtube URL");
      }
      if (error.response.status === 405) {
        alert("Bad Request Broo..!");
      }
    }
  };

  const onStartClickHandler = () => {
    const captureUserInput = userInputRef.current!.value;
    if (captureUserInput.length === 0 && captureUserInput === "") {
      setInputError(true);
    } else {
      setInputError(false);
      setUserInputLink(captureUserInput);
      handleDownload(captureUserInput);
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
      <Box>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi, perferendis id quo voluptatibus fugit
          veniam suscipit vel harum earum reiciendis ex doloremque temporibus nam quasi laborum cupiditate itaque
          eligendi!
        </Paragraph>
      </Box>
    </>
  );
};

export default DownloadPlugin;
