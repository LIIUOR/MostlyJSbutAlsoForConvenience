export class Item{
    constructor(type='grass',isPassable=true,id=1){
        this.type=type;
        this.isPassable=isPassable;
        this.content=null;
        this.id=id;
    }
}
export class Game{
    #matrix;
    static SURFACE_TYPE={
        GRASS:{type:'grass',isPassable:true,symbol:'.'},
        WALL:{type:'wall',isPassable:false,symbol:'|'},
        WATER:{type:'water',isPassable:false,symbol:'~'},
        LAVA:{type:'lava',isPassable:true,symbol:'!'}
    }
    constructor(size=20){
        this.size=size;
        this.#matrix=Array.from({length:size},()=>Array.from({length:size},()=>new Item()));
        this._generatedDefMap();
    }
    _generatedDefMap(){
        for(let r=0;r<this.size;r++){
            for(let c=0;c<this.size;c++){
                this.setSurface(r,c,Game.SURFACE_TYPE.GRASS);
            }
        }
    }
    isValidCoor(row,col){
        return row >= 0 && row < this.size && col >= 0 && col < this.size;
    }
    getItem(row,col){
        if(!this.isValidCoor(row,col)){console.log('Вы уперлись в границы карты')};
        return this.#matrix[row][col];
    }
    setSurface(row,col,surfaceType){
        if(!this.isValidCoor(row,col)){
            throw new Error(`Координаты [${row},${col}] выходят из-за границы`);
        }
        const item=this.#matrix[row][col];
        item.type=surfaceType.type;
        item.isPassable=surfaceType.isPassable;
        item.symbol=surfaceType.symbol;
    }
    loopForSetSurface(lrow,rrow,lcol,rcol,type){
        for(let r=lrow;r<rrow;r++){
            for(let c=lcol;c<rcol;c++){
                this.setSurface(r,c,type);
            }
        }
    }
    removeSurface(row,col){
        if(!this.isValidCoor(row,col)){throw new Error(`Координаты [${row},${col}] выходят из-за границ`)};
        this.setSurface(row,col,Game.SURFACE_TYPE.GRASS);
    }
    printMap(player){
        let output='';
        for(let r=0;r<this.size;r++){
            let rowStr='';
            for(let c=0;c<this.size;c++){
                if(player.x===c && player.y===r){
                    rowStr+='P';
                }else{
                    rowStr+=(this.#matrix[r][c].symbol)+' ';
                }
            }
            output+=rowStr+'\n';
        }
        return output;
    }
}