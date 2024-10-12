import { Button } from "@mui/material";
import { motion } from "framer-motion";
// import React from "react";

const MotionButton = motion.create(Button);

const StyledButton = ({ children, ...rest }) => {
  return (
    <MotionButton {...rest} variant="contained" color="primary">
      {children}
    </MotionButton>
  );
};

export default StyledButton;
