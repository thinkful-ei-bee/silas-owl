import React from 'react';
import './Chat.css';

function Chat(props) {
  let eventArray = props.events;
  let memberArray = props.members;

 
  function checkType(x, member) {
     // Checks the 'type' property of an event, 
     // returns a string corresponding to that type

    switch(x.type) {
      case('message'):
        return '';
      case('thumbs-up'):
        return member.name + ' gave a thumbs up';
      case('thumbs-down'):
        return member.name + ' gave a thumbs down';
      case('clap'):
        return member.name + ' clapped';
      case('raise-hand'):
        return member.name + ' raised their hand';
      case('join'):
        return member.name + ' joined';
      case('leave'):
        return member.name + ' left';
      case('join-stage'):
        return member.name + ' joined the stage';
      case('leave-stage'):
        return member.name + ' left the stage';
      default:
        break;

    }
    // if(x.type === 'message') return '';
    // if(x.type === 'thumbs-up') return x.name + ' gave a thumbs up';
    // if(x.type === 'thumbs-down') return x.name + ' gave a thumbs down';
    // if(x.type === 'clap') return x.name + ' clapped';
    // if(x.type === 'raise-hand') return x.name + ' raised their hand';
    // if()
  }
  return (
    <div className={props.className}>
      <ul>
        {eventArray.map(event => {
          let currentMessage = (event.type === 'message') ? event.message : '';
          let currentMember = memberArray[event.participantId -1];
          let currentName = (event.type === 'message') ? currentMember.name : '';
          let currentAction = checkType(event, currentMember);
          console.log(currentAction);
          return (
            <li key={'eventId: ' + Math.random()}>
              <div>
                <img className='event-avatar' src={currentMember.avatar} alt='avatar'/>
                <span className='event-member-name'>{currentName}</span>
                <span className='event-message'>{currentMessage}</span>
                <span className='event-action'>{currentAction}</span>

            </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Chat;