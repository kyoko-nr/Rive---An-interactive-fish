import './style.css';
import { Rive } from "@rive-app/canvas";

const init = () => {
  const r = new Rive({
    src: "/public/fish.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
}

document.addEventListener("DOMContentLoaded", init);