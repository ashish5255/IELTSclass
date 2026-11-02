export const resourcePages = [
  {
    slug: "listening-guide",
    number: "01",
    title: "Listening Guide",
    label: "Listening",
    description:
      "Build a steady listening routine and practise understanding the main ideas and details in spoken English.",
    sections: [
      {
        title: "Listen for meaning",
        body: "Before you listen, use the question or topic to anticipate what kind of information may come up. Focus on the meaning rather than trying to understand every word.",
        points: [
          "Notice who is speaking and what they are trying to do.",
          "Listen for changes in opinion, emphasis, and detail.",
          "Use context to work out unfamiliar words.",
        ],
      },
      {
        title: "Practise with a purpose",
        body: "After each listening activity, review the parts you found difficult and listen again. A short review helps you notice patterns and track progress.",
      },
    ],
  },
  {
    slug: "reading-guide",
    number: "02",
    title: "Reading Guide",
    label: "Reading",
    description:
      "Approach English texts with a plan, find relevant information, and build confidence with unfamiliar vocabulary.",
    sections: [
      {
        title: "Start with the task",
        body: "Look at the questions and headings before reading closely. This helps you know what information to look for.",
        points: [
          "Skim first to understand the topic and overall structure.",
          "Scan for names, dates, keywords, and related ideas.",
          "Read the surrounding sentences to confirm an answer.",
        ],
      },
      {
        title: "Use context",
        body: "You do not need to know every word. Look at nearby words and the sentence’s main idea to make a sensible guess, then keep reading.",
      },
    ],
  },
  {
    slug: "writing-made-easy",
    number: "03",
    title: "IELTS Writing Made Easy",
    label: "Writing",
    description:
      "Make writing feel more manageable by planning your response, organising ideas, and reviewing your work.",
    sections: [
      {
        title: "Plan before you write",
        body: "Take a moment to understand the task and decide what your main points will be. A simple outline can help your response stay focused.",
        points: [
          "Answer every part of the task.",
          "Group related ideas into clear paragraphs.",
          "Support main points with a reason or example.",
        ],
      },
      {
        title: "Review your response",
        body: "Leave time to check that your ideas are clear, your sentences are complete, and your word choices express what you mean.",
      },
    ],
  },
  {
    slug: "speaking-guide",
    number: "04",
    title: "How to Speak",
    label: "Speaking",
    description:
      "A starter guide to help you practise speaking clearly, develop your answers, and become more comfortable expressing ideas.",
    sections: [
      {
        title: "Build confidence through practice",
        body: "Choose a familiar topic and speak about it for a short time. Focus on explaining your ideas clearly rather than trying to memorise perfect answers.",
        points: [
          "Give a direct answer to the question.",
          "Add a reason, detail, or example to develop your idea.",
          "Record yourself and notice one thing to improve next time.",
        ],
      },
      {
        title: "Your speaking guide",
        body: "This page is ready for your speaking content. When you share it, I can replace this starter guidance with your lessons, examples, and practice activities.",
      },
    ],
  },
  {
    slug: "grammar-for-beginners",
    number: "05",
    title: "Grammar Concepts for Beginners",
    label: "Grammar",
    description:
      "Strengthen your English foundations with simple ways to understand sentence structure and practise grammar.",
    sections: [
      {
        title: "Build one idea at a time",
        body: "Start with clear sentences and learn how each part works. Practise a new grammar point in your own examples before combining it with others.",
        points: [
          "Notice the subject and verb in a sentence.",
          "Practise present, past, and future forms in context.",
          "Read your sentences aloud to check that they make sense.",
        ],
      },
      {
        title: "Make practice a habit",
        body: "Short, regular practice helps grammar become more natural. Review your mistakes and rewrite a few sentences correctly.",
      },
    ],
  },
] as const;

export const mockPages = [
  {
    slug: "sectional-mock",
    number: "01",
    title: "Sectional Mock",
    label: "Focus on one skill",
    description:
      "Choose one IELTS skill to focus your practice. Use the guides below to prepare for Listening, Reading, Writing, or Speaking.",
    sections: [
      {
        title: "Listening",
        body: "Practise following spoken English, identifying key details, and understanding the purpose of a conversation.",
        href: "/resources/listening-guide",
        linkLabel: "Open Listening Guide",
      },
      {
        title: "Reading",
        body: "Work on understanding passages, finding specific information, and using context to interpret unfamiliar words.",
        href: "/resources/reading-guide",
        linkLabel: "Open Reading Guide",
      },
      {
        title: "Writing",
        body: "Practise understanding a writing task, organising your response, and expressing ideas clearly.",
        href: "/resources/writing-made-easy",
        linkLabel: "Open Writing Guide",
      },
      {
        title: "Speaking",
        body: "Build confidence answering questions and developing your ideas with relevant details.",
        href: "/resources/speaking-guide",
        linkLabel: "Open Speaking Guide",
      },
    ],
  },
  {
    slug: "full-mock",
    number: "02",
    title: "Full Mock",
    label: "Prepare for the whole test",
    description:
      "Plan a complete practice session covering all four IELTS skills. The timings below are typical test timings and can help you structure your preparation.",
    sections: [
      {
        title: "Listening",
        body: "About 30 minutes. Practise understanding conversations and monologues, then check how well you followed key details.",
        href: "/resources/listening-guide",
        linkLabel: "Prepare for Listening",
      },
      {
        title: "Reading",
        body: "60 minutes. Practise reading passages, locating information, and keeping track of time.",
        href: "/resources/reading-guide",
        linkLabel: "Prepare for Reading",
      },
      {
        title: "Writing",
        body: "60 minutes. Practise planning and completing both writing tasks within the time available.",
        href: "/resources/writing-made-easy",
        linkLabel: "Prepare for Writing",
      },
      {
        title: "Speaking",
        body: "11–14 minutes. Practise responding to questions and expressing ideas clearly. The Speaking test may take place on a different day.",
        href: "/resources/speaking-guide",
        linkLabel: "Prepare for Speaking",
      },
    ],
  },
] as const;
