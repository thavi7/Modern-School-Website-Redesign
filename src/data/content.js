// All copy and figures here are mock data for demonstration.
export const school = {
  name: 'AV1 Academy',
  short: 'AV1',
  est: 1998,
  address: ['14 Orchard Lane', 'AV1 Park, Northfield 400 001'],
  phone: '+1 (555) 014-2200',
  email: 'hello@av1.example',
  admissionsEmail: 'admissions@AV1.example',
  hours: [
    ['Monday to Friday', '8:00 am to 4:30 pm'],
    ['Saturday (admissions desk)', '9:00 am to 1:00 pm'],
    ['Sunday and public holidays', 'Closed'],
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: 1850, label: 'Students across three stages' },
  { value: 140, label: 'Teachers and specialists' },
  { value: 28, label: 'Years of excellence' },
]

export const programs = [
  { key: 'academics', title: 'Academics', img: 'classroom', text: 'Small classes, deep reading and daily practice in thinking aloud.', span: 'md:col-span-7 md:row-span-2 min-h-[28rem]' },
  { key: 'stem', title: 'STEM', img: 'robotics', text: 'Robotics, coding and lab science taught as one connected workshop.', span: 'md:col-span-5 min-h-[20rem]' },
  { key: 'arts', title: 'Arts', img: 'art', text: 'Studio painting, choir, theatre and design from the first year.', span: 'md:col-span-5 min-h-[20rem]' },
  { key: 'sports', title: 'Sports', img: 'track', text: 'Twelve teams, a full track, and coaches who teach how to lose well.', span: 'md:col-span-6 min-h-[20rem]' },
  { key: 'leadership', title: 'Leadership', img: 'group', text: 'Student council, service projects and a final-year capstone.', span: 'md:col-span-6 min-h-[20rem]' },
]

export const spaces = [
  { name: 'Classrooms', img: 'classroom', text: 'Light-filled rooms for twenty-four, arranged around conversation rather than rows.' },
  { name: 'Sports grounds', img: 'football', text: 'Two turf fields, a 400 m track and a covered court used from dawn to dusk.' },
  { name: 'The library', img: 'library', text: 'Thirty thousand titles, quiet alcoves and a reading hour built into every week.' },
  { name: 'Laboratories', img: 'lab', text: 'Six teaching labs for physics, chemistry, biology and electronics.' },
  { name: 'Creative studios', img: 'art', text: 'Open-door studios for painting, ceramics, music and theatre.' },
]

export const strengths = [
  { icon: 'Compass', title: 'Personalised learning', text: 'Every child has a learning plan reviewed each term with parents, so pace and challenge fit the person.' },
  { icon: 'GraduationCap', title: 'Experienced faculty', text: 'Average teaching tenure is eleven years. Most of our teachers hold a postgraduate degree in their subject.' },
  { icon: 'Building2', title: 'Modern facilities', text: 'Labs, a design workshop, a black-box theatre and a library that stays open late during exams.' },
  { icon: 'HeartHandshake', title: 'Student well-being', text: 'A counselling team, mentor groups of ten, and a no-phones lunch hour that gets people talking.' },
  { icon: 'Trophy', title: 'Beyond the classroom', text: 'More than sixty clubs and teams, because a child finds their spark in unexpected places.' },
]

export const achievementStats = [
  { value: 312, suffix: '', label: 'Inter-school awards in five years' },
  { value: 96, suffix: '%', label: 'Graduates placed at first-choice university' },
  { value: 18, suffix: '', label: 'National finalists since 2021' },
  { value: 41, suffix: '', label: 'Scholarships awarded last year' },
]

export const achievements = [
  { img: 'robotics', year: '2025', title: 'National Robotics Finals', text: 'Team Circuit Breakers, all in Grade 10, built an autonomous sorter and placed second nationally.', cls: 'md:col-span-7 aspect-[4/3]' },
  { img: 'track', year: '2025', title: 'State Athletics Championship', text: 'Fourteen medals, including a relay record that stood for nine years.', cls: 'md:col-span-5 aspect-[4/5] md:mt-24' },
  { img: 'group', year: '2024', title: 'Inter-school Debating Cup', text: 'Our senior team won all six rounds on the motion about public transport.', cls: 'md:col-span-5 aspect-[4/5]' },
  { img: 'music', year: '2024', title: 'Regional Choir Festival', text: 'The AV1 Chamber Choir took the gold category for original composition.', cls: 'md:col-span-7 aspect-[4/3] md:-mt-16' },
]

export const testimonials = [
  { quote: 'Our son used to hide at the back of the class. In two years he has led a debate, built a robot and learned to ask for help. The teachers never rushed him, and never let him settle.', name: 'Meera Kapoor', role: 'Parent of a Grade 8 student', img: 'woman1' },
  { quote: 'The best part was the capstone. I spent a term researching water quality in our neighbourhood and presented to real engineers. It felt like the school trusted me.', name: 'Arjun Mehta', role: 'Alumnus, class of 2023', img: 'man2' },
  { quote: 'Parents are treated as partners here. I get a clear note every term about what my daughter is working on, where she is stuck and what we can do at home.', name: 'Daniel Okafor', role: 'Parent of a Grade 4 student', img: 'man1' },
  { quote: 'I joined in Grade 9 and was nervous about fitting in. My mentor group made lunch easy on day one, and the art studio became my second home.', name: 'Sana Rahman', role: 'Grade 12 student', img: 'woman2' },
]

