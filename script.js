
const wordCloud = document.getElementById('word-cloud');
const addWordButton = document.getElementById('add-word-button');
let wordCloudwords = ["Hello", "hii", "how", "what", "you", "yourself",
 "name", "victory", "food", "lovely", "beautiful", "written", "where",
  "who", "awesome","HUDI", "is" ,"a",  ,"peer-to-peer" ,"ecosystem", "that", "and ","the",
   "full" , "trading", "and", "before"];

addWordButton.addEventListener('click', () => {
    const newWord = document.getElementById('new-word-input').value;
    if (newWord) {
        const wordElement = document.createElement('snip');
        wordElement.className = 'word';
        wordElement.textContent = newWord;

        // Randomly set the font size of the word
        const fontSize = Math.floor(Math.random() * 50) ; // Random size between 16 and 45px
        wordElement.style.fontSize = fontSize + 'px';
        
        wordElement.style.marginTop = Math.floor(fontSize*40) + 'px';
        wordElement.style.marginLeft = Math.floor(fontSize*3) + 'px';

        wordElement.addEventListener('mouseover', () => {
            wordElement.style.transform = 'scale(1.2)';
            wordElement.style.color = '#ff6600';
        });
        wordElement.addEventListener('mouseout', () => {
            wordElement.style.transform = 'scale(1)';
            wordElement.style.color = '#000';
            
        });
        wordCloud.appendChild(wordElement);
        document.getElementById('new-word-input').value = '';
    }
});

for (let eachItem of wordCloudwords) {
    const wordElement = document.createElement('snip');
        wordElement.className = 'word';
        wordElement.textContent = eachItem;

        // Randomly set the font size of the word
        const fontSize = Math.floor(Math.random() * 50) ; // Random size between 16 and 45px
        wordElement.style.fontSize = fontSize + 'px';

        wordElement.style.marginTop = Math.floor(fontSize*40) + 'px';
        wordElement.style.marginLeft = Math.floor(fontSize*3) + 'px';
            console.log(fontSize)
        wordCloud.appendChild(wordElement);
        document.getElementById('new-word-input').value = '';
}