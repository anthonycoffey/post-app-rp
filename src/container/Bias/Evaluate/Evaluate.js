import React, { useEffect, useState } from "react";
import { TweenMax, TweenLite } from "gsap";
import Audio from "../../../components/Audio/Audio";

import "./Evaluate.scss";

const maxes = [];
const timers = [];
const Evaluate = ({ data }) => {
  const { data: initialData } = data;
  const audioRef = React.createRef();
  const [audio, setAudio] = useState("");
  const [sayingIndex, setSayingIndex] = useState(0);
  const [feedbackIndex, setFeedbackIndex] = useState(-1);

  useEffect(() => {
    setAudio(initialData.initialAudio);
    playSequence();
    return () => {
      maxes.forEach((max) => {
        max.kill();
      });
      timers.forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, [data]);

  const playSequence = () => {
    const max1 = new TweenMax.to(".slide-image-0", 1, {
      opacity: 1,
    }).delay(1.5);
    maxes.push(max1);
    const timer1 = setTimeout(() => {
      setSayingIndex(1);
    }, 9000);
    timers.push(timer1);
    const max2 = TweenMax.to(".slide-image-0", 0.3, {
      opacity: 0,
    }).delay(10);
    maxes.push(max2);
    const max3 = TweenMax.to(".slide-image-1", 0.5, {
      opacity: 1,
    }).delay(10.3);
    maxes.push(max3);
    const timer2 = setTimeout(() => {
      setSayingIndex(2);
    }, 14000);
    timers.push(timer2);

    const timer3 = setTimeout(() => {
      setSayingIndex(3);
    }, 18000);
    timers.push(timer3);
    const max4 = TweenMax.to(".person-0", 0.2, {
      opacity: 0,
    }).delay(18);
    maxes.push(max4);
    const max5 = TweenMax.to(".person-1", 0.5, {
      opacity: 1,
    }).delay(18.2);
    maxes.push(max5);

    const timer4 = setTimeout(() => {
      setSayingIndex(4);
    }, 23000);
    timers.push(timer4);
    const max6 = TweenMax.to(".slide-image-1", 0.2, {
      opacity: 0,
    }).delay(29);
    maxes.push(max6);
    const max7 = TweenMax.to(".slide-image-2", 0.5, {
      opacity: 1,
    }).delay(29.2);
    maxes.push(max7);

    const timer5 = setTimeout(() => {
      setSayingIndex(5);
    }, 33000);
    timers.push(timer5);
    const max8 = TweenMax.to(".slide-image-2", 0.2, {
      opacity: 0,
    }).delay(33);
    maxes.push(max8);
    const max9 = TweenMax.to(".slide-image-3", 0.5, {
      opacity: 1,
    }).delay(33.2);
    maxes.push(max9);
    const max10 = TweenMax.to(".person-1", 0.2, {
      opacity: 0,
    }).delay(33);
    maxes.push(max10);
    const max11 = TweenMax.to(".person-2", 0.5, {
      opacity: 1,
    }).delay(33.2);
    maxes.push(max11);

    const timer6 = setTimeout(() => {
      setSayingIndex(6);
    }, 37000);
    timers.push(timer6);

    const timer7 = setTimeout(() => {
      setSayingIndex(7);
    }, 43000);
    timers.push(timer7);
    const max12 = TweenMax.to(".person-2", 0.2, {
      opacity: 0,
    }).delay(43);
    maxes.push(max12);
    const max13 = TweenMax.to(".person-0", 0.5, {
      opacity: 1,
    }).delay(43.2);
    maxes.push(max13);

    const timer8 = setTimeout(() => {
      setSayingIndex(8);
    }, 51000);
    timers.push(timer8);
  };

  const onAudioEnded = () => {
    if (audio.includes("story")) {
      maxes.forEach((max) => {
        max.kill();
      });
      timers.forEach((timer) => {
        clearTimeout(timer);
      });
      TweenMax.to(".slide-image-wrapper", 0.5, {
        opacity: 0,
      });
      TweenMax.to(".saying-wrapper", 0.5, {
        opacity: 0,
      });
      setAudio(initialData.activityAudio);
      TweenMax.to(".officer-selection-header", 0.5, {
        opacity: 1,
      }).delay(5.5);
      TweenLite.from(".officers-wrapper", 0.5, {
        y: 1100,
      }).delay(5.5);
      TweenMax.to(".officers-wrapper", 0.5, {
        opacity: 1,
      }).delay(5.5);
    }
  };

  const handleFeedbackClick = (itemIndex) => {
    setFeedbackIndex(itemIndex);
  };

  const handleSubmit = () => {
    if (feedbackIndex < 0) {
      return;
    }

    if (feedbackIndex < 2) {
      setAudio(initialData.feedbackAudio2);
      const timer9 = setTimeout(() => {
        setFeedbackIndex(3);
      }, 9000);
      timers.push(timer9);
      TweenMax.to(".evaluate-officer-0", 0.5, {
        opacity: 0,
      }).delay(9);
      TweenMax.to(".evaluate-officer-1", 0.5, {
        opacity: 0,
      }).delay(9);
      TweenMax.to(".evaluate-officer-2", 0.5, {
        opacity: 0,
      }).delay(9);
      TweenMax.to(".submit-button", 0.5, {
        opacity: 0,
      }).delay(9);

      TweenMax.to(".evaluate-officer-3", 0.5, {
        opacity: 0,
      }).delay(18);
      TweenMax.to(".evaluate-feedback-text", 0.5, {
        opacity: 0,
      }).delay(18);
    } else {
      setAudio(initialData.feedbackAudio1);
    }
  };

  return (
    <div
      id={initialData.id}
      className={`bias-evaluate-wrapper ${initialData.classNames || ""}`}
      style={initialData.style || {}}
    >
      <div className="opacity-100 person-wrapper person-0 absolute bottom-0 md:left-8 lg:left-10 w-3/12 h-5/6">
        <img src={initialData.personImage1} alt="" />
      </div>
      <div className="opacity-0 person-wrapper person-1 absolute bottom-0 md:left-8 lg:left-10 w-3/12 h-5/6">
        <img src={initialData.personImage2} alt="" />
      </div>
      <div className="opacity-0 person-wrapper person-2 absolute bottom-0 md:left-8 lg:left-10 w-3/12 h-5/6">
        <img src={initialData.personImage3} alt="" />
      </div>
      <div className="opacity-100 saying-wrapper absolute text-white text-center left-1/4 top-12 italic md:text-xl lg:text-2xl md:p-2 lg:p-4 w-8/12">
        {initialData.saying[sayingIndex]}
      </div>
      <div className="opacity-0 slide-image-wrapper slide-image-0 absolute md:right-16 lg:right-32 top-1/3 w-4/12 h-3/6">
        <img src={initialData.slideImage1} alt="" />
      </div>
      <div className="opacity-0 slide-image-wrapper slide-image-1 absolute right-16 top-1/3 w-4/12 h-3/6">
        <img src={initialData.slideImage2} alt="" />
      </div>
      <div className="opacity-0 slide-image-wrapper slide-image-2 absolute right-16 top-1/3 w-4/12 h-3/6">
        <img src={initialData.slideImage3} alt="" />
      </div>
      <div className="opacity-0 slide-image-wrapper slide-image-3 absolute right-16 top-1/3 w-4/12 h-3/6">
        <img src={initialData.slideImage4} alt="" />
      </div>
      <div className="officer-selection absolute bottom-0 w-full">
        {feedbackIndex === -1 ? (
          <div className="opacity-0 officer-selection-header bg-black w-7/12 text-white md:text-2xl lg:text-3xl text-center md:p-4 lg:p-6 md:ml-8 lg:ml-16">
            {initialData.feedbackTitle}
          </div>
        ) : (
          <div
            className={`evaluate-feedback-text evaluate-feedback-${feedbackIndex} w-9/12 md:text-xl lg:text-2xl m-auto md:p-4 lg:p-6 md:mb-6 lg:mb-8`}
          >
            {initialData.feedbacks[feedbackIndex].text}
          </div>
        )}
        <div className="opacity-0 md:ml-4 lg:ml-6 md:py-4 lg:py-6 officers-wrapper grid grid-cols-5 md:gap-2 lg:gap-4">
          {initialData.feedbacks.map((feedback, index) => (
            <div
              className={`evaluate-officer evaluate-officer-${index} ${feedbackIndex === index ? 'active' : ''} w-full cursor-pointer`}
              key={index}
              onClick={() => handleFeedbackClick(index)}
            >
              <img src={feedback.image} alt="" />
            </div>
          ))}
          <div className="feedback-action flex items-end justify-start">
            <button
              id="submit-button"
              className={`block opacity-100 submit-button ${
                feedbackIndex > -1 ? "active" : ""
              }`}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Audio
        data={{
          ...initialData.audio,
          url: audio,
        }}
        ref={audioRef}
        onEnded={onAudioEnded}
      />
    </div>
  );
};

export default Evaluate;
