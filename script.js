var rhymeNumber = 0;
var fadeWait = 5000;
var question, answer;

$(function() {
	question = $('html');
	answer =$('#answerText');
	$.data(question, "fadeStyle","questionTransition");
	$.data(answer, "fadeStyle","answerTransition");
	fadeQuestion();
});

function fadeQuestion() {
    window.setTimeout(function () {	question.fade(); answer.fade();fadeAnswer();}, fadeWait);
}
function fadeAnswer() {
    window.setTimeout(function () { answer.fade(); fadeReset();}, fadeWait);
}
function fadeReset() {
    window.setTimeout(function () {	question.fade(); fadeQuestion(); showNext();}, fadeWait);
}
function showNext() {
    rhymeNumber += 1;
    fadeWait = 10000;
    setText('You invite people over for a trivia party','A guest guess fest');
}


function setText(questionInput, answerInput) {
	document.getElementById("answerText").innerHTML = answerInput;
	document.getElementById("questionText").innerHTML = questionInput;
	
}

$.fn.fade = function() {
	this.toggleClass($.data(this, "fadeStyle"));
}