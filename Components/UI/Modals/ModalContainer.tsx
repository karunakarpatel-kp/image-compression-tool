import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HeadingSix from "@Components/Elements/Headings/HeadingSix";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { setOpenModal } from "store/utilitySlice";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { Close, CloseOutlined } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 1,
};

const ModalContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const openModalStatus = useSelector((state: RootState) => state.utilitySlice.openModal);
  const getVideoURL = useSelector((state: RootState) => state.utilitySlice.videoURL);
  const [showMessage, setShowMessage] = React.useState<boolean>(false);

  const handleClose = () => {
    dispatch(setOpenModal(false));
  };

  const onCloseBtnClickHandler = () => {
    dispatch(setOpenModal(false));
  };

  const onDownloadClickHandler = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    if (openModalStatus) {
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  }, [openModalStatus]);

  return (
    <Modal
      open={openModalStatus}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      // sx={{ width: 600 }}
    >
      <Box sx={style} width={{ xs: 380, sm: 350, md: 650, lg: 650 }}>
        <Button
          variant="contained"
          sx={{ position: "absolute", right: 10 }}
          onClick={onCloseBtnClickHandler}
          endIcon={<CloseOutlined />}
        >
          Close
        </Button>
        <HeadingSix title="Download the video " />
        <Box sx={{ textAlign: "center" }}>
          {/* Mobile Devices */}
          <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
            <iframe src={getVideoURL} width={350} height={250} allowFullScreen />
          </Box>

          {/* Desktop Devices */}
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            <iframe src={getVideoURL} width={600} height={300} allowFullScreen />
          </Box>

          {!showMessage && (
            <Button
              variant="contained"
              onClick={onDownloadClickHandler}
              sx={{ mt: 2, mb: 2, width: "70%" }}
              disableElevation
            >
              Download Video
            </Button>
          )}
        </Box>

        {showMessage && (
          <Alert severity="success">
            <AlertTitle>Click on the more icon in iframe video</AlertTitle>
            Click on more icon in the iframe video and you may be able to download the whole video at once...!
          </Alert>
        )}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
