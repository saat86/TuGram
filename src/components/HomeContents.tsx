import React from "react";
import { Box } from "@mui/material";
import HomeStories from "./HomeStories";
import HomePostsDisplay from "./HomePostsDisplay";
type Props = {};

function HomeContents({}: Props) {
  return (
    <Box
      sx={{
        margin: "10px 30px 0px 30px",
      }}
    >
      <Box sx={{overflow:'auto'}} >
        <HomeStories />
      </Box>
      <Box>
        <HomePostsDisplay />
      </Box>
    </Box>
  );
}

export default HomeContents;
