import localFont from "next/font/local";

const syhFont = localFont({
  src: "./SourceHanSansSC-VF.otf.woff2",
  weight: "Regular",
  style: "normal",
  display: "swap",
});

const sysFont = localFont({
  src: "./SourceHanSerifSC-VF.otf.woff2",
  weight: "Regular",
  style: "normal",
  //display: "swap",
});

/* const aliphmFont = localFont({
  src: "./AlibabaPuHuiTi-3-65-Medium.woff2",
  weight: "Regular",
  style: "normal",
  display: "swap",
});

const aliphbFont = localFont({
  src: "./AlibabaPuHuiTi-3-85-Bold.woff2",
  weight: "Regular",
  style: "normal",
  display: "swap",
});

const aliphrFont = localFont({
  src: "./AlibabaPuHuiTi-3-55-Regular.woff",
  weight: "Regular",
  style: "normal",
  display: "swap",
});
 */
export { syhFont, sysFont };
