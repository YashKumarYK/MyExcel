/* for the column number and row number*/
$(document).ready(function(){
    let cellContainer = $(".input-cell-container");

    for(let i=1;i<=100;i++){

        let ans = "";
        let n = i;
        while(n>0){
            let rem = n%26;
            if(rem==0){
                ans = "Z" + ans;
                n = Math.floor(n/26) -1;
            }else{
                ans = String.fromCharCode(rem-1+65) + ans;
                n = Math.floor(n/26);
            }
        }
        console.log(ans);
        
        let column = $(`<div class="col-name colId-${i}" id="colCod-${ans}" data ="${ans}">${ans}</div>`);
        $(".column-name-container").append(column);

        let row = $(`<div class = "row-name" id="rowId-${i}">${i}</div>`);
        $(".row-name-container").append(row); 
    }
})

/* For the input cells*/
for(let i=1;i<=100;i++){
    let row = $(`<div class="cell-row"></div>`);
    for(let j=1; j<=100;j++){
        let colCode = $(`.colId-${j}`).attr("data");
        let column = $(`<div class="input-cell" contenteditable="true" id="row-${i}-col-${j}" data = "code-${colCode}"></div>`);
        row.append(column);
    }
    $(".input-cell-container").append(row);
}