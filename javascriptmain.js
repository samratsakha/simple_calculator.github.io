var x=0;
    var y=0;
    var z=0;
    var snd=document.getElementById("aud");
    var sndd=document.getElementById("audd");
    function addition(){
        x=(document.getElementById("int1").value);
        y=(document.getElementById("int2").value);
        if(x=="" || y==""){
            sndd.play();
            alert("Please enter a number");
            document.getElementById("int1").style.border="solid 4px red";
            document.getElementById("int2").style.border="solid 4px red";
        }
        else{
             document.getElementById("int1").style.border="";
             document.getElementById("int2").style.border="";
             z=Number(x)+Number(y);
             document.getElementById("result").innerHTML=z;
             snd.play();
        }
    }
    function subtraction(){
        x=(document.getElementById("int1").value);
        y=(document.getElementById("int2").value);
        if(x=="" || y==""){
            sndd.play();
            alert("Please enter a number");
            document.getElementById("int1").style.border="solid 4px red";
            document.getElementById("int2").style.border="solid 4px red";
        }
        else{
             document.getElementById("int1").style.border="";
             document.getElementById("int2").style.border="";
             z=Number(x)-Number(y);
             document.getElementById("result").innerHTML=z;
             snd.play();
        }
    }
    function multiplication(){
        x=(document.getElementById("int1").value);
        y=(document.getElementById("int2").value);
        if(x=="" || y==""){
            sndd.play();
            alert("Please enter a number");
            document.getElementById("int1").style.border="solid 4px red";
            document.getElementById("int2").style.border="solid 4px red";
        }
        else{
             document.getElementById("int1").style.border="";
             document.getElementById("int2").style.border="";
             z=Number(x)*Number(y);
             document.getElementById("result").innerHTML=z;
             snd.play();
        }
    }
    function division(){
        x=(document.getElementById("int1").value);
        y=(document.getElementById("int2").value);
        if(x=="" || y==""){
            sndd.play();
            alert("Please enter a number");
            document.getElementById("int1").style.border="solid 4px red";
            document.getElementById("int2").style.border="solid 4px red";
        }
        else{
             document.getElementById("int1").style.border="";
             document.getElementById("int2").style.border="";
             z=Number(x)/Number(y);
             z=z.toFixed(6);
             document.getElementById("result").innerHTML=z;
             snd.play();
        }
    }