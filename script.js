
        function calculate() {
      var amount = document.getElementById("amount").value;
      var interest = document.getElementById("interest").value / 100 / 12;
      var years = document.getElementById("years").value * 12;
      var x = Math.pow(1 + interest, years);
      var monthly = (amount * x * interest) / (x - 1);
      document.getElementById("result").innerHTML = "Monthly Payment Amount: $" + monthly.toFixed(2);
    }
 