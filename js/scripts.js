var translateSentence = function(sentenceInput){
	var vowels = "aeiou";
	var sentenceOut = "";
	var firstLetter;
	var tempWord;
	var secondLetter;
	sentenceInput = sentenceInput.toLowerCase();
	sentenceInput = sentenceInput.split(" ");
	for(var i=0; i < sentenceInput.length; i+=1)
	{
		firstLetter = sentenceInput[i].slice(0,1);
		if(vowels.search(firstLetter)>-1)
		{
			//console.log(sentenceInput[i] + " vowel!");
			tempWord = sentenceInput[i] + "ay";
		}
		else if(firstLetter != 'q'){
			//console.log(sentenceInput[i] + " consonant!");
			tempWord = sentenceInput[i].slice(1) + firstLetter + "ay";
		}
		else{
			secondLetter = sentenceInput[i].slice(1,2);
			if(secondLetter == 'u'){
				tempWord = sentenceInput[i].slice(2) + firstLetter + secondLetter +"ay";
			}
			else{
				tempWord = sentenceInput[i].slice(1) + firstLetter + "ay";
			}
		}
		sentenceOut = sentenceOut + tempWord;
		if(i < (sentenceInput.length - 1)){
			sentenceOut = sentenceOut + " ";
		}
	}
	//console.log(sentenceOut);
	//$("<p class = \"replaceArea\">Translation: " + sentenceOut + "</p>").replaceAll(".replaceArea");
	//$("#returnInfo").show();
	return sentenceOut;
};