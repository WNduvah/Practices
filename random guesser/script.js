const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value);

    if (e.key === 'Enter') {
        
        setInterval(() => {
            e.target.value = ''
        }, 10);

        pickRandom();
    }

    

});

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag=> tag.trim());

    tagsEl.innerHTML = '';
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function pickRandom(){
    const times = 30

    const interval = setInterval(() => {
        const randomGuess = pickGuess();

        highlight(randomGuess);

        setTimeout(() => {
            unHighlight(randomGuess);
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickGuess()

            highlight(randomTag);
            
        }, 100);
    }, times * 100);
}

function pickGuess(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag){
    tag.classList.add('highlight');
}
function unHighlight(tag){
    tag.classList.remove('highlight');
}