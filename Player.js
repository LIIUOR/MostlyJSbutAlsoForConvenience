export class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dirX=x;
        this.dirY=y;
        this.lastKeyTime=0;
    }
    setDirection(dx,dy){
        this.dirX=dx;
        this.dirY=dy;
        this.lastKeyTime=Date.now();
    }
    update(gameMap){
        if(Date.now()-this.lastKeyTime>75){
            this.dirX=0;
            this.dirY=0;
            return;
        }
        if(this.dirX===0 && this.dirY===0)return;
        const nextX=this.x+this.dirX;
        const nextY=this.y+this.dirY;

        const targetItem=gameMap.getItem(nextY,nextX);
        if(targetItem && targetItem.isPassable){
            this.x=nextX;
            this.y=nextY;
        }
    }
}