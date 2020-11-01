import Check from './Check.js';
import Video from './Video.js';
import Input from './Input.js';
import Form from './Form.js';
import Utils from './Utils.js';

const A_HUNDRED_MEGA_BYTES = 104857600;

const video = Video.$video;
const iFrom = Input.$iFrom;
const iTo = Input.$iTo;
const iFile = Input.$iFile;
const iSubmit = Input.$iSubmit;

const errorMsg = document.querySelector('.message');
const form = Form.$form;

function checkFS(e) {
    const canCut = Form.checkFS(iFile, errorMsg, A_HUNDRED_MEGA_BYTES);

    if(!canCut) {
        e.preventDefault();
    }
}

function readFile(e) {
    form.removeEventListener('submit', checkFS);
    form.addEventListener('submit', checkFS);
    Input.readFile(e, video, errorMsg, A_HUNDRED_MEGA_BYTES);
}

function formatTime(e) { 
    Input.formatTime(e, video, Utils)
}

window.addEventListener("DOMContentLoaded", () => {
    if(Check.errorOnTruncate(errorMsg)) {
        return;
    }

    if(Check.successfulOnTruncate(video)) {
        Input.insertVideo(video.src);
        iSubmit.removeAttribute('disabled');
    }
});

video.addEventListener('timeupdate', () => Video.timeupdate(iFrom, Utils));
video.addEventListener('loadeddata', () => Video.loadeddata(iTo, Utils));

iFrom.addEventListener("change", formatTime);
iTo.addEventListener("change", formatTime);
iFile.addEventListener('change', readFile);

form.addEventListener('submit', checkFS);
