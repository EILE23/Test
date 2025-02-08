function clickevn(item) {
  const box = document.querySelector(".fruitbox");
  if (item == "apple") {
    box.innerHTML = `<img src = "./fruits/apple.jpg" alt = "fruit"/>`;
  } else if (item == "banana") {
    box.innerHTML = `<img src = "./fruits/banana.jpg" alt = "fruit"/>`;
  } else if (item == "grape") {
    box.innerHTML = `<img src = "./fruits/grape.jpg" alt = "fruit"/>`;
  } else if (item == "strawberry") {
    box.innerHTML = `<img src = "./fruits/strrawberry.jpg" alt = "fruit"/>`;
  }
}
