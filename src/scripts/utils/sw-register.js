import runtime from "serviceworker-webpack-plugin/lib/runtime";

const swRegister = async () => {
  if ("serviceworker" in navigator) {
    await runtime.register();
    return;
  }
  console.log("service worker not supported in this browser");
};

export default swRegister;
