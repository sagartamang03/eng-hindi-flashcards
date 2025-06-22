const data = {
  greetings: [
    ["Hello", "Namaste"],
    ["Good morning", "Suprabhaat"],
    ["Good evening", "Shubh saanjh"],
    ["How are you?", "Aap kaise ho?"],
    ["I'm fine", "Main theek hoon"],
    ["Nice to meet you", "Aapse milkar khushi hui"],
    ["Goodbye", "Alvida"],
    ["See you soon", "Jaldi milenge"],
    ["Take care", "Apna khyaal rakhna"],
    ["Thank you", "Dhanyavaad"]
  ],
  introductions: [
    ["What is your name?", "Aapka naam kya hai?"],
    ["My name is...", "Mera naam ... hai"],
    ["Where are you from?", "Aap kahaan se ho?"],
    ["I am from...", "Main ... se hoon"],
    ["How old are you?", "Aapki umr kya hai?"],
    ["I am a student", "Main ek chhaatra hoon"],
    ["I work as a...", "Main ... ke roop mein kaam karta hoon"],
    ["Nice to meet you", "Aapse milkar accha laga"],
    ["This is my friend", "Yeh mera dost hai"],
    ["I live in...", "Main ... mein rehta hoon"]
  ],
  routine: [
    ["I wake up at 6", "Main 6 baje uthta hoon"],
    ["I brush my teeth", "Main daant saaf karta hoon"],
    ["I eat breakfast", "Main nashta karta hoon"],
    ["I go to work", "Main kaam par jaata hoon"],
    ["I study in the evening", "Main shaam ko padhta hoon"],
    ["I cook food", "Main khana banata hoon"],
    ["I take a shower", "Main nahaata hoon"],
    ["I go to bed at 10", "Main 10 baje sota hoon"],
    ["I relax at home", "Main ghar par aaram karta hoon"],
    ["I read books", "Main kitaabein padhta hoon"]
  ],
  food: [
    ["I'm hungry", "Mujhe bhookh lagi hai"],
    ["I'm thirsty", "Mujhe pyaas lagi hai"],
    ["I want water", "Mujhe paani chahiye"],
    ["Do you have tea?", "Kya aapke paas chai hai?"],
    ["This is delicious", "Yeh bahut swaadisht hai"],
    ["I like spicy food", "Mujhe teekha khaana pasand hai"],
    ["Vegetarian", "Shaakahari"],
    ["Meat", "Maans"],
    ["Breakfast", "Nashta"],
    ["Dinner", "Raat ka khana"]
  ],
  travel: [
    ["Where is the bus station?", "Bus station kahaan hai?"],
    ["How much is the ticket?", "Ticket kitne ka hai?"],
    ["I need a taxi", "Mujhe ek taxi chahiye"],
    ["I want to go to...", "Main ... jaana chahta hoon"],
    ["Is it far?", "Kya yeh door hai?"],
    ["Please stop here", "Kripya yahan rokiye"],
    ["How long will it take?", "Kitna samay lagega?"],
    ["I am lost", "Main kho gaya hoon"],
    ["Can you help me?", "Kya aap meri madad kar sakte ho?"],
    ["I don’t understand", "Main nahi samjha"]
  ]
};

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  flashcardContainer.innerHTML = "";

  data[topic].forEach(([eng, hindi]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${eng}</strong><span>${hindi}</span>`;
    flashcardContainer.appendChild(card);
  });
}
