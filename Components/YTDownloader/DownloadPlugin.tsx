import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { AddLink, Backspace } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SingleVideoCard from "./SingleVideoCard";
import { LoadingButton } from "@mui/lab";

const sampleVideURL = "https://www.youtube.com/watch?v=tbnLqRW9Ef0";

interface DownloadPluginProps {
  getData: (pushData: any) => void;
  getErrorStatus: (error: any) => void;
  getLoadingStatus: (loading: boolean) => void;
}

const DownloadPlugin = (props: DownloadPluginProps) => {
  const userInputRef = useRef<HTMLInputElement>();
  const [userInputLink, setUserInputLink] = useState<string>("");
  const [dataFromYT, setDataFromYT] = useState<any>(null);
  const [inputError, setInputError] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);

  const handleDownload = async (incomingURL: string) => {
    setIsLoading(true);
    try {
      const data: any = await axios.get(`/api/download?url=${incomingURL}`);
      setDataFromYT(data);
      props.getData(data); // Lifting Data up
      setIsLoading(false);
    } catch (error: any) {
      console.log(error, "Error FrontEnd");
      props.getErrorStatus(error); // Catching Error For API Call...!
      setIsLoading(false);
      // if (error.response.status === 500) {
      //   alert("Please Enter Correct Youtube URL");
      // }
      // if (error.response.status === 405) {
      //   alert("Bad Request Broo..!");
      // }
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

  useEffect(() => {
    props.getLoadingStatus(loading);
  }, [loading, props]);

  return (
    <>
      <Box mt={8} mb={1} border={0}>
        <FormControl fullWidth sx={{ m: 1, color: "white", borderColor: "white" }} error={inputError}>
          <Stack direction="row" spacing={1}>
            <InputLabel htmlFor="outlined-adornment-amount">Link</InputLabel>
            <OutlinedInput
              inputProps={{ style: { color: "white" } }}
              placeholder="Please paste the url to download"
              inputRef={userInputRef}
              onBlur={onBlurHandler}
              sx={{
                width: 4 / 5,
                color: "white",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              }}
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <AddLink sx={{ color: "white" }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onBackSpaceClickHandler}>
                    <Backspace sx={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              }
              label="Amount"
            />
            {/* <Button variant="contained" onClick={onStartClickHandler} sx={{ bgcolor: "white", color: "primary.main" }}>
              Start Download
            </Button> */}
            <LoadingButton
              onClick={onStartClickHandler}
              loading={loading}
              sx={{ bgcolor: "white", color: "primary.main" }}
              variant="outlined"
            >
              <span>Start Download</span>
            </LoadingButton>
          </Stack>
        </FormControl>
      </Box>
      {/* <Box>
        {loading ? (
          <Paragraph>Loading....!</Paragraph>
        ) : (
          dataFromYT?.data.info.map((formatName: any, index: any) => (
            <SingleVideoCard formatName={formatName} key={index} />
          ))
        )}
      </Box> */}
    </>
  );
};

export default DownloadPlugin;
