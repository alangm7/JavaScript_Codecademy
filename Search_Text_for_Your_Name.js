
var text = "Hola hi bye goodbye lalalal my name is alan and my lastname us garcia but my name is alan dont forget this alan";
var myName = "Alan";
var hits = [];

for(var i=0;i<text.length;i++) {

if("A"===text[i]) {

    for(var j = i; j<i+myName.length;j++){
        hits.push(text[j])
    }
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
}
