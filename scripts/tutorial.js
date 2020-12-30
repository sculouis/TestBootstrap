    
//*這裡定義函式1加到10
function sum1to10(){
    var result = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
    $("#result1").text(result);
    return result;
}

//這裡定義函式1加到10，採用傳入輸入參數
function sum1to10ByArgs(start,end){
    var result = 0;
    for (var i = start;i <= end;i++){
        result = result + 1;
    }
    return result;
}

//用if ... else判斷傳入的變數是:1或2或3
function checkNumber(no){
    if (no == 1){
        console.log("傳入1");
    }else if (no == 2){
        console.log("傳入2");
    }else if (no == 3){
        console.log("傳入3");
    }else {
        console.log("傳入的值超出範圍:1~3");
    }
}

//改用switch ... case判斷傳入的變數是:1或2或3
function checkNumberBySwitch(no){
    switch (no){
    case 1:
        console.log("傳入1");
        break;
    case 2:
        console.log("傳入2");
        break;
    case 3:
        console.log("傳入3");
        break;
        default:
                console.log("傳入的值超出範圍:1~3");
        }
}



//呼叫函式
// var call = sum1to10();

// console.log(call);