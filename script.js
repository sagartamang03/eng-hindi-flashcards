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
  ["East", "Purba", "पूर्व"],
  ["West", "Pashchim", "पश्चिम"],
  ["Left", "Bayã", "बायाँ"],
  ["Right", "Dayã", "दायाँ"],
  ["Straight", "Sidhā", "सिधा"],
  ["Back", "Pachhāri", "पछाडि"],
  ["Up", "Mathi", "माथि"],
  ["Down", "Tala", "तल"],
  ["Near", "Najik", "नजिक"],
  ["Far", "Tadhha", "टाढा"],
  ["Across", "Paari", "पारी"],
  ["Between", "Bichmã", "बीचमा"],
  ["Towards", "Tira", "तिर"]
],
Colors: [
  ["Red", "Rato", "रातो"],
  ["Blue", "Nilo", "नीलो"],
  ["Green", "Hariyo", "हरियो"],
  ["Yellow", "Pahelo", "पहेलो"],
  ["Black", "Kalo", "कालो"],
  ["White", "Seto", "सेतो"],
  ["Orange", "Suntalā rang", "सुन्तला रङ"],
  ["Pink", "Gulābi", "गुलाबी"],
  ["Purple", "Baigunī", "बैगुनी"],
  ["Brown", "Khairo", "खैरो"],
  ["Golden", "Sunahari", "सुनहरी"],
  ["Silver", "Chā̃dī", "चाँदी"]
],
Weather: [
  ["Sunny", "Ghaam laageko", "घाम लागेको"],
  ["Cloudy", "Baadal laageko", "बादल लागेको"],
  ["Rainy", "Paani ko mausam","पानीको मौसम"],
  ["Snowy", "hiu pareko mausam", "हिऊँ परेको मौसम"],
  ["Foggy", "Kuhiro", "कुहिरो"],
  ["Hot", "garmi", "गर्मी"],
  ["Cold", "Chiso", "चिसो"],
  ["Dry", "Sukhā", "सुखा"],
  ["Lightning", "Bijuli", "बिजुली"]
],
Fruits_vegetables: [
  ["Apple", "Syaau", "स्याउ"],
  ["Banana", "Kera", "केरा"],
  ["Mango", "Aap", "आँप"],
  ["Orange", "Suntalā", "सुन्तला"],
  ["Grapes", "Angur", "अंगुर"],
  ["Watermelon", "Kharbooja", "खरबुजा"],
  ["Potato", "Aalu", "आलु"],
  ["Tomato", "Golbheda", "गोलभेडा"],
  ["Onion", "Pyāz", "प्याज"],
  ["Carrot", "Gājar", "गाजर"],
  ["Cauliflower", "Kaulee", "काउली"],
  ["Brinjal", "Baignan", "बैगन"],
  ["Cucumber", "Kakro", "काक्रो"],
  ["Chili", "Khursānī", "खुर्सानी"],
  ["Garlic", "Lasun", "लसुन"],
  ["Ginger", "Aduwa", "अदुवा"]
],

  pronouns: {
  subject: [
    ["I", "Ma", "म"],
    ["You (informal)", "Timi", "तिमी"],
    ["You (formal)", "Tapaai", "तपाईं"],
    ["He/She (informal)", "U / Uni", "ऊ / उनी"],
        ["He/She (formal)", "Wahaa", "वहाँ"],

   
    ["this/ that", "Yo / Tyo", "यो / त्यो"],
    ["We", "Hami", "हामी"],
    ["They", "Uniharu / Tiniharu", "उनीहरू / तिनीहरू"]
  ],
  object: [
    ["to Me", "Malai", "मलाई"],
    ["to You (informal)", "Timilai", "तिमीलाई"],
    ["to You (formal)", "Tapaailai", "तपाईंलाई"],
    ["to Him/Her", "Uslaai", "उसलाई"],
    ["to Her (semi-formal)", "Unlaai", "उनलाई"],
    ["to this / that", "Yaslai / Tyaslai", "यसलाई / त्यसलाई"],
    ["to Us", "Haamilai", "हामीलाई"],
    ["to Them", "Uniharulai / Tiniharulai", "उनीहरूलाई / तिनीहरूलाई"]
  ],
  possessive: [
    ["My", "Mero / Mera / Meri", "मेरो / मेरा / मेरी"],
    ["Your (informal)", "Timro / Timra / Timri", "तिमीरो / तिम्रा / तिम्री"],
    ["Your (formal)", "Tapaaiko / Tapaaika / Tapaaiki", "तपाईंको / तपाईंका / तपाईंकी"],
    ["His/Her", "Uskō / Uska / Uski", "उसको / उसका / उसकी"],
    ["Its/ of that", "Yesko / Tyasko", "यसको / त्यसको"],
    ["Our", "Haamro / Haamra / Haamri", "हाम्रो / हाम्रा / हाम्री"],
    ["Their", "Uniharuko / Tiniharuko", "उनीहरूको / तिनीहरूको"]
  ],
  reflexive: [
    ["One's own", "Aafno", "आफ्नो"],
    ["By oneself / Automatically", "Aafai", "आफै"]
  ],
  unspecified: [
    ["Someone", "Kōhī", "कोही"],
    ["Something", "Kehi / Kunai", "केही / कुनै "],
    ["Anyone", "Kōhī pani", "कोही पनि"],
    ["Anything", "Kehi pani / Kunai pani", "केही पनि / कुनै पनि"]
  ]
},

  numbers: [
    ["1", "Ek", "एक"],
    ["2", "Dui", "दुई"],
    ["3", "Tin", "तीन"],
    ["4", "Chaar", "चार"],
    ["5", "Paanch", "पाँच"],
    ["6", "Chha", "छ"],
    ["7", "Saat", "सात"],
    ["8", "Aath", "आठ"],
    ["9", "Nau", "नौ"],
    ["10", "Das", "दस"],
    ["11", "Eghāra", "एघार"],
    ["12", "Bārah", "बाह्र"],
    ["20", "Bīs", "बीस"],
    ["30", "Tīs", "तीस"],
    ["40", "Chālīs", "चालीस"],
    ["50", "Pachās", "पचास"],
    ["60", "Sāṭhī", "साठी"],
    ["70", "Sattari", "सत्तरी"],
    ["80", "Asī", "असी"],
    ["90", "Nabbē", "नब्बे"],
    ["100", "Saye / Ek saye", "सय / एक सय"],
    ["200", "Dui saye", "दुई सय"],
    ["300", "Tin saye", "तीन सय"],
    ["400", "Chaar saye", "चार सय"]
  ],

  daysAndTime: [
    ["What time is it?", "Ahile kati bajyo?", "अहिले कति बज्यो?"],
    ["What day is it today?", "Aaja ke baar ho?", "आज के बार हो?"],
    ["Sunday", "Aaitabaar", "आइतबार"],
    ["Monday", "Sombaar", "सोमबार"],
    ["Tuesday", "Mangalbaar", "मंगलबार"],
    ["Wednesday", "Budhabaar", "बुधबार"],
    ["Thursday", "Bihibaar", "बिहिबार"],
    ["Friday", "Shukrabaar", "शुक्रबार"],
    ["Saturday", "Shanibaar", "शनिबार"],
    ["Yesterday", "Hijo", "हिजो"],
    ["Today", "Aaja", "आज"],
    ["Tomorrow", "Bholi", "भोलि"]
  ],

