import React from 'react';
import './Stage.css';

function Stage(props) {
  // captures the array of participants  
  let memberArray = props.members;
  // capture only members that are on the stage
  let stageMembers = memberArray.filter(person => {
      if(person.onStage) return person;
  });
  return (
    <div className={props.className}>
      {stageMembers.map(person => {
        return (
          <div key={'stageId-' + person.id} className='on-stage-member'>
            <h2>{person.name}</h2>
            <img src={person.avatar} alt='avatar' />
          </div>  
        )
      })}

    </div>
  );
}

export default Stage;