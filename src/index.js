import $ from 'jquery';
import './index.scss';
import linkedinImg from './img/linkedin.png'

const look = () => {
  lookDown();
  setTimeout(lookAhead, 1000);
  setTimeout(talk, 1500);
}
const lookDown = () => $('#avatar').addClass('look-down');
const lookAhead = () => $('#avatar').addClass('looked-down');
const talk = () => $('#talkbubble').addClass('visible');

$("#action-button-box").on("mouseenter", look);
