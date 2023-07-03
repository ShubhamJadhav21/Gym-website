import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MyAccount from "../../pages/MyAccount/MyAccount";
import style from "./Modal.module.css";

const MyModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={style.box}>
        <div>
          <MyAccount />
        </div>
      </Box>
    </Modal>
  );
};

export default MyModal;
