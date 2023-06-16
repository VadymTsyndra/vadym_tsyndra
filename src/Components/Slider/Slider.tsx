import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../styles/slider.scss';
import { Activity } from 'types/Activity';

type Props = {
  listOfActivities: Activity[];
  handleSliderCardClick: (theme: string, activity: Activity) => void;
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}

const noIdeas = [{name: "No available ideas", id: 0}];

export const Slider: React.FC<Props> = ({
  listOfActivities,
  handleSliderCardClick,
  selectedItem,
  setSelectedItem,
}) => {
  const handleCardClick = (theme: string, activity: Activity) => {
    switch (theme) {
      case 'music':
      case 'diy':
        handleSliderCardClick('relaxation', activity);
        break;
      case 'charity':
        handleSliderCardClick('social', activity);
        break;
      case 'busywork':
        handleSliderCardClick('education', activity);
        break;
      case 'cooking':
        handleSliderCardClick('recreational', activity);
        break;
      default:
        handleSliderCardClick(theme, activity);
    }
  };
  
  useEffect(() => {
    if (selectedItem >= listOfActivities.length) {
      setSelectedItem(0);
    }
  }, [selectedItem, listOfActivities.length, setSelectedItem]);

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
        selectedItem={selectedItem}
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
          listOfActivities.map((activity, index) => (
          <div className="slide-holder" key={activity.key} onClick={() => {
              handleCardClick(activity.type, activity);
              setSelectedItem(index);
            }}>
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
