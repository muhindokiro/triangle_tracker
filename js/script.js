function display(){
  var Sa = parseInt(document.getElementById("fvalue").value);
  var Sb = parseInt(document.getElementById("svalue").value);
  var Sc = parseInt(document.getElementById("tvalue").value);

  if (Sa+Sb<=Sc || Sa+Sc<=Sb || Sb+Sc<=Sa){
  document.getElementById("result").innerHTML="The values do NOT make a triangle."
  }
    else if (Sa === Sb && Sa === Sc && Sb === Sc) {
    document.getElementById("result").innerHTML="The values make an Equilateral triangle.";
    }
    else if (Sa !== Sb && Sa !== Sc && Sb !== Sc) {
    document.getElementById("result").innerHTML="The values make a Scalene triangle.";
    }
    else if(Sa === Sb || Sa === Sc || Sb === Sc) {
    document.getElementById("result").innerHTML="The values make an Isosceles triangle.";

    }
   else {

}
}
