app.doScript(function () {
	var myStories = app.activeDocument.stories.everyItem().getElements();
	for (i = myStories.length - 1; i >= 0; i--){
	var myTextFrames = myStories[i].textContainers;
	for (j = myTextFrames.length - 1; j >= 0; j--) {
	if ((myTextFrames[j].contents == "") || (myTextFrames[j].words.length == 0)){
	myTextFrames[j].remove();
	}
	}
	}
}, ScriptLanguage.JAVASCRIPT, undefined, UndoModes.ENTIRE_SCRIPT);