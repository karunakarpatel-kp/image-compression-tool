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
import { useDispatch, useSelector } from "react-redux";
import { sendDataFromYT, sendInputURL, sendLoadingStatus, sendServiceError } from "store/utilitySlice";
import { AppDispatch, RootState } from "store/centralStore";
import { callYTAPIService } from "store/YTAPISlice";

const sampleVideURL = "https://www.youtube.com/watch?v=tbnLqRW9Ef0";

const DownloadPlugin: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInputRef = useRef<HTMLInputElement>();

  const getLoadingStatus = useSelector((state: RootState) => state.YTAPISlice.status);

  const [userInputLink, setUserInputLink] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const handleDownload = async (incomingURL: string) => {
    dispatch(callYTAPIService(incomingURL));

    // dispatch(sendLoadingStatus(true));
    // try {
    //   const data: any = await axios.get(`/api/download?url=${incomingURL}`);
    //   dispatch(sendDataFromYT(data));
    //   dispatch(sendLoadingStatus(false));

    //   dispatch(sendServiceError(null));
    // } catch (error: any) {
    //   dispatch(sendServiceError(error));
    //   dispatch(sendDataFromYT(null));
    //   dispatch(sendLoadingStatus(false));
    // }
  };

  const onStartClickHandler = () => {
    const captureUserInput = userInputRef.current!.value;
    if (captureUserInput.length === 0 && captureUserInput === "") {
      setInputError(true);
    } else {
      setInputError(false);
      setUserInputLink(captureUserInput);
      dispatch(sendInputURL(captureUserInput));
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
              loading={getLoadingStatus === "PENDING" && true}
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
