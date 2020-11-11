type Axis = "X" | "Y" | "Z";

class UIElement {
  animate(dx: number, dy: number, axis: Axis) {
    if (axis === "X") {
      // ...
    } else if (axis === "Y") {
    } else if (axis === "Z") {
    } else {
      // It's possible that someone could reach this
      // by ignoring your types though.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "X");
button.animate(0, 0, "L");