import { Activity } from "../../types/Activity"

type Props = {
 activity: Activity;
}

export const Card: React.FC<Props> = ({ activity }) => {
  return (
    <>
      <div className="card">
        <p className="card-title">{activity.activity}</p>
        <div className="card-theme">{activity.type}</div>
      </div>
    </>
  )
}
