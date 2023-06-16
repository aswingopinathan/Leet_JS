const prime = function(limit){
    let arr1 = []
    let c=0;
    for(let i=2; i<limit; i++){
        for(let j=2; j<10; j++){
            if(i%j === 0){
               c= 1
                break
            }else{
                arr1.push(i)
            }
        }
        if(c==0){
            if(i>2){

                console.log(i);
            }
        }
    }
}

prime(50)