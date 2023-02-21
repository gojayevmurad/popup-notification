console.clear();

const notificationsTopRight = document.querySelector(
    ".notifications--topright"
  ),
  notificationsTopLeft = document.querySelector(
    ".notifications--topleft"
  ),
  notificationsBottomRight = document.querySelector(
    ".notifications--bottomright"
  ),
  notificationsBottomLeft = document.querySelector(
    ".notifications--bottomleft"
  );

buttons = document.querySelector(".buttons");

const notifactionDetails1 = {
  error:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e24d4c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',

  success:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0abf30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',

  warning:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9bd0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',

  info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',

  cancel:
    '<svg onclick=deleteNotification(this.parentElement) class="cancel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg>',
};

const deleteNotification = (toast) => {
  toast.classList.add("hide");
  setInterval(() => {
    toast.remove();
  }, 100);
};

const createNotification = (notificationType, position, timer, text) => {
  const notification = document.createElement("li");
  notification.id = notificationType;
  svg = notifactionDetails1[notificationType];
  const cancelBtn = notifactionDetails1.cancel;
  const uniqueId = "b" + Math.floor(Math.random() * 100);
  notification.classList = "notification";
  notification.innerHTML = `
        <div class="content">
            <div>
                ${svg}
            </div>
            <p>${text}</p>
        </div>
        <div class="line ${uniqueId}"></div>
        ${cancelBtn}
    `;

  switch (position) {
    case "topright":
      notificationsTopRight.appendChild(notification);
      break;
    case "topleft":
      notificationsTopLeft.appendChild(notification);
      break;
    case "bottomright":
      notificationsBottomRight.appendChild(notification);
      break;
    case "bottomleft":
      notificationsBottomLeft.appendChild(notification);
      break;
    default:
      break;
  }

  document.querySelector(`.${uniqueId}`).style.animationDuration =
    timer / 1000 + "s";

  setTimeout(() => {
    deleteNotification(notification);
  }, timer);
};


document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault();
  if(e.target.text.value.trim()==""){
    changeDisplay();
    sweetBox3();
    return false
  }
  createNotification(e.target.type.value, e.target.position.value, Number(e.target.time.value),e.target.text.value)
  e.target.time.value=3000
  e.target.text.value=""
});

