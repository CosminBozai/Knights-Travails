const chessboard = document.getElementById("chessboard");

(function constructBoard() {
  let alternate = true;
  for (let i = 0; i < 64; i++) {
    let square = document.createElement("div");
    if (i % 8 === 0 && i !== 0) {
      alternate = !alternate;
    }
    if (i % 8 === 0) {
      square.textContent = i / 8 + 1;
    }
    if (i < 8) {
      square.textContent = i + 1;
    }
    if (alternate === true) {
      square.className = "square white";
    } else {
      square.className = "square black";
    }

    alternate = !alternate;
    chessboard.appendChild(square);
  }
})();
