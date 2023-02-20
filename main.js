console.clear();
let sweetBox = document.querySelector(".sweetbox");

document.querySelectorAll(".sweet").forEach((el, index) => {
  el.addEventListener("click", () => {
    switch (index) {
      case 0:
        changeDisplay();
        sweetBox1();
        break;
      case 1:
        changeDisplay();
        sweetBox2();
        break;
      case 2:
        changeDisplay();
        sweetBox3();
        break;
      case 3:
        changeDisplay();
        sweetBox3();
        break;
      case 4:
        changeDisplay();
        sweetBox4();
        break;
      case 5:
        changeDisplay();
        sweetBox5();
        break;
      case 6:
        changeDisplay();
        sweetBox6();
        break;
    }
  });
});

document
  .querySelector(".overlay.hidden")
  .addEventListener("click", changeDisplay);

function changeDisplay() {
  sweetBox.classList.toggle("hidden");
  sweetBox.classList.toggle("fade-in");
  document.querySelector(".overlay").classList.toggle("hidden");
}

function sweetBox1() {
  sweetBox.innerHTML = `
  <p class="p-two">Any fool can use a computer</p>
  <button class="sweetbox__btn--ok" onclick="changeDisplay()">OK</button>
        `;
}
function sweetBox2() {
  sweetBox.innerHTML = `
    <div class="circle"><p class="rotate">?</p></div>
    <p class="p-two">The Internet?</p>
    <p class="p-one">That thing is still around?</p>
    <button onclick="changeDisplay()" class="sweetbox__btn--ok">OK</button>
  `;
}
function sweetBox3() {
  sweetBox.innerHTML = `
  <div class="circle error">
  <p class="error ">X</p>
</div>
<p class="p-two">
  Oops...
</p>
<p class="p-one">
  Something went wrong!
</p>
<button onclick="changeDisplay()" class="sweetbox__btn--ok">
  OK
</button>
<hr style="width: 100%;">
<a href="#">Why do I have this issue?</a>
  `;
}
