function toggle(targetid){

    if(targetid == "all")
    {
        var showItems = new Array('hotel1','hotel2','hotel3','bb1','bb2','bb3','motel1','motel2','lodge1','lodge2');
    }
    else if(targetid == "hotels")
    {
    	var showItems = new Array('hotel1','hotel2','hotel3');
        var hideItems = new Array('bb1','bb2','bb3','motel1','motel2','lodge1','lodge2');
    }
    else if(targetid == "motels")
    {
        var showItems = new Array('motel1','motel2');//if there is no 'bb2',this won't work
        var hideItems = new Array('hotel1','hotel2','hotel3','bb1','bb2','bb3','lodge1','lodge2');	
    }
    else if(targetid == "lodges")
    {
        var showItems = new Array('lodge1','lodge2' );//if there is no 'bb2',this won't work
        var hideItems = new Array('hotel1','hotel2','hotel3','bb1','bb2','bb3','motel1','motel2');  
    }
    else
    {
    	var showItems = new Array('bb1','bb2','bb3');//if there is no 'bb2',this won't work
        var hideItems = new Array('hotel1','hotel2','hotel3','motel1','motel2','lodge1','lodge2');	
    }

    for(var key of showItems){
	    if (document.getElementById){
	        target=document.getElementById(key);
	        target.style.display="block";
	    }	
    }
    
    for(var key of hideItems)
    if (document.getElementById){
        target=document.getElementById(key);
        target.style.display="none";
    }

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function checkSubmit()
{
    if(false == nameCheck())
    {
        alert("the name should include at least 3 letters");
        return;
    }
    else if(false == SurnameCheck())
    {
        alert("the surname should include at least 5 letters");
        return;    
    }
    else if(false == EmailCheck())
    {
        alert("incorrect email");
        return;    
    }
    else if(false == agreeBoxCheck())
    {
        alert("please agree with the term of service ");
    }
    else 
    {
        alert("submit success");
    }    

 }

function nameCheck()
{
    var values = document.getElementById("name").value.length;
    
    if(values<3)
    {
        return false;
    }
    else
    {
        return true;    
    }
    return true;
 }

 function SurnameCheck()
{
    var values = document.getElementById("surname").value.length;
    if(values<5)
    {
        //alert("the name should include more than 2 letters");
        return false;
    }
    else
    {
        //alert("ok");
        return true;    
    }
    return true;
 }

 function agreeBoxCheck()
{
    if(document.getElementById("checkboxID").checked)
    {
         return true;
    }
    else
    {
         return false;
    }
    
}

function show()
{
    var values = document.getElementById("age").value;
    if(values<0||values>120||values=="")
    {
    alert("xxxx");
    return;
    }else
    {
    alert("xxxx");
    }
 }

function EmailCheck() 
{ 
    var email = document.getElementById("email").value; 
   
    if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) 
    { 
       
        document.getElementById("email").focus(); 
        return false; 
    } 
    return true; 
} 

function checkMobile(s) 
{ 
    var regu = /^[1][0-9][0-9]{9}$/; 
    var re = new RegExp(regu); 
    
    if (re.test(s)) 
    { 
        return true; 
    } 
    else 
    { 
        return false; 
    } 
} 
