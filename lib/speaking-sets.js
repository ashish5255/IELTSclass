/**
 * @typedef {Object} SpeakingSet
 * @property {number} number
 * @property {string} title
 * @property {string[]} part1
 * @property {{ prompt: string, points: string[], followUp: string }} cueCard
 * @property {string[]} part3
 */

/** @type {SpeakingSet[]} */
export const speakingSets = [
  {
    "number": 1,
    "title": "Home & Living",
    "part1": [
      "Do you live in a house or an apartment?",
      "How long have you lived there?",
      "What do you like most about your home?",
      "Do you have a favourite room? Why do you like it?",
      "Do you think your neighbourhood is a good place to live?",
      "Have you ever redecorated or changed anything in your home?",
      "Would you prefer to live alone or with others? Why?",
      "Do you think the home you grew up in shaped your personality?",
      "How does your living environment affect your mental wellbeing?",
      "Do you think people in cities sacrifice quality of life for convenience?",
      "Is owning a home still a realistic goal for young people in your country?",
      "How do housing inequalities reflect deeper social problems in society?",
      "Do you think governments have a responsibility to ensure everyone has adequate housing?",
      "Some argue that the way a society houses its most vulnerable members defines its values — do you agree?",
      "If you could redesign housing policy in your country from scratch, what would you prioritise and why?"
    ],
    "cueCard": {
      "prompt": "Describe a place you have lived in or visited that felt like home.",
      "points": [
        "Where the place was",
        "What made it feel special",
        "How you felt while you were there"
      ],
      "followUp": "And explain why that sense of belonging was so meaningful to you."
    },
    "part3": [
      "Why do some people feel more at home somewhere they've just visited than somewhere they've lived for years?",
      "How does the concept of 'home' differ across cultures?",
      "Do you think rapid urbanisation is destroying traditional communities?",
      "How has gentrification changed the idea of neighbourhood identity?",
      "Should cities prioritise affordable housing over architectural prestige?",
      "Do you think the rise of remote work will fundamentally reshape where people choose to live?",
      "To what extent is the housing crisis a failure of capitalism or a failure of governance?",
      "Some sociologists argue that homelessness is a political choice, not an economic inevitability — how far do you agree?"
    ]
  },
  {
    "number": 2,
    "title": "Education",
    "part1": [
      "Are you a student or have you studied recently?",
      "What subject did you enjoy most at school?",
      "Did you have a favourite teacher? What made them stand out?",
      "What was your school like — large or small, strict or relaxed?",
      "Do you think your education prepared you well for life?",
      "What is one thing you wish you had been taught at school?",
      "Do you prefer learning in a classroom or independently?",
      "How important do you think exams are as a measure of ability?",
      "Do you think intelligence can be taught, or is it mostly innate?",
      "How does the education system in your country reflect its broader social values?",
      "Do you think the pressure placed on students today is excessive or necessary?",
      "Is it possible for a truly equal education system to exist in an unequal society?",
      "How do you think technology will change the role of teachers in the next 20 years?",
      "Some argue that university education has become a business rather than a public good — do you agree?",
      "If you were given full control of education policy, what fundamental changes would you make and what trade-offs would you accept?"
    ],
    "cueCard": {
      "prompt": "Describe a time when you learned something outside of a classroom.",
      "points": [
        "What you learned",
        "How you came to learn it",
        "Who or what helped you"
      ],
      "followUp": "And explain why this experience was more valuable than formal learning for you."
    },
    "part3": [
      "Why do some people learn far more effectively outside formal education?",
      "How has the internet democratised access to knowledge?",
      "Do you think academic qualifications are still the best signal of competence to employers?",
      "How do socioeconomic backgrounds shape educational outcomes, and can policy fix this?",
      "Should critical thinking be a compulsory subject at every level of education?",
      "Do you think standardised testing narrows the kind of thinking schools encourage?",
      "To what extent does the language of instruction disadvantage students from minority communities?",
      "Is the global spread of Western-style education a form of cultural imperialism?"
    ]
  },
  {
    "number": 3,
    "title": "Work & Career",
    "part1": [
      "Do you have a job at the moment?",
      "What kind of work do you do?",
      "Do you enjoy your job? Why or why not?",
      "What time do you usually start and finish work?",
      "Do you work better in the morning or the evening?",
      "What is the most challenging part of your job?",
      "Have you ever had a job you really disliked? What was it?",
      "What qualities do you think make someone good at their job?",
      "Do you think it is more important to love your work or to be paid well?",
      "How has remote working changed your relationship with your job?",
      "Do you think the traditional 9-to-5 work model is still relevant today?",
      "How does job insecurity affect people's physical and mental health?",
      "Is the gig economy genuinely empowering workers or creating a new class of the precarious poor?",
      "Do you think automation will ultimately create more jobs than it destroys, or is that optimism naive?",
      "If work as we know it disappeared due to automation, what would give people a sense of purpose and identity?"
    ],
    "cueCard": {
      "prompt": "Describe a job or career you once considered but didn't pursue.",
      "points": [
        "What the job was",
        "Why you were attracted to it",
        "Why you didn't pursue it"
      ],
      "followUp": "And explain whether you think you made the right decision."
    },
    "part3": [
      "Why do so many people end up in careers they didn't originally plan for?",
      "How does society assign status to different types of work, and is this fair?",
      "Do you think vocational education is unfairly looked down upon compared to university?",
      "How do gender expectations still shape career choices in your country?",
      "Should companies be legally required to ensure pay transparency?",
      "How is the concept of a 'career for life' changing, and what are the consequences?",
      "Do you think universal basic income would liberate people or reduce the incentive to work?",
      "To what extent is career success in your country determined by effort versus circumstance?"
    ]
  },
  {
    "number": 4,
    "title": "Technology",
    "part1": [
      "What devices do you use most in daily life?",
      "How much time do you spend on your phone each day?",
      "What apps do you use most often?",
      "Do you think technology has made your life easier overall?",
      "Is there any technology you think you use too much?",
      "How has technology changed the way you stay in touch with people?",
      "Do you think children should be given smartphones? At what age?",
      "How do you feel about the amount of personal data companies collect about you?",
      "Do you think social media does more harm than good for society?",
      "How has technology changed the way you consume news or information?",
      "Do you think the internet has made people more informed or more easily misled?",
      "How do algorithms on platforms like YouTube or Instagram shape people's worldviews?",
      "Is digital addiction a genuine public health crisis, and who is responsible for it?",
      "Do you think large tech companies have become too powerful for democratic governments to regulate effectively?",
      "If you had to choose between a world with no social media or no smartphones, which would you choose and why?"
    ],
    "cueCard": {
      "prompt": "Describe a time when technology caused you a significant problem.",
      "points": [
        "What happened",
        "How it affected you at the time",
        "What you did to resolve it"
      ],
      "followUp": "And explain what this experience revealed about your dependence on technology."
    },
    "part3": [
      "Why are people so reluctant to reduce their use of technology even when they know it harms them?",
      "How has the smartphone changed human attention spans and deep thinking?",
      "Do you think governments should have the right to shut down the internet during civil unrest?",
      "How does the digital divide between wealthy and poor nations affect global inequality?",
      "Should AI-generated content be clearly labelled as such by law?",
      "To what extent should tech companies be held liable for the mental health effects of their platforms?",
      "Do you think humanity is equipped, ethically and institutionally, to govern artificial general intelligence?",
      "If an AI became indistinguishable from a human in conversation, would it deserve any legal rights?"
    ]
  },
  {
    "number": 5,
    "title": "Health & Wellbeing",
    "part1": [
      "Do you think you are generally a healthy person?",
      "How often do you exercise?",
      "What do you usually eat for breakfast?",
      "Do you get enough sleep most nights?",
      "What do you do when you feel stressed?",
      "Have you ever tried to change a health habit? What happened?",
      "Do you think people in your country are becoming healthier or less healthy overall?",
      "How important is mental health compared to physical health in your view?",
      "Do you think the healthcare system in your country treats mental and physical health equally?",
      "How does your work or study affect your health?",
      "Do you think governments have the right to restrict unhealthy behaviours like smoking or excessive sugar?",
      "How does poverty affect health outcomes, and whose responsibility is it to address this?",
      "Do you think the commercialisation of wellness — gyms, superfoods, apps — benefits people or exploits anxiety?",
      "Is burnout a genuine medical condition or a symptom of people's unwillingness to set boundaries?",
      "If you had to argue that the healthcare system in your country is fundamentally broken, what evidence would you use?"
    ],
    "cueCard": {
      "prompt": "Describe a time when you had to make a significant change to improve your health.",
      "points": [
        "What change you made",
        "What motivated you to make it",
        "How difficult it was"
      ],
      "followUp": "And explain whether the experience changed your attitude toward health long-term."
    },
    "part3": [
      "Why do people often know what is good for their health but fail to act on it?",
      "How does the food industry contribute to public health problems?",
      "Do you think preventative healthcare should receive more funding than treatment?",
      "How does social inequality manifest in health outcomes within the same city?",
      "Should employers be required to provide mental health support for their workers?",
      "Do you think the over-prescription of medication in many countries is a crisis?",
      "To what extent is personal health a matter of individual choice versus systemic circumstance?",
      "If you could redesign public health policy in your country, where would you start and why?"
    ]
  },
  {
    "number": 6,
    "title": "Environment",
    "part1": [
      "Do you enjoy spending time in nature?",
      "How often do you visit parks or natural areas?",
      "Do you recycle or try to reduce waste in your daily life?",
      "Have you noticed any environmental changes in your area in recent years?",
      "Do you think people in your country care enough about the environment?",
      "What is one small thing you do to reduce your environmental impact?",
      "Would you be willing to pay more for environmentally friendly products?",
      "Do you think electric vehicles will genuinely solve the problem of transport emissions?",
      "How much do you think individual actions matter compared to government and corporate policy?",
      "Do you think young people are more environmentally conscious than older generations?",
      "How do you feel about the pace of international cooperation on climate change?",
      "Do you think climate anxiety among young people is rational or a sign of systemic failure?",
      "Is it hypocritical to advocate for climate action while still flying, eating meat, or consuming heavily?",
      "Do wealthy nations have a moral obligation to fund climate adaptation in countries that contributed least to the crisis?",
      "If you had to argue that it is already too late to prevent catastrophic climate change, what evidence would you draw on?"
    ],
    "cueCard": {
      "prompt": "Describe an environmental problem in your country that concerns you deeply.",
      "points": [
        "What the problem is",
        "What causes it",
        "What is currently being done about it"
      ],
      "followUp": "And explain why you feel personally connected to this issue."
    },
    "part3": [
      "Why has global climate policy consistently fallen short of scientific recommendations?",
      "How does the narrative of individual responsibility for climate change serve corporate interests?",
      "Do you think green capitalism — market-based solutions to environmental problems — can work?",
      "How should societies weigh economic development against environmental protection in poorer nations?",
      "Do you think geoengineering should be seriously considered as a climate solution?",
      "How do colonial histories shape current inequalities in who suffers most from climate change?",
      "To what extent is environmental destruction an inevitable consequence of the global economic system?",
      "If you were a negotiator at a global climate summit, what compromise would you push for?"
    ]
  },
  {
    "number": 7,
    "title": "Family & Relationships",
    "part1": [
      "How many people are in your immediate family?",
      "Are you close to your family?",
      "How often do you see your relatives?",
      "What is something your family does together regularly?",
      "Is family important in the culture you grew up in?",
      "Have your relationships with family members changed as you've grown older?",
      "Do you think the role of family is different for your generation than for your parents?",
      "How do you handle disagreements with people close to you?",
      "Do you think social media has strengthened or weakened family relationships?",
      "How do you think having children changes a person's priorities and identity?",
      "Do you think the decline of the traditional family unit is a problem or simply an evolution?",
      "How does pressure to conform to family expectations affect individual freedom and mental health?",
      "Do you think society places too much burden on families to provide care for elderly members?",
      "Is it possible to truly choose your own values independently from the family you were raised in?",
      "If you had to argue that the modern family structure is under an existential threat, what forces would you identify?"
    ],
    "cueCard": {
      "prompt": "Describe a family member who has had a significant influence on who you are.",
      "points": [
        "Who this person is",
        "What they were like",
        "How they influenced your thinking or behaviour"
      ],
      "followUp": "And explain whether their influence is something you've embraced or had to consciously move beyond."
    },
    "part3": [
      "To what extent do you think people can escape the psychological patterns of their upbringing?",
      "How do cultural expectations around family loyalty create tension for second-generation immigrants?",
      "Do you think the state should have more power to intervene in family life to protect children?",
      "How has the changing role of women affected the structure and dynamics of the family?",
      "Do you think loneliness is partly a consequence of the breakdown of extended family networks?",
      "Should societies do more to financially support people who leave abusive family situations?",
      "Do children fundamentally change a person's capacity for certain kinds of ethical or long-term reasoning?",
      "If family is the foundation of society, what does its current state tell you about society itself?"
    ]
  },
  {
    "number": 8,
    "title": "Media & Truth",
    "part1": [
      "How do you usually get your news?",
      "Do you read newspapers or watch news on TV?",
      "How much time do you spend on social media each day?",
      "Do you think what you read online is generally accurate?",
      "Have you ever shared something online that turned out to be false?",
      "Do you think journalists do an important job in society?",
      "How do you decide whether a news source is trustworthy?",
      "Has the way you consume news changed over the past few years?",
      "Do you think the media in your country is generally free to report without interference?",
      "How do you think social media has changed political discourse?",
      "Do you think the advertising-funded media business model is compatible with honest journalism?",
      "How do algorithms that prioritise engagement over accuracy contribute to political polarisation?",
      "Is the concept of 'objective journalism' genuinely possible, or is all reporting a form of perspective?",
      "Do you think media ownership concentration is one of the most significant threats to democracy today?",
      "If you had to argue that we are living through a fundamental crisis of truth in public life, what evidence would you draw on?"
    ],
    "cueCard": {
      "prompt": "Describe a time when you discovered that something you believed was false or misleading.",
      "points": [
        "What you believed",
        "How you found out it was wrong",
        "How you reacted"
      ],
      "followUp": "And explain what this experience taught you about how you form and question your own beliefs."
    },
    "part3": [
      "Why are people more likely to share information that confirms their existing beliefs?",
      "How do authoritarian governments use control of media to maintain power?",
      "Do you think social media companies have a responsibility to moderate content, or does that make them arbiters of truth?",
      "How does the 24-hour news cycle affect the quality and depth of political reporting?",
      "Should media literacy be a compulsory subject from primary school onwards?",
      "Do you think satire and comedy have a meaningful role in holding power to account?",
      "Is there a point at which misinformation becomes a national security threat justifying restrictions on free speech?",
      "If the financial model of the free press is collapsing, what should replace it — and who should pay?"
    ]
  },
  {
    "number": 9,
    "title": "Language & Identity",
    "part1": [
      "What languages do you speak?",
      "Did you enjoy learning English? Why or why not?",
      "Do you think you speak English differently in different situations?",
      "Is there a word in your language that has no good translation in English?",
      "Do you think speaking multiple languages changes the way you think?",
      "How important is your native language to your sense of identity?",
      "Have you ever felt judged because of your accent or the way you speak?",
      "Do you think it is important for countries to protect minority languages?",
      "How do you feel about the dominance of English as a global language?",
      "Do you think the language you speak shapes the way you perceive the world?",
      "How does language loss affect the cultural knowledge and identity of a community?",
      "Is the global spread of English a neutral development or a continuation of cultural imperialism?",
      "Do you think code-switching — shifting language or dialect by context — is self-expression or self-suppression?",
      "How does the way a language names — or fails to name — certain experiences affect people's ability to process them?",
      "If all humans spoke one language, what would be gained and what would be irreversibly lost?"
    ],
    "cueCard": {
      "prompt": "Describe an experience where language — or the lack of it — significantly affected you.",
      "points": [
        "What the situation was",
        "What the language barrier or connection felt like",
        "How you managed or responded"
      ],
      "followUp": "And explain what this experience taught you about the relationship between language and belonging."
    },
    "part3": [
      "Why do dominant groups so often require minorities to abandon their language to be accepted?",
      "How does the language of instruction in schools affect children from minority language communities?",
      "Do you think translation ever fully captures what a piece of literature means in its original language?",
      "How do political movements use language to shape reality — think of terms like 'collateral damage'?",
      "Should endangered languages be preserved even if only a handful of speakers remain?",
      "How does the internet's dominance by English affect online culture in non-English-speaking countries?",
      "Can a second language learner ever truly think and feel in that language the way a native speaker does?",
      "If language shapes thought, does the dominance of any single language risk narrowing humanity's collective thinking?"
    ]
  },
  {
    "number": 10,
    "title": "Freedom & Responsibility",
    "part1": [
      "Do you think of yourself as a free person?",
      "Are there rules in your daily life that you sometimes disagree with?",
      "Do you think people in your country have enough personal freedom?",
      "What freedoms do you think are most important?",
      "Do you think complete freedom of speech is possible or even desirable?",
      "Have you ever done something because it was expected of you, not because you wanted to?",
      "Do you think people today take enough personal responsibility for their actions?",
      "Where do you think the line should be drawn between individual freedom and societal wellbeing?",
      "Do you think governments use security concerns as a pretext to restrict civil liberties?",
      "How do you think economic freedom and political freedom relate to each other?",
      "Is freedom of expression absolute, or are there categories of speech that should be prohibited?",
      "Do you think surveillance technology in public spaces makes society safer or less free?",
      "Can a person be truly free if they are economically dependent on others?",
      "Do you think freedom and equality are fundamentally in tension — and if so, which should take priority?",
      "If you had to define what genuine human freedom consists of — not just absence of restriction but its positive conditions — what would that definition include?"
    ],
    "cueCard": {
      "prompt": "Describe a time when you had to choose between your personal freedom and your responsibility to others.",
      "points": [
        "What the situation was",
        "What the competing pressures were",
        "What you decided to do"
      ],
      "followUp": "And explain whether, in hindsight, you think you made the right choice."
    },
    "part3": [
      "How do societies decide where to draw the line between individual rights and collective responsibility?",
      "Do you think freedom of speech protections have been weaponised to defend harmful ideologies?",
      "Is civil disobedience ever morally justified, and if so, under what conditions?",
      "How do economic systems shape the freedoms that are available in practice, as opposed to in law?",
      "Do you think digital privacy should be considered a fundamental human right?",
      "How should democratic societies balance the freedom to offend with the duty to protect vulnerable groups?",
      "Do you think the social contract between citizens and the state is currently being honoured in your country?",
      "If absolute freedom and genuine equality are incompatible, which should a just society prioritise?"
    ]
  },
  {
    "number": 11,
    "title": "Art & Creativity",
    "part1": [
      "Do you enjoy any kind of art — music, painting, drawing?",
      "Did you do anything creative when you were a child?",
      "Do you think you are a creative person?",
      "What kind of music do you listen to most?",
      "Have you ever been to a gallery, concert, or theatre?",
      "Do you think art is important in everyday life?",
      "Should art be taught as a core subject in schools?",
      "How do you think social media has changed the way people create and share art?",
      "Do you think AI-generated art is a genuine creative act?",
      "How does art challenge political or social norms in your country?",
      "Do you think the commercialisation of art has fundamentally compromised its purpose?",
      "How does the art world's gatekeeping — galleries, critics, institutions — shape whose voices are heard?",
      "Is there a meaningful distinction between high art and popular culture, or is that distinction just a class marker?",
      "Can art created purely to provoke, without aesthetic craft, still be considered art?",
      "If art's highest purpose is to make people feel less alone, what does it mean that the most profitable art today largely does the opposite?"
    ],
    "cueCard": {
      "prompt": "Describe a work of art — a film, song, book, or painting — that moved you deeply.",
      "points": [
        "What the work was",
        "When and how you encountered it",
        "What it made you feel"
      ],
      "followUp": "And explain why you think it affected you so profoundly when other works haven't."
    },
    "part3": [
      "Why does art affect different people so differently, even when they share similar backgrounds?",
      "How does censorship of art reveal the values and fears of the governments that impose it?",
      "Do you think public funding for the arts is justifiable when governments struggle to fund healthcare?",
      "How has digitisation of music, film, and art changed the economic relationship between artists and audiences?",
      "Is the suffering of the artist a necessary condition for great art, or is that a romantic myth?",
      "How do dominant cultures use art to assert their values over minority or colonised cultures?",
      "Do you think AI will eventually create art indistinguishable from — and possibly superior to — human art?",
      "If art has the power to move people to action, why has it so consistently failed to prevent atrocities?"
    ]
  },
  {
    "number": 12,
    "title": "Science & Progress",
    "part1": [
      "Did you enjoy science at school?",
      "What scientific discovery do you find most fascinating?",
      "Do you follow news about science or technology?",
      "Do you think scientific progress generally makes life better?",
      "Is there any scientific development that concerns you?",
      "How do you feel about space exploration — is it worth the cost?",
      "Do you think people trust scientific expertise enough in your country?",
      "How do you think misinformation spreads, and who is responsible for stopping it?",
      "Do you think the speed of technological change is outpacing our ability to understand its consequences?",
      "How should society make decisions about technologies that could be both enormously beneficial and harmful?",
      "Do you think the profit motive of pharmaceutical companies is compatible with genuine public health goals?",
      "How do you feel about genetic editing of human embryos — where should the line be drawn?",
      "Is the colonisation of other planets a moral imperative or a distraction from solving problems on Earth?",
      "Do you think science can answer questions about how we should live, or do those always require philosophy?",
      "If scientific consensus clearly points to a course of action the public refuses to accept, how should governments respond?"
    ],
    "cueCard": {
      "prompt": "Describe a scientific development or discovery that you think will shape the future.",
      "points": [
        "What the development is",
        "How you learned about it",
        "What you think it will change"
      ],
      "followUp": "And explain whether you feel hopeful or worried about its implications."
    },
    "part3": [
      "Why do people sometimes resist scientific consensus even when the evidence is overwhelming?",
      "How does the commercialisation of science affect which research gets funded?",
      "Do you think the open-source science movement is a genuine threat to traditional academic publishing?",
      "How should the benefits of AI and automation be distributed to prevent mass unemployment?",
      "Is there a point at which enhancing human biology through technology compromises what it means to be human?",
      "Do you think rich nations using scientific advantage to maintain geopolitical dominance is justifiable?",
      "How should international governance of transformative technologies like AI be structured?",
      "If science one day conclusively demonstrated that free will is an illusion, how should that change our legal systems?"
    ]
  },
  {
    "number": 13,
    "title": "Society & Inequality",
    "part1": [
      "Would you say you had a happy childhood?",
      "What is one thing you are grateful for in your life?",
      "Do you think people in your country are generally happy?",
      "What do you think makes a person truly successful?",
      "Do you think people treat each other fairly in your country?",
      "Have you ever witnessed or experienced discrimination?",
      "Do you think social class still matters in your country?",
      "How does where you grow up affect the opportunities available to you?",
      "Do you think social mobility is genuinely possible in your country?",
      "How do you think wealth inequality affects the quality of democracy?",
      "Do you think privilege is something people are generally willing to acknowledge about themselves?",
      "How do systemic inequalities persist even when individuals are not consciously prejudiced?",
      "Is meritocracy — the idea that people succeed based on talent and effort alone — a myth?",
      "Do you think extreme wealth concentration is compatible with a functioning democracy?",
      "If you had to identify the single most important structural change your society could make to reduce inequality, what would it be?"
    ],
    "cueCard": {
      "prompt": "Describe a moment when you became aware of an inequality or injustice for the first time.",
      "points": [
        "What you witnessed or experienced",
        "How you felt at the time",
        "How you made sense of it"
      ],
      "followUp": "And explain how that moment shaped your understanding of the world."
    },
    "part3": [
      "Why do people who benefit most from inequality often resist structural changes most strongly?",
      "How do media narratives shape public understanding of poverty and wealth?",
      "Do you think charity is an adequate response to systemic inequality, or does it let governments off the hook?",
      "How does intergenerational wealth transfer undermine the possibility of a truly fair society?",
      "Should there be a legal maximum wage, as well as a minimum one?",
      "How does the language we use about poverty — 'deserving poor', 'welfare dependency' — reflect and reinforce inequality?",
      "Do you think global inequality between nations is as morally urgent as inequality within them?",
      "If the most effective way to reduce inequality required significant sacrifices from the middle class, do you think democratic societies would vote for it?"
    ]
  },
  {
    "number": 14,
    "title": "Identity & Belonging",
    "part1": [
      "Where do you consider home to be?",
      "Have you ever lived in a different city or country?",
      "Do you feel a strong connection to your nationality?",
      "What traditions or customs are important to you personally?",
      "Do you think your generation sees identity differently from your parents' generation?",
      "Has living in a different place ever changed how you see yourself?",
      "Do you think it is possible to belong to more than one culture fully?",
      "How do you think migration affects a person's sense of identity?",
      "Do you think national identity is becoming more or less important in a globalised world?",
      "How does the community you grow up in shape the values you carry into adulthood?",
      "Do you think identity politics — defining yourself primarily through group membership — is helpful or divisive?",
      "How does a country's treatment of its minorities reveal something fundamental about its values?",
      "Is it possible to have a strong national identity without it tipping into nationalism?",
      "Do you think the concept of cultural authenticity is used to police identity rather than protect it?",
      "If every aspect of your identity — nationality, language, religion, class — were stripped away, what would remain?"
    ],
    "cueCard": {
      "prompt": "Describe a time when you felt you didn't belong somewhere — and how you responded.",
      "points": [
        "Where you were and what the situation was",
        "What made you feel like an outsider",
        "What you did or felt as a result"
      ],
      "followUp": "And explain what that experience taught you about the relationship between identity and acceptance."
    },
    "part3": [
      "Why do humans have such a powerful need to belong to groups?",
      "How do institutions — schools, workplaces, governments — construct and enforce ideas of who belongs?",
      "Do you think diaspora communities are caught between cultures in a way that is ultimately liberating or isolating?",
      "How does the experience of being an outsider shape a person's empathy and worldview?",
      "Is assimilation into a dominant culture a form of survival, a form of loss, or both?",
      "How do online communities provide belonging for people who feel marginalised in their physical environments?",
      "Do you think the rise of identity-based politics reflects a failure of universal ideals like citizenship?",
      "If belonging requires conformity, and conformity requires suppressing parts of yourself, is belonging worth the cost?"
    ]
  }
];
