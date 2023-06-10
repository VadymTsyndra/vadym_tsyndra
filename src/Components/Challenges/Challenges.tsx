import '../../styles/challenges.scss';

export const Challenges = () => {
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
        <tr>
          <td>1</td>
          <td>Learn how to fold a paper crane</td>
          <td>Education</td>
          <td>Just now</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Make a bucket list</td>
          <td>Busywork</td>
          <td>2 hours ago</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Do something you used to do as a kid</td>
          <td>Relaxation</td>
          <td>1 day ago</td>
        </tr>
      </tbody>
    </table>
  )
}
