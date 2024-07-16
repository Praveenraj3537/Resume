import feature from '../../assets/projects_images/feature.png';
import c from '../../assets/projects_images/c.png';
import fashion from '../../assets/projects_images/fashion.png';
import face1 from '../../assets/projects_images/face1.png';
import cap from '../../assets/icons/cap.png';
import resume from '../../assets/icons/resume.png';
import platform from '../../assets/icons/platform.jpg';
import resnet from '../../assets/icons/resnet50.png';
import depthwise from '../../assets/icons/depthwise.png';
import alexnet from '../../assets/icons/alexnet.png';
import pose from '../../assets/projects_images/HumanPoseEstimation.PNG';

const data_projects = [
    {
        name: '2D Human Pose Estimation',
        image: pose,
        github_url: 'https://github.com/Praveenraj3537/CVwithML-21CST63/blob/main/HumanPoseEstimation.ipynb',
        category: ['python', 'ML/DL'],
        description: 'This project shows the coordinates of key body joints, such as the shoulders, elbows, knees, and hips, which can then be used to understand human actions and interactions. It uses the MoveNet model. ',
    },
    {
        name: 'Resume with ReactJS',
        image: resume,
        github_url: 'https://github.com/Praveenraj3537/Resume',
        category: ['react'],
        description: 'The project is based on ReactJS library. I have made use of react components to render them separately. All the relevant details required for the professional career is given here. The complete list of projects along with usage of technologies are also mentioned.',
    },
    {
        name: 'Depthwise Separable Convolution',
        image: depthwise,
        github_url: 'https://github.com/Praveenraj3537/CVwithML-21CST63/blob/main/Depthwise%20Separable%20Convolution.ipynb',
        category: ['python', 'ML/DL'],
        description: 'This project shows the deptwise separable convolution implementation. Here I have normal vs he-normalization method for initilization of filter for convoultion.Also I compared the normal Standard 2D convolution vs Deptwise Separable Convolution. ',
    },
    {
        name: 'ResNet50',
        image: resnet,
        github_url: 'https://github.com/Praveenraj3537/CVwithML-21CST63/blob/main/ResNet50%20from%20Scratch.ipynb',
        category: ['python', 'ML/DL'],
        description: 'This project implements the ResNet50 Architecture from scratch using flower dataset. Here the code is implemented as per the architecture.',
    },
    {
        name: 'AlexNet',
        image: alexnet,
        github_url: 'https://github.com/Praveenraj3537/CVwithML-21CST63/blob/main/AlexNet.ipynb',
        category: ['python', 'ML/DL'],
        description: 'This project implements the AlexNet from scratch taking own dataset. As per the original paper we have not used the GPU but kept the training for longer time to excuted plus we did run for few epochs to understand.',
    },

    {
        name: 'Coding Assessment Platform',
        image: cap,
        github_url: 'https://github.com/Praveenraj3537/cap-platform-backend',
        category: ['nestjs', 'angular'],
        description: 'This project uses Angular for frontend and NestJS for backend. I have made use of components to render respective components separately. Made use of routes to move different endpoints. API-GATEWAY is used to take request from frontend and enable microservices. Microservice will form exchanges and queues in rabbitmq and store respective details. Backend platform is made to handle request and response from frontend and API-GATEWAY. Postgres Database is used to store all the details.',
    },
    {
        name: 'Enterprise Platform',
        image: platform,
        github_url: 'https://github.com/Praveenraj3537/Enterprise_Platform',
        category: ['nestjs', 'angular'],
        description: 'This project uses Angular for frontend and NestJS for backend. I have made use of jsons to generate HTML files based on conditions. Made use of routes to move different endpoints. API-GATEWAY is used to take request from frontend and enable microservices. Microservice will form exchanges and queues in rabbitmq and store respective details. Backend platform is made to handle request and response from frontend and API-GATEWAY. Postgres Database is used to store all the details.',
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
        category: ['python', 'ML/DL'],
        description: 'The project is based on Machine Learning. I have made use of fashion MNSIT dataset for training and testing the images to predict. Made use of Kears library for sequential modeling of the data. Predictions are made on random apperals images.',
    },

]

export default data_projects;