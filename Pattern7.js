//     *    
//    * *   
//   *   *  
//  *     * 
// *********   

for(let i=0;i<=4;i++){
    let row=" ";
    for(let j=0;j<=4-i;j++){
        row+=" ";
    }
    for(let k=0;k<=2*i;k++){
        if(k===0 || k===2*i || i===4){
            row+="*";
        }else{
            row+=" ";
        }
    }
    console.log(row);
}