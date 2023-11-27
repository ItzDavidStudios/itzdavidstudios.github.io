// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "hey bitch",
      "i'm gonna brown",
      "sometimes, i dream about cheese",
      "i love sparta remixes i literally do them most of the time",
      "meow meow",
      ":3",
      "what are you doing here",
      "i'm currently drawing someone, i hope u like it when i'm done!!",
      "bet you can't make music as great as mine",
      "uhhhhhhhhhhhh p[eflwpfc[okavcdoauv32er",
      "say something or get out",
      "i love yummy food too",
      "gay spotted",
      "do you think i improved at art?",
      "my music taste is good i think",
      "i killed jon last night",
      "currently working on site updates (not)",
      "1337 5P34K H4XX0R",
      "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
      "don't you think edgy 2000s emo furries are a tad weird?",
      "i found a strange potion in the middle of a road, i'm saving it for uh, a friend",
      "do u like neon he's super cool and swag",
      "butt!! :P",
      "i also make gd levels, still trying to improve at making gameplay",
      "i'm pretty sure you're familiar with Cyn, she's Poi's brother and i know both of them irl, we real close tho",
      "i ain't reading allat",
      "youtube videos every 10 million years",
      "i am literally god",
      "Poi told me to babysit Cyn for some reason, dunno why",
      "soy libre",
      "tambien hablo espana",
      "honduras is a great country, dontcha agree?",
      "bye",
      "play roblox item asylum it's a fun game i promise!!",
      "u are so kitty and i love em",
      "pls check out my stuff i wanna hear the voices of people!!1!",
      "i'm also very fluffy i think, you could even use my huge tail as a bed",
      "get silly ay",
      "not sure who Stove is, but one time i saw them failing at skateboards",
      "man",
      "i'm immune to literally Everything.",
      "i ran out of shit to put here",
      " ",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }