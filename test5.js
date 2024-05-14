function test5(words, text) {
    let wordList = words.split(', ');
    
    for (let word of wordList) {
        let length = word.length;
        for (let toChange of text.split(' ')) {
            if (toChange === '*'.repeat(length)) {
                text = text.replace(toChange, word);
            }
        }
    }
    console.log(text);
}

test5('great, learning', 'softuni is ***** place for ******** new programming languages');