export const faculty = [
  { name: 'Dr. Helena Voss', role: 'Principal', img: 'woman1' },
  { name: 'Rahul Menon', role: 'Head of Secondary', img: 'man2' },
  { name: 'Priya Nair', role: 'Head of Primary', img: 'woman2' },
  { name: 'Thomas Ibarra', role: 'Director of Sciences', img: 'man1' },
  { name: 'Amara Bello', role: 'Head of Arts', img: 'woman1' },
  { name: 'Kenji Mori', role: 'Director of Sport', img: 'man2' },
]

export const values = [
  { title: 'Curiosity', text: 'We reward good questions as much as right answers.' },
  { title: 'Integrity', text: 'We do the honest thing when no one is checking.' },
  { title: 'Craft', text: 'We care about doing small things properly.' },
  { title: 'Kindness', text: 'We treat strength and gentleness as partners.' },
  { title: 'Service', text: 'We learn most when we are useful to others.' },
]

export const milestones = [
  { year: '1998', title: 'A school for sixty', text: 'AV1 opens in a converted orchard house with six teachers and sixty students.' },
  { year: '2004', title: 'The Science Block', text: 'Our first purpose-built laboratories open, and the first science fair fills the lawn.' },
  { year: '2009', title: 'Secondary wing', text: 'We add Grades 9 to 12 and graduate our first senior class the following spring.' },
  { year: '2014', title: 'Library and art studios', text: 'A new library and four open studios place reading and making at the centre of campus.' },
  { year: '2019', title: 'The STEM Workshop', text: 'Robotics, electronics and design share one workshop and one very large whiteboard.' },
  { year: '2023', title: 'Well-being Centre', text: 'Counselling, mentoring and quiet rooms open under one roof.' },
  { year: '2026', title: 'Twenty-eight years on', text: '1,850 students, 140 educators, and the same orchard trees by the main gate.' },
]

export const stages = [
  {
    id: 'primary', label: 'Primary', grades: 'Grades 1 to 5', age: 'Ages 6 to 10', img: 'reading',
    summary: 'Primary is where reading, number sense and friendship are built slowly and well. Each class has a lead teacher who stays with them all year.',
    focus: ['Daily reading and storytelling', 'Hands-on mathematics', 'Science through gardening and play', 'Art, music and swimming every week'],
    subjects: ['English', 'Mathematics', 'Environmental Science', 'Hindi or Bengali', 'Art and Music', 'Physical Education'],
  },
  {
    id: 'middle', label: 'Middle', grades: 'Grades 6 to 8', age: 'Ages 11 to 13', img: 'kids',
    summary: 'Middle school introduces subject specialists, project weeks and the habit of working in teams, while keeping a mentor close by.',
    focus: ['Subject specialist teachers', 'Quarterly project weeks', 'Coding and design basics', 'Mentor groups of ten'],
    subjects: ['English', 'Mathematics', 'Integrated Science', 'Humanities', 'Computing', 'Languages', 'Visual Arts'],
  },
  {
    id: 'secondary', label: 'Secondary', grades: 'Grades 9 to 12', age: 'Ages 14 to 18', img: 'study',
    summary: 'Secondary students choose a pathway in Grade 11 and complete a capstone project, supported by university and career counselling from Grade 9.',
    focus: ['Science, Commerce and Humanities pathways', 'Capstone research project', 'University counselling', 'Leadership and service credits'],
    subjects: ['Physics', 'Chemistry', 'Biology', 'Economics', 'Literature', 'Computer Science', 'Psychology'],
  },
]

export const pillars = [
  { title: 'Core knowledge', text: 'Strong foundations in language, mathematics and science, taught with clear sequencing and frequent low-stakes practice.' },
  { title: 'Applied thinking', text: 'Every unit ends in a task that uses the knowledge: a model, an essay, a performance or a field study.' },
  { title: 'Personal growth', text: 'Mentoring, reflection journals and service teach students to know themselves and manage their time.' },
  { title: 'Global outlook', text: 'Languages, exchange visits and model assemblies prepare students for universities and workplaces anywhere.' },
]

export const pathways = [
  { key: 'stem', title: 'STEM', img: 'lab', text: 'Robotics, electronics, data and lab science share a single workshop. Students build, break, measure and explain.', points: ['Robotics league and hack nights', 'Six teaching laboratories', 'Annual science and design fair'] },
  { key: 'arts', title: 'Arts', img: 'art', text: 'Painting, ceramics, music, theatre and film are taught by working artists and shown to real audiences each term.', points: ['Open-door studios', 'Chamber choir and orchestra', 'Black-box theatre season'] },
  { key: 'sports', title: 'Sports', img: 'football', text: 'Twelve teams, a 400 m track and a covered court. Everyone plays, and everyone learns how to lead a warm-up.', points: ['Football, cricket, athletics, swimming', 'Qualified coaches', 'Inter-house and inter-school leagues'] },
  { key: 'extra', title: 'Clubs and leadership', img: 'group', text: 'More than sixty clubs, a student council with a real budget, and a capstone service project in the final year.', points: ['Debate, chess, eco and photography', 'Student council', 'Duke of Edinburgh-style award'] },
]

