function fibonacciGenerator (n) {
        let output=[];
        if (n===1){
            output=[0];
            
        }
        
        else if (n===2){
            output=[0,1];
            
        }
        
        else{
            output=[0,1];
            output.push(output[0]+output[1]);
        }
            if(n===output.length){
                
            }
            else{
                for(var i=2; i<n; i++){
                output.push(output[output.length-2]+output[output.length-1]);
                }
                
            }
            return output;
        
    }

    console.log(fibonacciGenerator(15));