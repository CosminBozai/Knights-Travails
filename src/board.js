export default function constructBoard(arr) {
  const chessboard = document.getElementById("chessboard");
  let alternate = true;
  let x = 0;
  let y = 1;
  for (let i = 0; i < 64; i++) {
    x = x + 1;
    if (i % 8 === 0 && i !== 0) {
      alternate = !alternate;
      x = 1;
      y = y + 1;
    }
    let square = {
      element: document.createElement("div"),
      xPos: x,
      yPos: y,
    };

    if (i % 8 === 0) {
      square.element.textContent = i / 8 + 1;
    }
    if (i < 8) {
      square.element.textContent = i + 1;
    }
    if (alternate) {
      square.element.className = "square white";
    } else {
      square.element.className = "square black";
    }
    square.element.setAttribute(
      "coords",
      `x = ${square.xPos} y = ${square.yPos}`
    );

    alternate = !alternate;
    chessboard.appendChild(square.element);
    arr.push(square);
  }
}
