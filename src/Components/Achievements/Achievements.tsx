import '../../styles/achievements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faGraduationCap, faRunning, faCouch } from '@fortawesome/free-solid-svg-icons';

export const Achievements = () => {
  return (
    <div className="achievement-row">
      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faTrophy} className="achievement-icon" />
          <div className="achievement-level">1</div>
        </div>
        <div className="achievement-title">Recreational</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faUsers} className="achievement-icon" />
          <div className="achievement-level">3</div>
        </div>
        <div className="achievement-title">Social</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faGraduationCap} className="achievement-icon" />
          <div className="achievement-level">5</div>
        </div>
        <div className="achievement-title">Education</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faRunning} className="achievement-icon" />
          <div className="achievement-level">3</div>
        </div>
        <div className="achievement-title">Sport</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faCouch} className="achievement-icon" />
          <div className="achievement-level">11</div>
        </div>
        <div className="achievement-title">Relaxation</div>
      </div>
    </div>
  );
}
