import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Audio.scss";

const Audio = React.forwardRef(({ data, onEnded }, ref) => {
  return (
    <div
      id={data.id || 'audio-wrapper'}
      className={`audio-panel ${data ? data.classNames : ""}`}
      style={data ? data.style : {}}
      >
      <AudioPlayer
        ref={ref}
        autoPlay
        autoPlayAfterSrcChange
        src={data ? `${process.env.PUBLIC_URL}${data.url}` : null}
        onEnded={onEnded}
        // onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
});

export default Audio;
