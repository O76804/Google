const apps = [
  { name:"Settings", icon:"https://img.icons8.com/fluency/96/settings.png" },
  { name:"Gallery", icon:"https://img.icons8.com/fluency/96/picture.png" },
  { name:"Camera", icon:"https://img.icons8.com/fluency/96/camera.png" },
  { name:"Music", icon:"https://img.icons8.com/fluency/96/musical-notes.png" },
  { name:"Messages", icon:"https://img.icons8.com/fluency/96/sms.png" },
  { name:"Phone", icon:"https://img.icons8.com/fluency/96/phone.png" },
  { name:"Browser", icon:"https://img.icons8.com/fluency/96/internet.png" },
  { name:"Files", icon:"https://img.icons8.com/fluency/96/folder-invoices.png" }
];

const home = document.getElementById("home");

// create apps
apps.forEach((app,i)=>{
  const el = document.createElement("div");
  el.className = "app";

  el.innerHTML = `
    <img src="${app.icon}">
    <p>${app.name}</p>
  `;

  el.style.animationDelay = i * 0.05 + "s";

  el.onclick = ()=>{
    el.classList.add("open");

    setTimeout(()=>{
      alert(app.name + " opened");
      el.classList.remove("open");
    },400);
  };

  home.appendChild(el);
});

// clock
setInterval(()=>{
  const d = new Date();
  document.getElementById("time").innerText =
    d.getHours().toString().padStart(2,'0') + ":" +
    d.getMinutes().toString().padStart(2,'0');
},1000);