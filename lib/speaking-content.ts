export const speakingBandDescriptors = [
  {
    band: "9",
    fluency:
      "Speaks fluently with only rare repetition or self-correction. Any hesitation is content-related rather than to find words or grammar. Speaks coherently with fully appropriate cohesive features and develops topics fully and appropriately.",
    lexical:
      "Uses vocabulary with full flexibility and precision in all topics. Uses idiomatic language naturally and accurately.",
    grammar:
      "Uses a full range of structures naturally and appropriately. Produces consistently accurate structures apart from slips characteristic of native speaker speech.",
    pronunciation:
      "Uses a full range of pronunciation features with precision and subtlety. Sustains flexible use of features throughout and is effortless to understand.",
  },
  {
    band: "8",
    fluency:
      "Speaks fluently with only occasional repetition or self-correction. Hesitation is usually content-related and only rarely to search for language. Develops topics coherently and appropriately.",
    lexical:
      "Uses a wide vocabulary resource readily and flexibly to convey precise meaning. Uses less common and idiomatic vocabulary skilfully, with occasional inaccuracies, and uses paraphrase effectively as required.",
    grammar:
      "Uses a wide range of structures flexibly. Produces a majority of error-free sentences with only very occasional inappropriacies or basic/non-systematic errors.",
    pronunciation:
      "Uses a wide range of pronunciation features and sustains flexible use, with only occasional lapses. Is easy to understand throughout; L1 accent has minimal effect on intelligibility.",
  },
  {
    band: "7",
    fluency:
      "Speaks at length without noticeable effort or loss of coherence. May demonstrate language-related hesitation at times, or some repetition and/or self-correction. Uses a range of connectives and discourse markers with some flexibility.",
    lexical:
      "Uses vocabulary flexibly to discuss a variety of topics. Uses some less common and idiomatic vocabulary and shows some awareness of style and collocation, with some inappropriate choices. Uses paraphrase effectively.",
    grammar:
      "Uses a range of complex structures with some flexibility. Frequently produces error-free sentences, though some grammatical mistakes persist.",
    pronunciation:
      "Shows all the positive features of Band 6 and some, but not all, of the positive features of Band 8.",
  },
  {
    band: "6",
    fluency:
      "Is willing to speak at length, though may lose coherence at times due to occasional repetition, self-correction or hesitation. Uses a range of connectives and discourse markers but not always appropriately.",
    lexical:
      "Has a wide enough vocabulary to discuss topics at length and make meaning clear in spite of inappropriacies. Generally paraphrases successfully.",
    grammar:
      "Uses a mix of simple and complex structures, but with limited flexibility. May make frequent mistakes with complex structures though these rarely cause comprehension problems.",
    pronunciation:
      "Uses a range of pronunciation features with mixed control. Shows some effective use of features but this is not sustained. Can generally be understood throughout, though mispronunciation of individual words or sounds reduces clarity at times.",
  },
  {
    band: "5",
    fluency:
      "Usually maintains flow of speech but uses repetition, self-correction and/or slow speech to keep going. May over-use certain connectives and discourse markers. Produces simple speech fluently, but more complex communication causes fluency problems.",
    lexical:
      "Manages to talk about familiar and unfamiliar topics but uses vocabulary with limited flexibility. Attempts to use paraphrase but with mixed success.",
    grammar:
      "Produces basic sentence forms with reasonable accuracy. Uses a limited range of more complex structures, but these usually contain errors and may cause some comprehension problems.",
    pronunciation:
      "Shows all the positive features of Band 4 and some, but not all, of the positive features of Band 6.",
  },
  {
    band: "4",
    fluency:
      "Cannot respond without noticeable pauses and may speak slowly, with frequent repetition and self-correction. Links basic sentences but with repetitious use of simple connectives and some breakdowns in coherence.",
    lexical:
      "Can talk about familiar topics but can only convey basic meaning on unfamiliar topics and makes frequent errors in word choice. Rarely attempts paraphrase.",
    grammar:
      "Produces basic sentence forms and some correct simple sentences, but subordinate structures are rare. Errors are frequent and may lead to misunderstanding.",
    pronunciation:
      "Uses a limited range of pronunciation features; attempts to control features but lapses are frequent. Mispronunciations are frequent and cause some difficulty for the listener.",
  },
  {
    band: "3",
    fluency:
      "Speaks with long pauses, has limited ability to link simple sentences, gives only simple responses and is frequently unable to convey a basic message.",
    lexical:
      "Uses simple vocabulary to convey personal information and has insufficient vocabulary for less familiar topics.",
    grammar:
      "Attempts basic sentence forms but with limited success, or relies on apparently memorised utterances. Makes numerous errors except in memorised expressions.",
    pronunciation:
      "Shows some of the features of Band 2 and some, but not all, of the positive features of Band 4.",
  },
  {
    band: "2",
    fluency: "Pauses lengthily before most words; little communication is possible.",
    lexical: "Only produces isolated words or memorised utterances.",
    grammar: "Cannot produce basic sentence forms.",
    pronunciation: "Speech is often unintelligible.",
  },
  {
    band: "1",
    fluency: "No communication possible; no rateable language.",
    lexical: "No descriptors for this criterion.",
    grammar: "No descriptors for this criterion.",
    pronunciation: "No descriptors for this criterion.",
  },
  {
    band: "0",
    fluency: "Does not attend.",
    lexical: "—",
    grammar: "—",
    pronunciation: "—",
  },
] as const;

