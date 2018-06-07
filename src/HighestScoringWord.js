function HighestScoringWord() {
    this.Score = function (stringOfWords) {
        let words = stringOfWords.toLowerCase().split(' ');
        let highestScore = 0;
        let word = '';
        if(IsEmpty(stringOfWords))
        {
            return 0;
        }

        for (let i = 0; i < words.length; i++) {

            let highestScoringWord = words[i];
            let wordScore = 0;
            for (let j = 0; j < highestScoringWord.length; j++) {
                wordScore += (words[i].charCodeAt(j) - 96);
            }
            if (WordScoreIsGreater(wordScore,highestScore)) {
                highestScore = wordScore;
                word = highestScoringWord;
            }
        }
        return word;
    }

    let IsEmpty = function(stringOfWords)
    {
        return stringOfWords == "";
    }

    let  WordScoreIsGreater= function(wordScore,highestScore)
    {
       return wordScore > highestScore;
    }
}