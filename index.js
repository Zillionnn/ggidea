function generateIdea() {
    let result = '';
    console.log(gametypes);
    for (let key in gametypes) {
        let randomIdx = Math.floor(Math.random() * gametypes[key].length);
        result += gametypes[key][randomIdx] + ', '
    }
    document.getElementById("idea_text").innerHTML = result;
}