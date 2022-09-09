import feature from '../../assets/projects_images/feature.png';
import c from '../../assets/projects_images/c.png';
import fashion from '../../assets/projects_images/fashion.png';
import face1 from '../../assets/projects_images/face1.png';
import cap from '../../assets/icons/cap.png';
import resume from '../../assets/icons/resume.png';
import platform from '../../assets/icons/platform.jpg';

const data_projects = [
  
    {
        name: 'Coding Assessment Platform',
        image: cap,
        github_url: 'https://github.com/Praveenraj3537/cap-platform-backend',
        category: ['nestjs','angular'],
        description: 'This project uses Angular for frontend and NestJS for backend. I have made use of components to render respective components separately. Made use of routes to move different endpoints. API-GATEWAY is used to take request from frontend and enable microservices. Microservice will form exchanges and queues in rabbitmq and store respective details. Backend platform is made to handle request and response from frontend and API-GATEWAY. Postgres Database is used to store all the details.',
    },
    {
        name: 'Enterprise Platform',
        image: platform,
        github_url: 'https://github.com/Praveenraj3537/Enterprise_Platform',
        category: ['nestjs','angular'],
        description: 'This project uses Angular for frontend and NestJS for backend. I have made use of jsons to generate HTML files based on conditions. Made use of routes to move different endpoints. API-GATEWAY is used to take request from frontend and enable microservices. Microservice will form exchanges and queues in rabbitmq and store respective details. Backend platform is made to handle request and response from frontend and API-GATEWAY. Postgres Database is used to store all the details.',
    },
    {
        name: 'Resume with ReactJS',
        image: resume,
        github_url: 'https://github.com/Praveenraj3537/Resume',
        category: ['react'],
        description: 'The project is based on ReactJS library. I have made use of react components to render them separately. All the relevant details required for the professional career is given here. The complete list of projects along with usage of technologies are also mentioned.',
    },
    {
        name: 'Face Detection With Bounding Box',
        image: feature,
        github_url: 'https://github.com/Praveenraj3537/FaceKeyPointDetectionWithBoundingBox',
        category: ['python'],
        description: 'The project is based on Python. I have made use of cv2 library for handling the image/video. Mediapipe library is used to detect face and point out the 6 landmarks on the face.',
    },
    {
        name: 'Face Detection With Features Point',
        image: face1,
        github_url: 'https://github.com/Praveenraj3537/FaceDetectionWithFeaturePoints',
        category: ['python'],
        description: 'The project is based on Python. I have made use of cv2 library for handling the image/video. Mediapipe library is used to detect face and pointing out all feature points of face.',
    },
    {
        name: 'Linked List Programs',
        image: c,
        github_url: 'https://github.com/Praveenraj3537/LinkedListPrograms',
        category: ['c'],
        description: 'This project consists of all the operation of linked list. It is shown with menu choices of operations to perfrom respective opeation.',
    },
    {
        name: 'Fashion MNSIT',
        image: fashion,
        github_url: 'https://github.com/Praveenraj3537/FashionMNSIT',
        category: ['python'],
        description: 'The project is based on Machine Learning. I have made use of fashion MNSIT dataset for training and testing the images to predict. Made use of Kears library for sequential modeling of the data. Predictions are made on random apperals images.',
    },
    
]

export default data_projects;