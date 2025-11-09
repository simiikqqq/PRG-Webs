const board = document.getElementById("board");
    const resetButton = document.getElementById("resetButton");
    const colorPicker = document.getElementById("color");
    const size = 10;

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if ((row + col) % 2 === 0) {
          cell.classList.add("light");
        } else{
          cell.classList.add("dark");
        }
        cell.dataset.originalColor = cell.style.backgroundColor;

        cell.addEventListener("click", function () {
          const selectedColor = colorPicker.value;
          if (cell.style.backgroundColor === selectedColor) {
            cell.style.backgroundColor = "";
            cell.classList.remove("clicked");
          } else {
            cell.style.backgroundColor = selectedColor;
            cell.classList.add("clicked");
          }
        });
        board.appendChild(cell);
      }
    }

    resetButton.addEventListener("click", () => {
      document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "";
        cell.classList.remove("clicked");
      });
    });