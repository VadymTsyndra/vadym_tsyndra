import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Cards } from './Components/Cards';
import { Achievements } from './Components/Achievements';
import { Challenges } from './Components/Challenges';
import { Activity } from './types/Activity';
import { getActivities } from './api/ideas';
import { Slider } from './Components/Slider';

export const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [listOfActivities, setListOfActivities] = useState<Activity[]>([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [achievements, setAchievements] = useState<{ [key: string]: number }>(() => {
    const achievementsData = localStorage.getItem('achievements');
    if (achievementsData) {
      return JSON.parse(achievementsData);
    } else {
      return {
        'recreational': 0,
        'social': 0,
        'education': 0,
        'sport': 0,
        'relaxation': 0
      };
    }
  });
  const [challenges, setChallenges] = useState<Activity[]>(() => {
    const challengesData = localStorage.getItem('challenges');
    if (challengesData) {
      return JSON.parse(challengesData);
    } else {
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getActivities().then(data => setActivities(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem('challenges', JSON.stringify(challenges));
  }, [challenges]);

  const isActivitiesEmpty = () => {
    if (activities.length === 1) {
      setIsLoading(true);
      getActivities()
        .then(data => setActivities(data))
        .finally(() => setIsLoading(false));
    }
  }

  const deleteActivities = (activity: Activity) => {
    setActivities(prevState => prevState.filter(cardActivity => cardActivity !== activity));
  }

  const addActivitiesToTheList = (activity: Activity) => {
    if (listOfActivities.some(item => item.key === activity.key)) {
      deleteActivities(activity);
      isActivitiesEmpty();
      return;
    }

    if (listOfActivities.length > 20) {
      alert('Too many ideas in your list');
      return;
    }
    setListOfActivities([...listOfActivities, activity]);
    deleteActivities(activity);

    isActivitiesEmpty();
  };

  const handleSliderCardClick = (theme: string, activity: Activity) => {
    setAchievements(prevState => ({
      ...prevState,
      [theme]: prevState[theme] + 1
    }));

    setListOfActivities(prevState => prevState.filter(item => item.activity !== activity.activity));

    const currentTime = new Date().toLocaleString();
    activity.timeAdded = currentTime;
    if (!challenges.some(item => item.key === activity.key)) {
      setChallenges(prevState => [...prevState, activity]);
    }
  };

  return (
    <div className="component">
      <div className="block">
        <h2 className="block-title">Choose fresh ideas</h2>
        <div className="cards-block">
          {isLoading ? (
            <div className="loader">
              <i className="loader-icon fas fa-spinner"></i>
            </div>
          ) : (
            <Cards activities={activities} addActivities={addActivitiesToTheList} />
          )}
        </div>
      </div>

      <div className="block">
        <h2 className="block-title">Ideas in my list</h2>
        <Slider
          listOfActivities={listOfActivities}
          handleSliderCardClick={handleSliderCardClick}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <div className="block">
        <h2 className="block-title">Achievements</h2>
        <Achievements achievements={achievements} />
      </div>

      <div className="block">
        <h2 className="block-title">Completed Challenges</h2>
        <Challenges challenges={challenges} />
      </div>
    </div>
  );
};
