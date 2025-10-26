
   
    // Data for all semesters with example subjects and details
    const semesterData = {
      1: {
        title: "Semester 1 Subjects",
        subjects: {
          'MA25C01': {
            name: 'Applied Calculus',
            type: 'Theory (T)',
            periods: '3-1-0',
            credits: '4',
            category: 'Basic Science (BS)',
            objectives: [
              'To provide technical competence of modelling engineering problems using calculus.',
              'To apply the calculus concepts in solving engineering problems using analytical methods and computational tools.'
            ],
            chapters: [
              {
                title: 'Differential Calculus',
                topics: 'Functions, graph of functions, limits, continuity, derivatives, maxima and minima, mean value theorem.',
                activities: 'Visualization of functions, maxima and minima using open-source software, solving GATE questions.'
              },
              {
                title: 'Functions of Several Variables',
                topics: 'Partial derivatives, chain rule, total derivative, maxima and minima of two variables, Lagrange’s Multipliers.',
                activities: 'Partial derivatives with two or three variables, maxima and minima using open-source software, solving GATE questions.'
              },
              {
                title: 'Integral Calculus',
                topics: 'Fundamental theorem of Calculus, indefinite integrals, Net Change Theorem, improper integrals, Arc Length, Area of Region, Area of surface of revolution.',
                activities: 'Definite and Indefinite Integrals, Determination of Area, Solving GATE questions.'
              },
              {
                title: 'Multiple Integrals',
                topics: 'Iterated integrals, Fubini’s theorem, double integrals, change of order of integration, change of variables (Cartesian to polar, cylindrical, spherical), triple integrals.',
                activities: 'Double and triple integrals using open-source software, solving GATE questions.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Calculus: Early Transcendentals (Anton, Bivens, Davis)', link: 'https://www.wiley.com/en-us/Calculus%3A+Early+Transcendentals%2C+12th+Edition-p-9781119732002' },
              { icon: '📚', text: 'Thomas\' Calculus: Early Transcendentals (Thomas, Weir, Hass, Heil)', link: 'https://www.pearson.com/us/higher-education/program/Thomas-Thomas-Calculus-Early-Transcendentals-14th-Edition/PGM109000.html' },
              { icon: '🎥', text: 'NPTEL - Calculus of One Variable', link: 'https://nptel.ac.in/courses/111105122' },
              { icon: '🎥', text: 'Khan Academy - Calculus', link: 'https://www.khanacademy.org/math/calculus-1' },
              { icon: '💻', text: 'SCILAB (Open-source software for numerical computation)', link: 'https://www.scilab.org/' }

            ],
            practicals: [
              { description: 'Visualization of functions and their derivatives.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Function+Visualization+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Function+Visualization+2',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Function+Visualization+3',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Function+Visualization+4',
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Function+Visualization+5'
              ] },
              { description: 'Solving optimization problems using calculus.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Optimization+Problem+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Optimization+Problem+2',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Optimization+Problem+3',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Optimization+Problem+4',
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Optimization+Problem+5'
              ] }
            ]
          },
          'EN25C01': {
            name: 'English Essentials – I',
            type: 'Theory (T)',
            periods: '2-0-0',
            credits: '2',
            category: 'Humanities (HUM)',
            objectives: [
              'To equip students with the skills to write clear, coherent, and grammatically correct texts for various purposes.',
              'To strengthen the ability to comprehend, interpret, and analyse written English across diverse contexts.'
            ],
            chapters: [
              {
                title: 'Speaking Skills',
                topics: 'Parts of Speech, Articles, Tenses, Sentence Structure, Subject-Verb Agreement, Synonyms and Antonyms, Prefixes and Suffixes, Idioms and Phrases, Self-Introduction, Expressing Oneself, Everyday Conversations, Team Interactions, Emotions, agreeing & disagreeing.',
                activities: 'Self-Introduction, Just a Minute (JAM) Video recording, Brainstorming sessions, Situational role plays, Usage of Applications.'
              },
              {
                title: 'Listening Skills',
                topics: 'Listening to Simple Conversations, Short Speeches / Stories, Extracting key information, Phonemes, Listening to Native Speakers, Listening to Various Accents.',
                activities: 'Gap fill exercises, Understanding tone and intent, Listening and imitating, Spell Bee.'
              },
              {
                title: 'Reading Skills',
                topics: 'Reading Strategies, Skimming and Scanning, active reading with short passages.',
                activities: 'Summarising, loud reading, Cloze reading, Reading comprehension, Reading newspaper articles, Reading Long passage and note making.'
              },
              {
                title: 'Drafting Skills',
                topics: 'Sentence Formation, Word Substitution, Keywords Development, Writing Paragraphs, Emails and Letters.',
                activities: 'Picture and poster interpretation, formal and informal letters, Official e-mails.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Business and Professional Communication (Miller & Wahl)', link: 'https://us.sagepub.com/en-us/nam/business-and-professional-communication/book270400' },
              { icon: '📚', text: 'English Language and Communication Skills for Engineers (Kumar & Pushpalatha)', link: 'https://global.oup.com/academic/product/english-language-and-communication-skills-for-engineers-9780199487000?cc=in&lang=en&' },
              { icon: '🎥', text: 'TED Talks', link: 'https://www.ted.com/' },
              { icon: '🌐', text: 'Cambridge English – Grammar and Vocabulary', link: 'https://www.cambridgeenglish.org/learning-english/grammar-and-vocabulary/' },
              { icon: '🌐', text: 'British Council – Learn English', link: 'https://learnenglish.britishcouncil.org/grammar' }
            ],
            practicals: [
              { description: 'Self-introduction and JAM sessions.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Self-Intro+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Self-Intro+2',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Self-Intro+3',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Self-Intro+4',
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Self-Intro+5'
              ] },
              { description: 'Role-playing everyday conversations.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Conversation+Roleplay+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Conversation+Roleplay+2',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Conversation+Roleplay+3',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Conversation+Roleplay+4',
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Conversation+Roleplay+5'
              ] }
            ]
          },
          'UC25H01': {
            name: 'Heritage of Tamils',
            type: 'Theory (T)',
            periods: '1-0-0',
            credits: '1',
            category: 'Humanities (HUM)',
            objectives: [
              'To understand the rich cultural heritage of Tamils.',
              'To explore the contributions of Tamils to Indian culture and national movement.'
            ],
            chapters: [
              {
                title: 'Language and Literature',
                topics: 'Dravidian Languages, Tamil as a Classical Language, Sangam Literature, Thirukural, Tamil Epics, Bakthi Literature, Modern literature.',
                activities: 'Discussions on literary works and their impact.'
              },
              {
                title: 'Heritage - Art and Sculpture',
                topics: 'Rock Art Paintings, Sculpture (Hero stone to modern), Bronze icons, Temple car making, Terracotta sculptures, Musical instruments.',
                activities: 'Case studies on historical artifacts.'
              },
              {
                title: 'Folk and Martial Arts',
                topics: 'Therukoothu, Karagattam, Villu Pattu, Silambattam, Valari, Tiger dance, Sports and Games of Tamils.',
                activities: 'Video presentations of traditional arts.'
              },
              {
                title: 'Thinai Concept of Tamils',
                topics: 'Flora and Fauna, Aham and Puram Concept, Aram Concept, Education and Literacy during Sangam Age, Ancient Cities and Ports, Overseas Conquest of Cholas.',
                activities: 'Mapping ancient trade routes.'
              },
              {
                title: 'Contribution to Indian National Movement and Culture',
                topics: 'Tamils in Freedom Struggle, Cultural Influence, Self-Respect Movement, Siddha Medicine, Inscriptions & Manuscripts, Print History of Tamil Books.',
                activities: 'Research on historical figures and movements.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Social Life of Tamils (Dr.K.K.Pillay)', link: 'https://www.worldcat.org/title/social-life-of-the-tamils/oclc/100300000' },
              { icon: '📚', text: 'Keeladi - ‘Sangam City Civilization on the banks of river Vaigai’ (Dept. of Archaeology & Tamil Nadu Text Book)', link: 'https://www.tnarch.gov.in/english/publications/keeladi.pdf' },
              { icon: '📚', text: 'Journey of Civilization Indus to Vaigai (R.Balakrishnan)', link: 'https://www.amazon.in/Journey-Civilization-Indus-Vaigai-Balakrishnan/dp/938622300X' },
              { icon: '🌐', text: 'Tamil Virtual Academy', link: 'http://www.tamilvu.org/' },
              { icon: '🌐', text: 'Project Madurai (Tamil E-Texts)', link: 'https://www.projectmadurai.org/' }
            ],
            practicals: [
              { description: 'Virtual tour of ancient Tamil cities.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Ancient+City+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Ancient+City+2'
              ] },
              { description: 'Analysis of Sangam literature excerpts.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Literature+Analysis+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Literature+Analysis+2'
              ] }
            ]
          },
          'EE25C04': {
            name: 'Basic Electronics and Electrical Engineering',
            type: 'Theory (T)',
            periods: '2-1-0',
            credits: '3',
            category: 'Engineering Science (PC)',
            objectives: [
              'Students will understand the fundamentals and evolution of electronics, electrical systems.'
            ],
            chapters: [
              {
                title: 'Basic Electronics',
                topics: 'Passive and active components – Resistors, Capacitors, Inductors - Types, features and specification, Energy band diagram of conductors, semiconductor, insulator – Intrinsic & extrinsic semiconductor - types. PN junction diode – zener diode.',
                activities: 'VI characteristics of PN junction and Zener diode.'
              },
              {
                title: 'Electrical Machines',
                topics: 'Construction, Principle of Operation, Basic Equations and Applications - DC Generators, DC Motors, Single Phase Transformer, Single phase Induction Motor, Three phase Induction Motor, Three phase Alternator, Stepper and BLDC motors.',
                activities: 'Demonstration of Electrical Machines.'
              },
              {
                title: 'Measurements and Instrumentation',
                topics: 'Functional elements of an instrument, Standards and calibration, Operating Principle, types - Moving Coil and Moving Iron meters, Measurement of three phase power, Energy Meter, Instrument Transformers - CT and PT, DSO - Block diagram - Data acquisition.',
                activities: 'Demonstration of measuring equipment’s.'
              },
              {
                title: 'Basics of Power Systems',
                topics: 'Power system structure - Generation, Transmission and distribution, Various voltage levels, Earthing – methods of earthing, protective devices - switch fuse unit - Miniature circuit breaker - moulded case circuit breaker - earth leakage circuit breaker, safety precautions and First Aid.',
                activities: 'Demonstration of Earthing and safety precautions in electrical circuits.'
              },
              {
                title: 'Sensors and Transducers',
                topics: 'Solenoids, electro-pneumatic systems, proximity sensors, limit switches, piezoelectric, hall effect, photo sensors, Strain gauge, LVDT, piezo electric crystals, differential pressure transducer, optical and digital transducers, Smart sensors, Thermal Imagers.',
                activities: 'Demonstration of various sensors and their applications.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Electronic devices and circuits (Bell, D.)', link: 'https://global.oup.com/academic/product/electronic-devices-and-circuits-9780195693409?cc=in&lang=en&' },
              { icon: '📚', text: 'Electronic circuits: Fundamentals and applications (Tooley, M. A.)', link: 'https://www.elsevier.com/books/electronic-circuits/tooley/978-0-7506-6370-1' },
              { icon: '📚', text: 'A textbook of electrical technology (Theraja, B. L.)', link: 'https://www.schandpublishing.com/books/tech-prof/electrical-engineering/a-textbook-of-electrical-technology-vol-1/9788121924405/' },
              { icon: '🌐', text: 'MIT OpenCourseWare - Electrical Engineering', link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science' },
              { icon: '🌐', text: 'Khan Academy - Electrical Engineering', link: 'https://www.khanacademy.org/science/electrical-engineering' }
            ],
            practicals: [
              { description: 'VI characteristics of PN junction and Zener diode.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=PN+Junction+Diode+VI+Char+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Zener+Diode+VI+Char+2'
              ] },
              { description: 'Demonstration of Electrical Machines (DC Motor, Transformer).', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=DC+Motor+Demo+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Transformer+Demo+2'
              ] },
              { description: 'Demonstration of measuring equipment (DSO, Energy Meter).', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=DSO+Demo+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Energy+Meter+Demo+2'
              ] }
            ]
          },
          'PH25C01': {
            name: 'Applied Physics – I',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '2-0-2',
            credits: '3',
            category: 'Basic Science (BS)',
            objectives: [
              'To impart knowledge and expose the essentials of physics in various engineering applications.'
            ],
            chapters: [
              {
                title: 'Properties of Matter',
                topics: 'Elasticity, Cantilever – Young’s modulus (non-uniform bending), Girders: Bridges and buildings, Viscosity: Stokes method – Surface tension: drop weight method, Thermal expansion, Thermal stress, Bimetallic strips, Expansion joints.',
                activities: 'Virtual demonstration of thermal stress.'
              },
              {
                title: 'Oscillations',
                topics: 'Simple Harmonic motion, Torsional pendulum, Couple per unit twist, Damped and Forced Oscillation.',
                activities: 'Demonstration of damped oscillations.'
              },
              {
                title: 'Waves',
                topics: 'Waves on a stretched string, Energy and Power, standing waves, Ultrasonics, piezo-electric method, Acoustic grating, Electromagnetic waves: Maxwell equation, Production of EM waves by dipole antenna, Propagation of EM waves in free space, wave equation, Cell phone reception.',
                activities: 'Virtual demonstration of propagation of EM waves.'
              },
              {
                title: 'Quantum Mechanics',
                topics: 'Black body radiation, Photoelectric effect, de Broglie hypothesis - Schrodinger Wave equation, Particle in a box (infinite potential well, three-dimensional box), Barrier penetration and quantum tunnelling.',
                activities: 'Virtual demonstration of Scanning Transmission Electron Microscope.'
              },
              {
                title: 'Applied Optics',
                topics: 'Interference: Air wedge, Michelson’s Interferometer, Fiber optics: Structure of a fiber – Fiber Optic Communication System – Fiber Sensors (Virtual demo) – Displacement, pressure sensor and Temperature sensor - Einstein Co-efficient - Nd:YAG laser, CO2 laser (construction, functioning and applications), dye laser.',
                activities: 'Demonstration of sensors and applications of Lasers.'
              }
            ],
            resources: [
              { icon: '📚', text: 'University physics with modern physics (Young, H. D., & Freedman, R. A.)', link: 'https://www.pearson.com/us/higher-education/program/Young-University-Physics-with-Modern-Physics-15th-Edition/PGM109000.html' },
              { icon: '📚', text: 'Engineering physics (Gaur, R. K., & Gupta, S. L.)', link: 'https://www.dhanpatrai.com/book/engineering-physics-by-r-k-gaur-s-l-gupta' },
              { icon: '🌐', text: 'NPTEL - Barrier penetration and Quantum tunnelling', link: 'https://archive.nptel.ac.in/courses/115/104/115104096/' },
              { icon: '🌐', text: 'YouTube - Cell phone Reception', link: 'https://www.youtube.com/watch?v=1JZG9x_VOwA' }
            ],
            practicals: [
              { description: 'Non-Uniform bending, Young’s modulus of the material.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Youngs+Modulus+Exp+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Youngs+Modulus+Exp+2'
              ] },
              { description: 'Photo-electric effect – Determination of Planck’s constant.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Photoelectric+Effect+Exp+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Photoelectric+Effect+Exp+2'
              ] },
              { description: 'Ruling width of Compact disc using Laser, Thickness of a thin sheet/wire using Air wedge Method.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Laser+Diffraction+Exp+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Air+Wedge+Exp+2'
              ] }
            ]
          },
          'CY25C01': {
            name: 'Applied Chemistry – I',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '2-0-2',
            credits: '3',
            category: 'Basic Science (BS)',
            objectives: [
              'To provide students with a solid understanding of the chemical principles for engineering applications.',
              'To introduce the chemical properties of materials and how these properties influence the selection and use of materials in engineering systems.',
              'To impart practical applications of chemistry in commonly used engineering devices.'
            ],
            chapters: [
              {
                title: 'Water Technology',
                topics: 'Water quality parameters and standards. Industrial feed water – Remediation. Municipal water treatment. Desalination.',
                activities: 'Coagulation of water sample using Alum.'
              },
              {
                title: 'Nano-chemistry',
                topics: 'Classification, Size-dependent properties. Preparation of nanomaterials – Top-down and Botton-Up approaches, Applications (Flipped classroom).',
                activities: 'Preparation of nanoparticles by Sol-Gel method.'
              },
              {
                title: 'Electrochemistry',
                topics: 'Electrochemical cell - Electrode potential - Redox reaction. Conductivity of electrolytes – Factors.',
                activities: 'Electrochemical cell demonstration.'
              },
              {
                title: 'Corrosion & Control',
                topics: 'Chemical and electrochemical corrosions, galvanic series, factors influencing corrosion, Electrochemical protection. Organic and Inorganic coating.',
                activities: 'Case Study on Corrosion in Pipelines and Electronics, Control measures for a corroded metal.'
              },
              {
                title: 'Batteries',
                topics: 'Conventional, Contemporary and Emerging battery storage technologies, Primary & Secondary Batteries, Battery Pack, Battery Materials, Performance Parameters, Testing, Safety aspects.',
                activities: 'Demonstration of battery pack in e-vehicles.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Engineering Chemistry (Jain, P. C., & Jain, M.)', link: 'https://www.dhanpatrai.com/book/engineering-chemistry-by-p-c-jain-m-jain' },
              { icon: '📚', text: 'A Textbook of Engineering Chemistry (Dara, S. S.)', link: 'https://www.schandpublishing.com/books/tech-prof/engineering/a-textbook-of-engineering-chemistry/9788121903516/' },
              { icon: '🌐', text: 'NPTEL - Water and Wastewater Engineering', link: 'https://nptel.ac.in/courses/105106202' },
              { icon: '🌐', text: 'Battery University', link: 'https://batteryuniversity.com/articles' }
            ],
            practicals: [
              { description: 'Analysis of alkalinity, hardness and dissolved oxygen.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Water+Analysis+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Water+Analysis+2'
              ] },
              { description: 'Conductometric titrations.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Conductometric+Titration+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Conductometric+Titration+2'
              ] },
              { description: 'Corrosion study by weight loss and salt spray method.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Corrosion+Study+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Corrosion+Study+2'
              ] },
              { description: 'Measurement of EMF, Internal Resistance, Charge and Discharge Characteristics of batteries.', images: [
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Battery+Char+1',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Battery+Char+2'
              ] }
            ]
          },
          'CS25C01': {
            name: 'Computer Programming: C',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '2-0-2',
            credits: '3',
            category: 'Engineering Science (G)',
            objectives: [
              'To equip engineering students with the foundational knowledge and practical skills in ‘C’ programming to analyse and solve computational problems effectively.',
              'To foster problem-solving, critical thinking, and modular programming skills essential for engineering domains.'
            ],
            chapters: [
              {
                title: 'Introduction to C',
                topics: 'Problem Solving, Problem Analysis Chart, Developing an Algorithm, Flowchart and Pseudocode, program structure, Compilation & Execution process, Interactive and Script mode, Comments, Indentation, Error messages, Primitive data types, Constants, Variables, Reserved words, Arithmetic, Relational, Logical, Bitwise, Assignment, Conditional operators, Input/Output Functions, Built-in Functions.',
                activities: 'Create Problem Analysis Charts, Flowcharts and Pseudocode for simple C programs (Minimum three).'
              },
              {
                title: 'Control Structures',
                topics: 'if, if-else, nested if, switch-case, while, do-while, for, nested loops, Jump statements.',
                activities: 'Usage of conditional logics in programs (Minimum three).'
              },
              {
                title: 'Functions',
                topics: 'Function Declaration, Definition and Calling, Function Parameters and Return Types, Call by Value and Call by Reference, Recursive Functions, Scope and Lifetime of Variables, Header files and Modular Programming.',
                activities: 'Usage of functions in programs (Minimum three).'
              },
              {
                title: 'Strings & Pointers',
                topics: 'One-dimensional and Multi-dimensional Arrays, Array operations and traversals, String Handling: String declaration, input/output, string library functions, Pointer arithmetic, Pointers and Arrays, Pointers to function, Dynamic memory allocation.',
                activities: 'Programs using pointers, dynamic memory, pointer arithmetic, string manipulations, array operations (Minimum three).'
              },
              {
                title: 'Structures & Unions',
                topics: 'Defining and using structures, Array of structures, Pointers to structures, Unions and their uses, Enumerations.',
                activities: 'Program to use structures and unions.'
              },
              {
                title: 'File Operations',
                topics: 'Open, read, write, close file operations, Binary vs Text files, File pointers, Error handling in file operations.',
                activities: 'Programs reading/writing data in text and binary files (Minimum three).'
              },
              {
                title: 'Standard Libraries & Header Files',
                topics: 'Using standard libraries like stdio.h, stdlib.h, string.h, math.h, Creating and using user-defined header files and libraries.',
                activities: 'Use of standard and user-defined libraries in solving problems (Minimum three), Project (Minimum Two).'
              }
            ],
            resources: [
              { icon: '📚', text: 'Programming in C (Thareja, R.)', link: 'https://global.oup.com/academic/product/programming-in-c-9780198063619?cc=in&lang=en&' },
              { icon: '📚', text: 'Programming in ANSI C (Balagurusamy, E.)', link: 'https://www.mheducation.co.in/programming-in-ansi-c-9789353161011-india' },
              { icon: '🌐', text: 'Learn-C.org', link: 'https://www.learn-c.org/' },
              { icon: '🌐', text: 'GeeksforGeeks - C Programming', link: 'https://www.geeksforgeeks.org/c-programming-language/' }
            ],
            practicals: [
              { description: 'Implementation of basic C programs with control structures.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=C+Control+Structures+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=C+Control+Structures+2'
              ] },
              { description: 'Programs demonstrating functions (call by value/reference, recursion).', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=C+Functions+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=C+Functions+2'
              ] },
              { description: 'String manipulation and pointer arithmetic programs.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=C+Strings+Pointers+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=C+Strings+Pointers+2'
              ] },
              { description: 'File I/O operations in C.', images: [
                'https://placehold.co/800x600/33FF57/FFFFFF?text=C+File+IO+1',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=C+File+IO+2'
              ] }
            ]
          },
          'ME25C04': {
            name: 'Maker space',
            type: 'Laboratory (L)',
            periods: '0-0-4',
            credits: '2',
            category: 'Skill Development (SD)',
            objectives: [
              'To impart practical skills in the assembly, disassembly, and welding of components using appropriate tools and techniques.',
              'To provide hands-on training in electrical wiring practices, and the use of electronic components, sensors, and actuators.'
            ],
            chapters: [
              {
                title: 'Dis-assembly & Assembly Practices',
                topics: 'Tools and its handling techniques. Dis-assembly and assembly of home appliances – Grinder Mixer Grinder, Ceiling Fan, Table Fan & Washing Machine. Dis-assembly and assembly of Air-Conditioners & Refrigerators. Dis-assembly and assembly of a Bicycle.',
                activities: 'Hands-on disassembly and assembly of various household items.'
              },
              {
                title: 'Welding Practices',
                topics: 'Welding Procedure, Selection & Safety Measures. Power source of Arc Welding – Gas Metal Arc Welding & Gas Tungsten Arc Welding processes. Hands-on session of preparing base material & Joint groove for welding. Hands-on session of MAW, GMAW, GTAW, on Carbon Steel & Stainless Stell plates / pipes, for fabrication of a simple part.',
                activities: 'Practical welding sessions.'
              },
              {
                title: 'Electrical Wiring Practices',
                topics: 'Electrical Installation tools, equipment & safety measures. Hands-on session of basic electrical connections for Fuses, Miniature Circuit Breakers and Distribution Box. Hands-on session of electrical connections for Lightings, Fans, Calling Bells. Hands-on session of electrical connections for Motors & Uninterruptible Power Supply.',
                activities: 'Practical electrical wiring exercises.'
              },
              {
                title: 'Electronics Components / Equipment Practices',
                topics: 'Electronic components, equipment & safety measures. Dis-assembly and assembly of Computers. Hands-on session of Soldering Practices in a Printed Circuit Board. Hands-on session of Bridge Rectifier, Op-Amp and Transimpedance amplifier. Hands-on session of integration of sensors and actuators with a Microcontroller. Demonstration of Programmable Logic Control Circuit.',
                activities: 'Soldering, circuit building, microcontroller interfacing.'
              },
              {
                title: 'Contemporary Systems',
                topics: 'Demonstration of Solid Modelling of components. Demonstration of Assembly Modelling of components. Fabrication of simple components / parts using 3D Printers. Demonstration of cutting of wood / metal in different complex shapes using Laser Cutting Machine.',
                activities: '3D printing, laser cutting demonstrations.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Learn to Weld: Beginning MIG Welding and Metal Fabrication Basics (Stephen Christena)', link: 'https://www.amazon.com/Learn-Weld-Beginning-Fabrication-Basics/dp/0760346424' },
              { icon: '📚', text: 'Fabricated - The New World of 3D Printing (H. Lipson)', link: 'https://www.wiley.com/en-us/Fabricated%3A+The+New+World+of+3D+Printing-p-9781118350639' },
              { icon: '🌐', text: 'GrabCAD (3D models and CAD files)', link: 'https://grabcad.com/' },
              { icon: '🌐', text: 'GitHub (Open-source hardware projects)', link: 'https://github.com/' }
            ],
            practicals: [
              { description: 'Disassembly and assembly of a ceiling fan.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Fan+Disassembly+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Fan+Assembly+2'
              ] },
              { description: 'Basic arc welding practice.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Arc+Welding+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Arc+Welding+2'
              ] },
              { description: 'Soldering components on a PCB.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Soldering+PCB+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Soldering+PCB+2'
              ] },
              { description: '3D printing a simple part.', images: [
                'https://placehold.co/800x600/33FF57/FFFFFF?text=3D+Printing+1',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=3D+Printing+2'
              ] }
            ]
          },
          'UC25A01': {
            name: 'Life Skills for Engineers – I*',
            type: '---', // Audit Course, type not specified as T/L/LIT
            periods: '1-0-2',
            credits: '---', // Audit Course, no credits
            category: 'Humanities (HUM)',
            objectives: [
              'To equip engineering students with essential life skills encompassing personal and emotional development, effective management of time and stress, financial literacy, digital safety, and civic responsibility.',
              'To enhance self-awareness, interpersonal skills, and resilience to prepare students for the professional and personal challenges of engineering careers and life beyond academics.'
            ],
            chapters: [
              {
                title: 'Personal and Emotional Development',
                topics: 'Self-Awareness & Personality, Emotional Intelligence & Empathy, Positive thinking, Right attitude, Stress & Anger Management, Goal-Setting & Time Management, Growth Mindset & Resilience.',
                activities: 'Personality tests (MBTI, DISC), reflection journals, Empathy circle, role-playing difficult conversations, Guided mindfulness sessions, stress relief toolkit creation, Vision board creation, weekly time audit and planner, Group challenge scenarios, resilience journal.'
              },
              {
                title: 'Management Skills',
                topics: 'Financial Literacy: Budgeting & Saving, Nutrition, Health, and Hygiene, Digital Literacy & Online Safety, Civic Responsibility & Ethics.',
                activities: 'Create a monthly budget, financial simulation game, Meal planning workshop, physical wellness challenge, Social media audit, privacy and safety scenarios, Community service, values debate.'
              }
            ],
            resources: [
              { icon: '📚', text: 'You can win (Khera, S.)', link: 'https://www.amazon.in/You-Can-Win-Shiv-Khera/dp/812079102X' },
              { icon: '📚', text: 'Personality development & soft skills (Mitra, B. K.)', link: 'https://global.oup.com/academic/product/personality-development-and-soft-skills-9780198096228?cc=in&lang=en&' },
              { icon: '📚', text: 'Life skills for engineers (ICT Academy of Kerala)', link: 'https://www.mcgrawhill.co.in/life-skills-for-engineers-9789352606040-india' }
            ],
            practicals: [
              { description: 'Conducting a personal SWOT analysis.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=SWOT+Analysis+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=SWOT+Analysis+2'
              ] },
              { description: 'Developing a personal budget plan.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Budget+Planning+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Budget+Planning+2'
              ] }
            ]
          },
          'UC25A02': {
            name: 'Physical Education – I*',
            type: '---', // Audit Course, type not specified as T/L/LIT
            periods: '0-0-4',
            credits: '1',
            category: 'Humanities (HUM)',
            objectives: [
              'To impart the fundamentals of physical education for development of students’ physical, mental, and social well-being.',
              'To instill a lifelong appreciation for physical activity towards the development of positive attitude and fostering values of team work and sportsmanship.'
            ],
            chapters: [
              {
                title: 'Introduction to physical education',
                topics: 'Exercise for Good Posture – Conditioning and Calisthenics for Before start, Jogging, Bending, Twisting, Standing, Sitting and Relaxation, Training on First Aid practices.',
                activities: 'Warm-up exercises, basic calisthenics.'
              },
              {
                title: 'Participation of athletic events',
                topics: 'Rules and regulations of important athletic events, Sprint, Jumps, Throws and Hurdles.',
                activities: 'Practice of sprint starts, long jump techniques.'
              },
              {
                title: 'Skill development in any one of the following outdoor games',
                topics: 'Basket Ball, Volley Ball, Ball Badminton, Football, Hockey, Kho-Kho, Kabaddi, Cricket, Hand ball and Tennis.',
                activities: 'Team practice sessions for chosen sport.'
              },
              {
                title: 'Skill development in any one of the following indoor games',
                topics: 'Shuttle Badminton, Chess and Table Tennis.',
                activities: 'Practice sessions for chosen indoor game.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Essentials of physical education (Singh, A.)', link: 'https://www.kalyanipublishers.com/book/essentials-of-physical-education-9789327289000' },
              { icon: '📚', text: 'Psychology in physical education and sport (Kamlesh, M. L.)', link: 'https://www.amazon.in/Psychology-Physical-Education-Sport-Kamlesh/dp/817094690X' },
              { icon: '🌐', text: 'WHO - Physical Activity', link: 'https://www.who.int/health-topics/physical-activity' }
            ],
            practicals: [
              { description: 'Demonstration of proper jogging and stretching techniques.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Jogging+Demo+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Stretching+Demo+2'
              ] },
              { description: 'Basic drills for chosen outdoor game (e.g., basketball dribbling).', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Basketball+Drill+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Basketball+Drill+2'
              ] }
            ]
          }
        }
      },
      2: {
        title: "Semester 2 Subjects",
        subjects: {
          'MA25C02': {
            name: 'Linear Algebra',
            type: 'Theory (T)',
            periods: '3-1-0',
            credits: '4',
            category: 'Basic Science (BS)',
            objectives: [
              'To impart foundational knowledge in linear algebra essential for analysing and solving problems in engineering applications.',
              'To provide the knowledge on computation using software and interpret key linear algebra concepts using software.'
            ],
            chapters: [
              {
                title: 'Vector Spaces',
                topics: 'Introduction to Vector Spaces, Examples, Subspaces, Linear Combinations, Span, Generating Sets, Linear Dependence and Independence, Basis and Dimension, Dimension of Subspaces.',
                activities: 'Open-Source software, exercises to test linear dependence and independence using rank, compute span and basis of a set of vectors, determine the dimension of subspaces, and illustrate the concept of subspace and basis in $\\mathbb{R}^2 / \\mathbb{R}^3$ with visualization.'
              },
              {
                title: 'Linear Transformations and Diagonalization',
                topics: 'Null space, Range, Dimension Theorem (statement only), Matrix representation of a linear transformation, Eigenvalues & Eigenvectors, Diagonalizability.',
                activities: 'Open-Source software, exercises to compute the matrix representation of a linear transformation, find the null space and range of a matrix, and compute eigenvalues and eigenvectors of a matrix.'
              },
              {
                title: 'Inner Product Spaces',
                topics: 'Inner product, Norms, Cauchy, Schwarz inequality, Gram, Schmidt orthogonalization, Simple problems (up to $\\mathbb{R}^3$).',
                activities: 'Open-Source software, exercises to compute inner products and vector norms.'
              },
              {
                title: 'Matrix Decomposition',
                topics: 'Orthogonal transformation of a symmetric matrix to diagonal form - Positive definite matrices, QR decomposition, Singular Value Decomposition (SVD), Least squares solutions - simple problems (up to $3 \\times 3$ matrices).',
                activities: 'Open-Source software, exercises to check if a matrix is positive definite, perform QR decomposition and SVD using built-in functions.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Linear algebra (Friedberg, S. H., Insel, A. J., & Spence, L. E.)', link: 'https://www.pearson.com/us/higher-education/program/Friedberg-Linear-Algebra-5th-Edition/PGM109000.html' },
              { icon: '📚', text: 'Linear algebra and its applications with MATLAB (Lay, D. C., Lay, S. R., & McDonald, J. J.)', link: 'https://www.pearson.com/us/higher-education/program/Lay-Linear-Algebra-and-Its-Applications-with-MyLab-Math-5th-Edition/PGM109000.html' },
              { icon: '📚', text: 'Advanced engineering mathematics (Kreyszig, E.)', link: 'https://www.wiley.com/en-us/Advanced+Engineering+Mathematics%2C+10th+Edition-p-9780470458365' }
            ],
            practicals: [
              { description: 'Visualization of vector spaces and subspaces using software.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Vector+Space+Viz+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Vector+Space+Viz+2'
              ] },
              { description: 'Computation of eigenvalues and eigenvectors for various matrices.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Eigenvalue+Comp+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Eigenvalue+Comp+2'
              ] },
              { description: 'Performing QR decomposition and SVD using built-in functions in software.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=QR+SVD+Demo+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=QR+SVD+Demo+2'
              ] }
            ]
          },
          'UC25H02': {
            name: 'Tamils and Technology',
            type: 'Theory (T)',
            periods: '1-0-0',
            credits: '1',
            category: 'Humanities (HUM)',
            objectives: [
              'To understand the historical technological advancements of Tamils.',
              'To explore the contributions of Tamils in various technological fields throughout history.'
            ],
            chapters: [
              {
                title: 'Weaving and Ceramic Technology',
                topics: 'Weaving Industry during Sangam Age, Ceramic technology, Black and red Ware Potteries (BRW), Graffiti on Potteries.',
                activities: 'Study of ancient pottery artifacts.'
              },
              {
                title: 'Design and Construction Technology',
                topics: 'Designing and Structural construction House & Designs in household materials during Sangam Age, Building materials and Hero stones of Sangam age, Details of Stage Constructions in Silappathikaram, Sculptures and Temples of Mamallapuram, Great Temples of Cholas and other worship places, Temples of Nayaka Period, Type study (Madurai Meenakshi Temple), Thirumalai Nayakar Mahal, Chetti Nadu Houses, Indo-Saracenic architecture at Madras during British Period.',
                activities: 'Architectural case studies of historical buildings.'
              },
              {
                title: 'Manufacturing Technology',
                topics: 'Art of Ship Building, Metallurgical studies, Iron industry, Iron smelting, steel - Copper and gold - Coins as source of history, Minting of Coins, Beads making - industries Stonebeads, Glass beads, Terracotta beads, Shell beads/ bone beats, Archeological evidences, Gem stone types described in Silappathikaram.',
                activities: 'Analysis of ancient metallurgical techniques.'
              },
              {
                title: 'Agriculture and Irrigation Technology',
                topics: 'Dam, Tank, ponds, Sluice, Significance of Kumizhi Thoompu of Chola Period, Animal Husbandry, Wells designed for cattle use, Agriculture and Agro Processing, Knowledge of Sea, Fisheries, Pearl, Conche diving, Ancient Knowledge of Ocean, Knowledge Specific Society.',
                activities: 'Study of ancient irrigation systems.'
              },
              {
                title: 'Scientific Tamil & Tamil Computing',
                topics: 'Development of Scientific Tamil, Tamil computing, Digitalization of Tamil Books, Development of Tamil Software, Tamil Virtual Academy, Tamil Digital Library, Online Tamil Dictionaries, Sorkuvai Project.',
                activities: 'Exploration of Tamil computing tools and resources.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Social Life of Tamils (Dr.K.K.Pillay)', link: 'https://www.worldcat.org/title/social-life-of-the-tamils/oclc/100300000' },
              { icon: '📚', text: 'Keeladi - ‘Sangam City Civilization on the banks of river Vaigai’ (Dept. of Archaeology & Tamil Nadu Text Book)', link: 'https://www.tnarch.gov.in/english/publications/keeladi.pdf' },
              { icon: '🌐', text: 'Tamil Virtual Academy', link: 'http://www.tamilvu.org/' }
            ],
            practicals: [
              { description: 'Virtual tour of ancient Tamil irrigation structures.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Irrigation+Tour+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Irrigation+Tour+2'
              ] },
              { description: 'Demonstration of traditional weaving techniques.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Weaving+Demo+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Weaving+Demo+2'
              ] }
            ]
          },
          'EN25C02': {
            name: 'English Essentials – II',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '2',
            category: 'Humanities (HUM)',
            objectives: [
              'To integrate vocabulary and functional grammar into communication tasks to improve fluency and accuracy.',
              'To articulate ideas clearly and effectively in formal and informal spoken interactions.',
              'To construct well-organised written documents including summaries, reports, and emails relevant to academic and workplace contexts.'
            ],
            chapters: [
              {
                title: 'Communication',
                topics: 'Types, Inter and Intra-personal, communication barriers, Summarising visuals, media terminology, rhetorical devices and TED Talks.',
                activities: 'Short presentation, Media based responses and Speeches, Error detection, Welcome, Vote of Thanks and Formal Speeches, Listen and respond to short podcast, Worksheets.'
              },
              {
                title: 'Correspondence',
                topics: 'Modal Verbs, Job Application Letters, Resume Writing, Statement of Purpose, Paraphrasing & Summarizing, Executive Summary.',
                activities: 'Email writing, Submission of applications, Graphical summaries, Report on college events.'
              },
              {
                title: 'Professional Writing',
                topics: 'Paraphrasing & Summarizing, Executive Summary, Proposal, Decision Making, Recommendations.',
                activities: 'Report preparation and recommendation letters.'
              },
              {
                title: 'Team Work',
                topics: 'Team Leader, Quality of Team leader, Leadership model, Negotiations.',
                activities: 'SWOT Analysis, Mock meetings, Group discussions, Brainstorming sessions.'
              }
            ],
            resources: [
              { icon: '📚', text: 'English Language Skills for Engineers (Koneru Aruna)', link: 'https://www.mheducation.co.in/english-language-skills-for-engineers-9789389949000-india' },
              { icon: '📚', text: 'Communication for Business A Practical Approach (Taylor, Shirley & Chandra .V.)', link: 'https://www.pearson.com/us/higher-education/program/Taylor-Communication-for-Business-A-Practical-Approach-2nd-Edition/PGM109000.html' },
              { icon: '🌐', text: 'TED Talks', link: 'https://www.ted.com/' },
              { icon: '🌐', text: 'Communication for Business Success', link: 'https://open.umn.edu/opentextbooks/textbooks/8' }
            ],
            practicals: [
              { description: 'Group discussions and mock interviews.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=GD+Mock+Interview+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=GD+Mock+Interview+2'
              ] },
              { description: 'Drafting professional emails and reports.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Email+Report+Drafting+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Email+Report+Drafting+2'
              ] }
            ]
          },
          'EC25C01': {
            name: 'Electron Devices',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To acquaint with the construction, theory and operation of the basic electronic devices such as PN junction diode, Bipolar and Field Effect Transistors, Power control devices, LED, LCD and other Optoelectronic devices.'
            ],
            chapters: [
              {
                title: 'Semiconductor',
                topics: 'Types, Conductivity, Electron energy levels and energy band diagram, Carrier concentration, Mass action law, Characteristics and behavior of intrinsic semiconductors, Variation in properties with temperature, Carrier drift and diffusion, Current density equation, Excess carrier generation and recombination rates, Carrier life time. Continuity equation.',
                activities: 'Virtual demonstration of energy levels, Drift and diffusion current.'
              },
              {
                title: 'PN Junction Diodes',
                topics: 'Energy band diagram of open-circuited PN junction, Forward and reverse bias characteristics, Diode resistance, Transition and diffusion capacitance, Effect of temperature on diode behavior, Applications of PN junction diodes.',
                activities: 'Virtual demonstration of characteristics of junction diodes, Design of a constant voltage regulator using Zener Diode.'
              },
              {
                title: 'Special Diodes',
                topics: 'Zener diode – breakdown mechanisms and voltage regulation, Varactor diode, Tunnel diode, Photo diode – construction, operation, and applications.',
                activities: 'Simulation of special diode characteristics.'
              },
              {
                title: 'Bipolar Junction Transistors',
                topics: 'Construction, working, characteristics in CB, CE, and CC configurations, regions of operation, current gain, input/output characteristics, Early effect. Other Devices: Multi-emitter transistor – construction and applications.',
                activities: 'Practical: Input and Output characteristics of Characteristics of BJT.'
              },
              {
                title: 'Field Effect Transistors',
                topics: 'JFET – construction, working, characteristics, parameters. MOSFET, MOS capacitor, depletion and enhancement modes, nMOS and pMOS, threshold voltage, transfer and output characteristics. CMOS – introduction and basic operation.',
                activities: 'Practical: Input and Output characteristics of Characteristics of JFET, MOSFET.'
              },
              {
                title: 'Thyristors',
                topics: 'Shockley diode, Silicon Controlled Rectifier (SCR), TRIAC and DIAC – operation and applications, Thyristor protection techniques.',
                activities: 'Practical: VI characteristics of SCR, UJT.'
              },
              {
                title: 'Unijunction Transistor (UJT)',
                topics: 'Construction, characteristics and application as relaxation oscillator.',
                activities: 'Simulation of UJT relaxation oscillator.'
              },
              {
                title: 'Optoelectronic Devices',
                topics: 'LED, LCD, Photo transistor, Opto-coupler – principle, characteristics and applications. Power MOSFETs: Construction, switching characteristics and applications in power circuits.',
                activities: 'Demonstration of LED and Photo transistor applications.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Semiconductor physics and devices (Neamen, D. A.)', link: 'https://www.mheducation.co.in/semiconductor-physics-and-devices-9780070634262-india' },
              { icon: '📚', text: 'Electronic devices and circuit theory (Boylestad, R. L., & Nashelsky, L.)', link: 'https://www.pearson.com/us/higher-education/program/Boylestad-Electronic-Devices-and-Circuit-Theory-11th-Edition/PGM109000.html' },
              { icon: '🌐', text: 'NPTEL - Electron Devices', link: 'https://archive.nptel.ac.in/courses/108/108/108108122/' },
              { icon: '🌐', text: 'Semiconductor Devices: Fundamentals', link: 'https://www.youtube.com/watch?v=your_semiconductor_fundamentals_video_link' } // Placeholder
            ],
            practicals: [
              { description: 'Input and Output characteristics of BJT.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=BJT+Char+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=BJT+Char+2'
              ] },
              { description: 'Input and Output characteristics of JFET, MOSFET.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=JFET+MOSFET+Char+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=JFET+MOSFET+Char+2'
              ] },
              { description: 'VI characteristics of SCR, UJT.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=SCR+UJT+Char+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=SCR+UJT+Char+2'
              ] }
            ]
          },
          'EC25C02': {
            name: 'Circuits and Network Analysis',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To impart the fundamental principles of circuit laws, network theorems, and analysis techniques for DC and AC circuits.',
              'To gain analytical and simulation skills for both steady-state and transient behaviors in AC and DC circuits.'
            ],
            chapters: [
              {
                title: 'Circuit Laws and Network Theorems',
                topics: 'Basic electrical components, voltage, current, power, Network terminology - Node, Junction, Branch, Loop, Short and Open Circuits, DC and AC circuits, Ohm\'s Law, Kirchhoff‘s Laws, Resistors, inductors, and capacitors in series and parallel, voltage and current division rule, Mesh and Nodal Analysis for AC and DC circuits, Source transformation techniques, Star delta transformation techniques, principle of linearity, Thevenin’s and Norton’s theorems, Superposition theorem, Maximum power transfer theorem, Reciprocity theorem.',
                activities: 'Verifications of KVL & KCL, Verification of Mesh and Nodal analysis of DC circuits, Verification of Thevenin’s and Norton’s theorems.'
              },
              {
                title: 'Steady-State and Transient Analysis of Ac and DC Circuits',
                topics: 'Components behavior (R, L, and C) in AC and DC, Characteristics of sinusoids, Phasor relationship for R, L, and C, Phasor diagram, Natural and forced response, Steady-state and Transient analysis of RL, RC, RLC circuits using Laplace Transform.',
                activities: 'Create a physical model of an RL, RC, or RLC circuit to observe its transient and steady-state behaviour using LTspice (open-source).'
              },
              {
                title: 'Resonance and Coupled Circuits',
                topics: 'Natural frequency and Damping ratio, Series resonance, Parallel resonance, Quality factor (Q), Bandwidth, Selectivity, Effect of Q on bandwidth and selectivity. Self-inductance, Mutual inductance, Dot conversion, Ideal Transformer.',
                activities: 'Determination of Resonance Frequency of Series & Parallel RLC Circuits, Transient analysis of RL and RC circuits.'
              },
              {
                title: 'Linear Two-Port Network Analysis',
                topics: 'Introduction to two-port networks, Characterization in terms of impedance, admittance, hybrid, and transmission parameters, parameter conversions, Interconnection of two-port networks – Symmetry and Reciprocity.',
                activities: 'Measurement of Impedance Parameters (Z-Parameters), Explore the behavior of two interconnected two-port networks and verify the principles of symmetry and reciprocity.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Engineering circuit analysis (Hayt, W. H., Kemmerly, J. E., & Durbin, S. M.)', link: 'https://www.mheducation.co.in/engineering-circuit-analysis-9789390177000-india' },
              { icon: '📚', text: 'Introductory circuit analysis (Boylestad, R. L.)', link: 'https://www.pearson.com/us/higher-education/program/Boylestad-Introductory-Circuit-Analysis-13th-Edition/PGM109000.html' },
              { icon: '🌐', text: 'NPTEL - Basic Electrical Circuits', link: 'https://nptel.ac.in/courses/108102042' },
              { icon: '🌐', text: 'NPTEL - Circuits and Networks', link: 'https://nptel.ac.in/courses/108105159' }
            ],
            practicals: [
              { description: 'Verifications of KVL & KCL.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=KVL+KCL+Verification+1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=KVL+KCL+Verification+2'
              ] },
              { description: 'Verification of Thevenin’s and Norton’s theorems.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Thevenin+Norton+Verification+1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Thevenin+Norton+Verification+2'
              ] },
              { description: 'Transient analysis of RL and RC circuits using LTspice.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=RL+RC+Transient+LTspice+1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=RL+RC+Transient+LTspice+2'
              ] }
            ]
          },
          'CS25C05': {
            name: 'Data Structures using C++',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (G)',
            objectives: [
              'This course aims to provide an understanding of object-oriented programming principles using C++.'
            ],
            chapters: [
              {
                title: 'Data Abstraction & Overloading',
                topics: 'Overview of C++, Structures, Class Scope and Accessing Class Members, Reference Variables, Initialization, Constructors, Destructors, Member Functions and Classes, Friend Function, Dynamic Memory Allocation, Static Class Members, Container Classes and Integrators, Proxy Classes, Overloading: Function overloading and Operator Overloading.',
                activities: 'Program to Implement Constructors and Destructors, Program to implement Member Functions, Classes and Friend Functions, Program to Implement Dynamic Memory Allocation and Overloading.'
              },
              {
                title: 'Inheritance & Polymorphism',
                topics: 'Base Classes and Derived Classes, Protected Members, Casting Class pointers and Member Functions, Overriding, Public, Protected and Private Inheritance – Constructors and Destructors in derived Classes, Implicit Derived, Class Object to Base, Class Object Conversion, Composition Vs. Inheritance, Virtual functions, This Pointer, Abstract Base Classes and Concrete Classes, Virtual Destructors, Dynamic Binding.',
                activities: 'Program to Implement various inheritances, Program to Implement virtual functions and dynamic binding, Implementation of method overriding and operator overloading.'
              },
              {
                title: 'Linear Data Structures',
                topics: 'Asymptotic Notations: Big-Oh, Omega and Theta, Best, Worst and Average case Analysis: Definition and an example, Arrays and its representations, Stacks and Queues, Linked lists, Linked list based implementation of Stacks and Queues, Evaluation of Expressions, Linked list based polynomial addition.',
                activities: 'Program to implement various operations on arrays and linked lists, Program to implement various operations on stacks and queues using array and linked list, Program to evaluate the infix expressions by converting into prefix and postfix expressions.'
              },
              {
                title: 'Non-Linear Data Structures',
                topics: 'Trees, Binary Trees, Binary tree representation and traversals, Threaded binary trees, Binary tree representation of trees, Application of trees: Set representation and Union, Find operations, Graph and its representations, Graph Traversals, Connected components. Standard template library.',
                activities: 'Program to Implement Binary Tree Traversal and Graph Traversal Algorithm, Program to Implement the Single Source Shortest Path Algorithm and All Pair Shortest Path Algorithm, Program to find the Minimal Spanning Tree for a Graph.'
              },
              {
                title: 'Searching, Sorting and Complexity Analysis',
                topics: 'Insertion sort, Merge sort, Quicksort, Heapsort, Linear Search, Binary Search.',
                activities: 'Program to Implement Linear Search and Binary Search Algorithms, Program to Implement Insertion Sort, Merge Sort, Quick Sort and Heap Sort Algorithms.'
              }
            ],
            resources: [
              { icon: '📚', text: 'C++ how to program (Deitel, P. J., & Deitel, H. M.)', link: 'https://www.pearson.com/us/higher-education/program/Deitel-C-How-to-Program-10th-Edition/PGM109000.html' },
              { icon: '📚', text: 'Fundamentals of data structures in C++ (Horowitz, E., Sahni, S., & Mehta, D.)', link: 'https://www.universitiespress.com/computer-science/data-structures/fundamentals-of-data-structures-in-c' },
              { icon: '🌐', text: 'NPTEL - Data Structures and Algorithms', link: 'https://nptel.ac.in/courses/106106143' },
              { icon: '🌐', text: 'TutorialsPoint - Data Structures Algorithms', link: 'https://www.tutorialspoint.com/data_structures_algorithms/index.htm' }
            ],
            practicals: [
              { description: 'Implementation of classes, objects, constructors, and destructors.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=C++_Classes_1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=C++_Classes_2'
              ] },
              { description: 'Demonstration of inheritance and polymorphism.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=C++_Inheritance_1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=C++_Polymorphism_2'
              ] },
              { description: 'Implementing stacks and queues using arrays and linked lists.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Stack_Queue_Array_1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Stack_Queue_LinkedList_2'
              ] },
              { description: 'Binary tree traversals and graph algorithms.', images: [
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Binary_Tree_Traversal_1',
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Graph_Traversal_2'
              ] },
              { description: 'Implementation and comparison of sorting algorithms.', images: [
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Sorting_Algorithms_1',
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Sorting_Algorithms_2'
              ] }
            ]
          },
          'ME25C05': {
            name: 'Re-Engineering for Innovation',
            type: 'Laboratory (L)',
            periods: '0-0-4',
            credits: '2',
            category: 'Skill Development (SD)',
            objectives: [
              'To cultivate foundational skills in prototyping, and automation for development of prototypes with real-world applications.',
              'To provide a comprehensive, hands-on exposure to product development through reverse engineering concepts.'
            ],
            chapters: [
              {
                title: 'Bootcamp 1: Introduction to Product Development, Reverse Engineering',
                topics: 'Overview of the product lifecycle, Hands-on disassembly of simple products, Practice of basic measurements and sketching, Introduction to CAD modeling of disassembled parts, Virtual assembly of parts.',
                activities: 'Disassembly of common household items and sketching their components.'
              },
              {
                title: 'Bootcamp 2: Embedded System Programming',
                topics: 'Embedded System Programming (Open-source platforms), Practice of interfacing sensors, reading data, automation in home, healthcare and agriculture.',
                activities: 'Interfacing sensors with microcontrollers and basic automation projects.'
              },
              {
                title: 'Reverse Engineering',
                topics: 'Sketch and prototype alternative designs, Group brainstorming sessions, Manufacture prototype parts using 3D printing and / or workshop tools, Assemble prototype product.',
                activities: 'Designing and fabricating a re-engineered product prototype.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Reverse engineering: Mechanisms, structures, systems & materials (Wang, W.)', link: 'https://www.taylorfrancis.com/books/mono/10.1201/9781420076512/reverse-engineering-w-wang' },
              { icon: '📚', text: 'Arduino cookbook: Recipes to begin, expand, and enhance your projects (Margolis, M.)', link: 'https://www.oreilly.com/library/view/arduino-cookbook-3rd/9781492099950/' },
              { icon: '🌐', text: 'GrabCAD (3D models and CAD files)', link: 'https://grabcad.com/' },
              { icon: '🌐', text: 'GitHub (Open-source hardware projects)', link: 'https://github.com/' }
            ],
            practicals: [
              { description: 'Disassembly and CAD modeling of a simple electronic device.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Device_Disassembly_1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=CAD_Modeling_2'
              ] },
              { description: 'Building a sensor-based automation system using Arduino.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Arduino_Sensor_1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Automation_System_2'
              ] },
              { description: '3D printing a custom part for a re-engineered product.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=3D_Printed_Part_1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Reengineered_Product_2'
              ] }
            ]
          },
          'UC25A03': {
            name: 'Life Skills for Engineers – II*',
            type: '---', // Audit Course
            periods: '1-0-2',
            credits: '---', // Audit Course, no credits
            category: 'Humanities (HUM)',
            objectives: [
              'To impart and cultivate analytical reasoning, innovative thinking, effective collaboration, and ethical leadership to prepare students for complex challenges in professional and personal environments.'
            ],
            chapters: [
              {
                title: 'Critical Thinking',
                topics: 'Creativity, Critical Thinking, Collaboration, Problem Solving, Decision Making, Imagination, Intuition, Experience, Sources of Creativity, Lateral Thinking, Myths of creativity, Critical thinking Vs Creative thinking, Convergent & Divergent Thinking, Critical reading & Multiple Intelligence.',
                activities: 'Two-Brainstorm Method, “30 Circles” Challenge, “Desert Survival” Simulation, Lateral thinking riddles and puzzles, "What If?" Scenario Writing, Fast vs. Slow Thinking Game, Creativity Myth Busters.'
              },
              {
                title: 'Problem Solving',
                topics: 'Techniques, Six Thinking Hats, Mind Mapping, Forced Connections. Analytical Thinking, Numeric, symbolic, and graphic reasoning. Scientific temperament and Logical thinking.',
                activities: 'Case study analysis, Escape Room challenge.'
              },
              {
                title: 'Leadership',
                topics: 'Leadership Styles & Self-Assessment, Communication & Active Listening, Decision-Making & Responsibility, Teamwork & Delegation, Empathy, Integrity & Conflict Management, Vision, Motivation & Goal-Setting.',
                activities: 'Crisis Leadership Simulation, Tower Challenge, Leadership Dilemmas Role-Play, Team Vision Board.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Six thinking hats (De Bono, E.)', link: 'https://www.amazon.com/Six-Thinking-Hats-Edward-Bono/dp/0316178314' },
              { icon: '📚', text: 'Critical thinking: What it is and why it counts (Facione, P. A.)', link: 'https://www.insightassessment.com/wp-content/uploads/Critical-Thinking-What-It-Is-and-Why-It-Counts-2015-update.pdf' },
              { icon: '📚', text: 'Thinking, fast and slow (Kahneman, D.)', link: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555' }
            ],
            practicals: [
              { description: 'Participating in a "Six Thinking Hats" problem-solving session.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Six_Hats_Session_1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Six_Hats_Session+2'
              ] },
              { description: 'Leading a team through a simulated crisis scenario.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Crisis_Simulation_1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Crisis_Simulation_2'
              ] }
            ]
          },
          'UC25A04': {
            name: 'Physical Education – II*',
            type: '---', // Audit Course
            periods: '0-0-4',
            credits: '1',
            category: 'Humanities (HUM)',
            objectives: [
              'To impart knowledge on gymnastic exercises and pressing needs for upskilling in a particular game.'
            ],
            chapters: [
              {
                title: 'Basic gymnastics exercises',
                topics: 'Warming up, Suitable exercise, Lead up games, Safety education, Movement education, Balanced Walk, execution, floor exercise, tumbling/acrobatics, grip, release, swinging, parallel bar exercise, horizontal bar exercise, flic-flac-walk and pyramids.',
                activities: 'Practice of basic gymnastic movements and safety drills.'
              },
              {
                title: 'Upskilling in any one of the athletics',
                topics: 'Broad Jump, High Jump, Triple Jump, Relay Sprints, Javelin Throw, Discuss Throw, Shot Put, Short and Long-distance Running.',
                activities: 'Advanced training in chosen athletic event.'
              },
              {
                title: 'Advance skills in any one of the indoor/outdoor games',
                topics: 'Which has been opted by the student in the I semester.',
                activities: 'Intensive skill development sessions for the chosen sport.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Essentials of physical education (Singh, A.)', link: 'https://www.kalyanipublishers.com/book/essentials-of-physical-education-9789327289000' },
              { icon: '📚', text: 'Psychology of sports performance (Mangal, S. K.)', link: 'https://www.amazon.in/Psychology-Sports-Performance-S-K-Mangal/dp/817094690X' },
              { icon: '🌐', text: 'WHO - Physical Activity', link: 'https://www.who.int/health-topics/physical-activity' }
            ],
            practicals: [
              { description: 'Demonstration of advanced gymnastic floor exercises.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Gymnastics_Floor_1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Gymnastics_Floor_2'
              ] },
              { description: 'Practice of advanced techniques in a chosen athletic event (e.g., high jump approach).', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=High_Jump_Technique_1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=High_Jump_Technique_2'
              ] }
            ]
          },
          'Foreign Language^': { // This is a placeholder for the foreign language options
            name: 'Foreign Language^ (Deutsch / Japanese / Korean)',
            type: 'Laboratory (L)',
            periods: '1-0-2',
            credits: '---', // Audit Course, no credits
            category: 'Humanities (HUM)',
            objectives: [
              'To impart fundamentals of the chosen foreign language, including reading, writing systems, pronunciation, and speaking.'
            ],
            chapters: [
              {
                title: 'Basics & Introduction (e.g., Deutsch)',
                topics: 'German alphabet and pronunciation, Basic greetings and farewells, Introducing yourself and others (Ich heiße…, Wer bist du?), Numbers 1 – 100 and days of the week, Personal pronouns (ich, du, er, sie…), Sentence structure (SVO word order).',
                activities: 'Alphabet spelling game, short skits, Use color-coded cards for SVO sentences.'
              },
              {
                title: 'Grammar Essentials & Everyday Vocabulary (e.g., Deutsch)',
                topics: 'Present tense of regular verbs (spielen, arbeiten, machen…), Common irregular verbs: sein (to be), haben (to have), gehen, kommen, Articles and gender (der, die, das; ein, eine), Simple questions and negation (nicht, kein), Describing people and things: adjectives and colors, Family, school, food, and common objects vocabulary.',
                activities: 'Conjugate regular and irregular verbs, “Question Chain” game, Create a simple family tree.'
              },
              {
                title: 'Everyday Communication (e.g., Deutsch)',
                topics: 'Asking for and giving directions, Telling the time and talking about schedules, Ordering food and drinks at a café or restaurant, Talking about hobbies, weather, and daily routines, Listening to short conversations and responding appropriately, Introduction to German culture and formal/informal language use (du vs Sie).',
                activities: 'Ordering food and drinks, Give directions, Formal / Informal greetings, Do’s and Don’ts.'
              },
              {
                title: 'Writing Systems & Basic Communication (e.g., Japanese)',
                topics: 'Introduction to Hiragana: vowels, basic characters, reading & writing, Introduction to Katakana: basic characters and usage, Basic greetings and farewells (こんにちは, おはようございます, さようなら), Introducing yourself (名前、出身、年齢), Basic sentence structure: Subject – Object – Verb, Numbers 1 – 100, days of the week, classroom expressions.',
                activities: 'Flashcard games and writing drills, Self-introduction, Numbers & date-matching, Greeting expressions, Listening to audio.'
              },
              {
                title: 'Grammar & Everyday Vocabulary (e.g., Japanese)',
                topics: 'Particles: は (wa), を (wo), の (no), へ (e), に (ni), Present tense verbs: です, ます-form conjugation (たべます、のみます), Negative forms: ではありません, ません, Describing people and objects using adjectives (い and な), Question formation: なに、どこ、だれ、いつ, Vocabulary for family, food, colors, and basic actions.',
                activities: 'Verb conjugation drills, Guessing game, Picture description, “Shopping” with food vocab and counters.'
              },
              {
                title: 'Conversation & Cultural Etiquette (e.g., Japanese)',
                topics: 'Talking about routines and schedules (daily verbs, time expressions), Asking and giving simple directions (～はどこですか？), Ordering food and making polite requests (～をください、～をおねがいします), Expressing likes and dislikes (すき・きらい), Listening to short conversations and identifying key phrases, Introduction to formal/informal speech and Japanese etiquette.',
                activities: 'Skits and role-plays, daily schedule, beginner-level dialogue, Group discussion on etiquette.'
              },
              {
                title: 'Fundamentals of Korean',
                topics: 'Introduction to Hangul: consonants and vowels, Basic pronunciation and syllable formation, Common greetings and self-introductions, Numbers (Sino-Korean and Native Korean basics), Basic sentence structure (Subject - Object - Verb), Simple expressions (e.g., 감사합니다, 안녕하세요).',
                activities: 'Writing and reading Hangul practice sheets, Pronunciation drills and audio repetition, Dialogue practice for greetings and self-introduction, Counting and number exercises.'
              },
              {
                title: 'Essential Grammar and Vocabulary (e.g., Korean)',
                topics: 'Particles (은/는, 이/가, 을/를) and usage, Basic verbs and present tense conjugation, Sentence patterns: affirmative, negative, interrogative, Common adjectives and descriptive sentences, Expressing possession and location, Asking simple questions (어디, 뭐, 누구).',
                activities: 'Verb conjugation and sentence formation drills, Role-play conversations for shopping and daily routines, Descriptive writing and speaking exercises, Question and answer practice.'
              },
              {
                title: 'Everyday Korean Communication',
                topics: 'Polite speech levels and honorifics introduction, Talking about time, dates, and schedules, Ordering food, shopping phrases, counting objects, Simple directions and transportation vocabulary, Listening practice with short dialogues, Cultural notes on etiquette and communication.',
                activities: 'Role-play ordering at a restaurant or buying items, Listening comprehension exercises, Giving and asking for directions practice, Group conversations and presentations.'
              }
            ],
            resources: [
              { icon: '📚', text: 'Menschen A1: Deutsch als Fremdsprache Kursbuch (Funk, H., Kuhn, C., & Demme, S.)', link: 'https://shop.hueber.de/de/menschen-a1-1-kb-m-dvd-rom-9783191019011.html' },
              { icon: '📚', text: 'Genki I: An integrated course in elementary Japanese (Banno, E., et al.)', link: 'https://genki.japantimes.co.jp/about/genki1' },
              { icon: '📚', text: 'Elementary Korean (King, R., Yeon, J., & Brown, A.)', link: 'https://www.amazon.com/Elementary-Korean-Roger-King/dp/0804844530' }
            ],
            practicals: [
              { description: 'Role-playing basic conversations in Deutsch.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Deutsch_Roleplay_1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Deutsch_Roleplay_2'
              ] },
              { description: 'Hiragana and Katakana writing practice (Japanese).', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Japanese_Writing_1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Japanese_Writing_2'
              ] },
              { description: 'Hangul pronunciation drills (Korean).', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Korean_Pronunciation_1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Korean_Pronunciation_2'
              ] }
            ]
          }
        }
      },
      // Placeholder for other semesters
      // You can add data for Semester 3, 4, 5, 6, 7, 8 here following the same structure
      3: {
        title: "Semester 3 Subjects",
        subjects: {
          // Add Semester 3 subjects here
          'BS3001': {
            name: 'Transforms and its Applications',
            type: 'Theory (T)',
            periods: '3-1-0',
            credits: '4',
            category: 'Basic Science (BS)',
            objectives: [
              'To understand various transform techniques and their applications in engineering.',
              'To solve differential equations using transform methods.'
            ],
            chapters: [
              { title: 'Laplace Transforms', topics: 'Definition, properties, inverse Laplace transform, applications to differential equations.', activities: 'Solving circuit problems using Laplace transforms.' },
              { title: 'Fourier Series', topics: 'Dirichlet’s conditions, half-range series, harmonic analysis.', activities: 'Analyzing periodic signals.' },
              { title: 'Fourier Transforms', topics: 'Properties, inverse Fourier transform, applications.', activities: 'Signal processing applications.' },
              { title: 'Z-Transforms', topics: 'Definition, properties, inverse Z-transform, applications to difference equations.', activities: 'Digital signal processing applications.' }
            ],
            resources: [
              { icon: '📚', text: 'Advanced Engineering Mathematics (Kreyszig, E.)', link: 'https://www.wiley.com/en-us/Advanced+Engineering+Mathematics%2C+10th+Edition-p-9780470458365' }
            ],
            practicals: [
              { description: 'Simulation of Laplace transform applications in circuits.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Laplace_Sim_1'] }
            ]
          },
          'ES3002': {
            name: 'Signals and Systems',
            type: 'Theory (T)',
            periods: '3-1-0',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To introduce the concepts of signals and systems.',
              'To analyze continuous and discrete time signals and systems.'
            ],
            chapters: [
              { title: 'Introduction to Signals and Systems', topics: 'Classification of signals, basic operations on signals, classification of systems.', activities: 'Identifying signal types.' },
              { title: 'Fourier Analysis of Continuous Time Signals', topics: 'Fourier series, Fourier transform, properties.', activities: 'Spectral analysis of signals.' },
              { title: 'Laplace Transform Analysis of Systems', topics: 'System representation, transfer function, impulse response.', activities: 'Analyzing system stability.' },
              { title: 'Sampling and Z-Transform', topics: 'Sampling theorem, Z-transform, properties, inverse Z-transform.', activities: 'Digital signal reconstruction.' }
            ],
            resources: [
              { icon: '📚', text: 'Signals and Systems (Oppenheim, A. V., Willsky, A. S., & Nawab, S. H.)', link: 'https://www.pearson.com/us/higher-education/program/Oppenheim-Signals-and-Systems-2nd-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Generating and visualizing different types of signals in MATLAB/Python.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Signal_Gen_1'] }
            ]
          },
          'ES3003': {
            name: 'Computer Architecture and Organization',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the basic structure and operation of a digital computer.',
              'To learn the concepts of pipelining, memory hierarchy, and I/O organization.'
            ],
            chapters: [
              { title: 'Basic Structure of Computers', topics: 'Functional units, basic operational concepts, bus structures.', activities: 'Tracing data flow in a simple CPU.' },
              { title: 'Processor Organization and Control', topics: 'Hardwired control, microprogrammed control, instruction set architecture.', activities: 'Designing a simple instruction set.' },
              { title: 'Memory System', topics: 'Basic concepts, cache memory, virtual memory, secondary storage.', activities: 'Analyzing cache performance.' },
              { title: 'I/O Organization', topics: 'Accessing I/O devices, interrupts, direct memory access (DMA).', activities: 'Simulating I/O operations.' }
            ],
            resources: [
              { icon: '📚', text: 'Computer Organization and Architecture (Stallings, W.)', link: 'https://www.pearson.com/us/higher-education/program/Stallings-Computer-Organization-and-Architecture-11th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Simulating a simple CPU data path.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=CPU_Datapath_Sim_1'] }
            ]
          },
          'ES3004': {
            name: 'Electronic Circuits and Analysis',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To analyze and design electronic circuits using BJT and FET.',
              'To understand the concepts of feedback amplifiers and oscillators.'
            ],
            chapters: [
              { title: 'BJT Amplifiers', topics: 'Biasing, small signal analysis, frequency response.', activities: 'Designing and simulating BJT amplifier circuits.' },
              { title: 'FET Amplifiers', topics: 'Biasing, small signal analysis, frequency response.', activities: 'Comparing BJT and FET amplifier characteristics.' },
              { title: 'Feedback Amplifiers', topics: 'General feedback structure, properties of negative feedback, types of feedback.', activities: 'Analyzing the effect of feedback on amplifier performance.' },
              { title: 'Oscillators', topics: 'Barkhausen criterion, RC and LC oscillators, crystal oscillators.', activities: 'Designing and testing oscillator circuits.' }
            ],
            resources: [
              { icon: '📚', text: 'Electronic Devices and Circuit Theory (Boylestad, R. L., & Nashelsky, L.)', link: 'https://www.pearson.com/us/higher-education/program/Boylestad-Electronic-Devices-and-Circuit-Theory-11th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Design and testing of common emitter amplifier.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=CE_Amp_Test_1'] },
              { description: 'Frequency response of RC coupled amplifier.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=RC_Amp_Freq_Resp_1'] }
            ]
          },
          'ES3005': {
            name: 'Digital System Design',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the fundamentals of digital logic design.',
              'To design and implement combinational and sequential logic circuits.'
            ],
            chapters: [
              { title: 'Boolean Algebra and Logic Gates', topics: 'Boolean postulates and laws, De Morgan’s theorem, logic gates, universal gates.', activities: 'Implementing logic functions using universal gates.' },
              { title: 'Combinational Logic Circuits', topics: 'K-map simplification, adders, subtractors, multiplexers, demultiplexers, encoders, decoders.', activities: 'Designing a 4-bit adder.' },
              { title: 'Sequential Logic Circuits', topics: 'Latches, flip-flops, registers, counters, state diagrams.', activities: 'Designing a modulo-N counter.' },
              { title: 'Memory and Programmable Logic', topics: 'RAM, ROM, PLA, PAL, FPGA basics.', activities: 'Implementing a simple logic on FPGA (simulation).' }
            ],
            resources: [
              { icon: '📚', text: 'Digital Design (Mano, M. M., & Ciletti, M. D.)', link: 'https://www.pearson.com/us/higher-education/program/Mano-Digital-Design-6th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Design and implementation of combinational circuits (e.g., multiplexer).', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Mux_Design_1'] },
              { description: 'Design and implementation of sequential circuits (e.g., counter).', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Counter_Design_1'] }
            ]
          },
          'ES3006': {
            name: 'Problem solving using python',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '2',
            category: 'Engineering Science (G)',
            objectives: [
              'To introduce problem-solving techniques using Python programming.',
              'To develop Python programs for various engineering applications.'
            ],
            chapters: [
              { title: 'Python Basics', topics: 'Variables, data types, operators, control flow statements.', activities: 'Writing simple Python scripts.' },
              { title: 'Functions and Modules', topics: 'Defining functions, passing arguments, built-in modules, creating custom modules.', activities: 'Developing modular Python programs.' },
              { title: 'Data Structures in Python', topics: 'Lists, tuples, dictionaries, sets, string manipulation.', activities: 'Implementing data manipulation tasks.' },
              { title: 'File Handling and Exception Handling', topics: 'Reading from and writing to files, error handling.', activities: 'Developing robust file processing scripts.' }
            ],
            resources: [
              { icon: '📚', text: 'Python Crash Course (Matthes, E.)', link: 'https://nostarch.com/pythoncrashcourse2e' }
            ],
            practicals: [
              { description: 'Solving mathematical problems using Python.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Python_Math_1'] },
              { description: 'Developing a simple data analysis script in Python.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Python_Data_Analysis_1'] }
            ]
          },
          'SD3007': {
            name: 'Skill Development Course - I',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '2',
            category: 'Skill Development (SD)',
            objectives: [
              'To enhance practical skills relevant to electronics and communication engineering.',
              'To provide hands-on experience with industry-standard tools and techniques.'
            ],
            chapters: [
              { title: 'PCB Design and Fabrication', topics: 'Schematic capture, PCB layout, etching, drilling, soldering.', activities: 'Designing and fabricating a simple PCB.' },
              { title: 'Embedded System Programming (Advanced)', topics: 'Microcontroller programming (e.g., ESP32), IoT protocols, sensor integration.', activities: 'Building an IoT-enabled sensor node.' },
              { title: 'Basic Robotics', topics: 'Robot kinematics, motor control, sensor integration for robotics.', activities: 'Assembling and programming a small mobile robot.' }
            ],
            resources: [
              { icon: '🌐', text: 'KiCad EDA Software', link: 'https://www.kicad.org/' },
              { icon: '🌐', text: 'Arduino Official Website', link: 'https://www.arduino.cc/' }
            ],
            practicals: [
              { description: 'Fabrication of a custom PCB for a simple circuit.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=PCB_Fabrication_1'] },
              { description: 'Programming an ESP32 for data logging.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=ESP32_Datalogging_1'] }
            ]
          },
          'HUM3008': {
            name: 'English Communication Skills Laboratory – II',
            type: 'Laboratory (L)',
            periods: '0-0-2',
            credits: '1',
            category: 'Humanities (HUM)',
            objectives: [
              'To improve advanced English communication skills for professional settings.',
              'To enhance presentation and public speaking abilities.'
            ],
            chapters: [
              { title: 'Advanced Presentation Skills', topics: 'Structuring presentations, visual aids, delivery techniques, handling Q&A.', activities: 'Individual and group presentations on technical topics.' },
              { title: 'Group Discussion and Debates', topics: 'Participation strategies, argumentation, critical listening.', activities: 'Organized group discussions and debates.' },
              { title: 'Interview Skills', topics: 'Types of interviews, common questions, body language, mock interviews.', activities: 'Mock interview sessions with feedback.' }
            ],
            resources: [
              { icon: '📚', text: 'Business Communication Today (Bovee, C. L., & Thill, J. V.)', link: 'https://www.pearson.com/us/higher-education/program/Bovee-Business-Communication-Today-15th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Recording and reviewing individual presentations.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Presentation_Recording_1'] },
              { description: 'Participating in a structured group discussion.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Group_Discussion_1'] }
            ]
          }
        }
      },
      4: {
        title: "Semester 4 Subjects",
        subjects: {
          // Add Semester 4 subjects here
          'BS4001': {
            name: 'Probability and Random Processes',
            type: 'Theory (T)',
            periods: '3-1-0',
            credits: '4',
            category: 'Basic Science (BS)',
            objectives: [
              'To understand the concepts of probability and random variables.',
              'To apply random processes in communication and signal processing.'
            ],
            chapters: [
              { title: 'Probability and Random Variables', topics: 'Axioms of probability, conditional probability, Bayes’ theorem, discrete and continuous random variables, probability distributions.', activities: 'Solving probability problems.' },
              { title: 'Random Processes', topics: 'Stationary processes, auto-correlation, cross-correlation, power spectral density.', activities: 'Analyzing random signals.' },
              { title: 'Markov Chains', topics: 'Markov property, state transition matrix, steady-state probabilities.', activities: 'Modeling simple systems with Markov chains.' }
            ],
            resources: [
              { icon: '📚', text: 'Probability, Random Variables and Random Signal Principles (Peyton Z. Peebles Jr.)', link: 'https://www.mheducation.co.in/probability-random-variables-and-random-signal-principles-9780070660018-india' }
            ],
            practicals: [
              { description: 'Simulating random variable distributions in Python.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Random_Var_Sim_1'] }
            ]
          },
          'ES4002': {
            name: 'Electro Magnetic Fields and Transmission Lines',
            type: 'Theory (T)',
            periods: '3-1-0',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the fundamental concepts of electromagnetic fields.',
              'To analyze the behavior of transmission lines.'
            ],
            chapters: [
              { title: 'Electrostatic Fields', topics: 'Coulomb’s law, electric field intensity, Gauss’s law, electric potential, capacitance.', activities: 'Calculating electric fields for various charge distributions.' },
              { title: 'Magnetostatic Fields', topics: 'Biot-Savart law, Ampere’s circuital law, magnetic flux density, inductance.', activities: 'Determining magnetic fields for current configurations.' },
              { title: 'Maxwell’s Equations', topics: 'Faraday’s law, displacement current, Maxwell’s equations in differential and integral forms.', activities: 'Understanding the interrelation of electric and magnetic fields.' },
              { title: 'Transmission Lines', topics: 'Transmission line parameters, characteristic impedance, reflection coefficient, VSWR, Smith chart.', activities: 'Solving transmission line problems using Smith chart.' }
            ],
            resources: [
              { icon: '📚', text: 'Elements of Electromagnetics (Sadiku, M. N. O.)', link: 'https://global.oup.com/academic/product/elements-of-electromagnetics-9780190212222?cc=us&lang=en&' }
            ],
            practicals: [
              { description: 'Simulation of electric field lines for different charge distributions.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=E_Field_Sim_1'] },
              { description: 'Using Smith chart for impedance matching exercises.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Smith_Chart_Ex_1'] }
            ]
          },
          'ES4003': {
            name: 'Introduction to Standards in Electronics and Communication',
            type: 'Theory (T)',
            periods: '1-0-0',
            credits: '1',
            category: 'Engineering Science (PC)',
            objectives: [
              'To introduce various standards in electronics and communication.',
              'To understand the importance and impact of standardization.'
            ],
            chapters: [
              { title: 'Overview of Standards Organizations', topics: 'IEEE, ITU, ISO, ETSI, 3GPP.', activities: 'Researching roles of different standards bodies.' },
              { title: 'Wireless Communication Standards', topics: 'GSM, LTE, 5G, Wi-Fi standards (802.11 series).', activities: 'Comparing features of different wireless standards.' },
              { title: 'Wired Communication Standards', topics: 'Ethernet (802.3), USB, HDMI.', activities: 'Identifying common wired interface standards.' },
              { title: 'Electronic Component Standards', topics: 'RoHS, CE, FCC compliance.', activities: 'Understanding regulatory compliance for electronic products.' }
            ],
            resources: [
              { icon: '🌐', text: 'IEEE Standards Association', link: 'https://standards.ieee.org/' },
              { icon: '🌐', text: 'ITU Official Website', link: 'https://www.itu.int/en/Pages/default.aspx' }
            ],
            practicals: [
              { description: 'Case study on the evolution of mobile communication standards.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Mobile_Std_Case_Study_1'] }
            ]
          },
          'ES4004': {
            name: 'Linear Integrated Circuits',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the characteristics and applications of operational amplifiers.',
              'To design and analyze linear integrated circuits.'
            ],
            chapters: [
              { title: 'Op-Amp Characteristics', topics: 'Ideal and practical op-amp, DC and AC characteristics, frequency response.', activities: 'Measuring op-amp parameters.' },
              { title: 'Op-Amp Applications', topics: 'Inverting and non-inverting amplifiers, summing amplifier, integrator, differentiator, active filters.', activities: 'Designing and testing op-amp based circuits.' },
              { title: 'Special Purpose ICs', topics: '555 Timer, voltage regulators (78xx, 79xx), PLL (Phase-Locked Loop).', activities: 'Building a 555 timer astable multivibrator.' }
            ],
            resources: [
              { icon: '📚', text: 'Op-Amps and Linear Integrated Circuits (Ramakant A. Gayakwad)', link: 'https://www.pearson.com/us/higher-education/program/Gayakwad-Op-Amps-and-Linear-Integrated-Circuits-4th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Design and implementation of an active filter using op-amp.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Active_Filter_Design_1'] },
              { description: 'Testing the characteristics of a 555 timer IC.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=555_Timer_Test_1'] }
            ]
          },
          'ES4005': {
            name: 'Analog Communication',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the principles of analog modulation and demodulation techniques.',
              'To analyze the performance of analog communication systems in the presence of noise.'
            ],
            chapters: [
              { title: 'Amplitude Modulation', topics: 'AM, DSB-SC, SSB-SC, VSB modulation and demodulation, power calculations.', activities: 'Generating and demodulating AM signals.' },
              { title: 'Angle Modulation', topics: 'Frequency Modulation (FM), Phase Modulation (PM), narrow-band FM, wide-band FM, generation and demodulation.', activities: 'Observing FM waveforms.' },
              { title: 'Noise in Analog Communication', topics: 'Noise sources, noise figure, noise temperature, performance of AM and FM systems in noise.', activities: 'Calculating signal-to-noise ratio (SNR).' },
              { title: 'Receivers', topics: 'TRF receiver, superheterodyne receiver, AGC.', activities: 'Block diagram analysis of receivers.' }
            ],
            resources: [
              { icon: '📚', text: 'Communication Systems (Simon Haykin)', link: 'https://www.wiley.com/en-us/Communication+Systems%2C+5th+Edition-p-9780471697934' }
            ],
            practicals: [
              { description: 'Generation and detection of AM and FM signals.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=AM_FM_Gen_Det_1'] },
              { description: 'Study of superheterodyne receiver characteristics.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Superhet_Receiver_1'] }
            ]
          },
          'ES4006': {
            name: 'Digital Signal Processing',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the fundamentals of discrete-time signals and systems.',
              'To design and implement digital filters.'
            ],
            chapters: [
              { title: 'Discrete-Time Signals and Systems', topics: 'Sampling, quantization, discrete-time signals, LTI systems, convolution.', activities: 'Performing discrete convolution.' },
              { title: 'Discrete Fourier Transform (DFT) and FFT', topics: 'DFT properties, circular convolution, Fast Fourier Transform (FFT) algorithms.', activities: 'Computing DFT of signals.' },
              { title: 'IIR Filter Design', topics: 'Butterworth, Chebyshev filters, impulse invariance, bilinear transformation.', activities: 'Designing IIR filters using MATLAB/Python.' },
              { title: 'FIR Filter Design', topics: 'Windowing techniques, frequency sampling method.', activities: 'Designing FIR filters using MATLAB/Python.' }
            ],
            resources: [
              { icon: '📚', text: 'Digital Signal Processing: Principles, Algorithms, and Applications (Proakis, J. G., & Manolakis, D. G.)', link: 'https://www.pearson.com/us/higher-education/program/Proakis-Digital-Signal-Processing-Principles-Algorithms-and-Applications-4th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Implementation of FFT algorithm.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=FFT_Impl_1'] },
              { description: 'Design and analysis of FIR and IIR filters.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Filter_Design_1'] }
            ]
          },
          'SD4007': {
            name: 'Skill Development Course – II',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '2',
            category: 'Skill Development (SD)',
            objectives: [
              'To further develop practical skills in advanced electronics and communication topics.',
              'To provide hands-on experience with simulation and hardware tools.'
            ],
            chapters: [
              { title: 'RF Circuit Design Basics', topics: 'Impedance matching, S-parameters, basic RF components.', activities: 'Simulating simple RF circuits.' },
              { title: 'Antenna Measurement Techniques', topics: 'Radiation pattern, gain, VSWR measurement.', activities: 'Measuring antenna characteristics in an anechoic chamber (virtual/simulated).' },
              { title: 'Optical Fiber Splicing and Testing', topics: 'Fiber types, splicing methods, OTDR testing.', activities: 'Performing fiber optic splicing (demonstration/simulation).' }
            ],
            resources: [
              { icon: '🌐', text: 'Keysight Technologies (RF/Microwave resources)', link: 'https://www.keysight.com/us/en/home.html' },
              { icon: '🌐', text: 'Ansys HFSS (Electromagnetic simulation software)', link: 'https://www.ansys.com/products/electronics/ansys-hfss' }
            ],
            practicals: [
              { description: 'Simulation of impedance matching networks.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Impedance_Matching_Sim_1'] },
              { description: 'Virtual demonstration of OTDR testing.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=OTDR_Virtual_Demo_1'] }
            ]
          },
          'HUM4008': {
            name: 'English Communication Skills – III',
            type: 'Laboratory (L)',
            periods: '0-0-2',
            credits: '1',
            category: 'Humanities (HUM)',
            objectives: [
              'To refine advanced communication skills for global professional environments.',
              'To develop cross-cultural communication competence.'
            ],
            chapters: [
              { title: 'Cross-Cultural Communication', topics: 'Cultural dimensions, verbal and non-verbal communication across cultures, cultural sensitivity.', activities: 'Case studies on cross-cultural communication challenges.' },
              { title: 'Negotiation Skills', topics: 'Principles of negotiation, strategies, conflict resolution.', activities: 'Role-playing negotiation scenarios.' },
              { title: 'Technical Report Writing', topics: 'Structure of technical reports, data presentation, referencing styles.', activities: 'Writing a technical project report.' }
            ],
            resources: [
              { icon: '📚', text: 'Intercultural Communication: A Global Perspective (Jandt, F. E.)', link: 'https://us.sagepub.com/en-us/nam/intercultural-communication/book242000' }
            ],
            practicals: [
              { description: 'Analyzing and discussing cross-cultural communication videos.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Cross_Cultural_Video_1'] },
              { description: 'Participating in a simulated negotiation.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Negotiation_Sim_1'] }
            ]
          }
        }
      },
      5: {
        title: "Semester 5 Subjects",
        subjects: {
          // Add Semester 5 subjects here
          'ES5001': {
            name: 'Control Systems',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the fundamental concepts of control systems.',
              'To analyze and design control systems in time and frequency domains.'
            ],
            chapters: [
              { title: 'System Representation', topics: 'Transfer function, block diagram reduction, signal flow graph.', activities: 'Modeling various physical systems.' },
              { title: 'Time Domain Analysis', topics: 'Transient and steady-state response, Routh-Hurwitz criterion, root locus technique.', activities: 'Analyzing system stability using root locus.' },
              { title: 'Frequency Domain Analysis', topics: 'Bode plots, Nyquist plot, gain and phase margins.', activities: 'Designing compensators using frequency response.' },
              { title: 'State Variable Analysis', topics: 'State space representation, controllability, observability.', activities: 'Converting transfer function to state space model.' }
            ],
            resources: [
              { icon: '📚', text: 'Control Systems Engineering (Norman S. Nise)', link: 'https://www.wiley.com/en-us/Control+Systems+Engineering%2C+8th+Edition-p-9781119474227' }
            ],
            practicals: [
              { description: 'Simulating step response of first and second order systems.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Step_Response_Sim_1'] }
            ]
          },
          'ES5002': {
            name: 'Programme Elective – I',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PE)',
            objectives: [
              'To allow students to specialize in an area of their interest within ECE.',
              'To provide in-depth knowledge of advanced topics.'
            ],
            chapters: [
              { title: 'Elective Specific Topic 1', topics: 'Details depend on chosen elective.', activities: 'Project work related to elective.' },
              { title: 'Elective Specific Topic 2', topics: 'Details depend on chosen elective.', activities: 'Research paper presentation.' }
            ],
            resources: [
              { icon: '📚', text: 'Relevant textbook for the chosen elective.', link: '#' }
            ],
            practicals: [
              { description: 'Practical application of elective concepts.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Elective_Practical_1'] }
            ]
          },
          'ES5003': {
            name: 'Data Communication Networks',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the principles of data communication and networking.',
              'To analyze various network architectures and protocols.'
            ],
            chapters: [
              { title: 'Network Models', topics: 'OSI model, TCP/IP protocol suite, network topologies.', activities: 'Comparing OSI and TCP/IP models.' },
              { title: 'Physical Layer', topics: 'Data and signals, transmission media, digital and analog transmission.', activities: 'Calculating data rates for different media.' },
              { title: 'Data Link Layer', topics: 'Error detection and correction, flow control, multiple access protocols.', activities: 'Simulating ARQ protocols.' },
              { title: 'Network Layer', topics: 'IPv4, IPv6, routing algorithms, congestion control.', activities: 'Configuring basic router settings (simulation).' },
              { title: 'Transport and Application Layers', topics: 'UDP, TCP, HTTP, DNS, SMTP.', activities: 'Analyzing packet headers.' }
            ],
            resources: [
              { icon: '📚', text: 'Data Communications and Networking (Behrouz A. Forouzan)', link: 'https://www.mheducation.co.in/data-communications-and-networking-9780070634149-india' }
            ],
            practicals: [
              { description: 'Network cabling and connectivity testing.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Network_Cabling_1'] },
              { description: 'Packet analysis using Wireshark.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Wireshark_Analysis_1'] }
            ]
          },
          'ES5004': {
            name: 'Digital Communication',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the principles of digital modulation and demodulation techniques.',
              'To analyze the performance of digital communication systems.'
            ],
            chapters: [
              { title: 'Pulse Modulation', topics: 'PAM, PWM, PPM, PCM, DPCM, Delta Modulation.', activities: 'Generating and demodulating PCM signals.' },
              { title: 'Digital Modulation Techniques', topics: 'ASK, FSK, PSK, QPSK, M-ary PSK, QAM.', activities: 'Simulating various digital modulation schemes.' },
              { title: 'Information Theory and Coding', topics: 'Entropy, channel capacity, Shannon-Fano coding, Huffman coding, error control coding (linear block codes, cyclic codes).', activities: 'Implementing Huffman coding.' },
              { title: 'Spread Spectrum Techniques', topics: 'Direct Sequence Spread Spectrum (DSSS), Frequency Hopping Spread Spectrum (FHSS).', activities: 'Understanding spread spectrum advantages.' }
            ],
            resources: [
              { icon: '📚', text: 'Digital Communications (Simon Haykin)', link: 'https://www.wiley.com/en-us/Digital+Communications%2C+5th+Edition-p-9780471205827' }
            ],
            practicals: [
              { description: 'Generation and detection of ASK/FSK/PSK signals.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Digital_Mod_Demod_1'] },
              { description: 'Implementation of error detection and correction codes.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Error_Coding_Impl_1'] }
            ]
          },
          'ES5005': {
            name: 'Microprocessor and Microcontroller',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the architecture and programming of microprocessors and microcontrollers.',
              'To interface peripheral devices with microcontrollers.'
            ],
            chapters: [
              { title: '8085 Microprocessor', topics: 'Architecture, instruction set, addressing modes, programming.', activities: 'Writing assembly language programs for 8085.' },
              { title: '8051 Microcontroller', topics: 'Architecture, instruction set, I/O ports, timers, serial communication.', activities: 'Programming 8051 for basic tasks.' },
              { title: 'Interfacing Techniques', topics: 'Memory interfacing, I/O interfacing (LED, LCD, keyboard, ADC/DAC).', activities: 'Interfacing an LCD with 8051.' },
              { title: 'Advanced Microcontrollers', topics: 'Introduction to ARM processors, Arduino/Raspberry Pi basics.', activities: 'Simple projects using Arduino.' }
            ],
            resources: [
              { icon: '📚', text: 'Microprocessor Architecture, Programming, and Applications with the 8085 (Ramesh S. Gaonkar)', link: 'https://www.pearson.com/us/higher-education/program/Gaonkar-Microprocessor-Architecture-Programming-and-Applications-with-the-8085-6th-Edition/PGM109000.html' },
              { icon: '📚', text: 'The 8051 Microcontroller and Embedded Systems (Muhammad Ali Mazidi, Janice Gillispie Mazidi, Rolin D. McKinlay)', link: 'https://www.pearson.com/us/higher-education/program/Mazidi-The-8051-Microcontroller-and-Embedded-Systems-2nd-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Assembly language programming for 8085/8051.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Microprocessor_ASM_1'] },
              { description: 'Interfacing sensors and actuators with 8051/Arduino.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Microcontroller_Interfacing_1'] }
            ]
          },
          'ES5006': {
            name: 'Artificial Intelligence & Machine Learning',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '2-0-2',
            credits: '3',
            category: 'Engineering Science (PC)',
            objectives: [
              'To introduce the concepts of Artificial Intelligence and Machine Learning.',
              'To apply AI/ML algorithms to solve engineering problems.'
            ],
            chapters: [
              { title: 'Introduction to AI', topics: 'History of AI, intelligent agents, problem-solving agents, search algorithms (BFS, DFS, A*).', activities: 'Implementing search algorithms.' },
              { title: 'Machine Learning Basics', topics: 'Types of learning (supervised, unsupervised, reinforcement), linear regression, logistic regression.', activities: 'Building a simple linear regression model.' },
              { title: 'Classification Algorithms', topics: 'Decision trees, SVM, k-NN, Naive Bayes.', activities: 'Implementing a classification model for a dataset.' },
              { title: 'Clustering and Dimensionality Reduction', topics: 'K-means, hierarchical clustering, PCA.', activities: 'Applying clustering to a dataset.' },
              { title: 'Neural Networks and Deep Learning (Introduction)', topics: 'Perceptron, multi-layer perceptron, backpropagation, introduction to CNN/RNN.', activities: 'Building a basic neural network.' }
            ],
            resources: [
              { icon: '📚', text: 'Artificial Intelligence: A Modern Approach (Stuart Russell, Peter Norvig)', link: 'https://www.pearson.com/us/higher-education/program/Russell-Artificial-Intelligence-A-Modern-Approach-4th-Edition/PGM109000.html' },
              { icon: '📚', text: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Aurélien Géron)', link: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032636/' },
              { icon: '🌐', text: 'Coursera - Machine Learning by Andrew Ng', link: 'https://www.coursera.org/learn/machine-learning' }
            ],
            practicals: [
              { description: 'Implementing a simple classification algorithm (e.g., Decision Tree) in Python.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=ML_Classification_1'] },
              { description: 'Using a pre-trained model for image recognition.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Image_Recognition_ML_1'] }
            ]
          },
          'SD5007': {
            name: 'Skill Development Course – III',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '2',
            category: 'Skill Development (SD)',
            objectives: [
              'To provide advanced practical skills in emerging technologies relevant to ECE.',
              'To encourage project-based learning and problem-solving.'
            ],
            chapters: [
              { title: 'FPGA Design with Verilog/VHDL', topics: 'FPGA architecture, Verilog/VHDL programming, synthesis, simulation.', activities: 'Implementing a simple digital circuit on FPGA.' },
              { title: 'Advanced IoT Development', topics: 'Cloud integration (AWS IoT, Azure IoT), data analytics for IoT, security in IoT.', activities: 'Developing an IoT application with cloud connectivity.' },
              { title: 'Robotics Operating System (ROS) Basics', topics: 'ROS architecture, nodes, topics, services, basic robot control.', activities: 'Controlling a simulated robot using ROS.' }
            ],
            resources: [
              { icon: '🌐', text: 'Xilinx Vivado Design Suite', link: 'https://www.xilinx.com/products/design-tools/vivado.html' },
              { icon: '🌐', text: 'ROS Official Website', link: 'https://www.ros.org/' }
            ],
            practicals: [
              { description: 'Designing and simulating a finite state machine using Verilog.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Verilog_FSM_1'] },
              { description: 'Building an IoT smart home prototype with cloud integration.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=IoT_Smart_Home_1'] }
            ]
          },
          'SD5008': {
            name: 'Industry Oriented Course - I',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '1',
            category: 'Skill Development (SD)',
            objectives: [
              'To expose students to industry practices and real-world engineering challenges.',
              'To develop practical skills demanded by the industry.'
            ],
            chapters: [
              { title: 'Industry Case Study 1', topics: 'Analysis of a specific industry problem and its engineering solution.', activities: 'Group presentation on industry case study.' },
              { title: 'Industrial Tools and Software', topics: 'Hands-on training with industry-specific software (e.g., Altium Designer, LabVIEW).', activities: 'Completing a mini-project using industry software.' },
              { title: 'Professional Ethics and Practices', topics: 'Workplace ethics, project management in industry, quality standards.', activities: 'Discussion on ethical dilemmas in engineering.' }
            ],
            resources: [
              { icon: '🌐', text: 'Altium Designer Official Website', link: 'https://www.altium.com/altium-designer' },
              { icon: '🌐', text: 'National Instruments LabVIEW', link: 'https://www.ni.com/en-us/shop/labview.html' }
            ],
            practicals: [
              { description: 'Designing a circuit board using Altium Designer.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Altium_Design_1'] },
              { description: 'Developing a data acquisition system using LabVIEW.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=LabVIEW_DAQ_1'] }
            ]
          }
        }
      },
      6: {
        title: "Semester 6 Subjects",
        subjects: {
          // Add Semester 6 subjects here
          'ES6001': {
            name: 'Programme Elective – II',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PE)',
            objectives: [
              'To provide further specialization in an advanced ECE domain.',
              'To enable students to pursue research interests in chosen areas.'
            ],
            chapters: [
              { title: 'Elective Specific Topic 1', topics: 'Advanced concepts in the chosen elective field.', activities: 'In-depth literature review.' },
              { title: 'Elective Specific Topic 2', topics: 'Emerging trends and challenges.', activities: 'Seminar presentation on a cutting-edge topic.' }
            ],
            resources: [
              { icon: '📚', text: 'Advanced textbook for the chosen elective.', link: '#' }
            ],
            practicals: [
              { description: 'Simulation or experimental work related to the elective.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=Elective_II_Practical_1'] }
            ]
          },
          'ES6002': {
            name: 'Programme Elective – III',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PE)',
            objectives: [
              'To broaden the student\'s knowledge base in another specialized ECE area.',
              'To prepare students for diverse career paths.'
            ],
            chapters: [
              { title: 'Elective Specific Topic 1', topics: 'Core concepts of the second elective field.', activities: 'Comparative analysis of different approaches.' },
              { title: 'Elective Specific Topic 2', topics: 'Applications and case studies.', activities: 'Mini-project demonstrating elective concepts.' }
            ],
            resources: [
              { icon: '📚', text: 'Relevant textbook for the second chosen elective.', link: '#' }
            ],
            practicals: [
              { description: 'Hands-on project applying concepts from the second elective.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Elective_III_Practical_1'] }
            ]
          },
          'OE6003': {
            name: 'Open Elective',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Open Elective (OE)',
            objectives: [
              'To allow students to explore interdisciplinary areas or subjects outside their core discipline.',
              'To foster holistic development and broader perspectives.'
            ],
            chapters: [
              { title: 'Open Elective Topic 1', topics: 'Introduction to the chosen open elective field.', activities: 'Group discussion on interdisciplinary applications.' },
              { title: 'Open Elective Topic 2', topics: 'Key concepts and societal impact.', activities: 'Presentation on a real-world problem addressed by the elective.' }
            ],
            resources: [
              { icon: '📚', text: 'Textbook relevant to the chosen open elective.', link: '#' }
            ],
            practicals: [
              { description: 'Case study analysis related to the open elective.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Open_Elective_Case_Study_1'] }
            ]
          },
          'ES6004': {
            name: 'Antenna Design',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the fundamental principles of antenna theory.',
              'To design and analyze various types of antennas.'
            ],
            chapters: [
              { title: 'Antenna Fundamentals', topics: 'Radiation mechanism, antenna parameters (gain, directivity, efficiency, bandwidth, polarization).', activities: 'Calculating antenna parameters for basic structures.' },
              { title: 'Wire Antennas', topics: 'Dipole, monopole, loop antennas, arrays.', activities: 'Designing a half-wave dipole antenna.' },
              { title: 'Aperture and Microstrip Antennas', topics: 'Horn, parabolic reflector antennas, patch antennas.', activities: 'Simulating radiation patterns of different antennas.' },
              { title: 'Antenna Measurements', topics: 'Anechoic chamber, far-field and near-field measurements.', activities: 'Virtual antenna measurement setup.' }
            ],
            resources: [
              { icon: '📚', text: 'Antenna Theory: Analysis and Design (Constantine A. Balanis)', link: 'https://www.wiley.com/en-us/Antenna+Theory%3A+Analysis+and+Design%2C+4th+Edition-p-9781118642069' }
            ],
            practicals: [
              { description: 'Simulation of antenna radiation patterns using software (e.g., HFSS).', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Antenna_Sim_1'] },
              { description: 'Fabrication and testing of a simple patch antenna.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Patch_Antenna_Test_1'] }
            ]
          },
          'ES6005': {
            name: 'CMOS VLSI Design',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the fundamentals of CMOS VLSI design.',
              'To design and analyze CMOS logic circuits.'
            ],
            chapters: [
              { title: 'CMOS Technology', topics: 'MOSFET fabrication, CMOS inverter, static and dynamic characteristics.', activities: 'Analyzing CMOS inverter operation.' },
              { title: 'CMOS Logic Gates', topics: 'NAND, NOR, XOR gates, complex logic gates, pass transistor logic.', activities: 'Designing complex CMOS gates.' },
              { title: 'Sequential Logic Circuits', topics: 'Latches, flip-flops, static and dynamic sequential circuits.', activities: 'Implementing CMOS flip-flops.' },
              { title: 'Design Methodologies', topics: 'Full-custom, semi-custom, standard cell design, ASIC design flow.', activities: 'Introduction to ASIC design flow.' }
            ],
            resources: [
              { icon: '📚', text: 'CMOS Digital Integrated Circuits: Analysis & Design (Sung-Mo Kang, Yusuf Leblebici)', link: 'https://www.mheducation.co.in/cmos-digital-integrated-circuits-analysis-design-9780070530779-india' }
            ],
            practicals: [
              { description: 'Layout design and simulation of a CMOS inverter using EDA tools.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=CMOS_Inverter_Layout_1'] },
              { description: 'Design and simulation of basic CMOS logic gates.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=CMOS_Logic_Sim_1'] }
            ]
          },
          'ES6006': {
            name: 'Wireless Communication',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the principles of wireless communication systems.',
              'To analyze the challenges and techniques in wireless channel environments.'
            ],
            chapters: [
              { title: 'Wireless Channel Characteristics', topics: 'Large-scale fading (path loss, shadowing), small-scale fading (multipath, Doppler spread).', activities: 'Modeling wireless channel effects.' },
              { title: 'Cellular Concept', topics: 'Frequency reuse, handoff, interference, capacity improvement techniques.', activities: 'Designing a cellular system layout.' },
              { title: 'Digital Modulation for Wireless', topics: 'M-ary PSK, M-ary FSK, GMSK, OFDM basics.', activities: 'Simulating OFDM signal generation.' },
              { title: 'Multiple Access Techniques', topics: 'FDMA, TDMA, CDMA, SDMA, OFDMA.', activities: 'Comparing different multiple access schemes.' },
              { title: 'Wireless Standards', topics: 'GSM, LTE, 5G, Wi-Fi (802.11).', activities: 'Analyzing features of 5G technology.' }
            ],
            resources: [
              { icon: '📚', text: 'Wireless Communications: Principles and Practice (Theodore S. Rappaport)', link: 'https://www.pearson.com/us/higher-education/program/Rappaport-Wireless-Communications-Principles-and-Practice-2nd-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Simulation of fading channels and their impact on signal.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Fading_Channel_Sim_1'] },
              { description: 'Implementation of a basic OFDM transmitter/receiver in MATLAB.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=OFDM_Impl_1'] }
            ]
          },
          'SD6007': {
            name: 'Industry Oriented Course - II',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '1-0-2',
            credits: '2',
            category: 'Skill Development (SD)',
            objectives: [
              'To provide advanced exposure to industry-specific tools and methodologies.',
              'To prepare students for direct industry roles through practical projects.'
            ],
            chapters: [
              { title: 'Advanced Simulation Tools', topics: 'Hands-on with industry-standard simulation software (e.g., Cadence Virtuoso, CST Studio Suite).', activities: 'Simulating complex electronic systems.' },
              { title: 'Project Management in Industry', topics: 'Agile methodologies, project planning, risk management.', activities: 'Participating in a simulated agile project.' },
              { title: 'Industry Best Practices', topics: 'Quality control, testing methodologies, documentation standards.', activities: 'Developing technical documentation for a product.' }
            ],
            resources: [
              { icon: '🌐', text: 'Cadence Design Systems', link: 'https://www.cadence.com/' },
              { icon: '🌐', text: 'CST Studio Suite (Dassault Systèmes)', link: 'https://www.3ds.com/products-services/simulia/products/cst-studio-suite/' }
            ],
            practicals: [
              { description: 'Simulating an RFIC block using Cadence Virtuoso.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=RFIC_Sim_Cadence_1'] },
              { description: 'Performing electromagnetic simulation of a device in CST Studio Suite.', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=EM_Sim_CST_1'] }
            ]
          },
          'SL6008': {
            name: 'Self-Learning Course',
            type: '---', // Self Learning
            periods: '---',
            credits: '1',
            category: 'Self Learning (SL)',
            objectives: [
              'To foster independent learning and research skills.',
              'To allow students to explore topics of personal interest or emerging technologies.'
            ],
            chapters: [
              { title: 'Topic Identification and Research', topics: 'Identifying a relevant topic, literature survey, defining scope.', activities: 'Submitting a detailed proposal for self-learning topic.' },
              { title: 'Independent Study and Implementation', topics: 'Deep dive into the chosen topic, practical implementation or theoretical analysis.', activities: 'Developing a prototype or writing a comprehensive report.' },
              { title: 'Presentation and Evaluation', topics: 'Presenting findings, defending methodology and results.', activities: 'Final presentation and viva-voce.' }
            ],
            resources: [
              { icon: '🌐', text: 'IEEE Xplore Digital Library', link: 'https://ieeexplore.ieee.org/Xplore/home.jsp' },
              { icon: '🌐', text: 'arXiv (Open-access e-prints)', link: 'https://arxiv.org/' }
            ],
            practicals: [
              { description: 'Demonstration of a self-developed project/prototype.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Self_Learning_Project_1'] }
            ]
          }
        }
      },
      7: {
        title: "Semester 7 Subjects",
        subjects: {
          // Add Semester 7 subjects here
          'HUM7001': {
            name: 'Engineering Entrepreneurship Development',
            type: 'Theory (T)',
            periods: '2-0-2',
            credits: '3',
            category: 'Humanities (HUM)',
            objectives: [
              'To develop entrepreneurial skills and mindset among engineering students.',
              'To understand the process of converting innovative ideas into successful ventures.'
            ],
            chapters: [
              { title: 'Introduction to Entrepreneurship', topics: 'Concept of entrepreneurship, characteristics of an entrepreneur, types of entrepreneurs.', activities: 'Case studies of successful entrepreneurs.' },
              { title: 'Idea Generation and Business Plan', topics: 'Sources of new ideas, creativity, innovation, market survey, feasibility study, business plan components.', activities: 'Developing a mini business plan for a product/service.' },
              { title: 'Funding and Legal Aspects', topics: 'Sources of finance, venture capital, angel investors, legal forms of business, intellectual property rights.', activities: 'Understanding startup funding models.' },
              { title: 'Marketing and Management', topics: 'Marketing strategies, branding, team building, leadership, ethics in business.', activities: 'Pitching a business idea.' }
            ],
            resources: [
              { icon: '📚', text: 'Entrepreneurship Development (S. S. Khanka)', link: 'https://www.schandpublishing.com/books/tech-prof/management/entrepreneurship-development/9788121918015/' }
            ],
            practicals: [
              { description: 'Brainstorming and presenting innovative product ideas.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Idea_Pitch_1'] },
              { description: 'Developing a lean canvas for a startup concept.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Lean_Canvas_1'] }
            ]
          },
          'HUM7002': {
            name: 'Climate Change and Sustainability',
            type: 'Theory (T)',
            periods: '2-0-0',
            credits: '2',
            category: 'Humanities (HUM)',
            objectives: [
              'To understand the science of climate change and its impacts.',
              'To explore sustainable development goals and engineering solutions for environmental challenges.'
            ],
            chapters: [
              { title: 'Basics of Climate Change', topics: 'Greenhouse effect, global warming, climate models, climate change indicators.', activities: 'Analyzing climate data trends.' },
              { title: 'Impacts of Climate Change', topics: 'Environmental, social, economic impacts, extreme weather events.', activities: 'Case studies on climate change impacts.' },
              { title: 'Sustainable Development', topics: 'Sustainable Development Goals (SDGs), circular economy, green technologies.', activities: 'Proposing sustainable engineering solutions.' },
              { title: 'Policy and Governance', topics: 'International agreements (Paris Agreement), national policies, role of engineers in sustainability.', activities: 'Debate on climate policies.' }
            ],
            resources: [
              { icon: '📚', text: 'Environmental Science: Towards a Sustainable Future (Wright, R. T., & Boorse, D. D.)', link: 'https://www.pearson.com/us/higher-education/program/Wright-Environmental-Science-Toward-a-Sustainable-Future-13th-Edition/PGM109000.html' }
            ],
            practicals: [
              { description: 'Calculating carbon footprint for a typical engineering activity.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Carbon_Footprint_Calc_1'] }
            ]
          },
          'ES7003': {
            name: 'RF and Microwave Engineering',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the principles of RF and microwave circuits and systems.',
              'To analyze and design components for high-frequency applications.'
            ],
            chapters: [
              { title: 'RF and Microwave Components', topics: 'Transmission lines, waveguides, S-parameters, impedance matching networks, power dividers, couplers.', activities: 'Designing impedance matching networks.' },
              { title: 'RF Amplifiers and Oscillators', topics: 'Low Noise Amplifiers (LNA), power amplifiers, RF oscillators, mixers.', activities: 'Simulating RF amplifier characteristics.' },
              { title: 'Microwave Solid State Devices', topics: 'PIN diode, Gunn diode, IMPATT diode, TRAPATT diode, HEMT.', activities: 'Understanding operation of microwave diodes.' },
              { title: 'Microwave Systems', topics: 'Radar systems, satellite communication systems, microwave heating.', activities: 'Block diagram analysis of a radar system.' }
            ],
            resources: [
              { icon: '📚', text: 'Microwave Engineering (David M. Pozar)', link: 'https://www.wiley.com/en-us/Microwave+Engineering%2C+4th+Edition-p-9780470631553' }
            ],
            practicals: [
              { description: 'Measurement of S-parameters of RF components using VNA (virtual/simulated).', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=S_Parameter_VNA_1'] }
            ]
          },
          'ES7004': {
            name: 'Programme Elective – IV',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PE)',
            objectives: [
              'To provide advanced specialization in a chosen ECE domain.',
              'To enable students to undertake complex design and research projects.'
            ],
            chapters: [
              { title: 'Elective Specific Topic 1', topics: 'Highly specialized concepts in the chosen elective.', activities: 'Advanced problem-solving sessions.' },
              { title: 'Elective Specific Topic 2', topics: 'Current research frontiers and future directions.', activities: 'Critical analysis of research papers.' }
            ],
            resources: [
              { icon: '📚', text: 'Specialized textbook for the chosen elective.', link: '#' }
            ],
            practicals: [
              { description: 'Advanced simulation or experimental setup related to the elective.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=Elective_IV_Practical_1'] }
            ]
          },
          'ES7005': {
            name: 'Programme Elective – V',
            type: 'Theory (T)',
            periods: '3-0-0',
            credits: '3',
            category: 'Engineering Science (PE)',
            objectives: [
              'To offer another advanced specialization option for students.',
              'To provide flexibility in tailoring the curriculum to individual interests.'
            ],
            chapters: [
              { title: 'Elective Specific Topic 1', topics: 'Core principles of the fifth elective.', activities: 'Comparative study of different technologies.' },
              { title: 'Elective Specific Topic 2', topics: 'Design considerations and practical implementations.', activities: 'Mini-design project.' }
            ],
            resources: [
              { icon: '📚', text: 'Relevant textbook for the fifth chosen elective.', link: '#' }
            ],
            practicals: [
              { description: 'Design and simulation of a system based on the elective topic.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=Elective_V_Practical_1'] }
            ]
          },
          'HUM7006': {
            name: 'Project Management',
            type: 'Theory (T)',
            periods: '2-0-0',
            credits: '2',
            category: 'Humanities (HUM)',
            objectives: [
              'To understand the principles and practices of project management.',
              'To learn tools and techniques for effective project planning, execution, and control.'
            ],
            chapters: [
              { title: 'Introduction to Project Management', topics: 'Project lifecycle, project stakeholders, project manager roles and responsibilities.', activities: 'Case study on a successful/failed project.' },
              { title: 'Project Planning and Scheduling', topics: 'Work Breakdown Structure (WBS), Gantt charts, PERT/CPM, critical path analysis.', activities: 'Developing a project schedule for a given scenario.' },
              { title: 'Project Execution and Control', topics: 'Resource management, risk management, quality management, communication management.', activities: 'Identifying risks in a project plan.' },
              { title: 'Project Closure and Agile Methodologies', topics: 'Project closure activities, lessons learned, introduction to Agile, Scrum.', activities: 'Comparing Waterfall vs. Agile approaches.' }
            ],
            resources: [
              { icon: '📚', text: 'A Guide to the Project Management Body of Knowledge (PMBOK® Guide)', link: 'https://www.pmi.org/pmbok-guide-standards/foundational/pmbok' }
            ],
            practicals: [
              { description: 'Using project management software (e.g., MS Project, Trello) for planning.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Project_Mgmt_Software_1'] }
            ]
          },
          'ES7007': {
            name: 'Millimeter wave and Optical Communication',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the principles of millimeter wave and optical communication systems.',
              'To analyze their applications in high-speed data transmission.'
            ],
            chapters: [
              { title: 'Millimeter Wave Communication', topics: 'Millimeter wave propagation characteristics, components (antennas, transceivers), applications (5G, automotive radar).', activities: 'Analyzing mmWave channel models.' },
              { title: 'Optical Fiber Communication', topics: 'Optical fiber types, light sources (LED, Laser), detectors (PIN, APD), optical amplifiers.', activities: 'Calculating power budget for optical links.' },
              { title: 'Optical Networks', topics: 'WDM, SONET/SDH, optical access networks (PON).', activities: 'Understanding optical network architectures.' },
              { title: 'Free Space Optics (FSO)', topics: 'Principles, advantages, limitations, applications.', activities: 'Comparing FSO with fiber optics.' }
            ],
            resources: [
              { icon: '📚', text: 'Optical Fiber Communications (Gerd Keiser)', link: 'https://www.mheducation.co.in/optical-fiber-communications-9780070634101-india' },
              { icon: '📚', text: 'Millimeter Wave Wireless Communications (Theodore S. Rappaport, Robert W. Heath Jr., Robert C. Daniels, James N. Murdock)', link: 'https://www.pearson.com/us/higher-education/program/Rappaport-Millimeter-Wave-Wireless-Communications/PGM109000.html' }
            ],
            practicals: [
              { description: 'Simulation of optical fiber link performance.', images: ['https://placehold.co/800x600/FF5733/FFFFFF?text=Optical_Link_Sim_1'] },
              { description: 'Demonstration of mmWave signal generation and reception (simulated/hardware).', images: ['https://placehold.co/800x600/33FF57/FFFFFF?text=mmWave_Demo_1'] }
            ]
          },
          'ES7008': {
            name: 'Embedded systems and Industrial IOT',
            type: 'Laboratory Integrated Theory (LIT)',
            periods: '3-0-2',
            credits: '4',
            category: 'Engineering Science (PC)',
            objectives: [
              'To understand the design and development of embedded systems.',
              'To explore the concepts and applications of Industrial Internet of Things (IIoT).'
            ],
            chapters: [
              { title: 'Embedded System Design', topics: 'Microcontrollers vs. microprocessors, embedded system architecture, real-time operating systems (RTOS).', activities: 'Designing a simple embedded system for a specific task.' },
              { title: 'Embedded Programming', topics: 'C/C++ for embedded systems, debugging techniques, interrupt handling.', activities: 'Writing embedded C code for a microcontroller.' },
              { title: 'Industrial IoT (IIoT) Architecture', topics: 'IIoT layers, sensors and actuators in industrial environments, edge computing.', activities: 'Identifying key components of an IIoT system.' },
              { title: 'IIoT Protocols and Applications', topics: 'MQTT, CoAP, OPC UA, industrial automation, predictive maintenance.', activities: 'Building a simple IIoT data acquisition system.' }
            ],
            resources: [
              { icon: '📚', text: 'Embedded Systems: Architecture, Programming and Design (Raj Kamal)', link: 'https://www.mheducation.co.in/embedded-systems-architecture-programming-and-design-9780070667642-india' },
              { icon: '📚', text: 'Industrial Internet of Things (IIoT): A Practical Approach to Connecting Devices and Data (Al-Fuqaha, A., et al.)', link: 'https://www.springer.com/gp/book/9783030424730' }
            ],
            practicals: [
              { description: 'Developing an embedded application with RTOS features.', images: ['https://placehold.co/800x600/3357FF/FFFFFF?text=RTOS_Embedded_1'] },
              { description: 'Setting up an IIoT sensor network using MQTT.', images: ['https://placehold.co/800x600/FF33F7/FFFFFF?text=IIoT_MQTT_1'] }
            ]
          },
          'SD7009': {
            name: 'Summer Internship*',
            type: '---', // Internship
            periods: '---',
            credits: '1',
            category: 'Skill Development (SD)',
            objectives: [
              'To gain practical industry experience in an engineering domain.',
              'To apply theoretical knowledge to real-world problems and develop professional skills.'
            ],
            chapters: [
              { title: 'Industry Exposure and Learning', topics: 'Working on industry projects, understanding organizational structure, learning new tools/technologies.', activities: 'Maintaining an internship logbook.' },
              { title: 'Project Implementation and Reporting', topics: 'Contributing to a project, problem-solving, technical documentation.', activities: 'Preparing an internship report and presentation.' }
            ],
            resources: [
              { icon: '🌐', text: 'Internship Guidelines (University/Department specific)', link: '#' }
            ],
            practicals: [
              { description: 'Presentation of internship project and learnings.', images: ['https://placehold.co/800x600/33FFF7/FFFFFF?text=Internship_Presentation_1'] }
            ]
          }
        }
      },
      8: {
        title: "Semester 8 Subjects",
        subjects: {
          // Add Semester 8 subjects here
          'SD8001': {
            name: 'Project Work / Internship cum Project Work',
            type: 'Project Work / Internship cum Project Work (PW / IPW)',
            periods: '0-0-16',
            credits: '8',
            category: 'Skill Development (SD)',
            objectives: [
              'To undertake a comprehensive engineering project, applying knowledge from previous semesters.',
              'To develop problem-solving, design, implementation, and communication skills through a significant project.',
              'To gain practical experience through an extended internship integrated with a project.'
            ],
            chapters: [
              { title: 'Problem Identification and Literature Survey', topics: 'Identifying a relevant engineering problem, conducting a thorough literature review, defining project scope and objectives.', activities: 'Submitting a detailed project proposal.' },
              { title: 'Design and Methodology', topics: 'Developing system architecture, detailed design of hardware/software modules, selecting appropriate methodologies and tools.', activities: 'Presenting design choices and justification.' },
              { title: 'Implementation and Testing', topics: 'Building/coding the proposed solution, rigorous testing, debugging, and performance evaluation.', activities: 'Demonstrating the working prototype/software.' },
              { title: 'Results, Analysis, and Documentation', topics: 'Analyzing results, comparing with objectives, drawing conclusions, preparing a comprehensive project report and presentation.', activities: 'Final project defense and viva-voce.' }
            ],
            resources: [
              { icon: '📚', text: 'Project Management for Engineering, Business and Technology (Nicholas, J. M., & Steyn, H.)', link: 'https://www.routledge.com/Project-Management-for-Engineering-Business-and-Technology/Nicholas-Steyn/p/book/9781138054000' },
              { icon: '🌐', text: 'IEEE Project Guidelines', link: 'https://www.ieee.org/conferences/publishing/templates.html' },
              { icon: '🌐', text: 'GitHub (for code management)', link: 'https://github.com/' }
            ],
            practicals: [
              { description: 'Regular project progress meetings and reviews.', images: [
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Project_Meeting_1',
                'https://placehold.co/800x600/33FF57/FFFFFF?text=Project_Meeting_2'
              ] },
              { description: 'Final demonstration of the project prototype/software.', images: [
                'https://placehold.co/800x600/3357FF/FFFFFF?text=Project_Demo_1',
                'https://placehold.co/800x600/FF33F7/FFFFFF?text=Project_Demo_2'
              ] },
              { description: 'Presentation of the project report and findings.', images: [
                'https://placehold.co/800x600/33FFF7/FFFFFF?text=Project_Presentation_1',
                'https://placehold.co/800x600/FF5733/FFFFFF?text=Project_Presentation_2'
              ] }
            ]
          }
        }
      }
    };

// Function to display semester subjects
function showSemester(semNumber) {
  const container = document.querySelector('.container');
  const data = semesterData[semNumber];

  if (!data) {
    container.innerHTML = "<p>No data found for this semester.</p>";
    return;
  }

  let html = `<h2>${data.title}</h2><div class="subject-list"><ul>`;

  // Loop through all subjects
  for (const [code, subject] of Object.entries(data.subjects)) {
    html += `<li>${code} - ${subject.name}</li>`;
  }

  html += `</ul></div>`;
  container.innerHTML = html;
}

// Automatically show semester 1 on load
document.addEventListener("DOMContentLoaded", () => showSemester(1));