function calculateTip() {
  const amount = parseFloat(document.getElementById("amount").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const tipAmount = (tipPercent / 100) * amount;
  const total = amount + tipAmount;

  resultDiv.textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)}`;
}
