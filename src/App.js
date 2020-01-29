import React from 'react';

import './App.css';
import Joke from './Joke'

function App() {
  return (
      <div>
        <Joke  data = {{question : "What did one Frenchman say to the other?" , punchline : "I have no idea; I don’t speak French."}}/>
        <Joke  data = {{question : "What did the farmer say after he lost his tractor?" , punchline : "“Where’s my tractor?”"}}/>
        <Joke  data = {{question : "Want to hear something that’ll make you smile?" , punchline : "Your face muscles"}}/>
        <Joke  data = {{question : "How do you call it when an egg is on point?" , punchline : "Egg zactly!"}}/>
        <Joke  data = {{question : "Why are frogs so happy?" , punchline : "They eat whatever bugs them."}}/>
      </div>
  );
}

export default App;
