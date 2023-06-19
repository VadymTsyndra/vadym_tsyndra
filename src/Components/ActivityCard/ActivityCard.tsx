import React from 'react';
import { Activity } from "../../types/Activity"

type Props = {
 activity: Activity;
 addActivities: (activity: Activity) => void;
}

export const Card: React.FC<Props> = ({ activity, addActivities }) => {
  return (
    <div className="card" onClick={() => addActivities(activity)}>
      <p className="card-title">{activity.activity}</p>
      <div className="card-theme">{activity.type[0].toUpperCase() + activity.type.slice(1)}</div>
    </div>
  )
}
