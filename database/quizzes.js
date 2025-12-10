const { v4: uuid } = require("uuid");

const quizzes = {
  data: [
    // MATHEMATICS - Algebra
    {
      id: uuid(),
      category: "mathematics",
      subcategory: "algebra",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500",
      title: "Algebra",
      description: "Test your knowledge of algebraic equations, expressions, and problem-solving",
      quiz: [
        {
          id: uuid(),
          question: "What is the solution to the equation: 2x + 5 = 15?",
          options: [
            { id: uuid(), option: "x = 5", isCorrect: true },
            { id: uuid(), option: "x = 10", isCorrect: false },
            { id: uuid(), option: "x = 7", isCorrect: false },
            { id: uuid(), option: "x = 3", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Simplify: 3x + 2x - 4x",
          options: [
            { id: uuid(), option: "x", isCorrect: true },
            { id: uuid(), option: "5x", isCorrect: false },
            { id: uuid(), option: "9x", isCorrect: false },
            { id: uuid(), option: "-x", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the value of x² when x = -3?",
          options: [
            { id: uuid(), option: "9", isCorrect: true },
            { id: uuid(), option: "-9", isCorrect: false },
            { id: uuid(), option: "6", isCorrect: false },
            { id: uuid(), option: "-6", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Factor the expression: x² - 9",
          options: [
            { id: uuid(), option: "(x + 3)(x - 3)", isCorrect: true },
            { id: uuid(), option: "(x + 9)(x - 1)", isCorrect: false },
            { id: uuid(), option: "(x - 3)²", isCorrect: false },
            { id: uuid(), option: "x(x - 9)", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "If 5y - 3 = 2y + 9, what is the value of y?",
          options: [
            { id: uuid(), option: "y = 4", isCorrect: true },
            { id: uuid(), option: "y = 2", isCorrect: false },
            { id: uuid(), option: "y = 6", isCorrect: false },
            { id: uuid(), option: "y = 3", isCorrect: false }
          ]
        }
      ]
    },

    // MATHEMATICS - Calculus
    {
      id: uuid(),
      category: "mathematics",
      subcategory: "calculus",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500",
      title: "Calculus",
      description: "Challenge yourself with derivatives, integrals, and limits",
      quiz: [
        {
          id: uuid(),
          question: "What is the derivative of x²?",
          options: [
            { id: uuid(), option: "2x", isCorrect: true },
            { id: uuid(), option: "x", isCorrect: false },
            { id: uuid(), option: "x²", isCorrect: false },
            { id: uuid(), option: "2x²", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the limit of (x² - 4)/(x - 2) as x approaches 2?",
          options: [
            { id: uuid(), option: "4", isCorrect: true },
            { id: uuid(), option: "2", isCorrect: false },
            { id: uuid(), option: "0", isCorrect: false },
            { id: uuid(), option: "Undefined", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the integral of 2x dx?",
          options: [
            { id: uuid(), option: "x² + C", isCorrect: true },
            { id: uuid(), option: "2x² + C", isCorrect: false },
            { id: uuid(), option: "x³ + C", isCorrect: false },
            { id: uuid(), option: "2x + C", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "The derivative of sin(x) is:",
          options: [
            { id: uuid(), option: "cos(x)", isCorrect: true },
            { id: uuid(), option: "-cos(x)", isCorrect: false },
            { id: uuid(), option: "tan(x)", isCorrect: false },
            { id: uuid(), option: "-sin(x)", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the second derivative of x³?",
          options: [
            { id: uuid(), option: "6x", isCorrect: true },
            { id: uuid(), option: "3x²", isCorrect: false },
            { id: uuid(), option: "3x", isCorrect: false },
            { id: uuid(), option: "x²", isCorrect: false }
          ]
        }
      ]
    },

    // MATHEMATICS - Geometry
    {
      id: uuid(),
      category: "mathematics",
      subcategory: "geometry",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500",
      title: "Geometry",
      description: "Explore shapes, angles, and spatial reasoning",
      quiz: [
        {
          id: uuid(),
          question: "What is the sum of interior angles in a triangle?",
          options: [
            { id: uuid(), option: "180°", isCorrect: true },
            { id: uuid(), option: "360°", isCorrect: false },
            { id: uuid(), option: "90°", isCorrect: false },
            { id: uuid(), option: "270°", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "The area of a circle with radius 5 is:",
          options: [
            { id: uuid(), option: "25π", isCorrect: true },
            { id: uuid(), option: "10π", isCorrect: false },
            { id: uuid(), option: "5π", isCorrect: false },
            { id: uuid(), option: "50π", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "How many sides does a hexagon have?",
          options: [
            { id: uuid(), option: "6", isCorrect: true },
            { id: uuid(), option: "5", isCorrect: false },
            { id: uuid(), option: "7", isCorrect: false },
            { id: uuid(), option: "8", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the Pythagorean theorem?",
          options: [
            { id: uuid(), option: "a² + b² = c²", isCorrect: true },
            { id: uuid(), option: "a + b = c", isCorrect: false },
            { id: uuid(), option: "a² - b² = c²", isCorrect: false },
            { id: uuid(), option: "ab = c²", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Two parallel lines are cut by a transversal. Alternate interior angles are:",
          options: [
            { id: uuid(), option: "Equal", isCorrect: true },
            { id: uuid(), option: "Supplementary", isCorrect: false },
            { id: uuid(), option: "Complementary", isCorrect: false },
            { id: uuid(), option: "Perpendicular", isCorrect: false }
          ]
        }
      ]
    },

    // MATHEMATICS - Trigonometry
    {
      id: uuid(),
      category: "mathematics",
      subcategory: "trigonometry",
      image: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=500",
      title: "Trigonometry",
      description: "Master sine, cosine, tangent, and trigonometric identities",
      quiz: [
        {
          id: uuid(),
          question: "What is sin(90°)?",
          options: [
            { id: uuid(), option: "1", isCorrect: true },
            { id: uuid(), option: "0", isCorrect: false },
            { id: uuid(), option: "-1", isCorrect: false },
            { id: uuid(), option: "0.5", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is cos(0°)?",
          options: [
            { id: uuid(), option: "1", isCorrect: true },
            { id: uuid(), option: "0", isCorrect: false },
            { id: uuid(), option: "-1", isCorrect: false },
            { id: uuid(), option: "0.5", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "tan(θ) is equal to:",
          options: [
            { id: uuid(), option: "sin(θ)/cos(θ)", isCorrect: true },
            { id: uuid(), option: "cos(θ)/sin(θ)", isCorrect: false },
            { id: uuid(), option: "sin(θ) × cos(θ)", isCorrect: false },
            { id: uuid(), option: "1/sin(θ)", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the value of sin(30°)?",
          options: [
            { id: uuid(), option: "1/2", isCorrect: true },
            { id: uuid(), option: "√3/2", isCorrect: false },
            { id: uuid(), option: "1", isCorrect: false },
            { id: uuid(), option: "√2/2", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "The identity sin²(θ) + cos²(θ) equals:",
          options: [
            { id: uuid(), option: "1", isCorrect: true },
            { id: uuid(), option: "0", isCorrect: false },
            { id: uuid(), option: "2", isCorrect: false },
            { id: uuid(), option: "tan²(θ)", isCorrect: false }
          ]
        }
      ]
    },

    // MATHEMATICS - Probability and Statistics
    {
      id: uuid(),
      category: "mathematics",
      subcategory: "probability-statistics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      title: "Probability and Statistics",
      description: "Test your understanding of data analysis, probability, and statistical measures",
      quiz: [
        {
          id: uuid(),
          question: "What is the probability of flipping a coin and getting heads?",
          options: [
            { id: uuid(), option: "1/2", isCorrect: true },
            { id: uuid(), option: "1/4", isCorrect: false },
            { id: uuid(), option: "1/3", isCorrect: false },
            { id: uuid(), option: "2/3", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "The mean of 2, 4, 6, 8, 10 is:",
          options: [
            { id: uuid(), option: "6", isCorrect: true },
            { id: uuid(), option: "5", isCorrect: false },
            { id: uuid(), option: "7", isCorrect: false },
            { id: uuid(), option: "8", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the median of 3, 7, 2, 9, 5?",
          options: [
            { id: uuid(), option: "5", isCorrect: true },
            { id: uuid(), option: "7", isCorrect: false },
            { id: uuid(), option: "3", isCorrect: false },
            { id: uuid(), option: "6", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "If you roll a standard die, what is the probability of getting a number greater than 4?",
          options: [
            { id: uuid(), option: "1/3", isCorrect: true },
            { id: uuid(), option: "1/2", isCorrect: false },
            { id: uuid(), option: "2/3", isCorrect: false },
            { id: uuid(), option: "1/6", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "The mode of 2, 3, 3, 5, 7, 7, 7, 9 is:",
          options: [
            { id: uuid(), option: "7", isCorrect: true },
            { id: uuid(), option: "3", isCorrect: false },
            { id: uuid(), option: "5", isCorrect: false },
            { id: uuid(), option: "9", isCorrect: false }
          ]
        }
      ]
    },

    // SCIENCE - Chemical Substances
    {
      id: uuid(),
      category: "science",
      subcategory: "chemistry",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=500",
      title: "Chemical Substances",
      description: "Discover the world of elements, compounds, and chemical reactions",
      quiz: [
        {
          id: uuid(),
          question: "What is the chemical symbol for gold?",
          options: [
            { id: uuid(), option: "Au", isCorrect: true },
            { id: uuid(), option: "Ag", isCorrect: false },
            { id: uuid(), option: "Go", isCorrect: false },
            { id: uuid(), option: "Gd", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the pH of pure water?",
          options: [
            { id: uuid(), option: "7", isCorrect: true },
            { id: uuid(), option: "0", isCorrect: false },
            { id: uuid(), option: "14", isCorrect: false },
            { id: uuid(), option: "10", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which gas do plants absorb from the atmosphere?",
          options: [
            { id: uuid(), option: "Carbon dioxide", isCorrect: true },
            { id: uuid(), option: "Oxygen", isCorrect: false },
            { id: uuid(), option: "Nitrogen", isCorrect: false },
            { id: uuid(), option: "Hydrogen", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the most abundant element in the Earth's atmosphere?",
          options: [
            { id: uuid(), option: "Nitrogen", isCorrect: true },
            { id: uuid(), option: "Oxygen", isCorrect: false },
            { id: uuid(), option: "Carbon dioxide", isCorrect: false },
            { id: uuid(), option: "Argon", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the chemical formula for table salt?",
          options: [
            { id: uuid(), option: "NaCl", isCorrect: true },
            { id: uuid(), option: "KCl", isCorrect: false },
            { id: uuid(), option: "CaCl₂", isCorrect: false },
            { id: uuid(), option: "NaOH", isCorrect: false }
          ]
        }
      ]
    },

    // SCIENCE - World of Living
    {
      id: uuid(),
      category: "science",
      subcategory: "biology",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500",
      title: "World of Living",
      description: "Explore life sciences, organisms, and biological processes",
      quiz: [
        {
          id: uuid(),
          question: "What is the powerhouse of the cell?",
          options: [
            { id: uuid(), option: "Mitochondria", isCorrect: true },
            { id: uuid(), option: "Nucleus", isCorrect: false },
            { id: uuid(), option: "Ribosome", isCorrect: false },
            { id: uuid(), option: "Chloroplast", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which blood type is known as the universal donor?",
          options: [
            { id: uuid(), option: "O negative", isCorrect: true },
            { id: uuid(), option: "AB positive", isCorrect: false },
            { id: uuid(), option: "A positive", isCorrect: false },
            { id: uuid(), option: "B negative", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the process by which plants make their food?",
          options: [
            { id: uuid(), option: "Photosynthesis", isCorrect: true },
            { id: uuid(), option: "Respiration", isCorrect: false },
            { id: uuid(), option: "Digestion", isCorrect: false },
            { id: uuid(), option: "Fermentation", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "How many chromosomes do humans have?",
          options: [
            { id: uuid(), option: "46", isCorrect: true },
            { id: uuid(), option: "23", isCorrect: false },
            { id: uuid(), option: "48", isCorrect: false },
            { id: uuid(), option: "44", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the largest organ in the human body?",
          options: [
            { id: uuid(), option: "Skin", isCorrect: true },
            { id: uuid(), option: "Liver", isCorrect: false },
            { id: uuid(), option: "Heart", isCorrect: false },
            { id: uuid(), option: "Brain", isCorrect: false }
          ]
        }
      ]
    },

    // SCIENCE - Natural Resources
    {
      id: uuid(),
      category: "science",
      subcategory: "natural-resources",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
      title: "Natural Resources",
      description: "Learn about Earth's resources and environmental conservation",
      quiz: [
        {
          id: uuid(),
          question: "Which of the following is a renewable energy source?",
          options: [
            { id: uuid(), option: "Solar energy", isCorrect: true },
            { id: uuid(), option: "Coal", isCorrect: false },
            { id: uuid(), option: "Natural gas", isCorrect: false },
            { id: uuid(), option: "Petroleum", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What percentage of Earth's surface is covered by water?",
          options: [
            { id: uuid(), option: "71%", isCorrect: true },
            { id: uuid(), option: "50%", isCorrect: false },
            { id: uuid(), option: "60%", isCorrect: false },
            { id: uuid(), option: "80%", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which gas is most responsible for global warming?",
          options: [
            { id: uuid(), option: "Carbon dioxide", isCorrect: true },
            { id: uuid(), option: "Oxygen", isCorrect: false },
            { id: uuid(), option: "Nitrogen", isCorrect: false },
            { id: uuid(), option: "Helium", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the primary source of energy for Earth?",
          options: [
            { id: uuid(), option: "The Sun", isCorrect: true },
            { id: uuid(), option: "The Moon", isCorrect: false },
            { id: uuid(), option: "Earth's core", isCorrect: false },
            { id: uuid(), option: "Ocean currents", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which layer of the atmosphere protects us from UV radiation?",
          options: [
            { id: uuid(), option: "Ozone layer", isCorrect: true },
            { id: uuid(), option: "Troposphere", isCorrect: false },
            { id: uuid(), option: "Stratosphere", isCorrect: false },
            { id: uuid(), option: "Mesosphere", isCorrect: false }
          ]
        }
      ]
    },

    // PHYSICS - Solar System
    {
      id: uuid(),
      category: "physics",
      subcategory: "solar-system",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500",
      title: "Cosmic Solar System",
      description: "Journey through space and explore our solar system",
      quiz: [
        {
          id: uuid(),
          question: "Which planet is closest to the Sun?",
          options: [
            { id: uuid(), option: "Mercury", isCorrect: true },
            { id: uuid(), option: "Venus", isCorrect: false },
            { id: uuid(), option: "Earth", isCorrect: false },
            { id: uuid(), option: "Mars", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the largest planet in our solar system?",
          options: [
            { id: uuid(), option: "Jupiter", isCorrect: true },
            { id: uuid(), option: "Saturn", isCorrect: false },
            { id: uuid(), option: "Neptune", isCorrect: false },
            { id: uuid(), option: "Uranus", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "How many moons does Mars have?",
          options: [
            { id: uuid(), option: "2", isCorrect: true },
            { id: uuid(), option: "1", isCorrect: false },
            { id: uuid(), option: "4", isCorrect: false },
            { id: uuid(), option: "0", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which planet is known as the Red Planet?",
          options: [
            { id: uuid(), option: "Mars", isCorrect: true },
            { id: uuid(), option: "Venus", isCorrect: false },
            { id: uuid(), option: "Jupiter", isCorrect: false },
            { id: uuid(), option: "Saturn", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the name of Earth's natural satellite?",
          options: [
            { id: uuid(), option: "The Moon", isCorrect: true },
            { id: uuid(), option: "Titan", isCorrect: false },
            { id: uuid(), option: "Europa", isCorrect: false },
            { id: uuid(), option: "Phobos", isCorrect: false }
          ]
        }
      ]
    },

    // PHYSICS - Electromagnetism
    {
      id: uuid(),
      category: "physics",
      subcategory: "electromagnetism",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      title: "Electromagnetism",
      description: "Understand electricity, magnetism, and electromagnetic forces",
      quiz: [
        {
          id: uuid(),
          question: "What is the unit of electric current?",
          options: [
            { id: uuid(), option: "Ampere", isCorrect: true },
            { id: uuid(), option: "Volt", isCorrect: false },
            { id: uuid(), option: "Watt", isCorrect: false },
            { id: uuid(), option: "Ohm", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "According to Ohm's Law, V = I × ?",
          options: [
            { id: uuid(), option: "R (Resistance)", isCorrect: true },
            { id: uuid(), option: "P (Power)", isCorrect: false },
            { id: uuid(), option: "C (Capacitance)", isCorrect: false },
            { id: uuid(), option: "L (Inductance)", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Like magnetic poles:",
          options: [
            { id: uuid(), option: "Repel each other", isCorrect: true },
            { id: uuid(), option: "Attract each other", isCorrect: false },
            { id: uuid(), option: "Have no effect", isCorrect: false },
            { id: uuid(), option: "Cancel each other", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What type of current is supplied to homes?",
          options: [
            { id: uuid(), option: "Alternating Current (AC)", isCorrect: true },
            { id: uuid(), option: "Direct Current (DC)", isCorrect: false },
            { id: uuid(), option: "Static electricity", isCorrect: false },
            { id: uuid(), option: "Pulsed current", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Who discovered electromagnetic induction?",
          options: [
            { id: uuid(), option: "Michael Faraday", isCorrect: true },
            { id: uuid(), option: "Isaac Newton", isCorrect: false },
            { id: uuid(), option: "Albert Einstein", isCorrect: false },
            { id: uuid(), option: "Nikola Tesla", isCorrect: false }
          ]
        }
      ]
    },

    // PHYSICS - Gravity
    {
      id: uuid(),
      category: "physics",
      subcategory: "gravity",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500",
      title: "Gravity",
      description: "Explore the fundamental force that governs motion in the universe",
      quiz: [
        {
          id: uuid(),
          question: "Who formulated the law of universal gravitation?",
          options: [
            { id: uuid(), option: "Isaac Newton", isCorrect: true },
            { id: uuid(), option: "Albert Einstein", isCorrect: false },
            { id: uuid(), option: "Galileo Galilei", isCorrect: false },
            { id: uuid(), option: "Stephen Hawking", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the acceleration due to gravity on Earth (approximately)?",
          options: [
            { id: uuid(), option: "9.8 m/s²", isCorrect: true },
            { id: uuid(), option: "10.5 m/s²", isCorrect: false },
            { id: uuid(), option: "8.9 m/s²", isCorrect: false },
            { id: uuid(), option: "11.2 m/s²", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What happens to gravitational force when distance doubles?",
          options: [
            { id: uuid(), option: "It becomes 1/4th", isCorrect: true },
            { id: uuid(), option: "It becomes half", isCorrect: false },
            { id: uuid(), option: "It doubles", isCorrect: false },
            { id: uuid(), option: "It remains same", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which planet has the strongest gravitational pull?",
          options: [
            { id: uuid(), option: "Jupiter", isCorrect: true },
            { id: uuid(), option: "Earth", isCorrect: false },
            { id: uuid(), option: "Saturn", isCorrect: false },
            { id: uuid(), option: "Neptune", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is escape velocity from Earth (approximately)?",
          options: [
            { id: uuid(), option: "11.2 km/s", isCorrect: true },
            { id: uuid(), option: "7.9 km/s", isCorrect: false },
            { id: uuid(), option: "15.5 km/s", isCorrect: false },
            { id: uuid(), option: "9.8 km/s", isCorrect: false }
          ]
        }
      ]
    },

    // PHYSICS - Optics
    {
      id: uuid(),
      category: "physics",
      subcategory: "optics",
      image: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=500",
      title: "Optics",
      description: "Study the behavior and properties of light",
      quiz: [
        {
          id: uuid(),
          question: "What is the speed of light in vacuum?",
          options: [
            { id: uuid(), option: "3 × 10⁸ m/s", isCorrect: true },
            { id: uuid(), option: "3 × 10⁶ m/s", isCorrect: false },
            { id: uuid(), option: "3 × 10¹⁰ m/s", isCorrect: false },
            { id: uuid(), option: "3 × 10⁵ m/s", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which type of lens is used to correct myopia (nearsightedness)?",
          options: [
            { id: uuid(), option: "Concave lens", isCorrect: true },
            { id: uuid(), option: "Convex lens", isCorrect: false },
            { id: uuid(), option: "Cylindrical lens", isCorrect: false },
            { id: uuid(), option: "Bifocal lens", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What phenomenon causes a rainbow?",
          options: [
            { id: uuid(), option: "Dispersion of light", isCorrect: true },
            { id: uuid(), option: "Reflection only", isCorrect: false },
            { id: uuid(), option: "Diffraction only", isCorrect: false },
            { id: uuid(), option: "Interference only", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the law of reflection?",
          options: [
            { id: uuid(), option: "Angle of incidence = Angle of reflection", isCorrect: true },
            { id: uuid(), option: "Angle of incidence > Angle of reflection", isCorrect: false },
            { id: uuid(), option: "Angle of incidence < Angle of reflection", isCorrect: false },
            { id: uuid(), option: "They are unrelated", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which mirror is used in vehicle headlights?",
          options: [
            { id: uuid(), option: "Concave mirror", isCorrect: true },
            { id: uuid(), option: "Convex mirror", isCorrect: false },
            { id: uuid(), option: "Plane mirror", isCorrect: false },
            { id: uuid(), option: "Parabolic mirror", isCorrect: false }
          ]
        }
      ]
    },

    // PHYSICS - Light
    {
      id: uuid(),
      category: "physics",
      subcategory: "light",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500",
      title: "Light and Waves",
      description: "Discover the wave and particle nature of light",
      quiz: [
        {
          id: uuid(),
          question: "What type of wave is light?",
          options: [
            { id: uuid(), option: "Electromagnetic wave", isCorrect: true },
            { id: uuid(), option: "Mechanical wave", isCorrect: false },
            { id: uuid(), option: "Sound wave", isCorrect: false },
            { id: uuid(), option: "Water wave", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which color of visible light has the longest wavelength?",
          options: [
            { id: uuid(), option: "Red", isCorrect: true },
            { id: uuid(), option: "Blue", isCorrect: false },
            { id: uuid(), option: "Green", isCorrect: false },
            { id: uuid(), option: "Violet", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What happens when light passes from air to glass?",
          options: [
            { id: uuid(), option: "It slows down and bends", isCorrect: true },
            { id: uuid(), option: "It speeds up", isCorrect: false },
            { id: uuid(), option: "It maintains same speed", isCorrect: false },
            { id: uuid(), option: "It stops completely", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the photon?",
          options: [
            { id: uuid(), option: "Particle of light", isCorrect: true },
            { id: uuid(), option: "Particle of sound", isCorrect: false },
            { id: uuid(), option: "Type of electron", isCorrect: false },
            { id: uuid(), option: "Type of atom", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which part of the electromagnetic spectrum has the highest energy?",
          options: [
            { id: uuid(), option: "Gamma rays", isCorrect: true },
            { id: uuid(), option: "X-rays", isCorrect: false },
            { id: uuid(), option: "Visible light", isCorrect: false },
            { id: uuid(), option: "Radio waves", isCorrect: false }
          ]
        }
      ]
    },

    // ENGLISH - Reading Comprehension
    {
      id: uuid(),
      category: "english",
      subcategory: "reading-comprehension",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500",
      title: "Reading Comprehension",
      description: "Test your ability to understand and analyze written texts",
      quiz: [
        {
          id: uuid(),
          question: "What does 'context clues' mean in reading?",
          options: [
            { id: uuid(), option: "Hints in the text that help understand unfamiliar words", isCorrect: true },
            { id: uuid(), option: "The main idea of a paragraph", isCorrect: false },
            { id: uuid(), option: "The author's biography", isCorrect: false },
            { id: uuid(), option: "The title of the book", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the main purpose of a topic sentence?",
          options: [
            { id: uuid(), option: "To introduce the main idea of a paragraph", isCorrect: true },
            { id: uuid(), option: "To conclude the paragraph", isCorrect: false },
            { id: uuid(), option: "To provide an example", isCorrect: false },
            { id: uuid(), option: "To ask a question", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What does it mean to 'infer' while reading?",
          options: [
            { id: uuid(), option: "To draw conclusions based on evidence and reasoning", isCorrect: true },
            { id: uuid(), option: "To read quickly", isCorrect: false },
            { id: uuid(), option: "To memorize the text", isCorrect: false },
            { id: uuid(), option: "To summarize", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is a 'theme' in literature?",
          options: [
            { id: uuid(), option: "The central message or underlying meaning", isCorrect: true },
            { id: uuid(), option: "The setting of the story", isCorrect: false },
            { id: uuid(), option: "The main character", isCorrect: false },
            { id: uuid(), option: "The plot summary", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the purpose of a summary?",
          options: [
            { id: uuid(), option: "To briefly restate the main points", isCorrect: true },
            { id: uuid(), option: "To give personal opinions", isCorrect: false },
            { id: uuid(), option: "To add new information", isCorrect: false },
            { id: uuid(), option: "To criticize the text", isCorrect: false }
          ]
        }
      ]
    },

    // ENGLISH - Writing Skills
    {
      id: uuid(),
      category: "english",
      subcategory: "writing-skills",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500",
      title: "Writing Skills",
      description: "Improve your composition, structure, and writing techniques",
      quiz: [
        {
          id: uuid(),
          question: "What are the three main parts of an essay?",
          options: [
            { id: uuid(), option: "Introduction, Body, Conclusion", isCorrect: true },
            { id: uuid(), option: "Title, Content, References", isCorrect: false },
            { id: uuid(), option: "Beginning, Middle, Summary", isCorrect: false },
            { id: uuid(), option: "Topic, Discussion, End", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is a thesis statement?",
          options: [
            { id: uuid(), option: "The main argument or claim of an essay", isCorrect: true },
            { id: uuid(), option: "The first sentence", isCorrect: false },
            { id: uuid(), option: "A question to the reader", isCorrect: false },
            { id: uuid(), option: "The conclusion", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the purpose of transition words?",
          options: [
            { id: uuid(), option: "To connect ideas and improve flow", isCorrect: true },
            { id: uuid(), option: "To make sentences longer", isCorrect: false },
            { id: uuid(), option: "To confuse the reader", isCorrect: false },
            { id: uuid(), option: "To end paragraphs", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What does 'revising' mean in the writing process?",
          options: [
            { id: uuid(), option: "Making changes to improve content and structure", isCorrect: true },
            { id: uuid(), option: "Checking spelling only", isCorrect: false },
            { id: uuid(), option: "Writing the first draft", isCorrect: false },
            { id: uuid(), option: "Publishing the work", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is 'plagiarism'?",
          options: [
            { id: uuid(), option: "Using someone else's work without proper credit", isCorrect: true },
            { id: uuid(), option: "Writing too much", isCorrect: false },
            { id: uuid(), option: "Making grammar mistakes", isCorrect: false },
            { id: uuid(), option: "Writing fiction", isCorrect: false }
          ]
        }
      ]
    },

    // ENGLISH - Grammar
    {
      id: uuid(),
      category: "english",
      subcategory: "grammar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
      title: "Grammar",
      description: "Master the rules of English grammar and sentence structure",
      quiz: [
        {
          id: uuid(),
          question: "Which sentence is grammatically correct?",
          options: [
            { id: uuid(), option: "She and I went to the store.", isCorrect: true },
            { id: uuid(), option: "Her and me went to the store.", isCorrect: false },
            { id: uuid(), option: "She and me went to the store.", isCorrect: false },
            { id: uuid(), option: "Her and I went to the store.", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is a verb?",
          options: [
            { id: uuid(), option: "A word that shows action or state of being", isCorrect: true },
            { id: uuid(), option: "A describing word", isCorrect: false },
            { id: uuid(), option: "A naming word", isCorrect: false },
            { id: uuid(), option: "A connecting word", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Identify the adjective: 'The blue car is fast.'",
          options: [
            { id: uuid(), option: "Blue and fast", isCorrect: true },
            { id: uuid(), option: "Car", isCorrect: false },
            { id: uuid(), option: "Is", isCorrect: false },
            { id: uuid(), option: "The", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the past tense of 'go'?",
          options: [
            { id: uuid(), option: "Went", isCorrect: true },
            { id: uuid(), option: "Gone", isCorrect: false },
            { id: uuid(), option: "Goed", isCorrect: false },
            { id: uuid(), option: "Going", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "Which is a conjunction?",
          options: [
            { id: uuid(), option: "And", isCorrect: true },
            { id: uuid(), option: "Happy", isCorrect: false },
            { id: uuid(), option: "Run", isCorrect: false },
            { id: uuid(), option: "Book", isCorrect: false }
          ]
        }
      ]
    },

    // ENGLISH - Literature
    {
      id: uuid(),
      category: "english",
      subcategory: "literature",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
      title: "Literature",
      description: "Explore literary devices, genres, and classic works",
      quiz: [
        {
          id: uuid(),
          question: "What is a metaphor?",
          options: [
            { id: uuid(), option: "A direct comparison without using 'like' or 'as'", isCorrect: true },
            { id: uuid(), option: "A comparison using 'like' or 'as'", isCorrect: false },
            { id: uuid(), option: "Giving human qualities to non-human things", isCorrect: false },
            { id: uuid(), option: "Exaggeration for effect", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is personification?",
          options: [
            { id: uuid(), option: "Giving human characteristics to non-human things", isCorrect: true },
            { id: uuid(), option: "A type of rhyme", isCorrect: false },
            { id: uuid(), option: "A comparison", isCorrect: false },
            { id: uuid(), option: "A story about real events", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the protagonist?",
          options: [
            { id: uuid(), option: "The main character in a story", isCorrect: true },
            { id: uuid(), option: "The villain", isCorrect: false },
            { id: uuid(), option: "The narrator", isCorrect: false },
            { id: uuid(), option: "The author", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is alliteration?",
          options: [
            { id: uuid(), option: "Repetition of initial consonant sounds", isCorrect: true },
            { id: uuid(), option: "Repetition of vowel sounds", isCorrect: false },
            { id: uuid(), option: "End rhyme", isCorrect: false },
            { id: uuid(), option: "A type of poem", isCorrect: false }
          ]
        },
        {
          id: uuid(),
          question: "What is the 'climax' of a story?",
          options: [
            { id: uuid(), option: "The turning point or moment of highest tension", isCorrect: true },
            { id: uuid(), option: "The introduction", isCorrect: false },
            { id: uuid(), option: "The ending", isCorrect: false },
            { id: uuid(), option: "The setting description", isCorrect: false }
          ]
        }
      ]
    }
  ]
};

module.exports = quizzes;