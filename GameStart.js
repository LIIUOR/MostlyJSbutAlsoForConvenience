import { Player } from "./Player.js";
import { Game } from "./Game.js";
import { Item } from "./Game.js";
const map=new Game(20);
const player=new Player(10,10);
function drawGame(){
    console.clear();
    console.log(map.printMap(player));
}
import readline from 'readline';
readline.emitKeypressEvents(process.stdin);
if(process.stdin.isTTY){
    process.stdin.setRawMode(true);
}
drawGame();

process.stdin.on('keypress',(str,key)=>{
    if(key.ctrl && key.name==='c'){process.exit();}
    let dx=0;
    let dy=0;
    switch(key.name){
        case 'up': dy=-1;break;
        case 'down': dy=1;break;
        case 'left': dx=-1;break;
        case 'right': dx=1;break;
        default: return;
    }
    const result=player.move(dx,dy,map);
    drawGame(result.message);
})