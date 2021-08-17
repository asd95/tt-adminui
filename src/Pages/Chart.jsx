import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import Menu from "../Components/Menu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CustomChart from "../Components/CustomChart";
import SimpleCard from '../Components/Card'
import BasicTable from "../Components/Table";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "0 1em",
      marginTop: "1em",
    },
    flexContainer: {
      display: "flex",
      padding: "0 3rem",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      marginBottom: "2em",
    },
    container: {
      marginBottom: "2.5em",
    },
    flexChart: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: ".5em",
    },
  };
});

const rows = [
  {
    date: "01/08/2020",
    totalUser: "79",
    uniqueUsers: "11",
  },
  {
    date: "02/08/2020",
    totalUser: "100",
    uniqueUsers: "32",
  },
  {
    date: "03/08/2020",
    totalUser: "58",
    uniqueUsers: "05",
  },
  {
    date: "04/08/2020",
    totalUser: "44",
    uniqueUsers: "22",
  },
];
const tableHead = [
  "Data",
  "Numar utilizatori total",
  "Numar utilizatori unici",
];

const Chart = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flexContainer}>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          style={{ color: "#fff" }}
        >
          Configura Raport
        </Button>

        <Menu />
      </div>

      <div className={classes.container}>
        <SimpleCard />
      </div>

      <Card className={classes.container}>
        <CardContent>
          <div className={classes.flexChart}>
            <Typography
              gutterBottom
              variant="body2"
              component="h6"
              style={{ fontWeight: "bold" }}
            >
              Numar de utilizatori
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="h6"
              style={{ fontWeight: "bold" }}
            >
              23 Aug - 21 Sep
            </Typography>
          </div>
          <CustomChart />
        </CardContent>
      </Card>
      <div className={classes.container}>
        <BasicTable rows={rows} tableHead={tableHead} />
      </div>
    </div>
  );
};

export default Chart;
