const nodes = document.querySelectorAll('.question');
const questions = [];

for (let i = 0; i < nodes.length; i++) {
    const q = {
        id: i + 1,
        block: nodes[i],
        inquiry: nodes[i].querySelector('h2'),
        arrow: nodes[i].querySelector('img'),
        answer: nodes[i].querySelector('p'),
        audio: nodes[i].querySelector('audio'),
        clicked: false
    };
    questions.push(q);
}

function setDefault(q) {
    q.clicked = false;
    q.inquiry.style.fontWeight = '';
    q.arrow.style.transform = '';
    q.answer.style.visibility = '';
    q.answer.style.position = '';
    q.answer.style.top = '';
}

function newStates(q) {
    q.clicked = true;
    q.inquiry.style.fontWeight = 'bold';
    q.arrow.style.transform = 'rotateZ(180deg)';
    q.answer.style.visibility = 'visible';
    q.answer.style.position = 'relative';
    q.answer.style.top = '0';
    q.audio.play();
}

function resetStates(q) {
    for (let i = 0; i < questions.length; i++) {
        if (q.id !== questions[i].id) setDefault(questions[i]);
    }
}

function handleEvent(q) {
    if (!q.clicked) newStates(q);
    else setDefault(q);
    resetStates(q);
}

questions.forEach(q => {
    q.block.addEventListener('click', () => {
        handleEvent(q);
    });
});






