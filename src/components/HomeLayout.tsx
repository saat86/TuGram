import { Box, Container } from "@mui/material";
import React from "react";
import HomeContents from "./HomeContents";
import HomeRightbar from "./HomeRightbar";

type Props = {};

function HomeLayout({}: Props) {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      
      <Box sx={{width:'100%'}}>
        <HomeContents />
      </Box>
      <Box sx={{width:'200px'}}>
        <HomeRightbar />
      </Box>
      
    </Box>
  );
}

export default HomeLayout;
