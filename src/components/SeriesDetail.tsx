import React, { useContext } from "react";
import Youtube from "react-youtube";
import { Store } from "../context/Store";

export default function SeriesDetail() {
  const { state } = useContext(Store);
  console.log(state.currentMovie)
  const onReady = (event: any) => {
    event.target.playVideo();
  };
  return (
    <div>
      <Youtube
        videoId={state.currentMovie.youtubeId}
        opts={{
          height: "500",
          width: "750",
          // https://developers.google.com/youtube/player_parameters
          playerVars: { autoplay: 0, controls: 2, fs: 0, iv_load_policy:3, modestbranding:1, rel:0,},
        }}
        onReady={onReady}
      />
    </div>
  );
}
