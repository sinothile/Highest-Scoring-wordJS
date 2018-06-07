describe("Score", function(){
    describe("Given an empty string", function(){
        it("should return 0", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe(0);
        });
    });

    describe("Given a word", function(){
        it("should return the word with highest score", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "ant";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('ant');
        });
    });

    describe("Given two words", function(){
        it("should return the word with highest score", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "my name";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('my');
        });
    });

    describe("Given three words", function(){
        it("should return the word with highest score", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "my name is";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('my');
        });
    });

    describe("Given two words with the same score", function(){
        it("should return the word which appears earliest", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "dad de";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('dad');
        });
    });

    describe("Given two words with the same score", function(){
        it("should return the word which appears earliest", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "de dad ";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('de');
        });
    });

    describe("Given two words with second word having highest score", function(){
        it("should return the word with highest score", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "we went";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('went');
        });
    });

    describe("Given an uppercase word", function(){
        it("should return the word in lowercase", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "WE";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('we');
        });
    });

    describe("Given an uppercase sentence", function(){
        it("should return the highest word in lowercase", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "WE NEED FOOD";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('food');
        });
    });

    describe("Given a sentence having lowercase and uppercase letters", function(){
        it("should return the highest word in lowercase", function(){
            //arrange
            let sut = new HighestScoringWord();
            let string = "We Need Money";
            //act
            let actual = sut.Score(string);
            //assert
            expect(actual).toBe('money');
        });
    });
    
});