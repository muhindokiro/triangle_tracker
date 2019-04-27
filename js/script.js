function display(){
  var Sa = parseInt(document.getElementById("fno.").value);
  var Sb = parseInt(document.getElementById("sno.").value);
  var Sc = parseInt(document.getElementById("tno.").value);

  if (Sa+Sb<=Sc || Sa+Sc<=Sb || Sb+Sc<=Sa){
  document.getElementById("result").innerHTML="Do NOT Form a triangle."
  }
    else if (Sa === Sb && Sa === Sc && Sb === Sc) {
    document.getElementById("result").innerHTML="Form an Equilateral triangle.";
    }
    else if (Sa !== Sb && Sa !== Sc && Sb !== Sc) {
    document.getElementById("result").innerHTML="Form a Scalene triangle.";
    }
    else if(Sa === Sb || Sa === Sc || Sb === Sc) {
    document.getElementById("result").innerHTML="Form an Isosceles triangle.";

    }
   else {

}
}
