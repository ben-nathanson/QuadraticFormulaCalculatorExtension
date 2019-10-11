// Verify basic input sanity
// Note that this does not yet account for max int, min int etc.
function verifyInputs(a,b,c) {
    if (arguments.length < 3) return false;
    for (arg in arguments) {
        if (arg.length < 1) {
          alert("Error: Invalid inputs.");
          clear();
          return false;
        }
        if (arg == Infinity) {
            alert("Error: Infinity is not a number.");
            clear();
            return false;
        }
        if (isNaN(arg)) {
            alert("Error: Not a number.");
            clear();
            return false;
        }
    }
    if (a == 0) {
        alert("Error: One cannot divide by 0.");
        clear();
        return false;
    }

    return true;
}

// calculate the roots
function displayRoots () {
    var a = parseFloat($("#a").val());
    var b = parseFloat($("#b").val());
    var c = parseFloat($("#c").val());
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert("Error: Invalid inputs.");
      clear();
      return;
    }
    var result = null;
    if(verifyInputs(a,b,c)) {
        result = calculateRoots(a,b,c);
        $("#virtualmessage p").css("color", "#333");
        var r1 = result[0];
        var r2 = result[1];
        var alpha = result[2];
        var beta = result[3];
        var virtual = result[4];
        $("#result1").val(r1);
        $("#result2").val(r2);
        $("#alpha").val(alpha);
        $("#beta").val(beta);
        if (virtual) $("#virtualmessage p").css("color", "whitesmoke");
    }
}


/*Caculates the roots of a 2nd degree polynomial.
Inputs: doubles a, b, and c as parameters.
Returns: an array composed of:
[first root, second root, alpha, beta, virtual] */
function calculateRoots(a, b, c) {
    var delta = Math.pow(b, 2) - (4 * a * c);
    var deltaRoot = Math.sqrt(Math.abs(delta));
    var alpha = (-b) * (1 / (2 * a));
    var beta = (deltaRoot) * (1 / (2 * a));
    var r1 = ((-b) + deltaRoot) * (1 / (2 * a));
    var r2 = ((-b) - deltaRoot) * (1 / (2 * a));
    var virtual = false;
    if (delta < 0) virtual = true;
    return [r1, r2, alpha, beta, virtual];
    }


// reset fields back to their defaults
function clear() {
	$('input[type=number]').each(function () {
            $(this).val("");
	})
    $("#virtualmessage p").css("color", "#333");
    $("#a").focus();
}



// main function
$(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            displayRoots();
        }
    })

    $("#a").onchange = function (){
             displayRoots();
    };

	$("#a").focus();

	$('#calculate').click(function() {
        displayRoots();
    })

	$('#clear').click(function () {
		clear();
	})
});
