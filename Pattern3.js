for(let i=0;i<=5;i++){
    let row="";
    for(let j=0;j<=5-i;j++){
        row+=" ";
    }
    for(let k=0;k<=2*i;k++){
        row+="*";
    }
    console.log(row);
}