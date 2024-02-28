import classes from "./superMenu.module.css";
import SuperMenuHeart from "./SuperMenuHeart";
import SuperMBooks from "./SuperMBooks";
import Collectible from "./Collectible";
import MoviesTv from "./MoviesTv";
import Music from "./Music";
import VideoGames from "./VideoGames";
import Gifts from "./Gifts";
import Blog from "./Blog";

const SuperMenu = () => {
  return (
    <div className={classes.SuperMenu}>
      <SuperMenuHeart />
      <SuperMBooks />
      <Collectible />
      <MoviesTv />
      <Music />
      <VideoGames />
      <Gifts />
      <Blog />
    </div>
  );
};

export default SuperMenu;
