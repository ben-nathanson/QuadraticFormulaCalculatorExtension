$(function() {
  $('#calculate').click(function(){
    var a = parseFloat($("#a").val());
    var b = parseFloat($("#b").val());
    var c = parseFloat($("#c").val());
    var delta = Math.pow(b, 2) - (4 * a * c);
    if (delta <= 0 || isNaN(delta)) {
      document.getElementById("result1").value = "Non-real";
      document.getElementById("result2").value = "Non-real";
    } else {
      var deltaRoot = Math.sqrt(delta);
      var r1 = ((-b) + delta) * (1 / (2 * a));
      var r2 = ((-b) - delta) * (1 / (2 * a));
      document.getElementById("result1").value = r1;
      document.getElementById("result2").value = r2;
    }
  })
});
