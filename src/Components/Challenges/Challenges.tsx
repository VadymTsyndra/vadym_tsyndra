import '../../styles/challenges.scss';
import { Activity } from 'types/Activity';

type Props = {
  challenges: Activity[];
}

export const Challenges:React.FC<Props> = ({ challenges }) => {
  return (
    <table className="challenges-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>When</th>
        </tr>
      </thead>
      <tbody>
      {challenges.length === 0 ? (
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      ) : (
          challenges.map((challenge, index) => (
            <tr key={challenge.key}>
              <td>{index + 1}</td>
              <td>{challenge.activity}</td>
              <td>{challenge.type[0].toUpperCase() + challenge.type.slice(1)}</td>
              <td>{challenge.timeAdded}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