export const subjects = [
  { name: 'Mathematics', text: 'From number bonds to calculus, we teach problem-solving first and procedure second. Weekly puzzles keep curiosity alive.' },
  { name: 'Sciences', text: 'Physics, chemistry and biology are practical from the first lesson. Students keep lab notebooks and defend their findings aloud.' },
  { name: 'Languages and literature', text: 'English, Hindi, Bengali and French. Reading hour, creative writing studios and an annual literature festival.' },
  { name: 'Humanities', text: 'History, geography and economics taught through sources, maps and live debate about real local issues.' },
  { name: 'Computing', text: 'Programming, data and digital citizenship, from visual blocks in Grade 3 to Python projects in Grade 10.' },
]

export const gallery = [
  { id: 1, cat: 'Sports', img: 'football', title: 'Under-14 football final', span: 'md:col-span-7 aspect-[4/3]' },
  { id: 2, cat: 'Arts', img: 'art', title: 'Studio painting term show', span: 'md:col-span-5 aspect-[4/5]' },
  { id: 3, cat: 'Clubs', img: 'robotics', title: 'Robotics club build night', span: 'md:col-span-4 aspect-[4/5]' },
  { id: 4, cat: 'Events', img: 'music', title: 'Winter concert', span: 'md:col-span-8 aspect-[4/3]' },
  { id: 5, cat: 'Sports', img: 'track', title: 'Annual athletics meet', span: 'md:col-span-5 aspect-[4/5]' },
  { id: 6, cat: 'Clubs', img: 'group', title: 'Debate society practice', span: 'md:col-span-7 aspect-[4/3]' },
  { id: 7, cat: 'Events', img: 'campus', title: 'Founders Day on the lawn', span: 'md:col-span-6 aspect-[4/3]' },
  { id: 8, cat: 'Arts', img: 'library', title: 'Poetry reading in the library', span: 'md:col-span-6 aspect-[4/3]' },
]

export const clubs = ['Robotics', 'Debate', 'Chess', 'Chamber choir', 'Eco warriors', 'Photography', 'Model United Nations', 'Creative writing', 'Astronomy', 'Theatre']

export const events = [
  { date: '14 Nov 2026', title: 'Science and Design Fair', place: 'Main lawn and labs' },
  { date: '05 Dec 2026', title: 'Winter Concert', place: 'Black-box theatre' },
  { date: '23 Jan 2027', title: 'Inter-house Athletics Meet', place: 'AV1 track' },
  { date: '12 Feb 2027', title: 'Literature Festival', place: 'Library and courtyard' },
]

export const admissionSteps = [
  { title: 'Enquire', text: 'Send the short form below or call the admissions desk. We reply within two working days.', meta: 'Anytime' },
  { title: 'Visit the campus', text: 'Join an open day or book a private tour. Meet teachers, see classrooms and ask anything.', meta: 'Open day, 22 Nov 2026' },
  { title: 'Submit your application', text: 'Complete the application form with documents. There is no fee until a place is offered.', meta: 'By 15 Jan 2027' },
  { title: 'Learning conversation', text: 'Your child joins a friendly activity session and a short conversation. It is not an exam.', meta: '1 to 5 Feb 2027' },
  { title: 'Receive your offer', text: 'We send a written decision and, where relevant, details of scholarships.', meta: '20 Feb 2027' },
  { title: 'Enrol and settle in', text: 'Confirm your place, meet your mentor and join a welcome morning before term begins.', meta: 'By 15 Mar 2027' },
]

export const eligibility = [
  { stage: 'Grade 1', age: '6 years', note: 'Child should be comfortable with early reading and short group tasks.' },
  { stage: 'Grades 2 to 5', age: '7 to 10 years', note: 'Previous school report and a classroom observation session.' },
  { stage: 'Grades 6 to 8', age: '11 to 13 years', note: 'Reports from the last two years and a learning conversation.' },
  { stage: 'Grades 9 to 10', age: '14 to 15 years', note: 'Reports, subject conversation and a short writing task.' },
  { stage: 'Grades 11 to 12', age: '16 to 17 years', note: 'Grade 10 results and pathway interview. Limited seats.' },
]

export const documents = [
  'Birth certificate or age proof',
  'Last two years of school reports',
  'Transfer certificate (for Grade 2 and above)',
  'Two recent passport-size photographs',
  'Parent or guardian photo ID',
  'Address proof',
  'Vaccination record',
]

export const dates = [
  ['Applications open', '1 Nov 2026'],
  ['Open day', '22 Nov 2026'],
  ['Application deadline', '15 Jan 2027'],
  ['Learning conversations', '1 to 5 Feb 2027'],
  ['Offers sent', '20 Feb 2027'],
  ['Enrolment closes', '15 Mar 2027'],
  ['First day of term', '6 Apr 2027'],
]
