function sortParagraphs(text) {
    let formatedText="";
    let separateParagraphs = text.split("\n");
    let ordenateParagraphs = separateParagraphs.sort((a, b) => a.localeCompare(b));
    ordenateParagraphs.forEach(element => {
        formatedText = `${formatedText}\n${element}`;
    });

    return formatedText;
}
