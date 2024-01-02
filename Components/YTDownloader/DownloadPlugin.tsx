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
      <Box mt={8} mb={1} border={0} borderColor="white">
        <FormControl fullWidth sx={{ m: 1, color: "white" }} error={inputError}>
          <Stack direction={{ xs: "column", sm: "column", md: "row", lg: "row" }} spacing={2} width="100%">
            {/* <InputLabel htmlFor="outlined-adornment-amount">Link</InputLabel> */}
            <OutlinedInput
              inputProps={{
                style: {
                  color: "white !important",
                  outlineColor: "white",
                  borderColor: "white",
                  WebkitBoxShadow: "0 0 0 1000px #36106A inset",
                },
              }}
              placeholder="Please paste the url to download"
              inputRef={userInputRef}
              onBlur={onBlurHandler}
              autoComplete="false"
              sx={{
                width: { xs: 5 / 5, sm: 5 / 5, md: 5 / 5, lg: 5 / 5 },
                color: "white",
                "&.MuiInputBase-root.MuiOutlinedInput-root": { border: "1px solid white" },
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
            <LoadingButton
              onClick={onStartClickHandler}
              loading={getLoadingStatus === "PENDING" && true}
              disableRipple
              disableElevation
              disableFocusRipple
              sx={{
                bgcolor: "white",
                color: "primary.main",
                width: 2 / 5,
                "&.MuiButton-root.MuiLoadingButton-root:hover": { backgroundColor: "white" },
              }}
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
