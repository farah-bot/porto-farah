import images from '../utils/importImages';

const projects = [
  {
    id: 1,
    name: 'BajetBijak',
description: 'Designed the user interface and experience for BajetBijak, a financial tracking app. Focused on creating an intuitive, user-friendly design for expense management, budgeting, and goal setting, using Figma for prototyping and Maze for user testing.',
    image: images['uiux.png'],
  },
  {
    id: 2,
    name: 'AIMS',
    description: 'Developed as part of a Software Engineering (PPL) course, AIMS is a hydroponic system monitoring platform. My responsibilities included ensuring seamless integration between the web application, database, and IoT devices.',
    image: images['web.png'],
  },
    {
    id: 3,
    name: 'IOT Aquascape',
    description: 'Collaborated with a faculty advisor to design an automated aquarium system, integrating sensors and actuators. Features remote control and real-time data via a mobile app for optimal aquatic conditions.',
    image: images['iot.jpg'],
  },

];

export default projects;