"verbs": [
    ["To go", "Jāne", "जानु"],
    ["To come", "Aaune", "आउनु"],
    ["To walk", "Hidnu", "हिँड्नु"],
    ["To run", "Dauranu", "दौडनु"],
    ["To live", "Basnu", "बस्नु"],
    ["To see", "Herne", "हेर्नु"],
    ["To hear", "Sunnu", "सुन्नु"],
    ["To eat", "Khaanu", "खानु"],
    ["To drink", "Pinu", "पिउनु"],
    ["To smell", "Sungnu", "सुँग्नु"],
    ["To speak", "Bholnu", "भोल्नु"],
    ["To write", "Lekhnuhos", "लेख्नुहोस्"],
    ["To read", "Padhna", "पढ्नु"],
    ["To listen", "Sunnu", "सुन्नु"],
    ["To tell", "Bhana", "भन"],
    ["To make/do", "Garnu", "गर्नु"],
    ["To take", "Linu", "लिनु"],
    ["To give", "Dinu", "दिनु"],
    ["To open", "Kholnu", "खोल्नु"],
    ["To close", "Band garnu", "बन्द गर्नु"],
    ["To sleep", "Sutnu", "सुत्नु"],
    ["To wake up", "Uthnu", "उठ्नु"],
    ["To bathe", "Nahāunu", "नुहाउनु"],
    ["To cook", "Pakasnu", "पाकाउनु"],
    ["To study", "Padnu", "पढ्नु"]
  ],



