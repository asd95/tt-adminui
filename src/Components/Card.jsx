import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  title: {
    fontWeight: "bold",
  },
  activeNumber: {
      fontSize: '1.7rem',
      fontWeight: 500
  }
});

export default function SimpleCard({cardData}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="body2"
          component="h6"
        >
          Instalari pe dispozitive active
        </Typography>

        <Typography variant="body2" component="p">
          <Typography className={classes.activeNumber} component="span">
            {!cardData ? null : cardData.instActive}
          </Typography>{" "}
          {cardData.percent}% vs previous 30days
        </Typography>
      </CardContent>
    </Card>
  );
}
