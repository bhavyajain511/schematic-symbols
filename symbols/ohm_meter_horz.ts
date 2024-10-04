import { defineSymbol } from "drawing/defineSymbol"
import svgJson from "assets/generated/ohm_meter.json"

const { paths, texts, bounds, refblocks, circles } = svgJson

export default defineSymbol({
  primitives: [
    ...Object.values(paths),
    ...Object.values(circles),
    {
      ...texts.top1,
      x: 0,
      y: -0.3594553499999995,
      anchor: "middle_bottom",
    },
    {
      ...texts.bottom1,
      x: 0,
      y: 0.35,
      anchor: "middle_top",
    },
    { ...texts.left1, x: 0, fontSize: 0.4, anchor: "middle_bottom" },
  ] as any,
  ports: [
    { ...refblocks.left1, labels: ["1"] }, // TODO add more "standard" labels
    { ...refblocks.right1, labels: ["2"] }, // TODO add more "standard" labels
  ],
  size: { width: bounds.width, height: bounds.height },
  center: { x: bounds.centerX, y: bounds.centerY },
})