"nouns": [
    ["House", "Ghar", "घर"],
    ["Chair", "Kursi", "कुर्सी"],
    ["Table", "Mez", "मेज"],
    ["Door", "Dhwāra / Darwāja", "ढोका / दरवाजा"],
    ["Window", "Jhyālo", "झ्याल"],
    ["Bed", "Palang", "पलङ"],
    ["Fan", "Pankho", "पंखा"],
    ["Light", "Batti", "बत्ती"],
    ["Book", "Kitāb", "किताब"],
    ["Pen", "Kalam", "कलम"],
    ["Pencil", "Pencil", "पेंसिल"],
    ["Notebook", "Copy", "कपी"],
    ["Eraser", "Rubber", "रबर"],
    ["Bag", "Bāg / Basta", "ब्याग / बस्ता"],
    ["Board", "Board", "बोर्ड"],
    ["Marker", "Marker", "मार्कर"],
    ["Water", "Pāni", "पानी"],
    ["Food", "Khānā", "खाना"],
    ["Milk", "Doodh", "दूध"],
    ["Bread", "Double Roti", "डबल रोटी"],
    ["Salt", "Namak", "नून"],
    ["Sugar", "Chini", "चिनी"],
    ["Oil", "Tel", "तेल"],
    ["Rice", "Bhat / Chāwal", "भात / चामल"],
    ["Teacher", "Adhyāpak", "अध्यापक"],
    ["Student", "Chhātra", "छात्र"],
    ["Mother", "Aama", "आमा"],
    ["Father", "Bābā", "बाबा"],
    ["Brother", "Dai", "दाइ"],
    ["Sister", "Didi", "दिदी"],
    ["Friend", "Mitra", "मित्र"],
    ["Child", "Bālachha", "बालक"]
  ],

 "adjectives":[
    ["Big", "Thulo", "ठूलो"],
    ["Small", "Sano", "सानो"],
    ["Tall", "Lamo", "लामो"],
    ["Short", "Sano", "सानो"],
    ["Huge", "Dairo Thulo", "धेरै ठूलो"],
    ["Beautiful", "Ramro", "राम्रो"],
    ["Ugly", "Kharāb", "खराब"],
    ["Clean", "Saphā", "सफा"],
    ["Dirty", "Fāṅgliyo", "फाङ्ग्लियो"],
    ["Smart", "Bujhdār", "बुझदार"],
    ["Hot", "Tato", "तातो"],
    ["Cold", "Chiso", "चिसो"],
    ["Warm", "Naram", "नरम"],
    ["Cool", "Thando", "ठंडो"],
    ["Freezing", "Jamdai", "जम्दै"],
    ["Happy", "Khusi", "खुसी"],
    ["Sad", "Dukhi", "दुखी"],
    ["Angry", "Risālo", "रिसालो"],
    ["Excited", "Utsahit", "उत्साहित"],
    ["Scared", "Darāyeko", "डराएको"],
    ["Fast", "Chito", "छिटो"],
    ["Slow", "Bistārāi", "बिस्तारै"],
    ["Quick", "Chito", "छिटो"],
    ["Speedy", "Tiwro", "तीव्र"],
    ["Sluggish", "Sust", "सुस्त"]
  ],

