import readline from "readline";
import { Player } from "./Player.js";
import { Game } from "./Game.js";
import { Item } from "./Game.js";
import { clear } from "console";
const map=new Game(20);
const player=new Player(10,10);
map.loopForSetSurface(1,1,3,4,Game.SURFACE_TYPE.WALL)
map.loopForSetSurface(2,3,3,4,Game.SURFACE_TYPE.WATER)
map.loopForSetSurface(4,4,3,4,Game.SURFACE_TYPE.LAVA)
readline.emitKeypressEvents(process.stdin);
if(process.stdin.isTTY){
    process.stdin.setRawMode(true);
}
console.clear();
process.stdout.write('\x1b[?25l');
process.stdin.on('keypress',(str,key)=>{
    if(key.ctrl && key.name==='c'){
        process.exit();
    }
    switch(key.name){
        case 'up': player.setDirection(0,-1);break;
        case 'down': player.setDirection(0,1);break;
        case 'left': player.setDirection(-1,0);break;
        case 'right': player.setDirection(1,0);break;
    }
});
const TICK_RATE=60;
setInterval(()=>{
    player.update(map);
    readline.cursorTo(process.stdout, 0, 0);
    const currentItem=map.getItem(player.y,player.x);
    console.log(map.renderToString(player));
},TICK_RATE);