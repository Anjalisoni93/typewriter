const sentence = "hello there from lighthouse labs";
let time = 0;

const typewriter = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write(arr[i]);
    }, time);
    time += 50;
  }

  setTimeout(() => {
    console.log();
  }, time);
};
console.log("\n");
typewriter(sentence);
