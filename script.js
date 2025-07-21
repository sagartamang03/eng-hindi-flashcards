const data = {
 greetings: [
 ["Hello", "Namaste", "नमस्ते"],
 ["How are you?", "Aap kaise hain?", "आप कैसे हैं?"],
 ["I am fine", "Main theek hoon", "मैं ठीक हूँ"],
 ["Nice to meet you", "Aap se milkar khushi hui", "आपसे मिलकर खुशी हुई"],
 ["Goodbye", "Alvida", "अलविदा"],
 ["See you soon", "Jald hi milenge", "जल्द ही मिलेंगे"],
 ["See you again", "Phir milenge", "फिर मिलेंगे"],
 ["Take care", "Apna khayal rakhna", "अपना ख़याल रखना"],
 ["Thank you", "Dhanyavaad", "धन्यवाद"]
 ],
 introductions: [
 ["What is your name?", "Aapka naam kya hai?", "आपका नाम क्या है?"],
 ["My name is...", "Mera naam ... hai", "मेरा नाम ... है"],
 ["Where are you from?", "Aap kahan se hain?", "आप कहाँ से हैं?"],
 ["I am from...", "Main ... se hoon", "मैं ... से हूँ"],
 ["How old are you?", "Aapki umar kitni hai?", "आपकी उम्र कितनी है?"],
 ["I am ... years old", "Main ... saal ka hoon", "मैं ... साल का हूँ"],
 ["I am a student", "Main ek chhaatr hoon", "मैं एक छात्र हूँ"],
 ["What work do you do?", "Aap kya kaam karte hain?", "आप क्या काम करते हैं?"],
 ["I am a...", "Main ek ... hoon", "मैं एक ... हूँ"],
 ["This is my friend", "Yeh mera dost hai", "यह मेरा दोस्त है"],
 ["Where do you live?", "Aap kahan rehte hain?", "आप कहाँ रहते हैं?"],
 ["I live in...", "Main ... mein rehta hoon", "मैं ... में रहता हूँ"]
 ],
 routine: [
 ["I wake up at 6", "Main 6 baje uthta hoon", "मैं ६ बजे उठता हूँ"],
 ["I brush my teeth", "Main apne daant saaf karta hoon", "मैं अपने दाँत साफ़ करता हूँ"],
 ["I eat food", "Main khana khata hoon", "मैं खाना खाता हूँ"],
 ["I go to work", "Main kaam par jaata hoon", "मैं काम पर जाता हूँ"],
 ["I study in the evening", "Main shaam ko padhta hoon", "मैं शाम को पढ़ता हूँ"],
 ["I make food", "Main khana banata hoon", "मैं खाना बनाता हूँ"],
 ["I bathe", "Main nahata hoon", "मैं नहाता हूँ"],
 ["I sleep at 10", "Main 10 baje sota hoon", "मैं १० बजे सोता हूँ"],
 ["I relax", "Main aaram karta hoon", "मैं आराम करता हूँ"],
 ["I read books", "Main kitabein padhta hoon", "मैं किताबें पढ़ता हूँ"]
 ],
 food: [
 ["I'm hungry", "Mujhe bhook lagi hai", "मुझे भूख लगी है"],
 ["I'm thirsty", "Mujhe pyaas lagi hai", "मुझे प्यास लगी है"],
 ["I want water", "Mujhe paani chahiye", "मुझे पानी चाहिए"],
 ["Do you have tea?", "Kya aapke paas chai hai?", "क्या आपके पास चाय है?"],
 ["This is delicious", "Yeh swadisht hai", "यह स्वादिष्ट है"],
 ["I like spicy food", "Mujhe masaledaar khana pasand hai", "मुझे मसालेदार खाना पसंद है"],
 ["Vegetarian", "Shakahari", "शाकाहारी"],
 ["Meat", "Maans", "मांस"],
 ["Breakfast", "Naashta", "नाश्ता"],
 ["Dinner", "Raat ka khana", "रात का खाना"]
 ],
 travel: [
 ["Where is the bus station?", "Bus station kahan hai?", "बस स्टेशन कहाँ है?"],
 ["How much is the ticket?", "Ticket kitne ka hai?", "टिकट कितने का है?"],
 ["I need a taxi", "Mujhe taxi chahiye", "मुझे टैक्सी चाहिए"],
 ["I want to go to...", "Main ... jaana chahta hoon", "मैं ... जाना चाहता हूँ"],
 ["Is it far?", "Kya yeh door hai?", "क्या यह दूर है?"],
 ["Please stop here", "Kripya yahan rokiye", "कृपया यहाँ रोकिये"],
 ["How long will it take?", "Kitna samay lagega?", "कितना समय लगेगा?"],
 ["I am lost", "Main kho gaya hoon", "मैं खो गया हूँ"],
 ["Can you help me?", "Kya aap meri madad kar sakte hain?", "क्या आप मेरी मदद कर सकते हैं?"],
 ["I didn’t understand", "Main samjha nahin", "मैं समझा नहीं"],
 ["I understood", "Main samajh gaya", "मैं समझ गया"]
 ],
 shopping: [
 ["How much is this?", "Yeh kitne ka hai?", "यह कितने का है?"],
 ["It's too expensive", "Yeh bahut mehenga hai", "यह बहुत महंगा है"],
 ["Lower the price", "Daam kam kijiye", "दाम कम कीजिये"],
 ["I will take it", "Main yeh lunga", "मैं यह लूँगा"],
 ["I'm just looking", "Main sirf dekh raha hoon", "मैं सिर्फ देख रहा हूँ"],
 ["Do you have another color?", "Kya aapke paas doosra rang hai?", "क्या आपके पास दूसरा रंग है?"],
 ["Where can I pay?", "Main kahan bhugtaan kar sakta hoon?", "मैं कहाँ भुगतान कर सकता हूँ?"]
 ],
 numbers: [
 ["1", "Ek", "एक"],
 ["2", "Do", "दो"],
 ["3", "Teen", "तीन"],
 ["4", "Chaar", "चार"],
 ["5", "Paanch", "पाँच"],
 ["6", "Chhah", "छह"],
 ["7", "Saat", "सात"],
 ["8", "Aath", "आठ"],
 ["9", "Nau", "नौ"],
 ["10", "Das", "दस"],
 ["11", "Gyaarah", "ग्यारह"],
 ["12", "Baarah", "बारह"],
 ["20", "Bees", "बीस"],
 ["30", "Tees", "तीस"],
 ["40", "Chaalees", "चालीस"],
 ["50", "Pachaas", "पचास"],
 ["60", "Saath", "साठ"],
 ["70", "Sattar", "सत्तर"],
 ["80", "Assee", "अस्सी"],
 ["90", "Nab_be", "नब्बे"],
 ["100", "Sau", "सौ"],
 ["200", "Do sau", "दो सौ"],
 ["300", "Teen sau", "तीन सौ"],
 ["400", "Chaar sau", "चार सौ"]
 ],
 family: [
 ["Family", "Parivaar", "परिवार"],
 ["Father", "Pita", "पिता"],
 ["Mother", "Maata", "माता"],
 ["Brother (elder/younger)", "Bada/Chhota bhai", "बड़ा/छोटा भाई"],
 ["Sister (elder/younger)", "Badi/Chhoti behen", "बड़ी/छोटी बहन"],
 ["Husband", "Pati", "पति"],
 ["Wife", "Patni", "पत्नी"],
 ["Son", "Beta", "बेटा"],
 ["Daughter", "Beti", "बेटी"],
 ["This is my father.", "Yeh mere pita hain.", "ये मेरे पिता हैं।"],
 ["This is my mother.", "Yeh meri maata hain.", "ये मेरी माता हैं।"],
 ["I have one brother.", "Mera ek bhai hai.", "मेरा एक भाई है।"],
 ["I have two sisters.", "Meri do behne hain.", "मेरी दो बहनें हैं।"],
 ["Do you have siblings?", "Kya aapke bhai-behen hain?", "क्या आपके भाई-बहन हैं?"],
 ["I live with my family.", "Main apne parivaar ke saath rehta hoon.", "मैं अपने परिवार के साथ रहता हूँ।"],
 ["My family is small.", "Mera parivaar chhota hai.", "मेरा परिवार छोटा है।"],
 ["What is your father's name?", "Aapke pita ka naam kya hai?", "आपके पिता का नाम क्या है?"],
 ["My mother's name is...", "Meri maata ka naam ... hai.", "मेरी माता का नाम ... है।"]
 ],
 health: [
 ["I feel sick", "Mujhe theek nahin lag raha hai", "मुझे ठीक नहीं लग रहा है"],
 ["I need a doctor", "Mujhe doctor ki zaroorat hai", "मुझे डॉक्टर की ज़रूरत है"],
 ["Where is the hospital?", "Aspataal kahan hai?", "अस्पताल कहाँ है?"],
 ["Help!", "Madad!", "मदद!"],
 ["Call the police", "Police ko bulao", "पुलिस को बुलाओ"],
 ["It hurts here", "Yahan dard ho raha hai", "यहाँ दर्द हो रहा है"],
 ["I have a headache", "Mere sar mein dard hai", "मेरे सर में दर्द है"]
 ],
 daysAndTime: [
 ["What time is it?", "Kitne baje hain?", "कितने बजे हैं?"],
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
 emotions: [
 ["How are you feeling?", "Aapko kaisa lag raha hai?", "आपको कैसा लग रहा है?"],
 ["I am happy", "Main khush hoon", "मैं खुश हूँ"],
 ["I am sad", "Main dukhi hoon", "मैं दुखी हूँ"],
 ["I am tired", "Main thak gaya hoon", "मैं थक गया हूँ"],
 ["I am excited", "Main utsaahit hoon", "मैं उत्साहित हूँ"]
 ],
 wantSentences: [
 ["I want tea.", "Mujhe chai chahiye.", "मुझे चाय चाहिए।"],
 ["She wants to dance.", "Vah naachna chahti hai.", "वह नाचना चाहती है।"],
 ["They want to go home.", "Ve ghar jaana chahte hain.", "वे घर जाना चाहते हैं।"],
 ["I don't want food.", "Mujhe khana nahin chahiye.", "मुझे खाना नहीं चाहिए।"],
 ["He doesn't want to sleep.", "Vah sona nahin chahta hai.", "वह सोना नहीं चाहता है।"],
 ["They don't want to study.", "Ve padhna nahin chahte hain.", "वे पढ़ना नहीं चाहते हैं।"],
 ["Do you want coffee?", "Kya aapko coffee chahiye?", "क्या आपको कॉफ़ी चाहिए?"],
 ["Does she want to come?", "Kya vah aana chahti hai?", "क्या वह आना चाहती है?"],
 ["Do they want water?", "Kya unhe paani chahiye?", "क्या उन्हें पानी चाहिए?"],
 ["What do you want?", "Aapko kya chahiye?", "आपको क्या चाहिए?"],
 ["Why do you want to go?", "Aap kyon jaana chahte hain?", "आप क्यों जाना चाहते हैं?"],
 ["Who do you want to meet?", "Aap kis se milna chahte hain?", "आप किससे मिलना चाहते हैं?"]
 ],
 haveSentences: [
 ["I have a book.", "Mere paas ek kitaab hai.", "मेरे पास एक किताब है।"],
 ["She has a pen.", "Uske paas ek kalam hai.", "उसके पास एक कलम है।"],
 ["They have a house.", "Unke paas ek ghar hai.", " उनके पास एक घर है।"],
 ["I don't have a car.", "Mere paas gaadi nahin hai.", "मेरे पास गाड़ी नहीं है।"],
 ["He doesn't have time.", "Uske paas samay nahin hai.", "उसके पास समय नहीं है।"],
 ["They don't have money.", "Unke paas paise nahin hain.", "उनके पास पैसे नहीं हैं।"],
 ["Do you have a phone?", "Kya aapke paas phone hai?", "क्या आपके पास फ़ोन है?"],
 ["Does she have a job?", "Kya uske paas naukri hai?", "क्या उसके पास नौकरी है?"],
 ["Do they have tickets?", "Kya unke paas ticket hain?", "क्या उनके पास टिकट हैं?"],
 ["What do you have?", "Aapke paas kya hai?", "आपके पास क्या है?"],
 ["Who has the key?", "Chaabi kiske paas hai?", "चाबी किसके पास है?"],
 ["Why do you have this?", "Aapke paas yeh kyon hai?", "आपके पास यह क्यों है?"]
 ],
 likeSentences: [
 ["I like tea.", "Mujhe chai pasand hai.", "मुझे चाय पसंद है।"],
 ["She likes to read books.", "Use kitabein padhna pasand hai.", "उसे किताबें पढ़ना पसंद है।"],
 ["They don't like movies.", "Unhe filmein pasand nahin hain.", "उन्हें फिल्में पसंद नहीं हैं।"],
 ["Do you like spicy food?", "Kya aapko masaledaar khana pasand hai?", "क्या आपको मसालेदार खाना पसंद है?"],
 ["What do you like?", "Aapko kya pasand hai?", "आपको क्या पसंद है?"]
 ],
 needSentences: [
 ["I need water.", "Mujhe paani ki zaroorat hai.", "मुझे पानी की ज़रूरत है।"],
 ["She needs help.", "Use madad ki zaroorat hai.", "उसे मदद की ज़रूरत है।"],
 ["They need a taxi.", "Unhe taxi ki zaroorat hai.", "उन्हें टैक्सी की ज़रूरत है।"],
 ["I don't need anything.", "Mujhe kuch nahin chahiye.", "मुझे कुछ नहीं चाहिए।"],
 ["Do you need anything?", "Kya aapko kuch chahiye?", "क्या आपको कुछ चाहिए?"],
 ["What do you need?", "Aapko kya chahiye?", "आपको क्या चाहिए?"]
 ],
 canSentences: [
 ["I can speak Hindi.", "Main Hindi bol sakta hoon.", "मैं हिंदी बोल सकता हूँ।"],
 ["She can swim.", "Vah tair sakti hai.", "वह तैर सकती है।"],
 ["They can't come today.", "Ve aaj nahin aa sakte.", "वे आज नहीं आ सकते।"],
 ["Can you help me?", "Kya aap meri madad kar sakte hain?", "क्या आप मेरी मदद कर सकते हैं?"],
 ["Where can I pay?", "Main kahan bhugtaan kar sakta hoon?", "मैं कहाँ भुगतान कर सकता हूँ?"],
 ["What can you do?", "Aap kya kar sakte hain?", "आप क्या कर सकते हैं?"]
 ],
 shouldHaveTo: [
 ["You should rest.", "Aapko aaram karna chahiye.", "आपको आराम करना चाहिए।"],
 ["I have to go.", "Mujhe jaana hai.", "मुझे जाना है।"],
 ["She needs to study.", "Use padhna hai.", "उसे पढ़ना है।"],
 ["We have to work.", "Hamein kaam karna hai.", "हमें काम करना है।"],
 ["You should not worry.", "Aapko chinta nahin karni chahiye.", "आपको चिंता नहीं करनी चाहिए।"],
 ["What should I do?", "Mujhe kya karna chahiye?", "मुझे क्या करना चाहिए?"]
 ],
 commands: [
 ["Come here.", "Yahan aao.", "यहाँ आओ।"],
 ["Go there.", "Wahan jao.", "वहाँ जाओ।"],
 ["Listen carefully.", "Dhyaan se suno.", "ध्यान से सुनो।"],
 ["Please stop here.", "Kripya yahan rukiye.", "कृपया यहाँ रुकिए।"],
 ["Speak slowly.", "Dheere bolo.", "धीरे बोलो।"],
 ["Give me that.", "Mujhe woh do.", "मुझे वह दो।"],
 ["Don't do that.", "Woh mat karo.", "वह मत करो।"]
 ],
 verbs: [
 ["To eat", "Khana", "खाना"],
 ["To go", "Jaana", "जाना"],
 ["To come", "Aana", "आना"],
 ["To sleep", "Sona", "सोना"],
 ["To write", "Likhna", "लिखना"],
 ["To speak", "Bolna", "बोलना"],
 ["To walk", "Chalna", "चलना"],
 ["To live", "Rehna", "रहना"]
 ],
 nouns: [
 ["House", "Ghar", "घर"],
 ["Book", "Kitaab", "किताब"],
 ["Pen", "Kalam", "कलम"],
 ["Water", "Paani", "पानी"],
 ["Food", "Khaana", "खाना"],
 ["Chair", "Kursi", "कुर्सी"],
 ["Teacher", "Adhyaapak", "अध्यापक"]
 ],
 adjectives: [
 ["Big", "Bada", "बड़ा"],
 ["Small", "Chhota", "छोटा"],
 ["Beautiful", "Sundar", "सुंदर"],
 ["Hot", "Garam", "गरम"],
 ["Cold", "Thanda", "ठंडा"],
 ["Happy", "Khush", "खुश"],
 ["Fast", "Tez", "तेज़"]
 ],
 adverbs: [
 ["Quickly", "Jaldi", "जल्दी"],
 ["Slowly", "Dheere", "धीरे"],
 ["Always", "Hamesha", "हमेशा"],
 ["Never", "Kabhi nahin", "कभी नहीं"],
 ["Today", "Aaj", "आज"],
 ["Yesterday", "Kal", "कल"],
 ["Tomorrow", "Kal", "कल"]
 ],
 prepositions: [
 ["On", "Par", "पर"],
 ["Under", "Neeche", "नीचे"],
 ["In", "Mein", "में"],
 ["Out", "Baahar", "बाहर"],
 ["Beside", "Bagal mein", "बगल में"],
 ["Between", "Beech mein", "बीच में"],
 ["Near", "Paas", "पास"]
 ],
 conjunctions: [
 ["And", "Aur", "और"],
 ["But", "Lekin", "लेकिन"],
 ["Because", "Kyonki", "क्योंकि"],
 ["If", "Agar", "अगर"],
 ["Although", "Haalaanki", "हालांकि"],
 ["So", "Isliye", "इसलिए"],
 ["Or", "Ya", "या"]
 ],
 questionWords: [
 ["What", "Kya", "क्या"],
 ["Where", "Kahan", "कहाँ"],
 ["When", "Kab", "कब"],
 ["Who", "Kaun", "कौन"],
 ["Why", "Kyon", "क्यों"],
 ["How", "Kaise", "कैसे"],
 ["Which", "Kaun sa", "कौन सा"]
 ],
   devanagariScript: {
    vowels: [
      ["A", "a", "अ"], ["AA", "aa", "आ"], ["I", "i", "इ"], ["II", "ee", "ई"],
      ["U", "u", "उ"], ["UU", "oo", "ऊ"], ["RI", "ri", "ऋ"], ["E", "e", "ए"],
      ["AI", "ai", "ऐ"], ["O", "o", "ओ"], ["AU", "au", "औ"], ["An", "an", "अं"],
      ["Ah", "ah", "अः"]
    ],
consonants: [
  ["Ka", "ka", "क"], ["Kha", "kha", "ख"], ["Ga", "ga", "ग"], ["Gha", "gha", "घ"], ["Nga", "nga", "ङ"],
  ["Cha", "cha", "च"], ["Chha", "chha", "छ"], ["Ja", "ja", "ज"], ["Jha", "jha", "झ"], ["Nya", "nya", "ञ"],
  ["Ta", "ṭa", "ट"], ["Tha", "ṭha", "ठ"], ["Da", "ḍa", "ड"], ["Dha", "ḍha", "ढ"], ["Na", "ṇa", "ण"],
  ["Ta", "ta", "त"], ["Tha", "tha", "थ"], ["Da", "da", "द"], ["Dha", "dha", "ध"], ["Na", "na", "न"],
  ["Pa", "pa", "प"], ["Pha", "pha", "फ"], ["Ba", "ba", "ब"], ["Bha", "bha", "भ"], ["Ma", "ma", "म"],
  ["Ya", "ya", "य"], ["Ra", "ra", "र"], ["La", "la", "ल"], ["Va", "va", "व"],
  ["Sha", "sha", "श"], ["Sha (retroflex)", "ṣa", "ष"], ["Sa", "sa", "स"], ["Ha", "ha", "ह"],
  ["Ksha", "kṣa", "क्ष"], ["Tra", "tra", "त्र"], ["Gya", "gya", "ज्ञ"]
],

    matras: [
  ["aa", "aa", "ा"], ["i", "i", "ि"], ["ii", "ee", "ी"],
  ["u", "u", "ु"], ["uu", "oo", "ू"], ["ri", "ri", "ृ"],
  ["e", "e", "े"], ["ai", "ai", "ै"], ["o", "o", "ो"],
  ["au", "au", "ौ"], ["anuswar", "an", "ं"], ["visarga", "ah", "ः"]
],

 simpleWords: [
  ["Ram", "Ram", "राम"],
  ["Pani", "Paani", "पानी"],
  ["Kitaab", "Kitaab", "किताब"],
  ["Ghar", "Ghar", "घर"],
  ["Maa", "Maa", "माँ"],
  ["Baccha", "Bacchaa", "बच्चा"],
  ["Ped", "Ped", "पेड़"],
  ["Kutta", "Kuttaa", "कुत्ता"],
  ["Suraj", "Sooraj", "सूरज"],
  ["Chand", "Chaand", "चाँद"],
  ["Roti", "Roti", "रोटी"],
  ["Doodh", "Doodh", "दूध"],
  ["Pustak", "Pustak", "पुस्तक"],
  ["Mez", "Mez", "मेज़"],
  ["Kursi", "Kursi", "कुर्सी"]
],

    conjuncts: [
      ["Kta", "kta", "क्त"], ["Tra", "tra", "त्र"], ["Gya", "gya", "ज्ञ"], ["Shra", "shra", "श्र"]
    ]
  }
};
let currentTopic = null;
let currentSubtopic = null;

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = null;

  flashcardContainer.innerHTML = "";
  topicSelection.style.display = "none";
  backButton.style.display = "block";
  backButton.innerText = "← Back to Topics";

  if (typeof data[topic] === "object" && !Array.isArray(data[topic])) {
    showSubtopics(topic);
    return;
  }

  data[topic].forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";
card.innerHTML = currentTopic === "devanagariScript" ? `
  <div class="card-inner">
    <div class="card-front">
      <span class="devanagari-script large">${devanagari}</span>
    </div>
    <div class="card-back">
      <strong>${eng}</strong>
      <span class="romanized-script">${roman}</span>
    </div>
  </div>
` : `
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


    card.addEventListener("click", () => card.classList.toggle("flipped"));
    flashcardContainer.appendChild(card);
  });
}

function showSubtopics(topic) {
  const container = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = null;

  container.innerHTML = "";
  topicSelection.style.display = "none";
  backButton.style.display = "block";
  backButton.innerText = "← Back to Topics";

  const subtopics = Object.keys(data[topic]);
  subtopics.forEach(sub => {
    const button = document.createElement("button");
    button.className = "subtopic-button";
    button.innerText = sub.charAt(0).toUpperCase() + sub.slice(1);
    button.onclick = () => showSubtopicFlashcards(topic, sub);
    container.appendChild(button);
  });
}

function showSubtopicFlashcards(topic, subtopic) {
  const container = document.getElementById("flashcards");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = subtopic;

  container.innerHTML = "";
  backButton.innerText = "← Back to Devanagari Script";

  data[topic][subtopic].forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";
card.innerHTML = currentTopic === "devanagariScript" ? `
  <div class="card-inner">
    <div class="card-front">
      <span class="devanagari-script large">${devanagari}</span>
    </div>
    <div class="card-back">
      <strong>${eng}</strong>
      <span class="romanized-script">${roman}</span>
    </div>
  </div>
` : `
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

    card.addEventListener("click", () => card.classList.toggle("flipped"));
    container.appendChild(card);
  });
}

function goBackToTopics() {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  // ← Logic here changes based on navigation depth
  if (currentTopic && currentSubtopic) {
    // We're in flashcards of a subtopic (e.g. vowels)
    showSubtopics(currentTopic);
    currentSubtopic = null;
  } else if (currentTopic) {
    // We're in subtopics list
    currentTopic = null;
    topicSelection.style.display = "flex";
    backButton.style.display = "none";
    flashcardContainer.innerHTML = "";
  } else {
    // Fallback: go to home
    topicSelection.style.display = "flex";
    backButton.style.display = "none";
    flashcardContainer.innerHTML = "";
  }
}

