$(document).ready(function test() {

    $(document).alton({
        firstClass : 'header', // Set the first container class
        scrollMode: 'headerScroll', // Set the scroll mode
    });


    if (window.matchMedia("(max-width: 1024px)").matches) {
        var forEach = function (t, o, r) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else
                for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
        };

        var hamburgers = document.querySelectorAll(".hamburger");
        if (hamburgers.length > 0) {
            forEach(hamburgers, function (hamburger) {
                hamburger.addEventListener("click", function () {
                    this.classList.toggle("is-active");
                }, false);
            });
        }
        $('#containermenu').css({
            display: 'none'
        });
        var click = false;

        function event() {
            if (click) {
                $("#containermenu").slideUp('500');
                click = false;
            } else {
                $("#containermenu").slideDown('500');
                $('#containermenu').css({
                    display: 'flex'
                });
                click = true;
            }

        }

        $(".hamburger-box").click(function () {
            event();
        });

    } else {
        $('#containermenu').css({
            display: 'flex'
        });
    }
    window.addEventListener('resize', test, false);


});