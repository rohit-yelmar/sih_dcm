import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const Stat = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 1"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h3" fontWeight="600" sx={{ color: theme.palette.secondary[200] }}>
          Case Name:{title}
        </Typography>
        <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        Case Type:{value}
      </Typography>
        {icon}

      </FlexBetween>

      
      <FlexBetween gap="1rem">
        <Typography
          variant="h3"
          
          sx={{ color: theme.palette.secondary.dark }}
        >
          Status:{increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default Stat;