export const speakingAssessmentCriteria = [
  {
    name: "Fluency and Coherence",
    question:
      "Do you speak in a fluent way that is easy to understand? Do you link your ideas together clearly?",
  },
  {
    name: "Lexical Resource",
    question:
      "Can you use a range of vocabulary accurately and effectively? Can you explain an idea if you do not know a particular word?",
  },
  {
    name: "Grammatical Range and Accuracy",
    question:
      "Can you use a range of grammatical structures rather than repeating basic structures? Are your sentences accurate?",
  },
  {
    name: "Pronunciation",
    question:
      "Is your speech clear and easy to understand? Do you use stress and intonation to add meaning?",
  },
] as const;

export const speakingParts = [
  {
    number: "01",
    title: "Introduction and interview",
    duration: "3–4 minutes",
    summary:
      "The examiner confirms your identity and asks general questions about familiar topics such as your home, interests, and everyday life.",
    strategies: [
      "Answer naturally; the questions are designed to help you settle into the test.",
      "Develop your answers with a reason, detail, or example instead of replying with only one word.",
      "Short answers are fine when they answer the question; add enough detail to show how you communicate.",
    ],
    sampleGroups: [
      {
        title: "Childhood",
        questions: [
          "What is your happiest childhood memory?",
          "Did you have a lot of friends when you were a child?",
          "What did you enjoy doing most in your childhood?",
          "Do you think children today have a better life than in the past?",
        ],
      },
      {
        title: "Accommodation",
        questions: [
          "Do you live in a house or an apartment?",
          "What is your favorite room in your home?",
          "What kind of home would you like to have in the future?",
        ],
      },
      {
        title: "Food",
        questions: [
          "What is your favorite food?",
          "Do you like cooking?",
          "What kinds of food are popular in your country?",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Individual long turn",
    duration: "3–4 minutes",
    summary:
      "You receive a task card, have one minute to prepare, then speak for up to two minutes. The examiner may ask one or two follow-up questions on the topic.",
    strategies: [
      "Use your preparation minute to note key points, not to write full sentences.",
      "Plan a simple opening and closing to help shape your answer.",
      "Speak about the topic until the examiner stops you.",
      "A personal story can help you connect the points and develop your answer.",
    ],
    cueCard: {
      title: "Describe a time you helped someone.",
      points: [
        "Who you helped",
        "How you helped them",
        "Where this happened",
        "And explain how you felt about helping them",
      ],
    },
  },
  {
    number: "03",
    title: "Two-way discussion",
    duration: "4–5 minutes",
    summary:
      "The examiner asks broader questions related to the topic from Part 2. You are expected to explain, elaborate, give examples, and explore different ideas.",
    strategies: [
      "Develop your opinions with explanations and relevant examples.",
      "Consider more than one perspective when a question invites discussion.",
      "Treat this as a chance to show how you analyse and communicate ideas.",
    ],
    questions: [
      "How has technology changed the way we communicate?",
      "Do you think children spend too much time on screens?",
      "What are the potential dangers of artificial intelligence?",
      "Will technology ever completely replace human teachers?",
    ],
  },
] as const;

export const speakingTips = [
  "You do not need to sound overly formal. Aim for a natural, respectful conversation.",
  "Answer truthfully when you can. If you invent an example, keep it plausible and consistent.",
  "Avoid unsupported statistics; explain your ideas in your own words.",
  "Idiomatic expressions can sound natural when they fit, but avoid forcing or overusing them.",
  "Adapt your response to the question and the part of the test.",
] as const;

export const speakingFluencyTips = [
  "Speak calmly and at a pace that lets you express your ideas clearly.",
  "Focus on communicating your ideas; there is no single correct opinion for open questions.",
  "Practise organising answers so that each point connects to the next.",
  "It is normal to pause or use a brief filler while thinking. Try to keep your message moving.",
  "Build confidence first, then keep developing grammar, vocabulary, and pronunciation together.",
  "Feeling nervous is normal. Focus on the question in front of you and do your best.",
] as const;

export const speakingSpotlightTips = [
  "Learn useful fixed expressions and use them naturally to make your English sound more fluent.",
  "Add feelings and opinions to make your answers more engaging. Keep your views respectful and support them with reasons.",
  "Prepare ideas and useful language, but do not memorise a speech. Aim for answers that respond naturally to the question.",
] as const;

export const examinerAssesses = [
  "Communicating opinions and information on everyday topics and experiences.",
  "Speaking at length using appropriate language and organising ideas coherently.",
  "Expressing and justifying opinions, and analysing, discussing, and speculating about issues.",
] as const;
