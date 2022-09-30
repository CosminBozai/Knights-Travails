import { constructBoard, squareArr } from "./board";
constructBoard();

const knight = (() => {
  let element = document.getElementById("knight");
  function moveKnight(x, y) {
    if (x > 8 && y > 8) {
      return alert("The knight can move only on the 8x8 board");
    }
    // 6.25% is the distance the knight has to be from the board's margin to be...
    // ...in the middle of the 1, 1 square.
    // The formula for moving to the center of other squares is...
    // ... Sn = 6.25 * (n + n - 1), where Sn is the target square
    let newXPos = 6.25 * (2 * x - 1);
    let newYPos = 6.25 * (2 * y - 1);
    element.style.left = `${newXPos}%`;
    element.style.top = `${newYPos}%`;
  }
  return { moveKnight };
})();

squareArr.forEach((square) => {
  square.element.addEventListener("click", selectSquare);
});

function selectSquare() {
  let x = this.getAttribute("Pos-x");
  let y = this.getAttribute("Pos-y");
  knight.moveKnight(x, y);
}
