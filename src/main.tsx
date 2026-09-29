import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Next from "./next/Next.tsx";
import Vision from "./vision/Vision.tsx";
import "./index.css";

// Vision is the default homepage. index.html sets html.vision/html.next before first paint; ?classic shows the old site, ?next shows the prior redesign prototype.
const vision = document.documentElement.classList.contains("vision");
const classic = !vision && !document.documentElement.classList.contains("next");

createRoot(document.getElementById("root")!).render(
  <StrictMode>{vision ? <Vision /> : classic ? <App /> : <Next />}</StrictMode>
);
