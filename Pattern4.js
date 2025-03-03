for(let i=5;i>=0;i--){
    let row="";
    for(let k=0;k<=5-i;k++){
        row+=" ";
    }
    for(let j=0;j<=2*i;j++){
        row+="*";
    }
    console.log(row);
}