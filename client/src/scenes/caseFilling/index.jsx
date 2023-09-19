import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form1 from "./Form.jsx";

const CaseFilling = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.default}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="secondary">
          CASE FILLING
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.default}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
        CASE FILLING
        </Typography>
        <Form1 />
      </Box>
    </Box>
  );
};

export default CaseFilling;