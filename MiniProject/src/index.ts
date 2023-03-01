const btn = document.getElementById("btn")!;

btn.addEventListener("click", () => {
  alert("Clicked!");
});

const mystery: unknown = "Hello World!!!!!!!!!!!!!!!!!";

const numChars = (mystery as string).length;
console.log(numChars);
