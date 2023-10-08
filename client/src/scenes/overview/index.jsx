import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  laws,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import { useGetAllCasesQuery } from "state/api";

const OverviewIndividual = ({
  caseId,
  name,
  location,
  issues,
  laws,
  lawType,
  courtType,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {lawType}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          Issues Involved: {Number(issues)}
        </Typography>
        <laws value={laws} readOnly />

        <Typography variant="body2">{location}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {caseId}</Typography>
          <Typography>courtType: {courtType}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Overview = () => {
  const { data, isLoading } = useGetAllCasesQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  console.log("data1", data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CASES" subtitle="Keep Track of your Cases" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? "span 4" : "span 4" },
          }}
        >
          {data.map(
            ({ caseId, name, location, issues, laws, lawType, courtType }) => (
              <OverviewIndividual
                key={caseId}
                caseId={caseId}
                name={name}
                location={location}
                issues={issues}
                laws={laws}
                lawType={lawType}
                courtType={courtType}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Overview;
