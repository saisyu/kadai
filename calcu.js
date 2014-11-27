console.logv = function(msg){
    var li = document.createElement('li');
    li.textContent = msg;
    var lo = document.getElementById('lo');
    lo.appendChild(li);
}

console.clear = function(){
        var cl = document.getElementById('lo');
        while(cl.firstChild){
        cl.removeChild(cl.firstChild);
        }
}


var ajax;
var total = 0;
var inputA = "";
var inputB = "";
var ca = "+";
var sw = 0;
var sw2 = 0;
var a;
var c = "=";
var d;

function num(num){
  if(sw == 0 || sw == 2){
   if(sw ==0 && num != "."){
    inputA += num;
   }else if(sw == 2 && num !="."){
                inputA =""
                inputA += num;
                sw = 0;
   }else if(sw !=2 && num == "." && sw2 == 0 && inputA != ""){
                inputA += num;
                sw2 = 1;
    }
     var x = document.getElementById("q").textContent = inputA;
}else if(sw == 1){
  if(num != "."){
        inputB += num;
  }else if(num == "." && sw2 == 0 && inputB != ""){
                inputB += num;
                sw2 = 1;
                }
          var y = document.getElementById("q").textContent = inputB;
  }
}

function calc(kigou){
              if(sw == 0 || sw == 2){
if( !inputA == "" && kigou != "="){
                      a = inputA;
                        ca = kigou;
 if(kigou == "t"){
    d = "+";
    }else if(kigou == "m"){
    d = "-";
    }else if(kigou == "w"){
    d = "÷";
    }else if(kigou == "x"){
    d = "×";
    }
    inputA = "";
    sw2 = 0;
    sw = 1;
    var z = document.getElementById("q").textContent = total;
    }
  }else if(kigou == "=" && sw == 1 && !inputB == ""){
    b = inputB;
    sw = 0;
    sw2 = 0;
    inputA = "";
    inputB = "";
    button();
  }
}
function button(){
 ajax = new XMLHttpRequest();
      ajax.onload = function(){
          var x = document.getElementById("q");
              x.textContent = ajax.responseText;
            console.logv(a+d+b+c+ajax.responseText);
            inputA = ajax.responseText;
sw = 2; 
}
                       ajax.onerror = function(e){
                           }
                     var url = "servlets/servlet/count?a="+a+"&b="+b+"&ca="+ca;
                                 ajax.open("GET",url,false);
                                 ajax.send();
}

function clean(){
         sw = 0;
    sw2 = 0;
         inputA = "";
         inputB = "";
         ca = "";
    console.clear();
   var z = document.getElementById("q").textContent = total;
}

