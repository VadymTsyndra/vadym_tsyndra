import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../styles/slider.scss';
import { Activity } from 'types/Activity';

type Props = {
  listOfActivities: Activity[];
  handleSliderCardClick: (theme: string, activity: Activity) => void;
}

const noIdeas = [{name: "No available ideas", id: 0}];

export const Slider: React.FC<Props> = ({ listOfActivities, handleSliderCardClick }) => {
  const handleCardClick = (theme: string, activity: Activity) => {
    if (theme === 'music') {
      handleSliderCardClick('relaxation', activity);
    } else if (theme === 'charity') {
       handleSliderCardClick('social', activity);
    } else if (theme === 'busywork') {
       handleSliderCardClick('education', activity);
    } else if (theme === 'cooking') {
      handleSliderCardClick('recreational', activity);
   } else {
      handleSliderCardClick(theme, activity);
    }
  };
  return (
    <React.Fragment>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        emulateTouch
        useKeyboardArrows
        transitionTime={1000}
        width="600px"
        
      >
        {listOfActivities.length === 0 ? (
          noIdeas.map(item => (
            <div className="slide-holder no-ideas" key={item.id}>
              <div className="text-container">
                <h2>{item.name}</h2>
              </div>
            </div>
          ))
        ) : (
          listOfActivities.map((activity) => (
          <div className="slide-holder" key={activity.key} onClick={() => handleCardClick(activity.type, activity)}>
            <div className="text-container">
              <h2 className="slider-title">{activity.activity}</h2>
              <p className="slider-theme">{activity.type[0].toUpperCase() + activity.type.slice(1)}</p>
            </div>
          </div>
        ))
        )}
      </Carousel>
    </React.Fragment>
  );
}
