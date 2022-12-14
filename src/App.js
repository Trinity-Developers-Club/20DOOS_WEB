import './App.css';
import { useState } from 'react';

const emojiDictionary = {
  "๐ข": "Sad face",
  "๐ฅก": "Takeout",
  "๐": "Love",
  "๐": "Thumbs Up",
  "๐": "Earth",
  "๐": "Expressionaless face",
  "๐ธ": "Money with wings",
  "๐": "Pizza",
  "๐ฅ": "Fire",
  "๐": "Face with sunglasses",
  "๐คณ": "Taking selfie",
  "๐จโ๐ป": "A boy coding",
  "๐": "Basketball",
  "๐ธ": "Guitar",
  "๐ธ": "UFO",
  "๐น": "Skateboard",
  "๐ฎ": "Postbox",
  "๐ธ": "UFO",
  "๐ฉ": "Pile of poo",
  "๐ญ": "Hotdog",
  "๐": "Kiss mark",
  "๐ฎ": "Video game controller",
  "๐ป": "Ghost",
  "๐ต": "Musical note",
  "๐": "Earth",
  "๐ง ": "Brain",
  "๐": "Table tennis",
  "๐": "Medicine pill",
  "๐งต": "Thread",
};


let emojis = Object.keys(emojiDictionary);

function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("Enter the emoji or click any emoji to find it's meaning")



  function emojiMeaningHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];

    if(userInput in emojiDictionary) {
      setEmojiMeaning(meaning);
    } else {
      meaning = 'This is emoji is not present in our database.'
      setEmojiMeaning(meaning);
    }

    if(userInput === ''){
      meaning = "Enter the emoji or click any emoji to find it's meaning";
      setEmojiMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className='heading-container'>


      <h1 className='heading'>Emoji Interpreter</h1>
      </div>
      <input type="text" onChange={(e) => emojiMeaningHandler(e)} />
      <h2 className='emoji-meaning'>{emojiMeaning}</h2>
      <div className='emojis-list'>
      {
        emojis.map((emoji) => (
          <li key={emoji} onClick={()=>emojiClickHandler(emoji)}>{emoji}</li>
        ))
      }
      </div>
    </div>
  );
}

export default App;
