import Carousel from "../components/Carousel";
import Balanced from "../components/Balanced";
import Structured from "../components/Structured";
import Symmetrical from "../components/Symmetrical";

export const routes = [
  { path: "/", component: Carousel, exact: true },
  { path: "/balanced", component: Balanced },
  { path: "/symmetrical", component: Symmetrical },
  { path: "/structured", component: Structured },
];

