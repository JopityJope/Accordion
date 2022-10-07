/* "use strict";

const items = document.querySelectorAll(".item");

items.forEach((item, index) =>
  item.addEventListener("click", function () {
    removeOpenClasses(index);
    item.classList.toggle("open");
  })
);

const removeOpenClasses = function (index) {
  items.forEach((item2, index2) => {
    if (index2 != index) {
      item2.classList.remove("open");
    }
  });
}; */

"use strict";

const items = document.querySelectorAll(".item");

items.forEach((item, index) =>
  item.addEventListener("click", function () {
    removeOpenClasses(index);
    item.classList.toggle("open");
    let hiddenBox = item.querySelector(".hidden-box");
    if (item.classList.contains("open")) {
      hiddenBox.style.maxHeight = hiddenBox.scrollHeight + "px";
    } else {
      hiddenBox.style.maxHeight = 0;
    }
  })
);

const removeOpenClasses = function (index) {
  items.forEach((item2, index2) => {
    if (index2 != index) {
      item2.classList.remove("open");
      let hiddenBox = item2.querySelector(".hidden-box");
      if (item2.classList.contains("open")) {
        hiddenBox.style.maxHeight = hiddenBox.scrollHeight + "px";
      } else {
        hiddenBox.style.maxHeight = 0;
      }
    }
  });
};
