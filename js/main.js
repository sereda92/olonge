document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".app_work_item");
  
    function checkVisibility() {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        // Проверяем, если верхняя часть элемента видима на экране
        if (rect.top >= 0 && rect.top <= windowHeight) {
            item.classList.add("show");
        }
      });
    }
  
    // Проверяем видимость элементов при загрузке страницы и при прокрутке
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    window.addEventListener("load", checkVisibility);
  });
  