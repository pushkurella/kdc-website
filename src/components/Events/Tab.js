import React from 'react';
import { AppBar, Tab, Tabs, Box, Typography, makeStyles } from '@material-ui/core'
import './Tab.css'

const TabTitleArray = [
  "Incubator Days", "Olympics", "Team Building", "Team Lunches",
];

const TabPanelArray = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  "Item Two",
  "Item Three",
  "Item Four",
]

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
  
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
  
const Info = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabComponent">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs 
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className="tabBar"
            centered
          >
            {TabTitleArray.map((tabTitle, index) => (
              <Tab label={tabTitle} {...a11yProps(index)}/>
            ))}
          </Tabs>
        </AppBar>
        {TabPanelArray.map((tabInfo, index) => (
          <TabPanel value={value} index={index}>
            {tabInfo}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

export default Info;