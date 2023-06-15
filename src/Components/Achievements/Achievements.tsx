import React from 'react';
import '../../styles/achievements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faGraduationCap, faRunning, faCouch } from '@fortawesome/free-solid-svg-icons';

type Props = {
  achievements: { [key: string]: number };
};

export const Achievements: React.FC<Props> = ({ achievements }) => {
  return (
    <div className="achievement-row">
      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faTrophy} className="achievement-icon" />
          <div className="achievement-level">{achievements['recreational']}</div>
        </div>
        <div className="achievement-title">Recreational</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faUsers} className="achievement-icon" />
          <div className="achievement-level">{achievements['social']}</div>
        </div>
        <div className="achievement-title">Social</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faGraduationCap} className="achievement-icon" />
          <div className="achievement-level">{achievements['education']}</div>
        </div>
        <div className="achievement-title">Education</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faRunning} className="achievement-icon" />
          <div className="achievement-level">{achievements['sport']}</div>
        </div>
        <div className="achievement-title">Sport</div>
      </div>

      <div className="achievement-cycle">
        <div className="achievement">
          <FontAwesomeIcon icon={faCouch} className="achievement-icon" />
          <div className="achievement-level">{achievements['relaxation']}</div>
        </div>
        <div className="achievement-title">Relaxation</div>
      </div>
    </div>
  );
};
