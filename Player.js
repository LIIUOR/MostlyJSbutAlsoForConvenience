export class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    move(dx,dy,gameMap){
        const targetX=this.x+dx;
        const targetY=this.y+dy;
        const targetItem=gameMap.getItem(targetY,targetX);
        if (!targetItem) {
            return { success: false, message: "Вы упёрлись в край карты!" };
        }
        if(targetItem && targetItem.isPassable){
            this.x=targetX;
            this.y=targetY;
            return{success:true,message:`Переместился на ${targetItem.type}`};
        }
        return{success:false,message:`Ход заблокирован! Там ${targetItem ? targetItem.type : 'граница карты'}`};
    }
}