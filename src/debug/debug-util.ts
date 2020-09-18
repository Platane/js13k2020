export const debugContainer = document.createElement("div");
document.body.appendChild(debugContainer);
debugContainer.style.position = "fixed";
debugContainer.style.top = "0px";
debugContainer.style.left = "0px";
debugContainer.style.zIndex = "3";
debugContainer.style.overflowY = "scroll";
debugContainer.style.width = "calc( 100% - 8px )";
debugContainer.style.margin = "4px";
debugContainer.style.display = "flex";
debugContainer.style.flexDirection = "column";
debugContainer.style.justifyContent = "start";
debugContainer.style.alignItems = "start";
debugContainer.style.flexDirection = "column";
const closeButton = document.createElement("button");
closeButton.innerHTML = "×";
closeButton.addEventListener("click", () => {
  debugContainer.style.display = "none";
});
debugContainer.append(closeButton);