"adverbs":[
    ["Quickly", "Chito", "छिटो"],
    ["Slowly", "Bistārāi", "बिस्तारै"],
    ["Carefully", "dhyaan diera", "ध्यान दिएर"],
    ["Loudly", "Jorle", "जोरले"],
    ["Silently", "Chupchap", "चुपचाप"],
    ["Always", "Sadhai", "सधैं"],
    ["Never", "Kabhī pani hoina", "कहिले पनि होइन"],
    ["Often", "Prayaḥ", "प्रायः"],
    ["Sometimes", "Kabhī-kaahi", "कहिले काही"],
    ["Today", "Aaja", "आज"],
    ["Yesterday", "Hijo", "हिजो"],
    ["Tomorrow", "Bholi", "भोली"],
    ["Now", "Ahile", "अहिले"],
    ["Later", "Pachi", "पछि"]
  ],
"relationshipWords": [
  ["Family", "Pariwaar", "परिवार"],
    ["Father", "Buva", "बुवा"],
    ["Mother", "Aama", "आमा"],
    ["Brother (elder)", "Daai / daaju", "दाइ / दाजु"],
    ["Brother (younger)", "Bhaai", "भाइ"],
    ["Sister (elder)", "Didi", "दिदी"],
    ["Sister (younger)", "Bahini", "बहिनी"],
    ["Husband", "Shrimaan", "श्रीमान्"],
    ["Wife", "Shrimati", "श्रीमती"],
    ["Son", "Chhora", "छोरा"],
    ["Daughter", "Chhori", "छोरी"],
],

"Time": [
    ["Sunday", "Aaitabar", "आइतबार"],
    ["Monday", "Sombar", "सोमबार"],
    ["Tuesday", "Mangalbar", "मंगलबार"],
    ["Wednesday", "Budhabar", "बुधबार"],
    ["Thursday", "Bihibar", "बिहिबार"],
    ["Friday", "Shukrabar", "शुक्रबार"],
    ["Saturday", "Sanibar", "शनिबार"],
    ["Hour", "Ghaṇṭa", "घण्टा"],
    ["Minute", "Minute", "मिनेट"],
    ["Second", "Second", "सेकेण्ड"],
    ["Morning", "Bihan", "बिहान"],
    ["Afternoon", "Dopahar", "दोपहर"],
    ["Evening", "Sandhya", "साँझ"],
    ["Night", "Raat", "रात"]
  ]
,
"prepositions":[
    ["On", "Mā", "मा"],
    ["Under", "Tāla", "तल्ला"],
    ["In", "Bhitra", "भित्र"],
    ["Out", "Bahira", "बाहिर"],
    ["Beside", "Tira", "तिर"],
    ["Between", "Bīch", "बीच"],
    ["Near", "Nijikaṭ", "नजिकट"],
    ["Over", "Mūpār", "मुनि"],
    ["Behind", "Pīchhū", "पछाडि"],
    ["In front of", "Sāmnā", "सामना"]
  ]
,
"conjunctions": [
    ["And", "Ra", "र"],
    ["But", "Tara", "तर"],
    ["Or", "Wa", "वा"],
    ["Nor", "Na ta", "न त"],
    ["Yet", "Tara pani", "तर पनि"],
    ["Because", "Kinabhane", "किनभने"],
    ["If", "Yadi", "यदि"],
    ["Although", "Yadi pani", "यद्यपि"],
    ["Since", "Jaba dekhi", "जबदेखि"],
    ["While", "Jaba samma", "जबसम्म"]
  ],

 "question":[
    ["What", "Ke", "के"],
    ["Where", "Kahã", "कहाँ"],
    ["When", "Kahile", "कहिले"],
    ["Who", "Ko", "को"],
    ["Why", "Kin", "किन"],
    ["How", "Kasari", "कसरी"],
    ["Which", "Kun", "कुन"]
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
