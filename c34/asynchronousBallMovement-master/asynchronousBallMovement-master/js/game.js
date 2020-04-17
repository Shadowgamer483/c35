class Game{
constructor()
{}
getstate(){
    var referi=database.ref('gamestate');
    referi.on("value",function(data){
      gamestate=  data.val()
    
    }) 
}
update(state){
    database.ref('/').update({gamestate:state})
}
start(){
    if(gamestate===0){
        player=new Player();
        
    }
}


}