import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import Menu from "../Components/Menu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CustomChart from "../Components/CustomChart";
import SimpleCard from "../Components/Card";
import BasicTable from "../Components/Table";
import { withService } from "../HOC/with-service";
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
const tableHead = [
  "Data",
  "Numar utilizatori total",
  "Numar utilizatori unici",
];
const Chart = ({ service }) => {
  const classes = useStyles();
  const [monitoringData, setMonitoringData] = useState({});
  const [dateRange, setDateRange] = useState(null);
  const onDateRange = (dateRange) => {
    setDateRange(dateRange);
  };

  // обновление каждые 10 секунд
  useEffect(() => {
    const seti = setInterval(
      () =>
        service
          .getMonitoringData(null)
          .then((fetchData) => setMonitoringData(fetchData)),
      10000
    );
    return () => clearInterval(seti);
  }, [dateRange, service]);
  // обновление состояние страницы при выборе диапазона между двумя датами
  useEffect(() => {
    let canceled = false;
    service
      .getMonitoringData(dateRange)
      .then((fetchData) => !canceled && setMonitoringData(fetchData));
    return () => (canceled = true);
  }, [dateRange, service]);
  // Каждые 25 секунд добавляется новые данные для поля мониторинга в файле mock-data.json
  // сделал для того чтобы иммитировать загрузок за день
  useEffect(() => {
    const seti = setInterval(() => service.postNewData(), 25000);
    return () => clearInterval(seti);
  }, []);
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

        <Menu
          onDateRange={onDateRange}
          monitoringData={monitoringData}
        />
      </div>

      {monitoringData.arr && (
        <React.Fragment>
          <div className={classes.container}>
            <SimpleCard cardData={monitoringData} />
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
                  {`${monitoringData.sd} - ${monitoringData.ed}`}
                </Typography>
              </div>
              <CustomChart dataChart={monitoringData.arr} />
            </CardContent>
          </Card>
          <div className={classes.container}>
            <BasicTable rows={monitoringData.arr} tableHead={tableHead} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default withService()(Chart);
