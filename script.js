const data = {

  know_phrases: [
  ["I know", "Mujhe pata hai", "मुझे पता है"],
  ["You know", "Tumhe pata hai", "तुम्हें पता है"],
  ["He knows", "Use pata hai", "उसे पता है"],
  ["She knows", "Use pata hai", "उसे पता है"],
  ["We know", "Hume pata hai", "हमें पता है"],
  ["They know", "Unhe pata hai", "उन्हें पता है"],
  ["Do you know?", "Kya tumhe pata hai?", "क्या तुम्हें पता है?"],
  ["I don’t know", "Mujhe nahi pata", "मुझे नहीं पता"],
  ["You don’t know", "Tumhe nahi pata", "तुम्हें नहीं पता"]
],
time_phrases: [
  ["It is one o'clock", "Ek baje hai", "एक बजे हैं"],
  ["It is two o'clock", "Do baje hai", "दो बजे हैं"],
  ["It is three o'clock", "Teen baje hai", "तीन बजे हैं"],
  ["It is four o'clock", "Chaar baje hai", "चार बजे हैं"],
  ["It is five o'clock", "Paanch baje hai", "पाँच बजे हैं"],
  ["It is six o'clock", "Chhah baje hai", "छह बजे हैं"],
  ["It is seven o'clock", "Saat baje hai", "सात बजे हैं"],
  ["It is eight o'clock", "Aath baje hai", "आठ बजे हैं"],
  ["It is nine o'clock", "Nau baje hai", "नौ बजे हैं"],
  ["It is ten o'clock", "Das baje hai", "दस बजे हैं"],
  ["It is eleven o'clock", "Gyaarah baje hai", "ग्यारह बजे हैं"],
  ["It is twelve o'clock", "Baarah baje hai", "बारह बजे हैं"],
  ["What time is it?", "Kitne baje hai?", "कितने बजे हैं?"],
  ["It is half past three", "Saaढ़े teen baje hai", "साढ़े तीन बजे हैं"],
  ["It is quarter past five", "Pauhne paanch baje hai", "पौने पाँच बजे हैं"],
  ["It is quarter to four", "Sava chaar baje hai", "सवा चार बजे हैं"]
],
comparative_structures: {
  than_phrases: [
    ["I am taller than you", "Main tumse lamba hoon", "मैं तुमसे लंबा हूँ"],
    ["She is smarter than him", "Woh usse zyada samajhdaar hai", "वह उससे ज़्यादा समझदार है"],
    ["This book is better than that", "Yeh kitaab us kitaab se achhi hai", "यह किताब उस किताब से अच्छी है"],
    ["Today is hotter than yesterday", "Aaj kal se zyada garam hai", "आज कल से ज़्यादा गर्म है"],
    ["Your house is bigger than mine", "Tumhara ghar mere ghar se bada hai", "तुम्हारा घर मेरे घर से बड़ा है"],
    ["I run faster than my friend", "Main apne dost se tez daudta hoon", "मैं अपने दोस्त से तेज दौड़ता हूँ"],
    ["He works harder than before", "Woh pehle se zyada mehnat karta hai", "वह पहले से ज़्यादा मेहनत करता है"],
    ["This road is longer than that road", "Yeh sadak us sadak se lambi hai", "यह सड़क उस सड़क से लंबी है"]
  ],
  
  the_most_phrases: [
    ["He is the tallest in the class", "Woh class mein sabse lamba hai", "वह क्लास में सबसे लंबा है"],
    ["This is the best movie", "Yeh sabse achhi film hai", "यह सबसे अच्छी फ़िल्म है"],
    ["She is the smartest student", "Woh sabse samajhdaar vidyarthi hai", "वह सबसे समझदार विद्यार्थी है"],
    ["This road is the longest", "Yeh sadak sabse lambi hai", "यह सड़क सबसे लंबी है"],
    ["Today is the hottest day", "Aaj sabse garam din hai", "आज सबसे गर्म दिन है"],
    ["Mount Everest is the highest mountain", "Mount Everest sabse ooncha pahad hai", "माउंट एवरेस्ट सबसे ऊँचा पहाड़ है"],
    ["This shop is the cheapest", "Yeh dukaan sabse sasti hai", "यह दुकान सबसे सस्ती है"],
    ["He works the hardest", "Woh sabse zyada mehnat karta hai", "वह सबसे ज़्यादा मेहनत करता है"]
  ]
},

 pronouns: {
    subject: [
      ["I", "Main", "मैं"],
      ["You (informal)", "Tu", "तू"],
      ["You (semi-formal)", "Tum", "तुम"],
      ["You (formal)", "Aap", "आप"],
      ["He", "ye / vo", "ये / वो"],
      ["She", "ye / vo", "ये / वो"],
      ["It", "Ye", "ये"],
      ["We", "Hum", "हम"],
      ["They", "Ye / vo", "ये / वो"]
    ],
    object: [
      ["to Me", "Mujhe / Mujhko", "मुझे / मुझको"],
      ["to You (semi-formal)", "Tumhe / Tumko", "तुम्हें / तुमको"],
      ["to You (formal)", "Aapko", "आपको"],
      ["to Him", "Usse / Usko", "उसे / उसको"],
      ["to Her", "Usse / Usko", "उसे / उसको"],
      ["to It", "Use / Usko", "उसे / उसको"],
      ["to Us", "Humein / Humko", "हमें / हमको"],
      ["to Them", "Unhe / Unko", "उन्हें / उनको"]
    ],
    possessive: [
      ["My", "Mera / Meri / Mere", "मेरा / मेरी / मेरे"],
      ["Your (informal)", "Tumhara / Tumhari / Tumhare", "तुम्हारा / तुम्हारी / तुम्हारे"],
      ["Your (formal)", "Aapka / Aapki / Aapke", "आपका / आपकी / आपके"],
      ["His", "Uska / Uski / Uske", "उसका / उसकी / उसके"],
      ["Her", "Uska / Uski / Uske", "उसका / उसकी / उसके"],
      ["Its", "Uska / Uski / Uske", "उसका / उसकी / उसके"],
      ["Our", "Hamara / Hamari / Hamare", "हमारा / हमारी / हमारे"],
      ["Their", "Unka / Unki / Unke", "उनका / उनकी / उनके"]
    ],
    "reflexive": [
  ["Own (singular masculine)", "Apna", "अपना"],
  ["Own (singular feminine)", "Apni", "अपनी"],
  ["Own (plural masculine or mixed)", "Apne", "अपने"],
  ["Own (plural feminine)", "Apni", "अपनी"],
  ["By oneself / Automatically", "Apne-aap", "अपनेआप"]
],
    unspecified:[
      ["Someone", "Koi", "कोई"],
      ["Something", "Kuch", "कुछ"],
      ["Anyone", "Koi bhi", "कोई भी"],
      ["Anything", "Kuch bhi", "कुछ भी"],
    ],
  
  },
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
 Directions: [
  ["North", "Uttar", "उत्तर"],
  ["South", "Dakshin", "दक्षिण"],
  ["East", "Puurv", "पूर्व"],
  ["West", "Pashchim", "पश्चिम"],
  ["Left", "Baayen", "बाएँ"],
  ["Right", "Daayen", "दाएँ"],
  ["Straight", "Seedha", "सीधा"],
  ["Back", "Peeche", "पीछे"],
  ["Up", "Upar", "ऊपर"],
  ["Down", "Neeche", "नीचे"],
  ["Near", "Paas", "पास"],
  ["Far", "Door", "दूर"],
  ["Turn", "Mudna", "मुड़ना"],
  ["Across", "Par", "पर"],
  ["Between", "Ke beech", "के बीच"],
  ["Around", "Aaspaas", "आसपास"],
  ["Towards", "Ki ore / Taraf", "की ओर / तरफ़"],
],
Colors: [
  ["Red", "Laal", "लाल"],
  ["Blue", "Neela", "नीला"],
  ["Green", "Hara", "हरा"],
  ["Yellow", "Peela", "पीला"],
  ["Black", "Kaala", "काला"],
  ["White", "Safed", "सफ़ेद"],
  ["Orange", "Narangi", "नारंगी"],
  ["Pink", "Gulabi", "गुलाबी"],
  ["Purple", "Baingani", "बैंगनी"],
  ["Brown", "Bhoora", "भूरा"],
  ["Grey", "Slatee", "स्लेटी"],
  ["Golden", "Sunehra", "सुनहरा"],
  ["Silver", "Chaandi", "चाँदी"]
],
Weather: [
  ["Sunny", "Dhoopdaar", "धूपदार"],
  ["Cloudy", "Baadal chhaya", "बादल छाया"],
  ["Rainy", "Barsati", "बरसाती"],
  ["Windy", "Hawadaar", "हवादार"],
  ["Stormy", "Aandhi tufaan", "आंधी तूफ़ान"],
  ["Snowy", "Barfili", "बर्फ़ीली"],
  ["Foggy", "Kohra", "कोहरा"],
  ["Hot", "Garam", "गर्म"],
  ["Cold", "Thanda", "ठंडा"],
  ["Humid", "Adhrata", "आर्द्रता"],
  ["Dry", "Sookha", "सूखा"],
  ["Thunder", "Garaj", "गरज"],
  ["Lightning", "Bijli", "बिजली"]
],
Fruits_vegetables: [
  ["Apple", "Seb", "सेब"],
  ["Banana", "Kela", "केला"],
  ["Mango", "Aam", "आम"],
  ["Orange", "Santra", "संतरा"],
  ["Grapes", "Angoor", "अंगूर"],
  ["Watermelon", "Tarbooj", "तरबूज"],
  ["Papaya", "Papita", "पपीता"],
  ["Pineapple", "Ananas", "अनानास"],
  ["Potato", "Aloo", "आलू"],
  ["Tomato", "Tamatar", "टमाटर"],
  ["Onion", "Pyaaz", "प्याज़"],
  ["Carrot", "Gajar", "गाजर"],
  ["Spinach", "Palak", "पालक"],
  ["Cabbage", "Patta gobhi", "पत्ता गोभी"],
  ["Cauliflower", "Phool gobhi", "फूलगोभी"],
  ["Brinjal", "Baingan", "बैंगन"],
  ["Cucumber", "Kheera", "खीरा"],
  ["Chili", "Mirch", "मिर्च"],
  ["Garlic", "Lahsun", "लहसुन"],
  ["Ginger", "Adrak", "अदरक"]
],

 
daysAndTime: {
    daysAndWeeks: [
      ["Sunday", "Ravivaar", "रविवार"],
      ["Monday", "Somvaar", "सोमवार"],
      ["Tuesday", "Mangalvaar", "मंगलवार"],
      ["Wednesday", "Budhvaar", "बुधवार"],
      ["Thursday", "Guruvaar", "गुरुवार"],
      ["Friday", "Shukravaar", "शुक्रवार"],
      ["Saturday", "Shanivaar", "शनिवार"]
    ],
    timeAndClocks: [
      // You can add time-related words here like ["Hour", "Ghanta", "घंटा"]
    ]
  }
,
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
basicSentences: {
  'present Tense - Is Am Are': {
    positive: [
    ["I am happy", "Main khush hoon", "मैं खुश हूँ"],
    ["You are smart", "Tum samajhdaar ho", "तुम समझदार हो"],
    ["He is tired", "Woh thaka hua hai", "वह थका हुआ है"],
    ["We are ready", "Hum taiyaar hain", "हम तैयार हैं"],
    ["They are here", "Ve yahan hain", "वे यहाँ हैं"]
  ],
  negative: [
    ["I am not sad", "Main udaas nahi hoon", "मैं उदास नहीं हूँ"],
    ["You are not late", "Tum der se nahi ho", "तुम देर से नहीं हो"],
    ["He is not busy", "Woh vyast nahi hai", "वह व्यस्त नहीं है"],
    ["We are not tired", "Hum thake hue nahi hain", "हम थके हुए नहीं हैं"],
    ["They are not wrong", "Ve galat nahi hain", "वे गलत नहीं हैं"]
  ],
  questions: [
    ["Am I right?", "Kya main sahi hoon?", "क्या मैं सही हूँ?"],
    ["Are you okay?", "Kya tum theek ho?", "क्या तुम ठीक हो?"],
    ["Is he here?", "Kya woh yahan hai?", "क्या वह यहाँ है?"],
    ["Are we late?", "Kya hum der se hain?", "क्या हम देर से हैं?"],
    ["Are they ready?", "Kya ve taiyaar hain?", "क्या वे तैयार हैं?"]
  ],
  whQuestions: [
    ["Who am I?", "Main kaun hoon?", "मैं कौन हूँ?"],
    ["What are you?", "Tum kya ho?", "तुम क्या हो?"],
    ["Where is he?", "Woh kahan hai?", "वह कहाँ है?"],
    ["Why are we here?", "Hum yahan kyun hain?", "हम यहाँ क्यों हैं?"],
    ["When are they free?", "Ve kab free hain?", "वे कब फ्री हैं?"]
  ]
  },
  'past Tense - Was Were': {
  positive: [
    ["I was happy", "Main khush tha/thii", "मैं खुश था/थी"],
    ["You were smart", "Tum samajhdaar the", "तुम समझदार थे"],
    ["He was tired", "Woh thaka hua tha", "वह थका हुआ था"],
    ["We were ready", "Hum taiyaar the", "हम तैयार थे"],
    ["They were here", "Ve yahan the", "वे यहाँ थे"]
  ],
  negative: [
    ["I was not sad", "Main udaas nahi tha/thii", "मैं उदास नहीं था/थी"],
    ["You were not late", "Tum der se nahi the", "तुम देर से नहीं थे"],
    ["He was not busy", "Woh vyast nahi tha", "वह व्यस्त नहीं था"],
    ["We were not tired", "Hum thake hue nahi the", "हम थके हुए नहीं थे"],
    ["They were not wrong", "Ve galat nahi the", "वे गलत नहीं थे"]
  ],
  questions: [
    ["Was I right?", "Kya main sahi tha/thii?", "क्या मैं सही था/थी?"],
    ["Were you okay?", "Kya tum theek the?", "क्या तुम ठीक थे?"],
    ["Was he here?", "Kya woh yahan tha?", "क्या वह यहाँ था?"],
    ["Were we late?", "Kya hum der se the?", "क्या हम देर से थे?"],
    ["Were they ready?", "Kya ve taiyaar the?", "क्या वे तैयार थे?"]
  ],
  whQuestions: [
    ["Who was I?", "Main kaun tha/thii?", "मैं कौन था/थी?"],
    ["What were you?", "Tum kya the?", "तुम क्या थे?"],
    ["Where was he?", "Woh kahan tha?", "वह कहाँ था?"],
    ["Why were we here?", "Hum yahan kyun the?", "हम यहाँ क्यों थे?"],
    ["When were they free?", "Ve kab free the?", "वे कब फ्री थे?"]
  ]
}

}
,
tenses: {
  presentTense: {
    presentSimple: {
      positive: [
        ["I eat", "Main khaata hoon", "मैं खाता हूँ"],
        ["You eat", "Tum khaate ho", "तुम खाते हो"],
        ["He eats", "Woh khata hai", "वह खाता है"],
        ["We eat", "Hum khate hain", "हम खाते हैं"],
        ["They eat", "Ve khate hain", "वे खाते हैं"]
      ],
      negative: [
        ["I do not eat", "Main nahi khaata hoon", "मैं नहीं खाता हूँ"],
        ["You do not eat", "Tum nahi khaate ho", "तुम नहीं खाते हो"],
        ["He does not eat", "Woh nahi khata hai", "वह नहीं खाता है"],
        ["We do not eat", "Hum nahi khate hain", "हम नहीं खाते हैं"],
        ["They do not eat", "Ve nahi khate hain", "वे नहीं खाते हैं"]
      ],
      questions: [
        ["Do I eat?", "Kya main khaata hoon?", "क्या मैं खाता हूँ?"],
        ["Do you eat?", "Kya tum khaate ho?", "क्या तुम खाते हो?"],
        ["Does he eat?", "Kya woh khata hai?", "क्या वह खाता है?"],
        ["Do we eat?", "Kya hum khate hain?", "क्या हम खाते हैं?"],
        ["Do they eat?", "Kya ve khate hain?", "क्या वे खाते हैं?"],
      ],
       whQuestions: [
    ["What do I eat?", "Main kya khaata hoon?", "मैं क्या खाता हूँ?"],
    ["Where do you play?", "Tum kahan khelte ho?", "तुम कहाँ खेलते हो?"],
    ["Why does he read?", "Woh kyun padhta hai?", "वह क्यों पढ़ता है?"],
    ["When do we walk?", "Hum kab chalte hain?", "हम कब चलते हैं?"],
    ["What do they write?", "Ve kya likhte hain?", "वे क्या लिखते हैं?"]
  ]
    },
    presentContinuous: {
      positive: [
        ["I am eating", "Main kha raha hoon", "मैं खा रहा हूँ"],
        ["You are eating", "Tum kha rahe ho", "तुम खा रहे हो"],
        ["He is eating", "Woh kha raha hai", "वह खा रहा है"],
        ["We are eating", "Hum kha rahe hain", "हम खा रहे हैं"],
        ["They are eating", "Ve kha rahe hain", "वे खा रहे हैं"]
      ],
      negative: [
        ["I am not eating", "Main nahi kha raha hoon", "मैं नहीं खा रहा हूँ"],
        ["You are not eating", "Tum nahi kha rahe ho", "तुम नहीं खा रहे हो"],
        ["He is not eating", "Woh nahi kha raha hai", "वह नहीं खा रहा है"],
        ["We are not eating", "Hum nahi kha rahe hain", "हम नहीं खा रहे हैं"],
        ["They are not eating", "Ve nahi kha rahe hain", "वे नहीं खा रहे हैं"]
      ],
      questions: [
        ["Am I eating?", "Kya main kha raha hoon?", "क्या मैं खा रहा हूँ?"],
        ["Are you eating?", "Kya tum kha rahe ho?", "क्या तुम खा रहे हो?"],
        ["Is he eating?", "Kya woh kha raha hai?", "क्या वह खा रहा है?"],
        ["Are we eating?", "Kya hum kha rahe hain?", "क्या हम खा रहे हैं?"],
        ["Are they eating?", "Kya ve kha rahe hain?", "क्या वे खा रहे हैं?"]
      ]
    },
    presentPerfect: {
  positive: [
    ["I have eaten", "Main kha chuka hoon", "मैं खा चुका हूँ"],
    ["You have eaten", "Tum kha chuke ho", "तुम खा चुके हो"],
    ["He has eaten", "Woh kha chuka hai", "वह खा चुका है"],
    ["We have eaten", "Hum kha chuke hain", "हम खा चुके हैं"],
    ["They have eaten", "Ve kha chuke hain", "वे खा चुके हैं"]
  ],
  negative: [
    ["I have not eaten", "Main nahi kha chuka hoon", "मैं नहीं खा चुका हूँ"],
    ["You have not eaten", "Tum nahi kha chuke ho", "तुम नहीं खा चुके हो"],
    ["He has not eaten", "Woh nahi kha chuka hai", "वह नहीं खा चुका है"],
    ["We have not eaten", "Hum nahi kha chuke hain", "हम नहीं खा चुके हैं"],
    ["They have not eaten", "Ve nahi kha chuke hain", "वे नहीं खा चुके हैं"]
  ],
  questions: {
  yesNo: [
    ["Have you eaten?", "Kya tumne khaya hai?", "क्या तुमने खाया है?"],
    ["Has she finished?", "Kya usne khatam kiya hai?", "क्या उसने खत्म किया है?"],
    ["Have they arrived?", "Kya ve aa gaye hain?", "क्या वे आ गए हैं?"]
  ],
  wh: [
    ["What have you done?", "Tumne kya kiya hai?", "तुमने क्या किया है?"],
    ["Where have they gone?", "Ve kahaan gaye hain?", "वे कहाँ गए हैं?"],
    ["Why has he left?", "Woh kyun chala gaya hai?", "वह क्यों चला गया है?"]
  ]
}
},
  },
  pastTense: {
    pastSimple: {
      positive: [
        ["I ate", "Maine khaya", "मैंने खाया"],
        ["You ate", "Tumne khaya", "तुमने खाया"],
        ["He ate", "Usne khaya", "उसने खाया"],
        ["We ate", "Humne khaya", "हमने खाया"],
        ["They ate", "Unhone khaya", "उन्होंने खाया"]
      ],
      negative: [
        ["I did not eat", "Maine nahi khaya", "मैंने नहीं खाया"],
        ["You did not eat", "Tumne nahi khaya", "तुमने नहीं खाया"],
        ["He did not eat", "Usne nahi khaya", "उसने नहीं खाया"],
        ["We did not eat", "Humne nahi khaya", "हमने नहीं खाया"],
        ["They did not eat", "Unhone nahi khaya", "उन्होंने नहीं खाया"]
      ],
      questions: [
        ["Did I eat?", "Kya maine khaya?", "क्या मैंने खाया?"],
        ["Did you eat?", "Kya tumne khaya?", "क्या तुमने खाया?"],
        ["Did he eat?", "Kya usne khaya?", "क्या उसने खाया?"],
        ["Did we eat?", "Kya humne khaya?", "क्या हमने खाया?"],
        ["Did they eat?", "Kya unhone khaya?", "क्या उन्होंने खाया?"]
      ]
    },
    pastContinuous: {
      positive: [
        ["I was eating", "Main kha raha tha", "मैं खा रहा था"],
        ["You were eating", "Tum kha rahe the", "तुम खा रहे थे"],
        ["He was eating", "Woh kha raha tha", "वह खा रहा था"],
        ["We were eating", "Hum kha rahe the", "हम खा रहे थे"],
        ["They were eating", "Ve kha rahe the", "वे खा रहे थे"]
      ],
      negative: [
        ["I was not eating", "Main nahi kha raha tha", "मैं नहीं खा रहा था"],
        ["You were not eating", "Tum nahi kha rahe the", "तुम नहीं खा रहे थे"],
        ["He was not eating", "Woh nahi kha raha tha", "वह नहीं खा रहा था"],
        ["We were not eating", "Hum nahi kha rahe the", "हम नहीं खा रहे थे"],
        ["They were not eating", "Ve nahi kha rahe the", "वे नहीं खा रहे थे"]
      ],
      questions: [
        ["Was I eating?", "Kya main kha raha tha?", "क्या मैं खा रहा था?"],
        ["Were you eating?", "Kya tum kha rahe the?", "क्या तुम खा रहे थे?"],
        ["Was he eating?", "Kya woh kha raha tha?", "क्या वह खा रहा था?"],
        ["Were we eating?", "Kya hum kha rahe the?", "क्या हम खा रहे थे?"],
        ["Were they eating?", "Kya ve kha rahe the?", "क्या वे खा रहे थे?"]
      ]
    },
    "past Perfect": {
  positive: [
    ["I had eaten", "Main kha chuka tha", "मैं खा चुका था"],
    ["You had eaten", "Tum kha chuke the", "तुम खा चुके थे"],
    ["He had eaten", "Woh kha chuka tha", "वह खा चुका था"],
    ["We had eaten", "Hum kha chuke the", "हम खा चुके थे"],
    ["They had eaten", "Ve kha chuke the", "वे खा चुके थे"]
  ],
  negative: [
    ["I had not eaten", "Main nahi kha chuka tha", "मैं नहीं खा चुका था"],
    ["You had not eaten", "Tum nahi kha chuke the", "तुम नहीं खा चुके थे"],
    ["He had not eaten", "Woh nahi kha chuka tha", "वह नहीं खा चुका था"],
    ["We had not eaten", "Hum nahi kha chuke the", "हम नहीं खा चुके थे"],
    ["They had not eaten", "Ve nahi kha chuke the", "वे नहीं खा चुके थे"]
  ],
  questions: [
    ["Had I eaten?", "Kya main kha chuka tha?", "क्या मैं खा चुका था?"],
    ["Had you eaten?", "Kya tum kha chuke the?", "क्या तुम खा चुके थे?"],
    ["Had he eaten?", "Kya woh kha chuka tha?", "क्या वह खा चुका था?"],
    ["Had we eaten?", "Kya hum kha chuke the?", "क्या हम खा चुके थे?"],
    ["Had they eaten?", "Kya ve kha chuke the?", "क्या वे खा चुके थे?"]
  ]
},
  },
  futureTense: {
    futureSimple: {
      positive: [
        ["I will eat", "Main khaaunga", "मैं खाऊंगा"],
        ["You will eat", "Tum khaaoge", "तुम खाओगे"],
        ["He will eat", "Woh khaaega", "वह खाएगा"],
        ["We will eat", "Hum khaaenge", "हम खाएंगे"],
        ["They will eat", "Ve khaaenge", "वे खाएंगे"]
      ],
      negative: [
        ["I will not eat", "Main nahi khaaunga", "मैं नहीं खाऊंगा"],
        ["You will not eat", "Tum nahi khaaoge", "तुम नहीं खाओगे"],
        ["He will not eat", "Woh nahi khaaega", "वह नहीं खाएगा"],
        ["We will not eat", "Hum nahi khaaenge", "हम नहीं खाएंगे"],
        ["They will not eat", "Ve nahi khaaenge", "वे नहीं खाएंगे"]
      ],
      questions: [
        ["Will I eat?", "Kya main khaaunga?", "क्या मैं खाऊंगा?"],
        ["Will you eat?", "Kya tum khaaoge?", "क्या तुम खाओगे?"],
        ["Will he eat?", "Kya woh khaaega?", "क्या वह खाएगा?"],
        ["Will we eat?", "Kya hum khaaenge?", "क्या हम खाएंगे?"],
        ["Will they eat?", "Kya ve khaaenge?", "क्या वे खाएंगे?"]
      ]
    },
    futureContinuous: {
      positive: [
        ["I will be eating", "Main kha raha honga", "मैं खा रहा होगा"],
        ["You will be eating", "Tum kha rahe hoge", "तुम खा रहे होगे"],
        ["He will be eating", "Woh kha raha hoga", "वह खा रहा होगा"],
        ["We will be eating", "Hum kha rahe honge", "हम खा रहे होंगे"],
        ["They will be eating", "Ve kha rahe honge", "वे खा रहे होंगे"]
      ],
      negative: [
        ["I will not be eating", "Main nahi kha raha honga", "मैं नहीं खा रहा होगा"],
        ["You will not be eating", "Tum nahi kha rahe hoge", "तुम नहीं खा रहे होगे"],
        ["He will not be eating", "Woh nahi kha raha hoga", "वह नहीं खा रहा होगा"],
        ["We will not be eating", "Hum nahi kha rahe honge", "हम नहीं खा रहे होंगे"],
        ["They will not be eating", "Ve nahi kha rahe honge", "वे नहीं खा रहे होंगे"]
      ],
      questions: [
        ["Will I be eating?", "Kya main kha raha honga?", "क्या मैं खा रहा होगा?"],
        ["Will you be eating?", "Kya tum kha rahe hoge?", "क्या तुम खा रहे होगे?"],
        ["Will he be eating?", "Kya woh kha raha hoga?", "क्या वह खा रहा होगा?"],
        ["Will we be eating?", "Kya hum kha rahe honge?", "क्या हम खा रहे होंगे?"],
        ["Will they be eating?", "Kya ve kha rahe honge?", "क्या वे खा रहे होंगे?"]
      ]
    }
  }
}
,
wantSentences: {
  want: {
    affirmative: [
      ["I want tea.", "Mujhe chai chahiye.", "मुझे चाय चाहिए।"],
            ["I need water.", "Mujhe paani ki zaroorat hai.", "मुझे पानी की ज़रूरत है।"],
      ["She needs help.", "Use madad ki zaroorat hai.", "उसे मदद की ज़रूरत है।"],
      ["They need a taxi.", "Unhe taxi ki zaroorat hai.", "उन्हें टैक्सी की ज़रूरत है।"],
    ],
    negative: [
      ["I don't want food.", "Mujhe khana nahin chahiye.", "मुझे खाना नहीं चाहिए।"],
      ["I don't need anything.", "Mujhe kuch nahin chahiye.", "मुझे कुछ नहीं चाहिए।"]
    ],
    questions: [
      ["Do you want coffee?", "Kya aapko coffee chahiye?", "क्या आपको कॉफ़ी चाहिए?"],
      ["What do you want?", "Aapko kya chahiye?", "आपको क्या चाहिए?"],
      ["Do you need anything?", "Kya aapko kuch chahiye?", "क्या आपको कुछ चाहिए?"],
      ["What do you need?", "Aapko kya chahiye?", "आपको क्या चाहिए?"],
    ]
  },
  "want To": {
    affirmative: [
      ["She wants to dance.", "Vah naachna chahti hai.", "वह नाचना चाहती है।"],
      ["They want to go home.", "Ve ghar jaana chahte hain.", "वे घर जाना चाहते हैं।"]
    ],
    negative: [
      ["He doesn't want to sleep.", "Vah sona nahin chahta hai.", "वह सोना नहीं चाहता है।"],
      ["They don't want to study.", "Ve padhna nahin chahte hain.", "वे पढ़ना नहीं चाहते हैं।"]
    ],
    questions: [
      ["Does she want to come?", "Kya vah aana chahti hai?", "क्या वह आना चाहती है?"],
      ["Why do you want to go?", "Aap kyon jaana chahte hain?", "आप क्यों जाना चाहते हैं?"],
      ["Who do you want to meet?", "Aap kis se milna chahte hain?", "आप किससे मिलना चाहते हैं?"]
    ]
  }
}
,
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
likeSentences: {
  like: {
    affirmative: [
      ["I like tea.", "Mujhe chai pasand hai.", "मुझे चाय पसंद है।"]
    ],
    negative: [
      ["They don't like movies.", "Unhe filmein pasand nahin hain.", "उन्हें फिल्में पसंद नहीं हैं।"]
    ],
    questions: {
      yesNo: [
        ["Do you like spicy food?", "Kya aapko masaledaar khana pasand hai?", "क्या आपको मसालेदार खाना पसंद है?"]
      ],
      wh: [
        ["What do you like?", "Aapko kya pasand hai?", "आपको क्या पसंद है?"]
      ]
    }
  },
  likeTo: {
    affirmative: [
      ["She likes to read books.", "Use kitabein padhna pasand hai.", "उसे किताबें पढ़ना पसंद है।"]
    ],
    negative: [],
    questions: {
      yesNo: [],
      wh: []
    }
  }
},

GerundInfinitives:{
  "verb+ne / ne ke liye ":{
   affirmative: [
      ["She wants to dance.", "Vah naachna chahti hai.", "वह नाचना चाहती है।"],
      ["They want to go home.", "Ve ghar jaana chahte hain.", "वे घर जाना चाहते हैं।"]
    ],
    negative: [
      ["He doesn't want to sleep.", "Vah sona nahin chahta hai.", "वह सोना नहीं चाहता है।"],
      ["They don't want to study.", "Ve padhna nahin chahte hain.", "वे पढ़ना नहीं चाहते हैं।"]
    ],
    questions: {
      yesNo: [
        ["Do you like spicy food?", "Kya aapko masaledaar khana pasand hai?", "क्या आपको मसालेदार खाना पसंद है?"]
      ],
      wh: [
        ["What do you like?", "Aapko kya pasand hai?", "आपको क्या पसंद है?"]
      ]
    }
  },
  "verb+na ":{
   affirmative: [
      ["She wants to dance.", "Vah naachna chahti hai.", "वह नाचना चाहती है।"],
      ["They want to go home.", "Ve ghar jaana chahte hain.", "वे घर जाना चाहते हैं।"]
    ],
    negative: [
      ["He doesn't want to sleep.", "Vah sona nahin chahta hai.", "वह सोना नहीं चाहता है।"],
      ["They don't want to study.", "Ve padhna nahin chahte hain.", "वे पढ़ना नहीं चाहते हैं।"]
    ],
    questions: {
      yesNo: [
        ["Do you like spicy food?", "Kya aapko masaledaar khana pasand hai?", "क्या आपको मसालेदार खाना पसंद है?"]
      ],
      wh: [
        ["What do you like?", "Aapko kya pasand hai?", "आपको क्या पसंद है?"]
      ]
    }
  }
},
  

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
 "Commands": [
  ["Come here.", "Yahaan aaiye.", "यहाँ आइए।"],
  ["Go there.", "Wahan jaiye.", "वहाँ जाइए।"],
  ["Listen carefully.", "Dhyaan se suniye.", "ध्यान से सुनिए।"],
  ["Please stop here.", "Kripya yahaan rukiyega.", "कृपया यहाँ रुकीए।"],
  ["Speak slowly.", "Dheere boliye.", "धीरे बोलिए।"],
  ["Give me that.", "Mujhe woh dijiye.", "मुझे वह दीजिए।"],
  ["Don't do that.", "Woh mat kijiye.", "वह मत कीजिए।"]
],
verbs: {
  movement: [
    ["To go", "Jaana", "जाना"],
    ["To come", "Aana", "आना"],
    ["To walk", "Chalna", "चलना"],
    ["To run", "Daudna", "दौड़ना"],
    ["To live", "Rehna", "रहना"]
  ],
  senses: [
    ["To see", "Dekhna", "देखना"],
    ["To hear", "Sunnna", "सुनना"],
    ["To eat", "Khana", "खाना"],
    ["To drink", "Peena", "पीना"],
    ["To smell", "Sungna", "सूंघना"]  // Added to make 5 in this category
  ],
  communication: [
    ["To speak", "Bolna", "बोलना"],
    ["To write", "Likhna", "लिखना"],
    ["To read", "Padhna", "पढ़ना"],
    ["To listen", "Sunna", "सुनना"],  // Alternative form from "hear"
    ["To tell", "Batana", "बताना"]   // Added for variety
  ],
  physicalActions: [
    ["To make/do", "Karna", "करना"],
    ["To take", "Lena", "लेना"],
    ["To give", "Dena", "देना"],
    ["To open", "Kholna", "खोलना"],
    ["To close", "Band karna", "बंद करना"]
  ],
  dailyActivities: [
    ["To sleep", "Sona", "सोना"],
    ["To wake up", "Jaagna", "जागना"],
    ["To bathe", "Nahna", "नहाना"],
    ["To cook", "Pakana", "पकाना"],
    ["To study", "Padhna", "पढ़ना"]
  ]
}
,
nouns: {
  "Household Items": [
    ["House", "Ghar", "घर"],
    ["Chair", "Kursi", "कुर्सी"],
    ["Table", "Mez", "मेज़"],
    ["Door", "Dwaar / Darwaaza", "द्वार / दरवाज़ा"],
    ["Window", "Khidki", "खिड़की"],
    ["Bed", "Palang", "पलंग"],
    ["Fan", "Pankha", "पंखा"],
    ["Light", "Roshni / Bulb", "रोशनी / बल्ब"]
  ],
  "School Supplies": [
    ["Book", "Kitaab", "किताब"],
    ["Pen", "Kalam", "कलम"],
    ["Pencil", "Pencil", "पेंसिल"],
    ["Notebook", "Copy", "कॉपी"],
    ["Eraser", "Rubber", "रबर"],
    ["Bag", "Basta", "बस्ता"],
    ["Board", "Board", "बोर्ड"],
    ["Marker", "Marker", "मार्कर"]
  ],
  "Essentials": [
    ["Water", "Paani", "पानी"],
    ["Food", "Khaana", "खाना"],
    ["Milk", "Doodh", "दूध"],
    ["Bread", "Double Roti", "डबल रोटी"],
    ["Salt", "Namak", "नमक"],
    ["Sugar", "Cheeni", "चीनी"],
    ["Oil", "Tel", "तेल"],
    ["Rice", "Chawal", "चावल"]
  ],
  "People": [
    ["Teacher", "Adhyaapak", "अध्यापक"],
    ["Student", "Chhaatra", "छात्र"],
    ["Mother", "Maa", "माँ"],
    ["Father", "Pita", "पिता"],
    ["Brother", "Bhai", "भाई"],
    ["Sister", "Behen", "बहन"],
    ["Friend", "Dost", "दोस्त"],
    ["Child", "Baccha", "बच्चा"]
  ],

  "Plural Nouns": {
  "i ending": [
    ["Girl - Ladki (लड़की)", "Ladkiyaan", "लड़कियाँ"],
    ["Chair - Kursi (कुर्सी)", "Kursiyan", "कुर्सियाँ"],
    ["River - Nadi (नदी)", "Nadiyaan", "नदियाँ"],
    ["Story - Kahani (कहानी)", "Kahaniyaan", "कहानियाँ"]
  ],
  "a ending": [
    ["Boy - Ladka (लड़का)", "Ladke", "लड़के"],
    ["Child - Baccha (बच्चा)", "Bacche", "बच्चे"],
    ["Man - Aadmi (आदमी)", "Aadmi", "आदमी"],
    ["Room - Kamra (कमरा)", "Kamre", "कमरे"]
  ]
},
"Oblique Case": {
  "singular": [
    ["Room - Kamra (कमरा)", "Kamre mein", "कमरे में"],
    ["Boy - Ladka (लड़का)", "Ladke ke saath", "लड़के के साथ"],
    ["Teacher - Adhyaapak (अध्यापक)", "Adhyaapak se", "अध्यापक से"],
    ["Child - Baccha (बच्चा)", "Bacche ko", "बच्चे को"],
    ["Friend - Dost (दोस्त)", "Dost ke paas", "दोस्त के पास"]
  ],
  "plural": [
    ["Rooms - Kamre (कमरे)", "Kamron mein", "कमरों में"],
    ["Boys - Ladke (लड़के)", "Ladkon ke saath", "लड़कों के साथ"],
    ["Teachers - Adhyaapak (अध्यापक)", "Adhyaapakon se", "अध्यापकों से"],
    ["Children - Bacche (बच्चे)", "Bacchon ko", "बच्चों को"],
    ["Friends - Dost (दोस्त)", "Doston ke paas", "दोस्तों के पास"]
  ]
}

}
,
adjectives: {
  size: [
    ["Big", "Bada", "बड़ा"],
    ["Small", "Chhota", "छोटा"],
    ["Tall", "Lamba", "लंबा"],
    ["Short", "Chhota", "छोटा"],          // 'Naata' is dialectal or less common; 'Chhota' is widely used
  ],
  appearance: [
    ["Beautiful", "Sundar", "सुंदर"],
    ["Ugly", "Bura", "बुरा"],              // 'Bikaar' is not commonly used; 'Bura' or 'Badsoorat' better
    ["Clean", "Saaf", "साफ़"],
    ["Dirty", "Ganda", "गंदा"],
    ["Clever", "Chaalaak", "चालाक"],
    ["Cute", "Pyarā", "प्यारा"],         // Used for females or objects
  ],
  temperature: [
    ["Hot", "Garam", "गरम"],
    ["Cold", "Thanda", "ठंडा"],
  ],
  emotions: [
    ["Happy", "Khush", "खुश"],
    ["Sad", "Udaas", "उदास"],
    ["Angry", "Gussa", "गुस्सा"],
    ["Scared", "Dara Hua", "डरा हुआ"],
    ["Nervous", "Ghabraya Hua", "घबराया हुआ"],
    ["Calm", "Shant", "शांत"],
    ["Surprised", "Hairan", "हैरान"]
  ],
  speed: [
    ["Fast", "Tez", "तेज़"],
    ["Slow", "Dheere", "धीरे"],
    ["Quick", "Jaldi", "जल्दी"],
  ]
}


,
adverbs: {
  manner: [
    ["Quickly", "Jaldi", "जल्दी"],
    ["Slowly", "Dheere", "धीरे"],
    ["Carefully", "Savdhaani se", "सावधानी से"],
    ["Loudly", "Zor se", "ज़ोर से"],
    ["Silently", "Chupchaap", "चुपचाप"]
  ],
  frequency: [
    ["Always", "Hamesha", "हमेशा"],
    ["Never", "Kabhi nahin", "कभी नहीं"],
    ["Often", "Aksar", "अक्सर"],
    ["Sometimes", "Kabhi kabhi", "कभी कभी"],
    ["Rarely", "Kabhi kabhaar", "कभी कभार"]
  ],
  time: [
    ["Today", "Aaj", "आज"],
    ["Yesterday", "Kal", "कल"],
    ["Tomorrow", "Kal", "कल"],
    ["Now", "Abhi", "अभी"],
    ["Later", "Baad mein", "बाद में"]
  ]
},

"relationshipWords": [
  ["Mother", "Maa", "माँ"],
  ["Father", "Pita", "पिता"],
  ["Brother", "Bhai", "भाई"],
  ["Sister", "Behen", "बहन"],
  ["Friend", "Dost", "दोस्त"],
  ["Husband", "Pati", "पति"],
  ["Wife", "Patni", "पत्नी"],
  ["Son", "Beta", "बेटा"],
  ["Daughter", "Betii", "बेटी"]
],

"Time": {
  "daysOfWeek": [
    ["Sunday", "Ravivaar", "रविवार"],
    ["Monday", "Somvaar", "सोमवार"],
    ["Tuesday", "Mangalvaar", "मंगलवार"],
    ["Wednesday", "Budhvaar", "बुधवार"],
    ["Thursday", "Guruvaar", "गुरुवार"],
    ["Friday", "Shukravaar", "शुक्रवार"],
    ["Saturday", "Shanivaar", "शनिवार"]
  ],
  "timeUnits": [
    ["Hour", "Ghanta", "घंटा"],
    ["Minute", "Minute", "मिनट"],
    ["Second", "Second", "सेकंड"],
    ["Morning", "Subah", "सुबह"],
    ["Afternoon", "Dopahar", "दोपहर"],
    ["Evening", "Shaam", "शाम"],
    ["Night", "Raat", "रात"]
  ]
},

prepositions: {
  place: [
    ["On", "Par", "पर"],
    ["Under", "Neeche", "नीचे"],
    ["In", "Mein", "में"],
    ["Out", "Baahar", "बाहर"],
    ["Beside", "Bagal mein", "बगल में"]
  ],
  position: [
    ["Between", "Beech mein", "बीच में"],
    ["Near", "Paas", "पास"],
    ["Over", "Upar", "ऊपर"],
    ["Behind", "Peeche", "पीछे"],
    ["In front of", "Ke saamne", "के सामने"]
  ]
}
,
 conjunctions: {
  coordination: [
    ["And", "Aur", "और"],
    ["But", "Lekin", "लेकिन"],
    ["Or", "Ya", "या"],
    ["Nor", "Na to", "ना तो"],
    ["Yet", "Phir bhi", "फिर भी"]
  ],
  subordination: [
    ["Because", "Kyonki", "क्योंकि"],
    ["If", "Agar", "अगर"],
    ["Although", "Haalaanki", "हालांकि"],
    ["Since", "Jab se", "जब से"],
    ["While", "Jab tak", "जब तक"]
  ]
}
,
"question": {
  "Wh-Question Words": [
    ["What", "Kya", "क्या"],
    ["Where", "Kahan", "कहाँ"],
    ["When", "Kab", "कब"],
    ["Who", "Kaun", "कौन"],
    ["Why", "Kyon", "क्यों"],
    ["How", "Kaise", "कैसे"],
    ["Which", "Kaun sa", "कौन सा"]
  ],
  "Yes / No Question Words": [
    ["Are you", "Kya tum", "क्या तुम"],
    ["Is he", "Kya woh", "क्या वह"],
    ["Do you", "Kya aap", "क्या आप"]
  ]
}
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
let currentPath = [];

function showFlashcardsAtPath(path = []) {
  const container = document.getElementById("flashcards");
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");

  // Hide main topic selection once inside data
  topicSelection.classList.add("hidden");
  backButton.classList.remove("hidden");

  // Traverse data object by path
  let node = data;
  for (const key of path) {
    if (node && typeof node === "object" && key in node) {
      node = node[key];
    } else {
      container.innerHTML = "<p>No data found at this path.</p>";
      backButton.innerText = "← Back";
      return;
    }
  }

  container.innerHTML = ""; // Clear previous content

  if (Array.isArray(node)) {
    // We reached an array of flashcards - display cards
    node.forEach(([eng, roman, devanagari]) => {
      const card = document.createElement("div");
      card.className = "card";

      // Customize for devanagariScript topic if you want:
      if (path[0] === "devanagariScript") {
        card.innerHTML = `
          <div class="card-inner">
            <div class="card-front">
              <span class="devanagari-script large">${devanagari}</span>
            </div>
            <div class="card-back">
              <strong>${eng}</strong>
              <span class="romanized-script">${roman}</span>
            </div>
          </div>
        `;
      } else {
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
      }

      card.addEventListener("click", () => card.classList.toggle("flipped"));
      container.appendChild(card);
    });

    backButton.innerText = "← Back";
  } else if (typeof node === "object" && node !== null) {
    // Node is an object - show buttons for subtopics/keys
    Object.keys(node).forEach(subkey => {
      const btn = document.createElement("button");
      btn.className = "subtopic-button";
      btn.innerText = subkey.charAt(0).toUpperCase() + subkey.slice(1);
      btn.onclick = () => {
        currentPath.push(subkey);
        showFlashcardsAtPath(currentPath);
      };
      container.appendChild(btn);
    });

    backButton.innerText = "← Back";
  } else {
    container.innerHTML = "<p>Invalid data format.</p>";
    backButton.innerText = "← Back";
  }
}

function showTopic(topic) {
  currentPath = [topic];
  showFlashcardsAtPath(currentPath);
}

function goBackToTopics() {
  const topicSelection = document.getElementById("topic-selection");
  const backButton = document.getElementById("back-to-topics");
  const container = document.getElementById("flashcards");

  if (currentPath.length > 1) {
    // Go back one level in the path
    currentPath.pop();
    showFlashcardsAtPath(currentPath);
  } else if (currentPath.length === 1) {
    // Back to main topics list
    currentPath = [];
    container.innerHTML = "";
    topicSelection.classList.remove("hidden");
    backButton.classList.add("hidden");
  } else {
    // Already at main topics
    container.innerHTML = "";
    topicSelection.classList.remove("hidden");
    backButton.classList.add("hidden");
  }
}
