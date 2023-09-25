import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Header from "components/Header.jsx";
import Form1 from "./Form.jsx";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const CaseFilling = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Header title="CASE FILING" subtitle="" />
        <PendingActionsIcon
          sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
        />
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Case Filling
        </Typography>
        <Form1 />
      </Box>
    </Box>
  );
};

export default CaseFilling;
