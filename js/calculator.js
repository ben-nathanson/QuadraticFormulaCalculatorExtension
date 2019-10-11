$(function () {
	$("#a").focus();
	$('#calculate').click(function () {
		var a = parseFloat($("#a").val());
		var b = parseFloat($("#b").val());
		var c = parseFloat($("#c").val());
		var delta = Math.pow(b, 2) - (4 * a * c);
		if (isNaN(delta)) {
			alert("Please enter numbers.");
			clear();
		} else {
			var deltaRoot = Math.sqrt(Math.abs(delta));
			var r1 = ((-b) + deltaRoot) * (1 / (2 * a));
			var r2 = ((-b) - deltaRoot) * (1 / (2 * a));
			if (delta <= 0) {
				$("#result1").val(r1.toFixed(3) + "i");
				$("#result2").val(r2.toFixed(3) + "i");
			} else {
				$("#result1").val(r1);
				$("#result2").val(r2);
			}
		}
	})
	$('#clear').click(function () {
		clear();
	})
});

function clear() {
	$('input').each(function () {
		if ($(this).attr('type') != 'submit') {
			$(this).val('');
		}
	})
}