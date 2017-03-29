/*
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
*/

var slideIndex = 1;
showSlides(slideIndex);

//var slideIndex = 0;
//showSlides();


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//manual mode

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


//auto slideshow
/*
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

function setNoVisibility(){  
   document.getElementById("bjkgan").style.visibility = "hidden";  
   document.getElementById("jqxsbma").style.visibility = "hidden";  
   document.getElementById("sbjqxsbxx").style.visibility = "hidden";  
   document.getElementById("jqxsbxx").style.visibility = "hidden";  
   document.getElementById("sbjqxsbxxma").style.visibility = "hidden";   
}  
  
function setVisibility(){  
   document.getElementById("bjkgan").style.visibility = "visible";  
   document.getElementById("jqxsbma").style.visibility = "visible";  
   document.getElementById("sbjqxsbxx").style.visibility = "visible";  
   document.getElementById("jqxsbxx").style.visibility = "visible";  
   document.getElementById("sbjqxsbxxma").style.visibility = "visible";      
}  
