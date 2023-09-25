import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DownloadOutlined } from "@mui/icons-material";
import ClassIcon from "@mui/icons-material/Class";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import GroupIcon from "@mui/icons-material/Group";

import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";

import StatBox from "components/StatBox";
import Stat from "components/Stat";
import { useSelector } from "react-redux";
import { useGetCasesQuery } from "state/api";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const CaseOverview = () => {
  const theme = useTheme();
  const caseId = useSelector((state) => state.global.caseId);
  console.log("caseoverview caseId", caseId);
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetCasesQuery(caseId);

  const chartSetting = {
    xAxis: [
      {
        label: "Time(minutes)",
      },
    ],
    width: 650,
    height: 400,
  };
  const dataset = [
    {
      london: 59,
      paris: 226,
      newYork: 86,
      seoul: 740,
      month: "Sibal",
    },
    {
      london: 50,
      paris: 336,
      newYork: 78,
      seoul: 626,
      month: "Singhvi&Kamat",
    },
    {
      london: 47,
      paris: 220,
      newYork: 106,
      seoul: 698,
      month: "Kaul",
    },

    {
      london: 54,
      paris: 0,
      newYork: 92,
      seoul: 68,
      month: "Salvi",
    },
    {
      london: 54,
      paris: 109,
      newYork: 92,
      seoul: 237,
      month: "Jeth Malani&Maninder",
    },
    {
      london: 54,
      paris: 114,
      newYork: 92,
      seoul: 274,
      month: "Mehta",
    },
  ];

  const dcm = (data) => {
    const lawType = data[0].lawType;
    const name = data[0].name;
    const complexity_score =
      parseInt(data[0].issues) +
      parseInt(data[0].laws) +
      parseInt(data[0].precedents);
    var case_category = "";
    var complexity_coefficient = 0;
    if (complexity_score > 6) {
      case_category = "Hard";
      complexity_coefficient = 2;
    } else if (4 < complexity_score && complexity_score <= 6) {
      case_category = "Intermediate";
      complexity_coefficient = 1.5;
    } else {
      case_category = "Standard";
      complexity_coefficient = 1;
    }
    const good_advocate_ratio = 0.45;
    const hearing_to_hours = 3.33;

    const hearings =
      good_advocate_ratio *
      (parseInt(data[0].petitioners) + parseInt(data[0].respondents)) *
      complexity_coefficient;
    const hours = hearings * hearing_to_hours;
    const petitioner_hearings =
      good_advocate_ratio *
      parseInt(data[0].petitioners) *
      complexity_coefficient;
    const respondent_hearings =
      good_advocate_ratio *
      parseInt(data[0].respondents) *
      complexity_coefficient;

    return [
      complexity_score,
      case_category,
      complexity_coefficient,
      hearings,
      hours,
      petitioner_hearings,
      respondent_hearings,
      lawType,
      name,
    ];
  };

  let result = [7];
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  result = dcm(data);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Case Overview" subtitle="DCM processed Data" />

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
          title={result[8]}
          value={result[7]}
          increase="Completed"
          description=""
          icon={
            <TaskIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <StatBox
          title="Case Categorization"
          value={result[1]}
          increase=""
          description={`Most probable Category for: ${result[7]}`}
          icon={
            <ClassIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Expected Hearings"
          value={result[3]}
          increase="+2%"
          description="DCM Expected time"
          icon={
            <OnlinePredictionIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <PieChart
          colors={["cyan", `#008080`, `#DDFF94`]}
          series={[
            {
              data: [
                { id: 0, value: `${result[5] * 10}`, label: "Petitioner" },
                { id: 1, value: `${result[6] * 10}`, label: "Respondent" },
                { id: 2, value: 20, label: "Pre-Hearing" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
        <StatBox
          title="Petitioner Hearings"
          value={result[5]}
          increase="+5 Impact"
          description={`Petitioners: ${parseInt(data[0].petitioners)}`}
          icon={
            <GroupIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Respondent Hearings"
          value={result[6]}
          increase="+4% Impact"
          description={`Respondents: ${parseInt(data[0].respondents)}`}
          icon={
            <GroupIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        mt="1px"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridAutoRows="160px"
        gap="10px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 20",
          },
        }}
      >
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "seoul", label: "Time Taken" },
            { dataKey: "paris", label: "Estimated Time" },
          ]}
          layout="horizontal"
          {...chartSetting}
        />
      </Box>
    </Box>
  );
};

export default CaseOverview;
