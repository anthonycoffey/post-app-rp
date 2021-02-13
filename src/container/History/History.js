import React, { useEffect, useState } from "react";
import { TweenMax } from "gsap";
import Audio from "../../components/Audio/Audio";
import Video from "../../components/Video/Video";
import Slide from "./components/Slide/Slide";
import Slide2 from "./components/Slide2/Slide2";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./History.scss";

const maxes = [];

const History = ({ data }) => {
  const [revealItems, setRevealItem] = useState([]);
  const [revealIndex, setRevealIndex] = useState(-1);
  const audioRef = React.createRef();
  const [audio, setAudio] = useState("");
  const [finishedItems, setFinished] = useState(0);
  const [videoPlaying, setVidePlaying] = useState(false);
  useEffect(() => {
    // playSequence();
    setRevealItem(data.items);
    setAudio(data.initialAudio);
    return () => {
      maxes.forEach((max) => {
        max.kill();
      });
    };
  }, [data]);

  const handleReveal = (revealIndex, currentIndex) => {
    setRevealIndex(currentIndex);
    const temp = revealItems.slice();
    temp[currentIndex].watched = true;
    setRevealItem(revealItems);
    if (currentIndex === 0) {
      setVidePlaying(true);
    }
    setAudio("");
  };
  const onVideoEnded = () => {
    setRevealIndex(-1);
    setFinished(finishedItems + 1);
  };

  const renderItem = () => {
    if (revealIndex === -1) {
      TweenMax.to(".audio-panel", 0.5, {
        display: "block",
      });
      return revealItems.map((item, index) => (
        <div
          className={`history-reveal-item ${item.classNames || ""}`}
          key={index}
          onClick={() => handleReveal(item.pageIndex, index)}
        >
          <img src={item.image.url} alt="" style={item.style || {}} />
          {item.watched ? (
            <div
              className={`watched-wrapper absolute md:w-12 lg:w-20 md:h-12 lg:h-20 ${
                index === 1
                  ? "md:right-10 lg:right-12 top-6"
                  : index === 2
                  ? "top-12 right-0"
                  : "md:top-0 lg:-top-4 right-12"
              }`}
            >
              <img className="watched" src={data.watchedImage} alt="" />
            </div>
          ) : null}
        </div>
      ));
    } else if (revealIndex === 0) {
      TweenMax.to(".audio-panel", 0.5, {
        display: "none",
      });
      return (
        <Video
          data={revealItems[revealIndex].videoContent}
          key="reveal-0"
          onEnded={onVideoEnded}
          playing={videoPlaying}
        />
      );
    } else if (revealIndex === 1) {
      TweenMax.to(".audio-panel", 0.5, {
        display: "none",
      });
      return (
        <Slide
          data={revealItems[revealIndex].slideContent}
          goToNextReveal={onVideoEnded}
        />
      );
    } else if (revealIndex === 2) {
      TweenMax.to(".audio-panel", 0.5, {
        display: "none",
      });
      return (
        <Slide2
          data={revealItems[revealIndex].slideContent}
          goToNextReveal={onVideoEnded}
        />
      );
    }
  };
  return (
    <div className={`${data.classNames || ""}`} style={data.style || {}}>
      <Audio
        data={{
          ...data.audio,
          url: audio,
        }}
        ref={audioRef}
      />
      {renderItem()}
      {finishedItems === 3 ? (
        <div className="absolute bottom-12 history-action-wrapper">
          <CustomButton data={{ title: "Done", action: "goToMenu" }} />
        </div>
      ) : null}
    </div>
  );
};

export default History;