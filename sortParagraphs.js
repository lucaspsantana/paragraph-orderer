function sortParagraphs(text) {
    let formatedText="";
    let separateParagraphs = text.split("\n");
    let ordenateParagraphs = separateParagraphs.sort();
    ordenateParagraphs.forEach(element => {
        formatedText = `${formatedText}\n${element}`;
    });

    return formatedText;
}
