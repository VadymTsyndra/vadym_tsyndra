  import React, { useState, useEffect } from 'react';
  import './App.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { Cards } from './Components/Cards';
  import { Slider } from './Components/Slider';
  import { Achievements } from './Components/Achievements';
  import { Challenges } from './Components/Challenges';
  import { Activity } from './types/Activity';
  import { getActivities } from './api/ideas';

  export const App: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
      getActivities().then(data => setActivities(data))
    }, []);

    return (
      <div className="component">
        <div className="block">
          <h2 className="block-title">Choose fresh ideas</h2>
          <Cards activities={activities} />
        </div>

        <div className="block">
          <h2 className="block-title">Ideas in my list</h2>
          <Slider />
        </div>

        <div className="block">
          <h2 className="block-title">Achievements</h2>
          <Achievements />
        </div>

        <div className="block">
          <h2 className="block-title">Completed Challenges</h2>
          <Challenges />
        </div>
      </div>
    );
  }
