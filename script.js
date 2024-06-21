document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementsByTagName("button");
  const result = document.getElementById("result");

  // Array to hold the users selected buttons
  let userInput = [];

  // For every button clicked grab the text of <button> and print to the <input> field
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      let num = btn[i].textContent;
      console.log(num);

      if (num !== "CLR" && num !== "=") {
        // Sperete peramiters (correct my way above was wrong.)
        userInput.push(num);
        result.value = userInput.join(""); // Join the array to display it as a string.
      }
      if (num == "CLR") {
        result.value = "";
        userInput = [];
      }
      if (num == "=") {
        let MultiplicationLoc = userInput.indexOf("X") - 1;
        let DivisionLoc = userInput.indexOf("/") - 1;
        let AddLoc = userInput.indexOf("+") - 1;
        let SubLoc = userInput.indexOf("-") - 1;

        if (MultiplicationLoc >= 0) {
          let fnumber = userInput.slice(0, MultiplicationLoc + 1); // Corrected the slice
          console.log("sliced array", fnumber);
          fnumber = fnumber.join(""); // Join the array elements into a string
          console.log(fnumber);

          // 2nd Number
          let lnumber = userInput.slice(
            MultiplicationLoc + 2,
            userInput.length
          ); // Corrected the slice
          console.log("sliced array", lnumber);
          lnumber = lnumber.join(""); // Join the array elements into a string
          console.log(lnumber);

          let answer = fnumber * lnumber;
          result.value = answer;
        }

        if (DivisionLoc >= 0) {
          let fnumber = userInput.slice(0, DivisionLoc + 1); // Corrected the slice
          console.log("sliced array", fnumber);
          fnumber = fnumber.join(""); // Join the array elements into a string
          console.log(fnumber);

          // 2nd Number
          let lnumber = userInput.slice(DivisionLoc + 2, userInput.length); // Corrected the slice
          console.log("sliced array", lnumber);
          lnumber = lnumber.join(""); // Join the array elements into a string
          console.log(lnumber);

          let answer = fnumber / lnumber;
          result.value = answer;
        }

        if (AddLoc >= 0) {
          let fnumber = userInput.slice(0, AddLoc + 1); // Corrected the slice
          console.log("sliced array", fnumber);
          fnumber = fnumber.join(""); // Join the array elements into a string
          console.log(fnumber);
          fnumber = parseFloat(fnumber);
          // 2nd Number
          let lnumber = userInput.slice(AddLoc + 2, userInput.length); // Corrected the slice
          console.log("sliced array", lnumber);
          lnumber = lnumber.join(""); // Join the array elements into a string
          console.log(lnumber);
          lnumber = parseFloat(lnumber);

          let answer = fnumber + lnumber;
          result.value = answer;
        }

        if (SubLoc >= 0) {
          let fnumber = userInput.slice(0, SubLoc + 1); // Corrected the slice
          console.log("sliced array", fnumber);
          fnumber = fnumber.join(""); // Join the array elements into a string
          console.log(fnumber);

          // 2nd Number
          let lnumber = userInput.slice(SubLoc + 2, userInput.length); // Corrected the slice
          console.log("sliced array", lnumber);
          lnumber = lnumber.join(""); // Join the array elements into a string
          console.log(lnumber);

          let answer = fnumber - lnumber;
          result.value = answer;
        }
        // 3. combine the indexes into numbers
        // 4. put them into variables with opperators
        // 5. when = is pressed it will do the calculation
        // 6. Print to <input> box
      }
    });
  }
});
