import LandingScreen from './components/landing';
import QuestionScreen from './components/question';
import ResultScreen from './components/result';

export const routes = [
    { path: '/', name: 'landingScreen', component: LandingScreen },
    { path: '/questions', name: 'questionScreen', component: QuestionScreen },
    { path: '/result', name: 'resultScreen', component: ResultScreen }]  
