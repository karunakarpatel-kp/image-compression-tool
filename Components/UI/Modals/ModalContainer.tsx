import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import HeadingSix from "@Components/Elements/Headings/HeadingSix";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { setOpenModal } from "store/utilitySlice";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const ModalContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const openModalStatus = useSelector((state: RootState) => state.utilitySlice.openModal);
  const handleClose = () => {
    dispatch(setOpenModal(false));
  };
  const onCloseBtnClickHandler = () => {
    dispatch(setOpenModal(false));
  };
  return (
    <Modal
      open={openModalStatus}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ position: "relative" }}
    >
      <Box sx={style}>
        <Button variant="contained" sx={{ position: "absolute", right: 10 }} onClick={onCloseBtnClickHandler}>
          Close
        </Button>
        {/* <IconButton onClick={onCloseBtnClickHandler} sx={{ position: "absolute", right: 10 }}>
          <Close />
        </IconButton> */}
        <HeadingSix title="Download the video " />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel sit cum aperiam inventore tenetur
          temporibus quo porro! Amet porro ducimus sed, illo rem sapiente eveniet obcaecati quia voluptatem magnam!
        </Paragraph>
      </Box>
    </Modal>
  );
};

export default ModalContainer;