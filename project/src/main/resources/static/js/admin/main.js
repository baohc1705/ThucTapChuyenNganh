$(document).ready(function() {
    $(document).on('click', '.btn-submenu', function() {
        let submenu = $(this).next("div");
        let arrowDown = $(this).find(".arrow");

        if (submenu.hasClass("hidden")) {
            submenu.removeClass("hidden").hide().slideDown(200);
            if (!$('#menuItem').hasClass('w-72')) {
                $('#menuItem').addClass('w-72');
                $('.toggleMenu').toggleClass('hidden');
            }
        } else {
            submenu.slideUp(200, function() {
                submenu.addClass("hidden");
            });
        }
        arrowDown.toggleClass('rotate-180');

    });

    $(document).on('click', '.btnSubmenu', function() {
            let submenu = $(this).next("div");
            let arrowDown = $(this).find(".arrowToggle");

            if (submenu.hasClass("hidden")) {
                submenu.removeClass("hidden").hide().slideDown(200);
            } else {
                submenu.slideUp(200, function() {
                    submenu.addClass("hidden");
                });
            }
            arrowDown.toggleClass('rotate-180');

    });

    $(document).on('click', '.btn-menu-item', function() {
        $('.btn-menu-item').removeClass('bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white');
        $(this).addClass('bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white');
    });

    $(document).on('click', '#btn-toggle-menu', function() {
        let menu = $('#menuItem');

        if (menu.hasClass('w-72')) {
            menu.removeClass('w-72').addClass('w-20');

            $('.submenu').each(function() {
                if (!$(this).hasClass('hidden')) {
                    $(this).slideUp(200, function() {
                        $(this).addClass("hidden");
                    });
                }
            });
        } else {
            menu.addClass('w-72').removeClass('w-20');
        }

        $('.toggleMenu').toggleClass('hidden');
        $(this).find('#btn-toggle-icon').toggleClass('rotate-180');
    });
    let theme = localStorage.getItem("theme") || "light";

    // Set initial theme
    $("html").toggleClass("dark", theme === "dark");
    setButtonIcon(theme);

    // Toggle on click
    $(document).on("click", "#btn-toggle-darkmode", function () {
        if (theme === "light") {
            theme = "dark";
            $("html").addClass("dark");
        } else {
            theme = "light";
            $("html").removeClass("dark");
        }
        setButtonIcon(theme);
        localStorage.setItem("theme", theme);
    });

    // Hàm cập nhật icon
    function setButtonIcon(theme) {
        if (theme === "dark") {
            $('#btn-toggle-darkmode').html(`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="lucide lucide-moon-icon lucide-moon">
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                </svg>
            `);
        } else {
            $('#btn-toggle-darkmode').html(`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>

            `);
        }
    }
});