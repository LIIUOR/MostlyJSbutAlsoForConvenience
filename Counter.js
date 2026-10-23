function createCounter(){
    let value=0;
    return{
        increment(){
            value++;
        },
        decrement(){
            value--;
        },
        reset(){
            value=0;
        },
        getValue(){
            return value;
        }
    };
}
module.exports = createCounter;