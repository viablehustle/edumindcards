import type { Flashcard } from "@shared/schema";

export const flashcardsData: Flashcard[] = [
  // Geology Cards
  {
    id: "1",
    subject: "geology",
    question: "What is the process by which rocks are broken down into smaller pieces by physical or chemical means?",
    hints: [
      "This process happens naturally in the environment and affects all types of rocks.",
      "There are two main types: one involves temperature changes and the other involves chemical reactions.",
      "Water, wind, ice, and plant roots can all contribute to this process.",
      "The Grand Canyon was formed primarily through this process over millions of years.",
      "This word starts with 'W' and rhymes with 'feathering'."
    ],
    answer: "Weathering",
    explanation: "Weathering is the breakdown of rocks into smaller pieces through physical (mechanical) or chemical processes. Physical weathering includes freeze-thaw cycles and root wedging, while chemical weathering involves reactions with water and acids that dissolve minerals in rocks.",
    difficulty: "grade8",
    order: 1
  },
  {
    id: "2",
    subject: "geology",
    question: "What type of rock is formed when magma cools and solidifies?",
    hints: [
      "These rocks form directly from molten material.",
      "They can form either above or below the Earth's surface.",
      "Examples include granite, basalt, and obsidian.",
      "The word comes from the Latin word for 'fire'.",
      "This rock type starts with 'I' and is one of the three main rock types."
    ],
    answer: "Igneous",
    explanation: "Igneous rocks form when magma (molten rock) cools and solidifies. If cooling happens slowly underground, large crystals form (like granite). If cooling happens quickly on the surface, small crystals or glass forms (like basalt or obsidian).",
    difficulty: "grade8",
    order: 2
  },
  {
    id: "3",
    subject: "geology",
    question: "What is the term for the movement of weathered rock and soil from one place to another?",
    hints: [
      "This process works together with weathering to reshape the Earth's surface.",
      "Gravity, water, wind, and ice are the main agents of this process.",
      "Rivers carry sediments from mountains to the ocean through this process.",
      "It's responsible for creating river deltas and sand dunes.",
      "This word starts with 'E' and means to wear away."
    ],
    answer: "Erosion",
    explanation: "Erosion is the process that moves weathered rock and soil particles from one location to another. Water, wind, ice, and gravity are the main agents that transport these materials, eventually depositing them in new locations.",
    difficulty: "grade8",
    order: 3
  },
  {
    id: "4",
    subject: "geology",
    question: "What scale is used to measure the hardness of minerals?",
    hints: [
      "This scale was developed by a German geologist in 1812.",
      "It uses 10 common minerals as reference points.",
      "Talc is the softest mineral on this scale, rated as 1.",
      "Diamond is the hardest mineral on this scale, rated as 10.",
      "The scale is named after its creator, Friedrich ___."
    ],
    answer: "Mohs Scale",
    explanation: "The Mohs Scale of Mineral Hardness ranks minerals from 1 (talc, softest) to 10 (diamond, hardest). It helps geologists identify minerals by testing which minerals can scratch others. Each mineral can scratch those below it on the scale.",
    difficulty: "grade8",
    order: 4
  },

  // Math Cards
  {
    id: "5",
    subject: "math",
    question: "What is the formula for calculating the area of a circle?",
    hints: [
      "This formula involves a special mathematical constant approximately equal to 3.14159.",
      "You need to know the distance from the center to the edge of the circle.",
      "The formula uses this distance, but you need to multiply it by itself.",
      "The Greek letter π (pi) is part of this formula.",
      "The formula is π times the radius squared."
    ],
    answer: "A = πr²",
    explanation: "The area of a circle is calculated using A = πr², where π (pi) is approximately 3.14159 and r is the radius (distance from center to edge). You square the radius and multiply by pi to get the total area inside the circle.",
    difficulty: "grade8",
    order: 5
  },
  {
    id: "6",
    subject: "math",
    question: "What is the name for a number that can be expressed as a fraction of two integers?",
    hints: [
      "These numbers can be written as a/b where a and b are whole numbers.",
      "The bottom number (denominator) cannot be zero.",
      "Examples include 1/2, 3/4, and even whole numbers like 5 (which equals 5/1).",
      "Decimals that terminate or repeat are also this type of number.",
      "This word starts with 'R' and means 'reasonable' or 'logical'."
    ],
    answer: "Rational Number",
    explanation: "A rational number is any number that can be expressed as a fraction a/b where a and b are integers and b ≠ 0. This includes whole numbers, fractions, and terminating or repeating decimals. Examples: 1/2, -3/4, 0.5, 0.333...",
    difficulty: "grade8",
    order: 6
  },
  {
    id: "7",
    subject: "math",
    question: "What is the sum of the interior angles of any triangle?",
    hints: [
      "This is true for all triangles, no matter their shape or size.",
      "It's the same whether the triangle is acute, right, or obtuse.",
      "If you cut off all three corners of a triangle and arrange them together, they form a straight line.",
      "This measurement is the same as a straight angle.",
      "The answer is 180 of the standard unit for measuring angles."
    ],
    answer: "180 degrees",
    explanation: "The sum of all interior angles in any triangle is always 180 degrees. This is a fundamental property of triangles in Euclidean geometry. You can verify this by tearing off the corners of any paper triangle and arranging them to form a straight line.",
    difficulty: "grade8",
    order: 7
  },
  {
    id: "8",
    subject: "math",
    question: "What is the term for the middle value when a set of numbers is arranged in order from least to greatest?",
    hints: [
      "This is one of the three main measures of central tendency.",
      "To find this value, you must first arrange all numbers in order.",
      "If there's an odd number of values, this is the exact middle number.",
      "If there's an even number of values, this is the average of the two middle numbers.",
      "This word starts with 'M' and means 'middle'."
    ],
    answer: "Median",
    explanation: "The median is the middle value in a set of numbers when they are arranged in order from least to greatest. For an odd number of values, it's the middle number. For an even number of values, it's the average of the two middle numbers.",
    difficulty: "grade8",
    order: 8
  },

  // Science Cards
  {
    id: "9",
    subject: "science",
    question: "What is the basic unit of life that makes up all living organisms?",
    hints: [
      "All plants, animals, bacteria, and fungi are made up of these structures.",
      "They contain genetic material and can reproduce themselves.",
      "Robert Hooke first observed these in cork under a microscope in 1665.",
      "They have a membrane that controls what enters and exits.",
      "The human body contains trillions of these microscopic units."
    ],
    answer: "Cell",
    explanation: "A cell is the basic structural and functional unit of all living organisms. Cells contain DNA, can metabolize nutrients, and can reproduce. Some organisms are single-celled (like bacteria), while others are multicellular (like humans, who have trillions of cells).",
    difficulty: "grade8",
    order: 9
  },
  {
    id: "10",
    subject: "science",
    question: "What gas do plants absorb from the atmosphere during photosynthesis?",
    hints: [
      "This gas is what humans and animals breathe out as waste.",
      "It's one of the greenhouse gases that contributes to climate change.",
      "Plants use this gas along with water and sunlight to make food.",
      "The chemical formula for this gas is CO₂.",
      "This gas is made of one carbon atom and two oxygen atoms."
    ],
    answer: "Carbon Dioxide",
    explanation: "Plants absorb carbon dioxide (CO₂) from the atmosphere during photosynthesis. They combine CO₂ with water (H₂O) and use sunlight energy to create glucose (sugar) and release oxygen (O₂) as a byproduct. This process is essential for life on Earth.",
    difficulty: "grade8",
    order: 10
  },
  {
    id: "11",
    subject: "science",
    question: "What is the force that pulls objects toward the center of the Earth?",
    hints: [
      "This force keeps our feet on the ground and prevents us from floating away.",
      "Sir Isaac Newton described this force after observing a falling apple.",
      "The strength of this force depends on the mass of objects and the distance between them.",
      "On the Moon, this force is about 1/6th as strong as it is on Earth.",
      "This word starts with 'G' and affects all objects with mass."
    ],
    answer: "Gravity",
    explanation: "Gravity is the force of attraction between any two objects with mass. On Earth, gravity pulls objects toward the planet's center with an acceleration of 9.8 m/s². This force keeps objects on Earth's surface and governs the motion of planets, moons, and stars.",
    difficulty: "grade8",
    order: 11
  },
  {
    id: "12",
    subject: "science",
    question: "What is the process by which water changes from a liquid to a gas?",
    hints: [
      "This happens naturally when water is heated by the sun or other heat sources.",
      "You can observe this process when water disappears from a puddle on a sunny day.",
      "This is how water gets into the atmosphere to form clouds.",
      "The opposite process is called condensation.",
      "This word starts with 'E' and is part of the water cycle."
    ],
    answer: "Evaporation",
    explanation: "Evaporation is the process where liquid water changes into water vapor (gas) due to heat energy. This occurs at the surface of water bodies when molecules gain enough energy to escape into the atmosphere. It's a key part of the water cycle.",
    difficulty: "grade8",
    order: 12
  }
];

export function getAllFlashcards(): Flashcard[] {
  return flashcardsData.sort((a, b) => a.order - b.order);
}

export function getFlashcardsBySubject(subject: string): Flashcard[] {
  if (subject === 'all') {
    return getAllFlashcards();
  }
  return flashcardsData
    .filter(card => card.subject === subject)
    .sort((a, b) => a.order - b.order);
}