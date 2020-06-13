import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { songContext } from "../../context";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PlayIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "20px",
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

export default function TrackCard({
  name,
  artistName,
  thumbnailSrc,
  trackId,
  songSrc,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { setCurrentSong } = useContext(songContext);

  const handlePlay = () => {
    setCurrentSong({ name, artistName, thumbnailSrc, trackId, songSrc });
  };
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {artistName}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PlayIcon />}
            onClick={() => handlePlay()}
            component={Link}
            to="/playing"
          >
            Play
          </Button>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={thumbnailSrc} />
    </Card>
  );
}
