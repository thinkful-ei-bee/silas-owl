import React from 'react';
import './Party.css';

function Party(props) {
  let memberArray = props.members;
  return (
    <div className={props.className}>
      <ul>
        {memberArray.map(person => {
          return (
            <li key={person.id} className='member'>
              <img src={person.avatar} className='party-avatar' alt='avatar' />
              <span className='member-name'>{person.name}</span>
              <span className='on-stage-status'>
                {(person.onStage) ? 'on stage' : 'off stage'}
              </span>
              <span className={'in-session-status' + (person.inSession) ? 'in-session' : 'off-session'}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Party;