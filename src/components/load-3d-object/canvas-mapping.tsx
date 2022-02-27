import FlowerCanvas from "./flowers";
import LightCanvas from "./light";
import HeadSetCanvas from "./headphone";
import MouseCanvas from "./mouse";
import TableCanvas from "./table";

const canvasMapping = {
  LightCanvas: {
    name: "Light",
    component: LightCanvas,
  },
  FlowerCanvas: {
    name: "Flowes stand",
    component: FlowerCanvas,
  },
  HeadSetCanvas: {
    name: "Headphone",
    component: HeadSetCanvas,
  },
  MouseCanvas: {
    name: "Mouse",
    component: MouseCanvas,
  },
  TableCanvas: {
    name: "Wooden Table",
    component: TableCanvas,
  },
};

export default canvasMapping;
