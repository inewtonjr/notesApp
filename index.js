function getNoteId() { //function to create key/value to store textElement.value content
    let noteObject = getExistingNotes()
    if(!noteObject) {
        return 1
        /* If Object: note doesn't exist, put value 1 */
    }

    const keysArray = Object.keys(noteObject);
    /* function will index all of the noteObject values into an array stored in keysArray */
    const numberKeys = keysArray.map((key)=>Number(key));
    /* Keys are mapped to numbers in function and stored to const numberKeys */
    console.log(numberKeys);
    //Prints out numberkeys and the contents in getExistingNotes()
    return Math.max(...numberKeys) + 1;
    //gets highest number in array and increase by 1 
}

function getExistingNotes() {
    let notes=localStorage.getItem('notes');
   /* gets object named notes from local storage
   Note: local storage can only store strings, which we titled 'notes'*/
    if (!notes) {
        return null;
        //Null is returned if no notes
    }
    return JSON.parse(notes)
    /* JSON.parse() turns object, notes, into an javascript object */
}