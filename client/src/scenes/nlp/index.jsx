import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useGetNlpQuery } from "state/api";
import { DownloadOutlined } from "@mui/icons-material";
import Stat from "components/Stat";
import TaskIcon from "@mui/icons-material/Task";

const Nlp = () => {
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetNlpQuery();
  console.log("nlp", data);
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Nlp Processing" subtitle="Nlp Tokenization" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridAutoRows="80px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Stat
          title="TokenTypes"
          value="Token"
          increase="Completed"
          description=""
          icon={
            <TaskIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {data && (
          <Typography variant="h4" sx={{ color: theme.palette.secondary[100] }}>
            {`${data.tokenType}`}
          </Typography>
        )}
      </Box>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridAutoRows="80px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Stat
          title="Entities"
          value="Entity"
          increase="Completed"
          description=""
          icon={
            <TaskIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {data && (
          <Typography variant="h4" sx={{ color: theme.palette.secondary[100] }}>
            {`${data.entities}`}
          </Typography>
        )}
      </Box>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridAutoRows="80px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Stat
          title="Sentences"
          value="Lines"
          increase="Completed"
          description=""
          icon={
            <TaskIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {data && (
          <Typography variant="h4" sx={{ color: theme.palette.secondary[100] }}>
            {`${data.sentences}`}
          </Typography>
        )}
      </Box>
      {/* <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridAutoRows="80px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Stat
          title="Tokens"
          value="Tokens"
          increase="Completed"
          description=""
          icon={
            <TaskIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {data && (
          <Typography variant="h4" sx={{ color: theme.palette.secondary[100] }}>
            {`${data.tokens}`}
          </Typography>
        )}
      </Box> */}
    </Box>
  );
};

export default Nlp;
