$(document).ready(function() {
$("button.submit").click(function(){
  var length1 = parseInt($("#sidelength1").val());
  var length2 = parseInt($("#sidelength2").val());
  var length3 = parseInt($("#sidelength3").val());

  var lenMax = Math.max(length1,length2,length3);
  var lenMin = Math.min(length1,length2,length3);
  var lenMed = (length1 + length2 + length3)-lenMin-lenMax;

  if (length1 && length2 && length3) {
    if (lenMax === lenMin) {
      $("#triangleOutput").text("You have an equalateral triangle.");
  
    }
    else if (lenMed === lenMax || lenMin === lenMed) {
      $("#triangleOutput").text("You hav an isosceles triangle.");

  }
    else if (lenMax >= (lenMin + lenMed)){
      $("#triangleOutput").text("You don't a triangle.");

  }
      else {
        $("#triangleOutput").text("You have a scalen triangle.");

    }
      }
    else {
        alert("Please enter all side length with an positive integer.");
      };
  });
});
