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
      const [achievements, setAchievements] = useState<{ [key: string]: number }>({
        'recreational': 0,
        'social': 0,
        'education': 0,
        'sport': 0,
        'relaxation': 0
      });
      const [challenges, setChallenges] = useState<Activity[]>([]);
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
        getActivities().then(data => setActivities(data))
      }, []);

      const addActivitiesToTheList = (activity: Activity) => {
        if (listOfActivities.length > 20) {
          alert('Too much ideas in your list');
           return;
        }
        setListOfActivities([...listOfActivities, activity]);
        setActivities(prevState => prevState.filter(cardActivity => cardActivity !== activity));
      
        if (activities.length === 1) {
          setIsLoading(true);
          getActivities()
            .then(data => setActivities(data))
            .finally(() => setIsLoading(false));
        }
      };

      const handleSliderCardClick = (theme: string, activity: Activity) => {
        setAchievements(prevState => ({
          ...prevState,
          [theme]: prevState[theme] + 1
        }));

        setListOfActivities(prevState => prevState.filter(item => item.activity !== activity.activity));

        const currentTime = new Date().toLocaleString();
        activity.timeAdded = currentTime;
        setChallenges(prevState => [...prevState, activity])
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
            <Slider listOfActivities={listOfActivities} handleSliderCardClick={handleSliderCardClick} />
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
    }
