window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let poop = document.createElement('p');
const speechContent = document.querySelector('.words');
speechContent.appendChild(p);

recognition.addEventListener('result', (event) => {
  const speechToText = event.results[0][0].transcript;
  console.log(event)
  console.log(speechToText);

  if (speechToText.includes('poop')) {
    p.textContent = speechToText + " 💩💩💩";
  } else {
    p.textContent = speechToText;
  }

  if (event.results[0].isFinal) {
    if (speechToText.includes('unicorn')){  
      cornify_add();
    }
    p = document.createElement('p');
    speechContent.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();