export interface Choice {
  id: string;
  text: string;
  isHealthy: boolean;
  outcome: string;
  points: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  character: string;
  emotion: string;
  choices: Choice[];
}

export const Scenarios: Scenario[] = [
  {
    id: '1',
    title: 'The Tumbled Tower',
    character: 'Liam',
    emotion: 'Angry 😡',
    description: 'Liam spent a long time building a super tall block tower. Suddenly, Lucas tripped and knocked it all down! Liam feels a hot flame of anger rising in his chest.',
    choices: [
      {
        id: 'a',
        text: 'Scream at Lucas and kick the blocks across the room.',
        isHealthy: false,
        outcome: 'Oh no! Kicking blocks can hurt someone, and Lucas feels sad too. The anger is still hot and Liam is now in trouble.',
        points: 5,
      },
      {
        id: 'b',
        text: 'Take three deep breaths, squeeze hands tight then let go, and tell Lucas: "I worked hard on that. I feel angry that it broke."',
        isHealthy: true,
        outcome: 'Great job! Expressing feelings with words helps Liam cool down. Lucas apologizes and offers to help rebuild the tower even taller!',
        points: 15,
      },
    ],
  },
  {
    id: '2',
    title: 'Waiting for the Slide',
    character: 'Mia',
    emotion: 'Impatient / Sad 😢',
    description: 'Mia has been waiting for the playground slide for a long time. Another child refuses to get off and keeps going down over and over. Mia feels like crying or pushing.',
    choices: [
      {
        id: 'a',
        text: 'Run up and push the other child out of the way to take a turn.',
        isHealthy: false,
        outcome: 'Oops! Pushing is unsafe and can hurt. The teacher has to intervene, and Mia has to leave the playground.',
        points: 5,
      },
      {
        id: 'b',
        text: 'Say politely: "Can we take turns? Or can I go next after your next slide?"',
        isHealthy: true,
        outcome: 'Awesome! Speaking up politely helps others understand. The child says "Yes, one more time and it is yours!" and they take turns happily.',
        points: 15,
      },
    ],
  },
  {
    id: '3',
    title: 'The Shadow Monster',
    character: 'Leo',
    emotion: 'Scared 😰',
    description: 'It is bedtime. Leo looks at the closet door and sees a giant, scary shadow shape. His heart is beating fast and he feels terrified to sleep.',
    choices: [
      {
        id: 'a',
        text: 'Hide under the covers, squeeze his eyes shut, and worry all night.',
        isHealthy: false,
        outcome: 'Leo stays scared all night and feels very tired the next morning because he could not sleep.',
        points: 5,
      },
      {
        id: 'b',
        text: 'Turn on the soft bedside lamp, see that the shadow is just his winter coat hanging, and do three slow "balloon breaths".',
        isHealthy: true,
        outcome: 'Fantastic! Finding out the truth shows there was no monster. The lamp and slow breathing help Leo feel calm and sleep peacefully.',
        points: 15,
      },
    ],
  },
  {
    id: '4',
    title: 'The Forgotten Snack',
    character: 'Oliver',
    emotion: 'Sad / Disappointed 😢',
    description: 'Oliver is sitting at lunch during school. When he opens his box, he realizes he forgot his favorite afternoon strawberry snack. Oliver feels a cold, heavy sadness.',
    choices: [
      {
        id: 'a',
        text: 'Slam his lunchbox closed, cry loudly, and refuse to participate in the rest of school activities.',
        isHealthy: false,
        outcome: 'Oh dear. Oliver is still hungry and now missing out on fun activities. Slamming the lunchbox startled his friends.',
        points: 5,
      },
      {
        id: 'b',
        text: 'Take a slow, deep breath, count to five, and tell the teacher: "I forgot my strawberry snack and I feel sad and hungry."',
        isHealthy: true,
        outcome: 'Wonderful! Naming the feeling helps Oliver calm down. The teacher finds a spare apple in the classroom cabinet for him. Oliver feels much better!',
        points: 15,
      },
    ],
  },
  {
    id: '5',
    title: 'The Loud Thunderstorm',
    character: 'Chloe',
    emotion: 'Scared / Overwhelmed 😰',
    description: 'A sudden storm rolls in. A massive clap of thunder shakes the classroom window. Chloe jumps, her heart beats very fast, and she wants to run away and hide.',
    choices: [
      {
        id: 'a',
        text: 'Scream loudly, run out of the classroom, and hide in the dark hallway closet.',
        isHealthy: false,
        outcome: 'Running away from the classroom is unsafe because the teacher cannot see Chloe. The hallway is also cold and quiet.',
        points: 5,
      },
      {
        id: 'b',
        text: 'Put on classroom quiet-time headphones, close her eyes, and count 5 things in her mind that make her feel safe.',
        isHealthy: true,
        outcome: 'Fantastic! Blocking the loud noise and grounding her thoughts helps Chole\'s nervous system settle. The teacher gives her a reassuring high-five!',
        points: 15,
      },
    ],
  },
  {
    id: '6',
    title: 'The Sharing Struggle',
    character: 'Zoe',
    emotion: 'Angry / Jealous 😡',
    description: 'Zoe needs the blue crayon to draw the sky in her picture. Noah has been using the blue crayon for a very long time and refuses to hand it over. Zoe feels like snatching it.',
    choices: [
      {
        id: 'a',
        text: 'Grab the crayon straight out of Noah\'s hand when he isn\'t looking.',
        isHealthy: false,
        outcome: 'Oh no! Snatching causes Noah to get angry, and they start arguing. The blue crayon breaks in half, and now neither can use it.',
        points: 5,
      },
      {
        id: 'b',
        text: 'Ask Noah: "Can I use the blue crayon when you are done? I will draw my green grass first while I wait."',
        isHealthy: true,
        outcome: 'Brilliant! Offering a compromise and using wait-time prevents a fight. Noah colored his sky quickly and handed it over, saying "Thanks for waiting!"',
        points: 15,
      },
    ],
  },
];
