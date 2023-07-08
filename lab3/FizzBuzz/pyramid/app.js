let listenToMusic = confirm("Do you want to listen to music?"); 
let readTheLyrics = confirm("Do you also want to read the lyrics?") 
if(listenToMusic == true) { 
	//if the user wants to listen to music
	if(readTheLyrics==true) { 
		//if the user wants to read the lyrics
		console.log("Excellent");
	} 
} else { 
	//if the user does not want to listen to music 
	console.log("You'll be Bored!"); 
} 
