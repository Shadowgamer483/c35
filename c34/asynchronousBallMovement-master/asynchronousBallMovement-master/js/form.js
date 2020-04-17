class Form {
constructor(){}
display(){
    var title=createElement('h1')
title.html("car game")
title.position(100,50)
var input=createInput("name")
var button=createButton('nuke')
var greeting=createElement('h3')
input.position(200,200)
button.position(200,150)
button.mousePressed();
}

}