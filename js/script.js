window.addEventListener("DOMContentLoaded", () => {
    // Go-Top button
    const goTopBtn = document.querySelector(".go_top");

    // обработчик на скролл окна
    window.addEventListener("scroll", trackScroll);
    // обработчик на нажатии
    goTopBtn.addEventListener("click", goTop);

    function trackScroll() {
        // вычисляем положение от верхушки страницы
        const scrolled = window.scrollY;
        // считаем высоту окна браузера
        const coords = document.documentElement.clientHeight;
        // если вышли за пределы первого окна
        if (scrolled > coords) {
            // кнопка появляется
            goTopBtn.classList.add("go_top_show");
        } else {
            // иначе исчезает
            goTopBtn.classList.remove("go_top_show");
        }
    }

    function goTop() {
    // поднимаемся вверх по нажатию кнопки
        window.scrollTo(0, 0)
    }


    // Tabs
    const tabs = document.querySelectorAll(".catalog_header_btn"),
          tabsContent = document.querySelectorAll(".catalog_content"),
          tabsParent = document.querySelector(".catalog_header_btns");
    // класс активности - ".catalog_header_btn_active"

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("fade");
        });
        tabs.forEach(item => {
            item.classList.remove("catalog_header_btn_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("catalog_header_btn_active");
    }

    hideTabContent();
	showTabContent();

    tabsParent.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("catalog_header_btn")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })


    //Hamburger
    const menu = document.querySelector('.menu_inner'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    body = document.body,
    cart = document.querySelector('.menu_cart');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_inner_active');
        body.classList.toggle("noscroll");
        cart.classList.toggle("hide");

    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_inner_active');
            body.classList.toggle("noscroll");
            cart.classList.remove("hide");
        })
    })





});