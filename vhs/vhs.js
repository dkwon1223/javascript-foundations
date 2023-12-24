function createTape(stringTitle, booleanReadyToPlay = false) {
    let tape = {
        title: stringTitle,
        readyToPlay: booleanReadyToPlay
    };
    return tape;
}

function reset(objectTape) {
    objectTape.readyToPlay = true;
    return objectTape;
}

function createCollection(...tapeObject) {
    if(tapeObject.length === 0) {
        return "Your collection is empty.";
    } else {
        return tapeObject;
    }
}

function previewCollection(collection) {
    let preview = [];
    for(let i = 0; i < collection.length; i++) {
        preview.push(collection[i].title);
    }
    return preview;
}

module.exports = { 
    createTape,
    reset,
    createCollection,
    previewCollection
}

