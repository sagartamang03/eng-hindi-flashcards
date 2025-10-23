const data = {
  greetings: [
    ["Hello", "Namaste", "नमस्ते"],
    ["Good morning", "Shubh prabhaat", "शुभ प्रभात"],
    ["Good afternoon", "Shubh dopahar", "शुभ दोपहर"],
    ["Good evening", "Shubh sandhya", "शुभ संध्या"],
    ["How are you?", "Aap kaise hain?", "आप कैसे हैं?"],
    ["I’m fine", "Main theek hoon", "मैं ठीक हूँ"],
    ["Nice to meet you", "Aapse milkar khushi hui", "आपसे मिलकर खुशी हुई"]
  ],

  introductions: [
    ["What’s your name?", "Aapka naam kya hai?", "आपका नाम क्या है?"],
    ["My name is Sagar", "Mera naam Sagar hai", "मेरा नाम सागर है"],
    ["Where are you from?", "Aap kahan se hain?", "आप कहाँ से हैं?"],
    ["I am from India", "Main Bharat se hoon", "मैं भारत से हूँ"],
    ["Nice to meet you", "Milkar khushi hui", "मिलकर खुशी हुई"]
  ],

  feelings: [
    ["I’m happy", "Main khush hoon", "मैं खुश हूँ"],
    ["I’m sad", "Main udaas hoon", "मैं उदास हूँ"],
    ["I’m tired", "Main thaka hoon", "मैं थका हूँ"],
    ["I’m angry", "Main gussa hoon", "मैं गुस्सा हूँ"],
    ["I’m hungry", "Mujhe bhookh lagi hai", "मुझे भूख लगी है"]
  ],

  dailyRoutine: [
    ["I wake up at 7", "Main saat baje uthta hoon", "मैं सात बजे उठता हूँ"],
    ["I brush my teeth", "Main daant saaf karta hoon", "मैं दाँत साफ करता हूँ"],
    ["I eat breakfast", "Main nashta karta hoon", "मैं नाश्ता करता हूँ"],
    ["I go to work", "Main kaam par jaata hoon", "मैं काम पर जाता हूँ"],
    ["I sleep at 10", "Main das baje sota hoon", "मैं दस बजे सोता हूँ"]
  ],

  askingQuestions: [
    ["What is this?", "Yeh kya hai?", "ये क्या है?"],
    ["Where is it?", "Yeh kahan hai?", "ये कहाँ है?"],
    ["When will you come?", "Aap kab aayenge?", "आप कब आएंगे?"],
    ["Who is he?", "Woh kaun hai?", "वो कौन है?"],
    ["How much is it?", "Yeh kitne ka hai?", "ये कितने का है?"]
  ],

  opinions: [
    ["I think so", "Mujhe bhi aisa lagta hai", "मुझे भी ऐसा लगता है"],
    ["I don’t think so", "Mujhe aisa nahi lagta", "मुझे ऐसा नहीं लगता"],
    ["In my opinion", "Mere vichar mein", "मेरे विचार में"],
    ["That’s true", "Yeh sach hai", "ये सच है"],
    ["You’re right", "Aap sahi hain", "आप सही हैं"]
  ],

  likesDislikes: [
    ["I like it", "Mujhe yeh pasand hai", "मुझे ये पसंद है"],
    ["I don’t like it", "Mujhe yeh pasand nahi hai", "मुझे ये पसंद नहीं है"],
    ["I love music", "Mujhe sangeet pasand hai", "मुझे संगीत पसंद है"],
    ["I hate waiting", "Mujhe intezaar karna pasand nahi hai", "मुझे इंतज़ार करना पसंद नहीं है"],
    ["Do you like coffee?", "Kya aapko coffee pasand hai?", "क्या आपको कॉफी पसंद है?"]
  ],

  askingHelp: [
    ["Can you help me?", "Kya aap meri madad karenge?", "क्या आप मेरी मदद करेंगे?"],
    ["Please help me", "Kripya meri madad kijiye", "कृपया मेरी मदद कीजिए"],
    ["I need help", "Mujhe madad chahiye", "मुझे मदद चाहिए"],
    ["Don’t worry", "Chinta mat kijiye", "चिंता मत कीजिए"],
    ["That’s okay", "Thik hai", "ठीक है"]
  ],

  directions: [
    ["Where is the bus stop?", "Bus stop kahan hai?", "बस स्टॉप कहाँ है?"],
    ["Go straight", "Seedha jaiye", "सीधा जाइए"],
    ["Turn left", "Baaye mudaiye", "बाएँ मुड़िए"],
    ["Turn right", "Daaye mudaiye", "दाएँ मुड़िए"],
    ["It’s nearby", "Yeh paas mein hai", "ये पास में है"]
  ],

  shopping: [
    ["How much is this?", "Yeh kitne ka hai?", "ये कितने का है?"],
    ["It’s too expensive", "Yeh bahut mehenga hai", "ये बहुत महँगा है"],
    ["Can you make it cheaper?", "Kya aap sasta kar sakte hain?", "क्या आप सस्ता कर सकते हैं?"],
    ["I’ll take this", "Main yeh loonga", "मैं ये लूँगा"],
    ["I’m just looking", "Main sirf dekh raha hoon", "मैं सिर्फ देख रहा हूँ"]
  ],

  restaurant: [
    ["I’m hungry", "Mujhe bhookh lagi hai", "मुझे भूख लगी है"],
    ["Can I see the menu?", "Kya main menu dekh sakta hoon?", "क्या मैं मेनू देख सकता हूँ?"],
    ["I’d like some water", "Mujhe thoda paani chahiye", "मुझे थोड़ा पानी चाहिए"],
    ["This is delicious", "Yeh bahut swaadisht hai", "ये बहुत स्वादिष्ट है"],
    ["Bill please", "Bill lijiye", "बिल लीजिए"]
  ],

  travel: [
    ["Where are you going?", "Aap kahan ja rahe hain?", "आप कहाँ जा रहे हैं?"],
    ["I’m going to Delhi", "Main Dilli ja raha hoon", "मैं दिल्ली जा रहा हूँ"],
    ["How far is it?", "Yeh kitni door hai?", "ये कितनी दूर है?"],
    ["Is it safe?", "Kya yeh surakshit hai?", "क्या ये सुरक्षित है?"],
    ["I need a ticket", "Mujhe ek ticket chahiye", "मुझे एक टिकट चाहिए"]
  ],

  health: [
    ["I’m sick", "Main beemaar hoon", "मैं बीमार हूँ"],
    ["I have a headache", "Mujhe sar dard hai", "मुझे सर दर्द है"],
    ["I need a doctor", "Mujhe doctor chahiye", "मुझे डॉक्टर चाहिए"],
    ["Take rest", "Aaram kijiye", "आराम कीजिए"],
    ["Get well soon", "Jaldi theek ho jaiye", "जल्दी ठीक हो जाइए"]
  ],

  weather: [
    ["It’s hot today", "Aaj garmi hai", "आज गर्मी है"],
    ["It’s cold", "Thand hai", "ठंड है"],
    ["It’s raining", "Baarish ho rahi hai", "बारिश हो रही है"],
    ["It’s sunny", "Dhoop hai", "धूप है"],
    ["It’s windy", "Hawa chal rahi hai", "हवा चल रही है"]
  ],

  smallTalk: [
    ["How’s your day?", "Aapka din kaisa raha?", "आपका दिन कैसा रहा?"],
    ["What do you do?", "Aap kya karte hain?", "आप क्या करते हैं?"],
    ["That’s interesting", "Yeh dilchasp hai", "ये दिलचस्प है"],
    ["Really?", "Sach mein?", "सच में?"],
    ["I see", "Samajh gaya", "समझ गया"]
  ],

  goodbyes: [
    ["Goodbye", "Alvida", "अलविदा"],
    ["See you soon", "Jald milte hain", "जल्द मिलते हैं"],
    ["Take care", "Apna khayal rakhiye", "अपना ख्याल रखिए"],
    ["Have a nice day", "Aapka din shubh ho", "आपका दिन शुभ हो"],
    ["Good night", "Shubh raatri", "शुभ रात्रि"]
  ],


Directions: [
  ["North", "Uttar", "उत्तर"],
  ["South", "Dakshin", "दक्षिण"],
  ["East", "Purva", "पूर्व"],
  ["West", "Paschim", "पश्चिम"],
  ["Left", "Bayaan", "बायाँ"],
  ["Right", "Daayaan", "दायाँ"],
  ["Straight", "Seedha", "सीधा"],
  ["Back", "Peeche", "पीछे"],
  ["Up", "Upar", "ऊपर"],
  ["Down", "Neeche", "नीचे"],
  ["Near", "Najdeek", "नजदीक"],
  ["Far", "Door", "दूर"],
  ["Across", "Paar", "पार"],
  ["Between", "Beech", "बीच"],
  ["Towards", "Taraf", "तरफ"]
],
Colors: [
  ["Red", "Laal", "लाल"],
  ["Blue", "Neela", "नीला"],
  ["Green", "Hara", "हरा"],
  ["Yellow", "Peela", "पीला"],
  ["Black", "Kaala", "काला"],
  ["White", "Safed", "सफेद"],
  ["Orange", "Narangi", "नारंगी"],
  ["Pink", "Gulaabi", "गुलाबी"],
  ["Purple", "Baingani", "बैंगनी"],
  ["Brown", "Bhura", "भूरा"],
  ["Golden", "Sunehra", "सुनहरा"],
  ["Silver", "Chaandi", "चांदी"]
],
Weather: [
  ["Sunny", "Dhoop wala", "धूप वाला"],
  ["Cloudy", "Baadal wala", "बादल वाला"],
  ["Rainy", "Baarish wala", "बारिश वाला"],
  ["Snowy", "Barfeela", "बर्फीला"],
  ["Foggy", "Kohra", "कोहरा"],
  ["Hot", "Garam", "गर्म"],
  ["Cold", "Thanda", "ठंडा"],
  ["Dry", "Sookha", "सूखा"],
  ["Lightning", "Bijli", "बिजली"]
],
Fruits_vegetables: [
  ["Apple", "Seb", "सेब"],
  ["Banana", "Kela", "केला"],
  ["Mango", "Aam", "आम"],
  ["Orange", "Santara", "संतरा"],
  ["Grapes", "Angoor", "अंगूर"],
  ["Watermelon", "Tarbooj", "तरबूज"],
  ["Potato", "Aaloo", "आलू"],
  ["Tomato", "Tamatar", "टमाटर"],
  ["Onion", "Pyaaz", "प्याज"],
  ["Carrot", "Gajar", "गाजर"],
  ["Cauliflower", "Phool gobhi", "फूलगोभी"],
  ["Brinjal", "Baingan", "बैंगन"],
  ["Cucumber", "Kheera", "खीरा"],
  ["Chili", "Mirch", "मिर्च"],
  ["Garlic", "Lahsun", "लहसुन"],
  ["Ginger", "Adrak", "अदरक"]
],
pronouns: {
  subject: [
    ["I", "Main", "मैं"],
    ["You (informal)", "Tum", "तुम"],
    ["You (formal)", "Aap", "आप"],
    ["He/She", "Vo", "वो"],
    ["this/ that", "Ye / Vo", "ये / वो"],
    ["We", "Ham", "हम"],
    ["They", "vo", "वो"]
  ],
  object: [
    ["to Me", "Mujhe", "मुझे"],
    ["to You (informal)", "Tumhe", "तुम्हें"],
    ["to You (formal)", "Aapko", "आपको"],
    ["to Him/Her", "Use", "उसे"],
    ["to this / that", "Ise / Use", "इसे / उसे"],
    ["to Us", "Hamein", "हमें"],
    ["to Them", "Unhe", "उन्हें"]
  ],
  possessive: [
    ["My", "Mera / Meri / Mere", "मेरा / मेरी / मेरे"],
    ["Your (informal)", "Tera / Teri / Tere", "तेरा / तेरी / तेरे"],
    ["Your (formal)", "Aapka / Aapki / Aapke", "आपका / आपकी / आपके"],
    ["His/Her", "Uska / Uski / Uske", "उसका / उसकी / उसके"],
    ["Its/ of that", "Iska / Uska", "इसका / उसका"],
    ["Our", "Hamara / Hamari / Hamare", "हमारा / हमारी / हमारे"],
    ["Their", "Unka / Unki / Unke", "उनका / उनकी / उनके"]
  ],
  reflexive: [
    ["One's own", "Apna", "अपना"],
    ["By oneself / Automatically", "Apne aap / khud", "अपने आप / ख़ुद"]
  ],
  unspecified: [
    ["Someone", "Koi", "कोई"],
    ["Something", "Kuch", "कुछ"],
    ["Anyone", "Koi bhi", "कोई भी"],
    ["Anything", "Kuch bhi", "कुछ भी"]
  ]
},
numbers: [
  ["1", "Ek", "एक"],
  ["2", "Do", "दो"],
  ["3", "Teen", "तीन"],
  ["4", "Chaar", "चार"],
  ["5", "Paanch", "पाँच"],
  ["6", "Chhah", "छः"],
  ["7", "Saat", "सात"],
  ["8", "Aath", "आठ"],
  ["9", "Nau", "नौ"],
  ["10", "Das", "दस"],
  ["11", "Gyaarah", "ग्यारह"],
  ["12", "Baraah", "बारह"],
  ["20", "Bees", "बीस"],
  ["30", "Tees", "तीस"],
  ["40", "Chaalees", "चालीस"],
  ["50", "Pachaas", "पचास"],
  ["60", "Saath", "साठ"],
  ["70", "Sattaar", "सत्तर"],
  ["80", "Assee", "अस्सी"],
  ["90", "Nabbe", "नब्बे"],
  ["100", "Sau / Ek sau", "सौ / एक सौ"],
  ["200", "Do sau", "दो सौ"],
  ["300", "Teen sau", "तीन सौ"],
  ["400", "Chaar sau", "चार सौ"]
],
daysAndTime: [
  ["What time is it?", "Kitne baje hain?", "कितने बजे हैं?"],
  ["What day is it today?", "Aaj kaun sa din hai?", "आज कौन सा दिन है?"],
  ["Sunday", "Ravivaar", "रविवार"],
  ["Monday", "Somvaar", "सोमवार"],
  ["Tuesday", "Mangalvaar", "मंगलवार"],
  ["Wednesday", "Budhvaar", "बुधवार"],
  ["Thursday", "Guruvaar", "गुरुवार"],
  ["Friday", "Shukrvaar", "शुक्रवार"],
  ["Saturday", "Shanivaar", "शनिवार"],
  ["Yesterday", "Kal", "कल"],
  ["Today", "Aaj", "आज"],
  ["Tomorrow", "Kal", "कल"]
],
"verbs": [
  ["To go", "Jaana", "जाना"],
  ["To come", "Aana", "आना"],
  ["To walk", "Chalna", "चलना"],
  ["To run", "Daudna", "दौड़ना"],
  ["To live", "Rahna", "रहना"],
  ["To see", "Dekhna", "देखना"],
  ["To hear", "Sunnna", "सुनना"],
  ["To eat", "Khaana", "खाना"],
  ["To drink", "Peena", "पीना"],
  ["To smell", "Soonghna", "सूंघना"],
  ["To speak", "Bolna", "बोलना"],
  ["To write", "Likhna", "लिखना"],
  ["To read", "Padhna", "पढ़ना"],
  ["To listen", "Sunnna", "सुनना"],
  ["To tell", "Batana", "बताना"],
  ["To make/do", "Karna", "करना"],
  ["To take", "Lena", "लेना"],
  ["To give", "Dena", "देना"],
  ["To open", "Kholna", "खोलना"],
  ["To close", "Band karna", "बंद करना"],
  ["To sleep", "Sona", "सोना"],
  ["To wake up", "Jaagna", "जागना"],
  ["To bathe", "Nahana", "नहाना"],
  ["To cook", "Pakaana", "पकाना"],
  ["To study", "Padhna", "पढ़ना"]
],
"nouns": [
  ["House", "Ghar", "घर"],
  ["Chair", "Kursi", "कुर्सी"],
  ["Table", "Mez", "मेज"],
  ["Door", "Darwaza", "दरवाजा"],
  ["Window", "Khidki", "खिड़की"],
  ["Bed", "Bistar", "बिस्तर"],
  ["Fan", "Pankha", "पंखा"],
  ["Light", "Roshni", "रोशनी"],
  ["Book", "Kitaab", "किताब"],
  ["Pen", "Kalaam", "कलम"],
  ["Pencil", "Pencil", "पेंसिल"],
  ["Notebook", "Copy", "कॉपी"],
  ["Eraser", "Rubber", "रबर"],
  ["Bag", "Bag", "बैग"],
  ["Board", "Board", "बोर्ड"],
  ["Marker", "Marker", "मार्कर"],
  ["Water", "Paani", "पानी"],
  ["Food", "Khaana", "खाना"],
  ["Milk", "Doodh", "दूध"],
  ["Bread", "Roti", "रोटी"],
  ["Salt", "Namak", "नमक"],
  ["Sugar", "Cheeni", "चीनी"],
  ["Oil", "Tel", "तेल"],
  ["Rice", "Chaawal", "चावल"],
  ["Teacher", "Shikshak", "शिक्षक"],
  ["Student", "Chhatra", "छात्र"],
  ["Mother", "Maa", "माँ"],
  ["Father", "Pita", "पिता"],
  ["Brother", "Bhai", "भाई"],
  ["Sister", "Behen", "बहन"],
  ["Friend", "Dost", "दोस्त"],
  ["Child", "Bachcha", "बच्चा"]
],
"adjectives":[
  ["Big", "Bada", "बड़ा"],
  ["Small", "Chhota", "छोटा"],
  ["Tall", "Lamba", "लंबा"],
  ["Short", "Chhota", "छोटा"],
  ["Huge", "Vishaal", "विशाल"],
  ["Beautiful", "Sundar", "सुंदर"],
  ["Ugly", "Badsoorat", "बदसूरत"],
  ["Clean", "Saaf", "साफ"],
  ["Dirty", "Ganda", "गंदा"],
  ["Smart", "Buddhimaan", "बुद्धिमान"],
  ["Hot", "Garam", "गर्म"],
  ["Cold", "Thanda", "ठंडा"],
  ["Warm", "Gunguna", "गुनगुना"],
  ["Cool", "Thanda", "ठंडा"],
  ["Freezing", "Jalne wala", "जमने वाला"],
  ["Happy", "Khush", "खुश"],
  ["Sad", "Udaas", "उदास"],
  ["Angry", "Gussa", "गुस्सा"],
  ["Excited", "Utsaahit", "उत्साहित"],
  ["Scared", "Darpok", "डरपोक"],
  ["Fast", "Tez", "तेज"],
  ["Slow", "Dheema", "धीमा"],
  ["Quick", "Tez", "तेज"],
  ["Speedy", "Tez", "तेज"],
  ["Sluggish", "Sust", "सुस्त"]
],
"adverbs":[
  ["Quickly", "Jaldi", "जल्दी"],
  ["Slowly", "Dheere dheere", "धीरे धीरे"],
  ["Carefully", "Savadhaani se", "सावधानी से"],
  ["Loudly", "Jor se", "जोर से"],
  ["Silently", "Chupchaap", "चुपचाप"],
  ["Always", "Hamesha", "हमेशा"],
  ["Never", "Kabhi nahin", "कभी नहीं"],
  ["Often", "Aksar", "अक्सर"],
  ["Sometimes", "Kabhi kabhi", "कभी कभी"],
  ["Today", "Aaj", "आज"],
  ["Yesterday", "Kal", "कल"],
  ["Tomorrow", "Kal", "कल"],
  ["Now", "Ab", "अब"],
  ["Later", "Baad mein", "बाद में"]
],
"relationshipWords": [
  ["Family", "Parivaar", "परिवार"],
  ["Father", "Pita", "पिता"],
  ["Mother", "Maa", "माँ"],
  ["Brother (elder)", "Bada bhai", "बड़ा भाई"],
  ["Brother (younger)", "Chhota bhai", "छोटा भाई"],
  ["Sister (elder)", "Badi behan", "बड़ी बहन"],
  ["Sister (younger)", "Chhoti behan", "छोटी बहन"],
  ["Husband", "Pati", "पति"],
  ["Wife", "Patni", "पत्नी"],
  ["Son", "Beta", "बेटा"],
  ["Daughter", "Beti", "बेटी"]
],
"Time": [
  ["Sunday", "Ravivaar", "रविवार"],
  ["Monday", "Somvaar", "सोमवार"],
  ["Tuesday", "Mangalvaar", "मंगलवार"],
  ["Wednesday", "Budhvaar", "बुधवार"],
  ["Thursday", "Guruvaar", "गुरुवार"],
  ["Friday", "Shukrvaar", "शुक्रवार"],
  ["Saturday", "Shanivaar", "शनिवार"],
  ["Hour", "Ghanta", "घंटा"],
  ["Minute", "Minute", "मिनट"],
  ["Second", "Second", "सेकंड"],
  ["Morning", "Subah", "सुबह"],
  ["Afternoon", "Dopahar", "दोपहर"],
  ["Evening", "Shaam", "शाम"],
  ["Night", "Raat", "रात"]
],
"prepositions":[
  ["On", "Par", "पर"],
  ["Under", "Ke neeche", "के नीचे"],
  ["In", "Mein", "में"],
  ["Out", "Baahar", "बाहर"],
  ["Beside", "Ke paas", "के पास"],
  ["Between", "Ke beech", "के बीच"],
  ["Near", "Ke paas", "के पास"],
  ["Over", "Ke upar", "के ऊपर"],
  ["Behind", "Ke peeche", "के पीछे"],
  ["In front of", "Ke saamne", "के सामने"]
],
"conjunctions": [
  ["And", "Aur", "और"],
  ["But", "Lekin", "लेकिन"],
  ["Or", "Ya", "या"],
  ["Nor", "Na hi", "न ही"],
  ["Yet", "Phir bhi", "फिर भी"],
  ["Because", "Kyonki", "क्योंकि"],
  ["If", "Agar", "अगर"],
  ["Although", "Yadyapi", "यद्यपि"],
  ["Since", "Se", "से"],
  ["While", "Jabki", "जबकि"]
],
"question":[
  ["What", "Kya", "क्या"],
  ["Where", "Kahaan", "कहाँ"],
  ["When", "Kab", "कब"],
  ["Who", "Kaun", "कौन"],
  ["Why", "Kyon", "क्यों"],
  ["How", "Kaise", "कैसे"],
  ["Which", "Kaun sa", "कौन सा"]
]
,
 IndependentVowels: {
    content: [
    ["अ", "", "a"],
    ["आ", "", "aa"],
    ["इ", "", "i"],
    ["ई", "", "ee"],
    ["उ", "", "u"],
    ["ऊ", "", "oo"],
    ["ऋ", "", "ri"],
    ["ए", "", "e"],
    ["ऐ", "", "ai"],
    ["ओ", "", "o"],
    ["औ", "", "au"],
    ["अं", "", "an"],
    ["अः", "", "ah"]
  ],
    examples: []
  },

  DependentVowels: {
    content: [
    ["ा", "", "aa"],
    ["ि", "", "i"],
    ["ी", "", "ee"],
    ["ु", "", "u"],
    ["ू", "", "oo"],
    ["ृ", "", "ri"],
    ["े", "", "e"],
    ["ै", "", "ai"],
    ["ो", "", "o"],
    ["ौ", "", "au"],
    ["ं", "", "an"],
    ["ः", "", "ah"]
  ],
    examples: []
  },

  Consonants: {
    content:[
    ["क", "", "ka"], ["ख", "", "kha"], ["ग", "", "ga"], ["घ", "", "gha"], ["ङ", "", "nga"],
    ["च", "", "cha"], ["छ", "", "chha"], ["ज", "", "ja"], ["झ", "", "jha"], ["ञ", "", "nya"],
    ["ट", "", "ṭa"], ["ठ", "", "ṭha"], ["ड", "", "ḍa"], ["ढ", "", "ḍha"], ["ण", "", "ṇa"],
    ["त", "", "ta"], ["थ", "", "tha"], ["द", "", "da"], ["ध", "", "dha"], ["न", "", "na"],
    ["प", "", "pa"], ["फ", "", "pha"], ["ब", "", "ba"], ["भ", "", "bha"], ["म", "", "ma"],
    ["य", "", "ya"], ["र", "", "ra"], ["ल", "", "la"], ["व", "", "va"],
    ["श", "", "sha"], ["ष", "", "ṣa"], ["स", "", "sa"], ["ह", "", "ha"],
    ["क्ष", "", "kṣa"], ["त्र", "", "tra"], ["ज्ञ", "", "gya"]
  ],
    examples: []
  },

  ConjunctCharacters: {
    content: [
    ["क्त", "", "kta"],
    ["त्र", "", "tra"],
    ["ज्ञ", "", "gya"],
    ["श्र", "", "shra"],
    ["क्ष", "", "kṣa"],
    ["ज्ञ", "", "gya"],
    ["त्र", "", "tra"],
    ["श्र", "", "śra"],
    ["द्य", "", "dya"],
    ["स्थ", "", "stha"]
  ],
    examples: []
  },

  ChandrabinduAndDot: {
    content: [
    ["ँ", "", "˜"],
    ["ं", "", "an"],
    ["ः", "", "ah"],
    ["़", "", "."],
    ["ऽ", "", "’"]
  ],
    examples: []
  },

  Numbers: {
    content: [
    ["०", "", "shoonya"],
    ["१", "", "ek"],
    ["२", "", "do"],
    ["३", "", "teen"],
    ["४", "", "chaar"],
    ["५", "", "paanch"],
    ["६", "", "chhah"],
    ["७", "", "saat"],
    ["८", "", "aath"],
    ["९", "", "nau"]
  ],
    examples: []
  }
}
;
let currentTopic = null;
let currentSubtopic = null;

