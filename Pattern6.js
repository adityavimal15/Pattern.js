//      *  *  
//     *    *    
//    *      *      
//   *        *    

for(let i=0;i<=3;i++){
    let row=" ";
    for(let j=0;j<=3-i;j++){
        row+=" ";
    }
    for(let k=0;k<=1;k++){
        row+="*";
        for(let l=0;l<=2*i+1;l++){
            row+=" ";
        }
    }
    console.log(row);
}