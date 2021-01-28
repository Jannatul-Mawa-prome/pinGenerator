function disable(){
    document.getElementById('calcInput').value='';
}

function decrease(){
    var gpin = document.getElementById('calcInput').value;
    var newvalue = gpin.substr(0,gpin.length-1);
    console.log(newvalue);
    document.getElementById('calcInput').value=newvalue;

}

function genaratePin(){
    var  num = 3.234234;
    var randomNum = Math.random(num) * 9999;
    var roundNum = Math.round(randomNum);
    console.log(roundNum);
    document.getElementById('genarateInput').value=roundNum;
    var notifyShow = document.getElementById('notifyShow');
    notifyShow.style.display='none';
    var notifyHide = document.getElementById('notifyHide');
    notifyHide.style.display='none';

}

function calcNum(val){

    document.getElementById('calcInput').value+=val;
}

function pinMatch(){
    const gPin = document.getElementById('genarateInput').value;
    const sPin = document.getElementById('calcInput').value;

    if(gPin == sPin){
       var show = document.getElementById('notifyShow');
       show.style.display="block";
       document.getElementById('generateBtn').disabled=true;
    }
    else{
        var show = document.getElementById('notifyHide');
        show.style.display="block";
    }
    document.getElementById('genarateInput').value='';
    document.getElementById('calcInput').value='';
}