import { constructBoard, squareArr } from "./board";
constructBoard();

const knight = (() => {
  let element = document.getElementById("knight");
  let xPos = 1;
  let yPos = 1;
  function moveKnight(x, y) {
    if (x > 8 && y > 8) {
      return alert("The knight can move only on the 8x8 board");
    }
    // 6.25% is the distance the knight has to be from the board's margin to be...
    // ...in the middle of the 1, 1 square.
    // The formula for moving to the center of other squares is...
    // ... Sn = 6.25 * (n + n - 1), where Sn is the target square
    let currentX = 6.25 * (2 * xPos - 1);
    let currentY = 6.25 * (2 * yPos - 1);
    let desiredX = 6.25 * (2 * x - 1);
    let desiredY = 6.25 * (2 * y - 1);
    console.log(`${xPos} / ${yPos}`);
    element.style.left = `${currentX}%`;
    element.style.top = `${currentY}%`;
    if (currentX === desiredX) {
      if (currentY === desiredY) {
        return;
      }
      currentY > desiredY ? yPos-- : yPos++;
      moveKnight(x, y);
      return;
    }
    currentX > desiredX ? xPos-- : xPos++;
    moveKnight(x, y);
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
