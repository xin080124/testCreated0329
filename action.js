window.onload = initPage;

function initPage()
{
    var a='11160'; 
    alert(parseInt(a,2)); //将111做为2进制来转换,忽略60(不符合二进制),从左至右只将符合二进制数的进行转换 
    alert(parseInt(a,16)); //将所有的都进行转换 

     alert("this is initPage");
     document.getElementById("confirm").onclick = function(evt){alert("the confirm button pressed!");};
     document.getElementById("damount").onblur = blurBamt;
}

function blurBamt()
{
   document.getElementById("damount").className = "ErrFld FontWhite FontYellow";
   alert("THIS is blur bamt !!!".toLowerCase());
   document.getElementById("damount").value = document.getElementById("damount").className;
   var a = 234;
   alert(parseInt(a,10).toString(16).toUpperCase()); //将A转换为10进制,然后再转换成16进制 同样也可以是其它进制 
}
