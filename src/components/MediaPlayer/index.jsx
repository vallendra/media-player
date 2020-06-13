import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "151px",
    objectFit: "cover",
    float: "right",
    marginLeft: "auto",
  },
  controls: {
    display: "flex",
    minWidth: "50vw",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function MediaControlCard({
  name,
  artistName,
  thumbnailSrc,
  songSrc,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {artistName}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={thumbnailSrc}
          component="img"
        />
      </Card>
      <div style={{marginTop: '10px'}}>
          {/* Kita gunakan <audio /> untuk memainkan musik kita */}
          {/* Challenge: Bagaimana kalau kita ingin gunakan player custom? */}
        <audio src={songSrc} controls style={{ width: "100%" }} />
      </div>
    </div>
  );
}
