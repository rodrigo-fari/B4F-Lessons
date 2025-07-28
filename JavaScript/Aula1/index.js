document.addEventListener("DOMContentLoaded", function () {
	const btn = document.querySelector(".calculateBtn");
	const resultDiv = document.querySelector(".response p");
	const responseContainer = document.querySelector(".response");

	btn.addEventListener("click", function () {
		const num1 = parseFloat(document.getElementById("fNumber").value);
		const num2 = parseFloat(document.getElementById("sNumber").value);
		const operation = document.getElementById("operation").value;

		if (isNaN(num1) || isNaN(num2) || operation === "") {
			resultDiv.innerText = "Please make sure that all the fields are filled.";
			responseContainer.style.display = "flex";
			return;
		}

		let result;
		switch (operation) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				if (num2 === 0) {
					resultDiv.innerText = "Cannot divide by 0 ;p";
					responseContainer.style.display = "flex";
					return;
				}
				result = num1 / num2;
				break;
			default:
				resultDiv.innerText = "Unknown operation.";
				responseContainer.style.display = "flex";
				return;
		}
		alert(`Result = ${result}`);
	});
});
