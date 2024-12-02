'use client'
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

interface EmployeeData {
    details:string;
    leaves:string;
    tasks:string;
    attendence:string;
}

interface TabPanelProps {
  children?: JSX.Element;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
   // const { children, value, index, ...other } = props; //props destructuring
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
      {...props}
    >
      {props.value === props.index && <Box sx={{ p: 3 }}>{props.children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Example data for employees
// const employeeData: Record<string, { details: string; leaves: string; tasks: string }> = {
const employeeData: {[email:string]:EmployeeData} ={
  "arul@gmail.com": {
    details: "Arul is working as a Software Engineer.",
    leaves: "Arul has taken 2 leaves.",
    tasks: "Arul's tasks include project development and debugging.",
    attendence:"Arul Have 80% Attendence",
  },
  "santhosh@gmail.com": {
    details: "Santhosh is working as a Project Manager.",
    leaves: "Santhosh has taken 1 leave.",
    tasks: "Santhosh's tasks include project management and team coordination.",
    attendence:"Santhosh Have 90% Attendence",
  },
  "dhanush@gmail.com": {
    details: "Dhanush is a UI/UX Designer.",
    leaves: "Dhanush has taken 3 leaves.",
    tasks: "Dhanush's tasks include designing user interfaces and user research.",
    attendence:"Dhanush Have 60% Attendence",
  },
  // Add more employees as needed...
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEmployeeClick = (email: string) => {
    setSelectedEmployee(email);
    setValue(0); // Reset to the first tab when switching employees
  };

  const emailData: string[] = [
    "arul@gmail.com",
    "santhosh@gmail.com",
    "dhanush@gmail.com",
    "arul1@gmail.com",
    "santhosh1@gmail.com",
    "dhanush1@gmail.com",
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Employee Detail Page</h1>
      <Container sx={{ display: "flex", justifyContent: "space-between", overflow: "auto" }}>
        <Box sx={{ width: "30%" }}>
            <div style={{borderRight:"2px solid black", height:"600px"}}>
          <h2>Employee Email</h2>
          {emailData.map((item) => (
            <h4 key={item} onClick={() => handleEmployeeClick(item)} style={{ cursor:"pointer",overflow:"hidden",margin:"10px" }}>
              {item}
            </h4>
            
          ))}
          </div>
        </Box>

        <Box sx={{ width: '70%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="employee tabs">
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Leaves" {...a11yProps(1)} />
              <Tab label="Tasks" {...a11yProps(2)} />
              <Tab label="attendence" {...a11yProps(3)} />
            </Tabs>
          </Box>

          {selectedEmployee && employeeData[selectedEmployee] && (
            <>
              <CustomTabPanel value={value} index={0}>
                <div>{employeeData[selectedEmployee].details} </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div>{employeeData[selectedEmployee].leaves} </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div>{employeeData[selectedEmployee].tasks}</div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <div>{employeeData[selectedEmployee].attendence}</div>
              </CustomTabPanel>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}
