import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  CompressOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Stat from "components/Stat";
import { useSelector } from "react-redux";
import {useGetCasesQuery} from "state/api"
import { PieChart } from '@mui/x-charts/PieChart';



const CaseOverview = () => {
  const theme = useTheme();
  const caseId = useSelector((state)=>state.global.caseId);
  console.log("caseoverview caseId",caseId)
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data,isLoading} = useGetCasesQuery(caseId);


  
  
  



  const dcm = (data) =>{
    const lawType = data[0].lawType;
    const name = data[0].name;
    const complexity_score = parseInt(data[0].issues) + parseInt(data[0].laws) + parseInt(data[0].precedents);
    var case_category = "";
    var complexity_coefficient = 0;
    if(complexity_score>6){
      case_category = "Hard";
      complexity_coefficient = 2;
    }
    else if(4<complexity_score&&complexity_score<=6){
      case_category = "Intermediate";
      complexity_coefficient = 1.5;
    }
    else{
      case_category = "Standard";
      complexity_coefficient = 1;
    }
    const good_advocate_ratio = 0.45;
    const hearing_to_hours = 3.33;

    const hearings = good_advocate_ratio * (parseInt(data[0].petitioners)+parseInt(data[0].respondents)) * complexity_coefficient;
    const hours = hearings * hearing_to_hours;
    const petitioner_hearings = good_advocate_ratio * (parseInt(data[0].petitioners)) * complexity_coefficient;
    const respondent_hearings = good_advocate_ratio * (parseInt(data[0].respondents)) * complexity_coefficient;
    
    return [complexity_score, case_category, complexity_coefficient,hearings,hours,petitioner_hearings,respondent_hearings,lawType,name];
  }
  
  let result =[7];
  if(data && data[0]) {
  console.log("caseData",data)
  result = dcm(data);
  console.log('result:', result);
  }
  else{
    result = [];
  }

  
  

  

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
          increase="Pending"
          description="Since last month"
          icon={
            <PersonAdd
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
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Expected Hearings"
          value={result[3]}
          increase="+21%"
          description="DCM Expected time"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <PieChart
        colors={['cyan', `#008080`, `#DDFF94`]}
      series={[
        { 
          data: [
            { id: 0, value:`${result[5]*10}`, label: 'Petitioner' },
            { id: 1, value:`${result[6]*10}`, label: 'Respondent' },
            { id: 2, value: 20, label: 'Pre-Hearing' },
          ],
          
        },
      ]}
      width={400}
      height={200}
    />
        <StatBox
          title="Petitioner Hearings"
          value={result[5]}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Respondent Hearings"
          value={result[6]}
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        

      </Box>
      
      
      </Box>
      
  )
}

export default CaseOverview;