function issueCard(stringName, numAge, numBooksCheckedOut = 0) {
    let card = {
        name: stringName,
        age: numAge,
        numBooksCheckedOut: numBooksCheckedOut,
        isChild: null
    }
    if(numAge >= 12) {
        card.isChild = false;
    } else {
        card.isChild = true;
    }
    return card;
}

function searchByAuthor(arrayCollection, stringAuthor)  {
    arrayResults = [];
    for(let i = 0; i < arrayCollection.length; i++) {
        if(arrayCollection[i].author === stringAuthor) {
            arrayResults.push(arrayCollection[i]);
        }
    }
    if(arrayResults.length === 0) {
        return "No book found for search criteria";
    }
    return arrayResults
}


module.exports = { 
    issueCard,
    searchByAuthor
};