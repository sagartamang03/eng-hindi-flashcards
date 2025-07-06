const data = {
  greetings: [
    ["Hello", "Namaste", "नमस्ते"],
    ["Good morning", "Shubh prabhaat", "शुभ प्रभात"],
    ["Good evening", "Shubh sandhya", "शुभ संध्या"],
    ["How are you?", "Aap kaise hain?", "आप कैसे हैं?"],
    ["I'm fine", "Main theek hoon", "मैं ठीक हूँ"],
    ["Nice to meet you", "Aap se milkar khushi hui", "आपसे मिलकर खुशी हुई"],
    ["Goodbye", "Alvida / Namaste", "अलविदा / नमस्ते"],
    ["See you soon", "Jald hi milenge", "जल्द ही मिलेंगे"],
    ["See you again", "Fir milenge", "फिर मिलेंगे"],
    ["Take care", "Apna khayal rakhna", "अपना ख्याल रखना"],
    ["Thank you", "Dhanyavaad", "धन्यवाद"]
  ],
  introductions: [
    ["What is your name?", "Aapka naam kya hai?", "आपका नाम क्या है?"],
    ["My name is...", "Mera naam ... hai", "मेरा नाम ... है"],
    ["Where are you from?", "Aap kahan se hain?", "आप कहाँ से हैं?"],
    ["I am from...", "Main ... se hoon", "मैं ... से हूँ"],
    ["How old are you?", "Aapki umra kitni hai?", "आपकी उम्र कितनी है?"],
    ["I am ... years old", "Main ... saal ka hoon", "मैं ... साल का हूँ"],
    ["I am a student", "Main ek chhaatr hoon", "मैं एक छात्र हूँ"],
    ["What work do you do?", "Aap kya kaam karte hain?", "आप क्या काम करते हैं?"],
    ["I am ...", "Main ... hoon", "मैं ... हूँ"],
    ["This is my friend", "Yeh mera dost hai", "यह मेरा दोस्त है"],
    ["I live in...", "Main ... mein rehta hoon", "मैं ... में रहता हूँ"]
  ],
  routine: [
    ["I wake up at 6", "Main 6 baje uthta hoon", "मैं 6 बजे उठता हूँ"],
    ["I brush my teeth", "Main apne daant saaf karta hoon", "मैं अपने दाँत साफ़ करता हूँ"],
    ["I eat food", "Main khaana khaata hoon", "मैं खाना खाता हूँ"],
    ["I go to work", "Main kaam par jaata hoon", "मैं काम पर जाता हूँ"],
    ["I study in the evening", "Main shaam ko padhta hoon", "मैं शाम को पढ़ता हूँ"],
    ["I cook food", "Main khaana pakaata hoon", "मैं खाना पकाता हूँ"],
    ["I bathe", "Main nahaata hoon", "मैं नहाता हूँ"],
    ["I sleep at 10", "Main 10 baje sota hoon", "मैं 10 बजे सोता हूँ"],
    ["I relax at home", "Main ghar par aaraam karta hoon", "मैं घर पर आराम करता हूँ"],
    ["I read books", "Main kitaaben padhta hoon", "मैं किताबें पढ़ता हूँ"]
  ],
  food: [
    ["I'm hungry", "Mujhe bhookh lagi hai", "मुझे भूख लगी है"],
    ["I'm thirsty", "Mujhe pyaas lagi hai", "मुझे प्यास लगी है"],
    ["I want water", "Mujhe paani chaahiye", "मुझे पानी चाहिए"],
    ["Do you have tea?", "Kya aapke paas chai hai?", "क्या आपके पास चाय है?"],
    ["This is delicious", "Yeh swaadisht hai", "यह स्वादिष्ट है"],
    ["I like spicy food", "Mujhe masaaledaar khaana pasand hai", "मुझे मसालेदार खाना पसंद है"],
    ["Vegetarian", "Shaakaahaarii", "शाकाहारी"],
    ["Meat", "Maans", "मांस"],
    ["Breakfast", "Naashta", "नाश्ता"],
    ["Dinner", "Raat ka khaana", "रात का खाना"]
  ],
  travel: [
    ["Where is the bus station?", "Bus station kahaan hai?", "बस स्टेशन कहाँ है?"],
    ["How much is the ticket?", "Ticket kitne ka hai?", "टिकट कितने का है?"],
    ["I need a taxi", "Mujhe taxi chaahiye", "मुझे टैक्सी चाहिए"],
    ["I want to go to...", "Main ... jaana chaahta hoon", "मैं ... जाना चाहता हूँ"],
    ["Is it far?", "Kya yeh door hai?", "क्या यह दूर है?"],
    ["Please stop here", "Kripaya yahaan ruken", "कृपया यहाँ रुकें"],
    ["How long will it take?", "Kitna samay lagega?", "कितना समय लगेगा?"],
    ["I am lost", "Main kho gaya hoon", "मैं खो गया हूँ"],
    ["Can you help me?", "Kya aap meri madad kar sakte hain?", "क्या आप मेरी मदद कर सकते हैं?"],
    ["I didn’t understand", "Main samjha nahin", "मैं समझा नहीं"],
    ["I understood", "Main samajh gaya", "मैं समझ गया"]
  ],
  shopping: [
    ["How much is this?", "Yeh kitne ka hai?", "यह कितने का है?"],
    ["It's too expensive", "Yeh bahut mahanga hai", "यह बहुत महंगा है"],
    ["Lower the price", "Daam kam kijiye", "दाम कम कीजिये"],
    ["I will take it", "Main yeh loonga", "मैं यह लूँगा"],
    ["I'm just looking", "Main sirf dekh raha hoon", "मैं सिर्फ देख रहा हूँ"],
    ["Do you have another color?", "Kya aapke paas doosra rang hai?", "क्या आपके पास दूसरा रंग है?"],
    ["Where can I pay?", "Main kahan bhugtaan kar sakta hoon?", "मैं कहाँ भुगतान कर सकता हूँ?"]
  ],
  numbers: [
    ["One", "Ek", "एक"],
    ["Two", "Do", "दो"],
    ["Three", "Teen", "तीन"],
    ["Four", "Chaar", "चार"],
    ["Five", "Paanch", "पाँच"],
    ["Six", "Chhah", "छह"],
    ["Seven", "Saat", "सात"],
    ["Eight", "Aath", "आठ"],
    ["Nine", "Nau", "नौ"],
    ["Ten", "Das", "दस"],
    ["One Hundred", "Ek Sau", "एक सौ"]
  ],
  family: [
    ["Family", "Parivaar", "परिवार"],
    ["Father", "Pita", "पिता"],
    ["Mother", "Maata", "माता"],
    ["Brother", "Bhaai", "भाई"],
    ["Sister", "Behen", "बहन"],
    ["Husband", "Pati", "पति"],
    ["Wife", "Patni", "पत्नी"],
    ["Son", "Beta", "बेटा"],
    ["Daughter", "Beti", "बेटी"],
    ["This is my father.", "Yeh mere pita hain.", "ये मेरे पिता हैं।"],
    ["This is my mother.", "Yeh meri maata hain.", "ये मेरी माता हैं।"],
    ["I have one brother.", "Mera ek bhaai hai.", "मेरा एक भाई है।"],
    ["I have two sisters.", "Meri do behne hain.", "मेरी दो बहनें हैं।"],
    ["Do you have siblings?", "Kya aapke bhai-behen hain?", "क्या आपके भाई-बहन हैं?"],
    ["I live with my family.", "Main apne parivaar ke saath rehta hoon.", "मैं अपने परिवार के साथ रहता हूँ।"]
  ],
  health: [
    ["I feel sick", "Meri tabiyat theek nahin hai", "मेरी तबियत ठीक नहीं है"],
    ["I need a doctor", "Mujhe doctor ki zaroorat hai", "मुझे डॉक्टर की ज़रूरत है"],
    ["Where is the hospital?", "Aspataal kahaan hai?", "अस्पताल कहाँ है?"],
    ["Help!", "Madad karo!", "मदद करो!"],
    ["Call the police", "Police ko bulao", "पुलिस को बुलाओ"],
    ["It hurts here", "Yahaan dard ho raha hai", "यहाँ दर्द हो रहा है"],
    ["I have a headache", "Mere sar mein dard hai", "मेरे सर में दर्द है"]
  ],
  daysAndTime: [
    ["What time is it?", "Kitna baja hai?", "कितना बजा है?"],
    ["What day is it today?", "Aaj kaun sa din hai?", "आज कौन सा दिन है?"],
    ["Sunday", "Ravivaar", "रविवार"],
    ["Monday", "Somvaar", "सोमवार"],
    ["Tuesday", "Mangalvaar", "मंगलवार"],
    ["Wednesday", "Budhvaar", "बुधवार"],
    ["Thursday", "Guruvaar", "गुरुवार"],
    ["Friday", "Shukravaar", "शुक्रवार"],
    ["Saturday", "Shanivaar", "शनिवार"],
    ["Yesterday", "Kal", "कल"],
    ["Today", "Aaj", "आज"],
    ["Tomorrow", "Kal", "कल"]
  ],
  weather: [
    ["How's the weather?", "Mausam kaisa hai?", "मौसम कैसा है?"],
    ["It is sunny", "Dhoop hai", "धूप है"],
    ["It is raining", "Baarish ho rahi hai", "बारिश हो रही है"],
    ["It is cold", "Thand hai", "ठंड है"],
    ["It is hot", "Garmi hai", "गर्मी है"],
    ["It is cloudy", "Baadal chhaaye hain", "बादल छाये हैं"]
  ],
  hobbies: [
    ["What are your hobbies?", "Aapke shauk kya hain?", "आपके शौक क्या हैं?"],
    ["I like reading", "Mujhe padhna pasand hai", "मुझे पढ़ना पसंद है"],
    ["I like music", "Mujhe sangeet pasand hai", "मुझे संगीत पसंद है"],
    ["I enjoy traveling", "Mujhe ghoomna pasand hai", "मुझे घूमना पसंद है"],
    ["I play football", "Main football khelta hoon", "मैं फुटबॉल खेलता हूँ"]
  ],
  work: [
    ["Where do you work?", "Aap kahaan kaam karte hain?", "आप कहाँ काम करते हैं?"],
    ["I work in an office", "Main office mein kaam karta hoon", "मैं ऑफिस में काम करता हूँ"],
    ["I am a teacher", "Main ek shikshak hoon", "मैं एक शिक्षक हूँ"],
    ["I am a doctor", "Main ek doctor hoon", "मैं एक डॉक्टर हूँ"],
    ["Do you like your job?", "Kya aapko apna kaam pasand hai?", "क्या आपको अपना काम पसंद है?"]
  ],
  opinions: [
    ["What do you think?", "Aap kya sochte hain?", "आप क्या सोचते हैं?"],
    ["I think it's good", "Mujhe lagta hai yeh achha hai", "मुझे लगता है यह अच्छा है"],
    ["I don't like it", "Mujhe yeh pasand nahin hai", "मुझे यह पसंद नहीं है"],
    ["That's interesting", "Yeh dilchasp hai", "यह दिलचस्प है"],
    ["I agree", "Main sahmat hoon", "मैं सहमत हूँ"],
    ["I disagree", "Main asahmat hoon", "मैं असहमत हूँ"],
    ["In my opinion...", "Meri raay mein...", "मेरी राय में..."]
  ],
  relationships: [
    ["Are you married?", "Kya aap shaadeeshuda hain?", "क्या आप शादीशुदा हैं?"],
    ["I am single", "Main avivahit hoon", "मैं अविवाहित हूँ"],
    ["I have a partner", "Mera ek saathi hai", "मेरा एक साथी है"],
    ["This is my wife", "Yeh meri patni hain", "यह मेरी पत्नी हैं"],
    ["This is my husband", "Yeh mere pati hain", "यह मेरे पति हैं"],
    ["We are friends", "Hum dost hain", "हम दोस्त हैं"],
    ["I love you", "Main tumse pyaar karta hoon", "मैं तुमसे प्यार करता हूँ"]
  ],
  technology: [
    ["Do you use a smartphone?", "Kya aap smartphone istemaal karte hain?", "क्या आप स्मार्टफोन इस्तेमाल करते हैं?"],
    ["I use the internet a lot", "Main internet ka bahut istemaal karta hoon", "मैं इंटरनेट का बहुत इस्तेमाल करता हूँ"],
    ["Do you use social media?", "Kya aap social media istemaal karte hain?", "क्या आप सोशल मीडिया इस्तेमाल करते हैं?"],
    ["I like new technology", "Mujhe nayi takneek pasand hai", "मुझे नई तकनीक पसंद है"],
    ["I work with computers", "Main computer par kaam karta hoon", "मैं कंप्यूटर पर काम करता हूँ"],
    ["What apps do you use?", "Aap kaun se apps istemaal karte hain?", "आप कौन से ऐप्स इस्तेमाल करते हैं?"]
  ],
  entertainment: [
    ["Do you watch movies?", "Kya aap filmein dekhte hain?", "क्या आप फिल्में देखते हैं?"],
    ["I like comedy movies", "Mujhe comedy filmein pasand hain", "मुझे कॉमेडी फिल्में पसंद हैं"],
    ["Who is your favorite actor?", "Aapka pasandeeda abhineta kaun hai?", "आपका पसंदीदा अभिनेता कौन है?"],
    ["I listen to music", "Main sangeet sunta hoon", "मैं संगीत सुनता हूँ"],
    ["I like dancing", "Mujhe naachna pasand hai", "मुझे नाचना पसंद है"]
  ],
  emotions: [
    ["How are you feeling?", "Aap kaisa mehsoos kar rahe hain?", "आप कैसा महसूस कर रहे हैं?"],
    ["I am happy", "Main khush hoon", "मैं खुश हूँ"],
    ["I am sad", "Main udaas hoon", "मैं उदास हूँ"],
    ["I am tired", "Main thak gaya hoon", "मैं थक गया हूँ"],
    ["I am excited", "Main utsaahit hoon", "मैं उत्साहित हूँ"]
  ],
  dreams: [
    ["What is your dream?", "Aapka sapna kya hai?", "आपका सपना क्या है?"],
    ["I want to travel the world", "Main duniya ghoomna chaahta hoon", "मैं दुनिया घूमना चाहता हूँ"],
    ["I want to be a doctor", "Main doctor banna chaahta hoon", "मैं डॉक्टर बनना चाहता हूँ"],
    ["I want to help others", "Main doosron ki madad karna chaahta hoon", "मैं दूसरों की मदद करना चाहता हूँ"],
    ["I want to start a business", "Main ek vyavasaay shuru karna chaahta hoon", "मैं एक व्यवसाय शुरू करना चाहता हूँ"]
  ]
};

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "none";
  backButton.style.display = "block";

  data[topic].forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <strong>${eng}</strong>
        </div>
        <div class="card-back">
          <span class="devanagari-script">${devanagari}</span>
          <span class="romanized-script">${roman}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
    flashcardContainer.appendChild(card);
  });
}

function goBackToTopics() {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "flex";
  backButton.style.display = "none";
}
