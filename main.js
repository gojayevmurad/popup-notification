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
        sweetBox4();
        break;
      case 4:
        changeDisplay();
        sweetBox5();
        break;
      default:
        break;
    }
  });
});

document.querySelector(".overlay.hidden").addEventListener("click", changeDisplay);

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
function sweetBox4() {
  sweetBox.innerHTML = `
    <div class="empty"></div>
    <button class="sweetbox__btn--ok" onclick="changeDisplay()">OK</button>
  `;
}
function sweetBox5() {
  sweetBox.innerHTML = `
      <div class="circle shake">
      <p class="shake">i</p>
    </div>
    <p class="p-two bg-gray">HTML <span class="underline">example</span></p>
    <p class="p-one">
      You can use <span class="bold">bold text,</span>
      <a href="#" class="bold">links</a> and other HTML tags
    </p>

    <div class="sweetbox__buttons">
      <button onclick="changeDisplay()" class="sweetbox__btn--ok">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ffffff7c"
          stroke="currentColor"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-thumbs-up"
        >
          <path
            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
          />
        </svg>
        Great
      </button>
      <button  onclick="changeDisplay()" class="sweetbox__btn--ok dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ffffff7c"
          stroke="currentColor"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-thumbs-down"
        >
          <path
            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
          />
        </svg>
      </button>
    </div>
  `;
}
