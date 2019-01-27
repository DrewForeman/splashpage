import $ from 'jquery';
import './index.scss';
import emailImg from './img/email.png'
import githubImg from './img/github.png'
import linkedinImg from './img/linkedin.png'

const emailLogo = document.getElementById('emailLogo');
emailLogo.src = emailImg;

const githubLogo = document.getElementById('githubLogo');
githubLogo.src = githubImg;

const linkedinLogo = document.getElementById('linkedinLogo');
linkedinLogo.src = linkedinImg;

const look = () => {
  lookDown();
  setTimeout(lookAhead, 1000);
  setTimeout(talk, 1500);
}
const lookDown = () => $('#avatar').addClass('look-down');
const lookAhead = () => $('#avatar').addClass('looked-down');
const talk = () => {
  $('#talkbubble').addClass('visible');
  setTimeout(() => $('#talkbubble').removeClass('visible'), 4000)
}

// TODO: stop animations when look down is called

$("#action-button-box").on("mouseenter", look);
