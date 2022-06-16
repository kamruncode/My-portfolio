skills = document.querySelectorAll(".skill");
skillArea = document.querySelector(".skills-area");

const skilltext = {
  html: `<ul class="list-group m-2">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>`,
  css: "css",
  js: "js",
};

skills.forEach((e) => {
  e.addEventListener("click", () => {
    for (let key in skilltext) {
      if (e.children[0].id === key) {
        skillArea.innerHTML = skilltext[key];
      }
    }
  });
});
