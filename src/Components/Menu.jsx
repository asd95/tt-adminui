import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    boxShadow: "none",
    backgroundColor: "#d8d8d8",
    position: "relative",
    overflow: "visible",
  },
  dateRange: {
    position: "absolute",
    right: "0",
    zIndex: 1,
  },
  iconWrap: {
    position: "absolute",
    bottom: -2,
    right: 5,
  },
  cardContent: {
    padding: ".3em",
    paddingRight: "5em",
  },
});

export default function SimpleMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  useEffect(() => {
    if (dateRange[0].endDate) {
      setOpen(false);
      setDateRange([
        { startDate: new Date(), endDate: null, key: "selection" },
      ]);
    }
  }, [dateRange]);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => setOpen(!open)}>
        <CardContent className={classes.cardContent}>
          <Typography
            variant="body2"
            component="p"
            style={{ fontSize: "12px" }}
          >
            Last 30 days
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ fontSize: "14px" }}
          >
            17 Aug 2021 - 21 Sep 2021
          </Typography>
          <div className={classes.iconWrap}>
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        </CardContent>
      </CardActionArea>
      {open ? (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          showDateDisplay={false}
          className={classes.dateRange}
          color="#036647"
          rangeColors={["#036647"]}
          retainEndDateOnFirstSelection={true}
        />
      ) : null}
    </Card>
  );
}
