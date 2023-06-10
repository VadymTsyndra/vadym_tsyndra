  import React from 'react';
  import '../../styles/cards.scss';
  import { Activity } from '../../types/Activity';
  import { Card } from '../Card/Card';

  type Props = {
    activities: Activity[];
  }

  export const Cards: React.FC<Props> = ({ activities }) => {
    return (
      <div className="card-row">
        {activities.map(activity => (
        <Card key={activity.key} activity={activity} />
      ))}
        
      </div>
    )
  }
