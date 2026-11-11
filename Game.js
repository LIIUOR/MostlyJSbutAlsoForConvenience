export class Item{
    constructor(type='grass',isPassable=true,id=1,color='\x1b[32m'){
        this.type=type;
        this.isPassable=isPassable;
        this.content=null;
        this.id=id;
        this.color = color;
    }
}
export class Game{
    #matrix;
    static SURFACE_TYPE={
        GRASS:{type:'grass',isPassable:true,symbol:'.',color: '\x1b[32m' },
        WALL:{type:'wall',isPassable:false,symbol:'|',color: '\x1b[90m' },
        WATER:{type:'water',isPassable:false,symbol:'~',color: '\x1b[96m' },
        LAVA:{type:'lava',isPassable:true,symbol:'!',color: '\x1b[91m'}
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
    getItem(row,col){
        if(row<0 || row>=this.size || col<0 || col>=this.size)return null;
        return this.#matrix[row][col];
    }
    setSurface(row,col,surfaceType){
        const item=this.#matrix[row][col];
        item.type=surfaceType.type;
        item.isPassable=surfaceType.isPassable;
        item.symbol=surfaceType.symbol;
        item.color=surfaceType.color;
    }
    loopForSetSurface(lrow,rrow,lcol,rcol,type){
        for(let r=lrow;r<=rrow;r++){
            for(let c=lcol;c<=rcol;c++){
                this.setSurface(r,c,type);
            }
        }
    }
    // removeSurface(row,col){
    //     if(!this.isValidCoor(row,col)){throw new Error(`Координаты [${row},${col}] выходят из-за границ`)};
    //     this.setSurface(row,col,Game.SURFACE_TYPE.GRASS);
    // }
    // printMap(player){
    //     let output='';
    //     for(let r=0;r<this.size;r++){
    //         let rowStr='';
    //         for(let c=0;c<this.size;c++){
    //             if(player.x===c && player.y===r){
    //                 rowStr+='P';
    //             }else{
    //                 rowStr+=(this.#matrix[r][c].symbol)+' ';
    //             }
    //         }
    //         output+=rowStr+'\n';
    //     }
    //     return output;
    // }
    renderToString(player){
        const RESET = '\x1b[0m';
        const PLAYER_COLOR = '\x1b[93m';
        let output='';
        for(let r=0;r<this.size;r++){
            let rowStr='';
            for(let c=0;c<this.size;c++){
                if(player.x===c && player.y===r){
                    //rowStr+='P';
                    rowStr+=`${PLAYER_COLOR} P${RESET}`;
                }else{
                    const item=this.#matrix[r][c];
                    rowStr+=`${item.color}${item.symbol}${RESET}`;
                    //rowStr+=this.#matrix[r][c].symbol+' ';
                }
            }
            output+=rowStr+'\n';
        }
        return output;
    }
}