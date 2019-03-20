import React from 'react';
import Party from './Party.js';
import Stage from './Stage.js';
import Chat from './Chat.js';

function App(props) {
  //console.log(props.store.participants);
  return (
    <main className='App'>
      <Party className='party-list' members={props.store.participants} />
      <Chat className='chat-list' events={props.store.chatEvents} members={props.store.participants}/>
      <Stage className='stage' members={props.store.participants} />
    </main>
  );
}

export default App;