function showTopic(topic) {
  const flashcardContainer = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = null;

  flashcardContainer.innerHTML = "";
  topicSelection.classList.add("hidden");
  backButton.classList.remove("hidden");
  backButton.innerText = "← Back to Topics";

  if (typeof data[topic] === "object" && !Array.isArray(data[topic])) {
    showSubtopics(topic);
    return;
  }

  renderFlashcards(data[topic]);
}

function showSubtopics(topic) {
  const container = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  currentTopic = topic;
  currentSubtopic = null;

  container.innerHTML = "";
  topicSelection.classList.add("hidden");
  backButton.classList.remove("hidden");
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

  renderFlashcards(data[topic][subtopic]);
}

function renderFlashcards(flashcardData) {
  const container = document.getElementById("flashcards");
  flashcardData.forEach(([eng, roman, devanagari]) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          ${currentTopic === "devanagariScript" ? `<span class="devanagari-script large">${devanagari}</span>` : `<strong>${eng}</strong>`}
        </div>
        <div class="card-back">
          ${currentTopic === "devanagariScript" ? `<strong>${eng}</strong>` : `<span class="devanagari-script">${devanagari}</span>`}
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

  if (currentTopic && currentSubtopic) {
    showSubtopics(currentTopic);
    currentSubtopic = null;
  } else {
    currentTopic = null;
    topicSelection.classList.remove("hidden");
    backButton.classList.add("hidden");
    flashcardContainer.innerHTML = "";
  }
}
