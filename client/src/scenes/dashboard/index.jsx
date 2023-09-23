import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
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
import { useGetAllCasesQuery, useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';

const Dashboard  = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  //const { data, isLoading } = useGetDashboardQuery();
  const {data} = useGetAllCasesQuery();

  const chartSetting = {
    xAxis: [
      {
        label: 'Hearings(3.33 Hours)',
      },
    ],
    width: 650,
    height: 400,
  };
  const dataset = [
    {
      london: 59,
      paris: 5,
      newYork: 86,
      seoul: 3,
      month: 'GCD',
    },
    {
      london: 50,
      paris: 9,
      newYork: 78,
      seoul: 5,
      month: 'MAC',
    },
    {
      london: 47,
      paris: 7,
      newYork: 106,
      seoul: 4.5,
      month: 'EWS',
    },
    {
      london: 54,
      paris: 10,
      newYork: 92,
      seoul: 7.5,
      month: 'SMSC',
    },
    // },
    // {
    //   london: 57,
    //   paris: 9,
    //   newYork: 92,
    //   seoul: 7,
    //   month: 'May',
    // },
    // {
    //   london: 60,
    //   paris: 10,
    //   newYork: 103,
    //   seoul: 8,
    //   month: 'June',
    // },
    // {
    //   london: 59,
    //   paris: 11,
    //   newYork: 105,
    //   seoul: 9,
    //   month: 'July',
    // },
    // {
    //   london: 65,
    //   paris: 12,
    //   newYork: 106,
    //   seoul: 10,
    //   month: 'Aug',
    // },
    // {
    //   london: 51,
    //   paris: 13,
    //   newYork: 95,
    //   seoul: 11,
    //   month: 'Sept',
    // },
    // {
    //   london: 60,
    //   paris: 14,
    //   newYork: 97,
    //   seoul: 13,
    //   month: 'Oct',
    // },
    // {
    //   london: 67,
    //   paris: 15,
    //   newYork: 76,
    //   seoul: 14,
    //   month: 'Nov',
    // },
    // {
    //   london: 61,
    //   paris: 16,
    //   newYork: 103,
    //   seoul: 15,
    //   month: 'Dec',
    // },
  ];
  const chartSetting1 = {
    yAxis: [
      {
        label: 'Pending Cases',
      },
      
    ],
    width: 700,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'rotate(-90deg) translate(0px, -20px)',
      },
    },
  };
  const dataset1 = [
    {
      london: 55,
      paris: 42,
      newYork: 280,
      seoul: 21,
      month: '2010',
    },
    {
      london: 59,
      paris: 43,
      newYork: 270,
      seoul: 28,
      month: '2011',
    },
    {
      london: 67,
      paris: 44,
      newYork: 270,
      seoul: 41,
      month: '2012',
    },
    {
      london: 66,
      paris: 45,
      newYork: 270,
      seoul: 73,
      month: '2013',
    },
    {
      london: 63,
      paris: 41,
      newYork: 260,
      seoul: 99,
      month: '2014',
    },
    {
      london: 59,
      paris: 39,
      newYork: 280,
      seoul: 144,
      month: '2015',
    },
    {
      london: 63,
      paris: 40,
      newYork: 280,
      seoul: 319,
      month: '2016',
    },
    {
      london: 56,
      paris: 42,
      newYork: 290,
      seoul: 249,
      month: '2017',
    },
    {
      london: 57,
      paris: 44,
      newYork: 300,
      seoul: 131,
      month: '2018',
    },
    {
      london: 60,
      paris: 47,
      newYork: 320,
      seoul: 55,
      month: '2019',
    },
    {
      london: 65,
      paris: 56,
      newYork: 370,
      seoul: 48,
      month: '2020',
    },
    {
      london: 70,
      paris: 56,
      newYork: 400,
      seoul: 25,
      month: '2021',
    },
    {
      london: 75,
      paris: 58,
      newYork: 450,
      seoul: 25,
      month: '2022',
    },
    {
      london: 80,
      paris: 60,
      newYork: 480,
      seoul: 25,
      month: '2023',
    },
  ];

  const valueFormatter1 = (value) => `${value}Ths`;
  const valueFormatter2 = (value) => `${value}Lks`;
  const valueFormatter3 = (value) => `${value}Lks`;
  
  console.log("length");
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  //console.log("dashboard",data);
  console.log("allcases",data)
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

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
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Cases Filled"
          value="4"
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Pending Cases"
          value="0"
          increase="+21%"
          description="DCM Expected time"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <BarChart
      dataset={dataset1}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'Supreme', valueFormatter1 },
        { dataKey: 'paris', label: 'High', valueFormatter1 },
        { dataKey: 'newYork', label: 'Subordinate', valueFormatter1 },
        // { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting1}
    />
        </Box>
        <StatBox
          title="Hard Cases"
          value="2"
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Intermediate Cases"
          value="3"
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        {/* <StatBox
          title="Easy Cases"
          value="3"
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        /> */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          {/* <DataGrid
            loading={!data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          /> */}
          <Box
        mt="1px"
        
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridAutoRows="160px"
        gap="10px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 20" },
        }}
      >
        <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Allocated' },{ dataKey: 'paris', label:'Actual Time'}]}
      layout="horizontal"
      {...chartSetting}
    />
      </Box>
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          mt="20px"
          
          backgroundColor={theme.palette.background.alt}
          p="0rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h4" sx={{ color: theme.palette.secondary[100] }}>
            Cases By Category
          </Typography>
          {/* <BreakdownChart isDashboard={true} /> */}
          <PieChart
        colors={['cyan', `#008080`, `#DDFF94`]}
      series={[
        { 
          data: [
            { id: 0, value: 10, label: 'Criminal' },
            { id: 1, value: 15, label: 'Civil' },
            { id: 2, value: 20, label: 'Family' },
          ],
          
        },
      ]}
      width={400}
      height={200}
    />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of all Cases and information via category for productivity.
          </Typography>
        </Box>
        </Box>
      </Box>
  )
}

export default Dashboard 