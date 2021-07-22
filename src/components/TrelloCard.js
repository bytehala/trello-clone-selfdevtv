import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TrelloCard = ({ text }) => {
  const classes = useStyles();
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TrelloCard;
