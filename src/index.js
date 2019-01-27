import $ from 'jquery';
import './index.scss';

const avatarMarkup = `
  <div id="avatar">
    <div class="hair-base"></div>
    <div class="hair-top hair-top--left"></div>
    <div class="hair-top hair-top--right"></div>
    <div class="face show-animation">
      <div class="glasses">
        <div class="bar"></div>
      </div>
    </div>
    <div class="neck">
      <div class="neck__shadow"></div>
    </div>
    <div class="turtleneck"></div>
    <div class="shirt"></div>
  </div>
`;

const talkMarkup = `
<div id="talkbubble">
  <div class="talkbubble__text">Let's chat</div>
</div>
`;

const actionButtonMarkup = `
<div id="action-button-box">
  <div class="action-button">
    <a href="mailto:drewwforeman@gmail.com">
    <img src="https://www.iconsdb.com/icons/preview/white/browser-xxl.png" alt="website-logo" class="logo"/>
    </a>
  </div>
  <div class="action-button">
    <a href="">
    <img src="https://www.iconsdb.com/icons/preview/white/browser-xxl.png" alt="linkedin-logo" class="logo" />
    </a>
  </div>

  <div class="action-button">
    <a href="https://github.com/DrewForeman">
    <img src="https://www.iconsdb.com/icons/preview/white/github-6-xxl.png" alt="github-logo" class="logo" />
    </a>
  </div>
</div>
`;

document.body.innerHTML = `
  <div class='container'>${talkMarkup}${avatarMarkup}${actionButtonMarkup}</div>
`;

const look = () => {
  lookDown();
  setTimeout(lookAhead, 1000);
  setTimeout(talk, 1500);
}
const lookDown = () => $('#avatar').addClass('look-down');
const lookAhead = () => $('#avatar').addClass('looked-down');
const talk = () => $('#talkbubble').addClass('visible');

$("#action-button-box").on("mouseenter", look);
