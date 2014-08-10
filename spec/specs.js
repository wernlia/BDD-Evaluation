describe('Word tests', function() {
	it('Should return aay', function() {
		translateSentence("a").should.equal("aay");
	});
	it('Should return appleay', function(){
		translateSentence("apple").should.equal("appleay");
	});
	it('Should return ananabay', function(){
		translateSentence("banana").should.equal("ananabay");
	});
	it('Should return atcay', function(){
		translateSentence("CAT").should.equal("atcay");
	});
	it('Should return arkquay', function(){
		translateSentence("quark").should.equal("arkquay");
	});
	it('Should return wertyqay', function(){
		translateSentence("qwerty").should.equal("wertyqay");
	});
});

describe('Sentence tests', function(){
	it('Should return sentence 1', function(){
		translateSentence("This is a sentence").should.equal("histay isay aay entencesay");
	});
	it('Should return sentence 2', function(){
		translateSentence("The quick brown fox jumped over the lazy dog").should.equal("hetay ickquay rownbay oxfay umpedjay overay hetay azylay ogday");
	});
})