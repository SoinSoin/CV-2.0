$(document).ready(function () {
    function add() {
        $('#technologie').bind('inview', function (event, isInView) {
            if (isInView) {
                $('#titretechno').addClass('couleurbas');
            } else {
                $('#titretechno').removeClass("couleurbas");
            }
        });

        $('#competence').bind('inview', function (event, isInView) {
            if (isInView) {
                $('#titrecomp').addClass('couleurbas');

            } else {
                $('#titrecomp').removeClass("couleurbas");
            }
        });
        $('#forma').bind('inview', function (event, isInView) {
            if (isInView) {
                $('#titreforma').addClass('couleurbas');
            } else {
                $('#titreforma').removeClass("couleurbas");
            }
        });
        $('#prj').bind('inview', function (event, isInView) {
            if (isInView) {
                $('#titreprj').addClass('couleurbas');
            } else {
                $('#titreprj').removeClass("couleurbas");
            }
        });
        $('#experience').bind('inview', function (event, isInView) {
            if (isInView) {
                $('#titreprj').removeClass("couleurbas");
                $('#titreexpe').addClass('couleurbas');
            } else {
                $('#titreexpe').removeClass("couleurbas");
            }
        });
    }
    
    $("#fotome").on("click", function () {
        window.location.replace("moi.php");
    });

    $('.titre,#fléche').on(' click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 850; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    $("#html").on(" click", function () {
        $("#css,#js,#php,#sql").removeClass("test");
        $("#textcss,#textjs,#textphp,#textsql").hide(800);
        $("#html").toggleClass("test");
        $("#texthtml").toggle(800).css("display", "flex");
    });

    $("#css").on(" click", function () {
        $("#html,#js,#php,#sql").removeClass("test");
        $("#texthtml,#textjs,#textphp,#textsql").hide(800);
        $("#css").toggleClass("test");
        $("#textcss").toggle(800).css("display", "flex");
    });

    $("#js").on(" click", function () {
        $("#html,#css,#php,#sql").removeClass("test");
        $("#texthtml,#textphp,#textsql,#textcss").hide(800);
        $("#js").toggleClass("test");
        $("#textjs").toggle(800).css("display", "flex");
    });
    $("#php").on(" click", function () {
        $("#html,#css,#js,#sql").removeClass("test");
        $("#texthtml,#textjs,#textsql,#textcss").hide(800);
        $("#php").toggleClass("test");
        $("#textphp").toggle(800).css("display", "flex");
    });
    $("#sql").on(" click", function () {
        $("#html,#css,#php,#js").removeClass("test");
        $("#texthtml,#textphp,#textjs,#textcss").hide(800);
        $("#sql").toggleClass("test");
        $("#textsql").toggle(800).css("display", "flex");
    });
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
    $(window).resize(function () {
        var ordi = window.matchMedia("(max-width:768px)");
        var laptop = window.matchMedia("(max-width:1280px)");
        if (laptop.matches || ordi.matches) {
            add();
            $(".imgsav").css("display", "block");
            $(".fiche").css("display", "none");
            var click = false;
            $("#comp1").click(function () {
                if (click) {
                    $("#imgcomp1,#imgsav1").show(800);
                    $("#fiche1").hide(800);

                    click = false;
                } else {
                    $("#imgcomp1,#imgsav1").hide(800);
                    $("#fiche1").show(800);
                    click = true;
                }
            });
            $("#comp2").click(function () {
                if (click) {
                    $("#imgcomp2,#imgsav2").show(800);
                    $("#fiche2").hide(800);

                    click = false;
                } else {
                    $("#imgcomp2,#imgsav2").hide(800);
                    $("#fiche2").show(800);
                    click = true;
                }
            });
            $("#comp3").click(function () {
                if (click) {
                    $("#imgcomp3,#imgsav3").show(800);
                    $("#fiche3").hide(800);

                    click = false;
                } else {
                    $("#imgcomp3,#imgsav3").hide(800);
                    $("#fiche3").show(800);
                    click = true;
                }
            });
            $("#comp4").click(function () {
                if (click) {
                    $("#imgcomp4,#imgsav4").show(800);
                    $("#fiche4").hide(800);

                    click = false;
                } else {
                    $("#imgcomp4,#imgsav4").hide(800);
                    $("#fiche4").show(800);
                    click = true;
                }
            });
            $("#comp5").click(function () {
                if (click) {
                    $("#imgcomp5,#imgsav5").show(800);
                    $("#fiche5").hide(800);

                    click = false;
                } else {
                    $("#imgcomp5,#imgsav5").hide(800);
                    $("#fiche5").show(800);
                    click = true;
                }
            });
            $("#comp6").click(function () {
                if (click) {
                    $("#imgcomp6,#imgsav6").show(800);
                    $("#fiche6").hide(800);

                    click = false;
                } else {
                    $("#imgcomp6,#imgsav6").hide(800);
                    $("#fiche6").show(800);
                    click = true;
                }
            });

        } else {
            $(".comp").unbind("click");
            $(".imgsav").hide();
            $(".imgcomp").show();
            $(".fiche").css("display", "flex");
        }
    });

    
    $(window).resize(function () {
        // add(false);
        var ordi = window.matchMedia("(max-width:768px)");
        var tel = window.matchMedia("(max-device-width:481px)");
        if (tel.matches || ordi.matches) {

            $('#containermenu').css({
                display: 'none'
            });
            var click = false;

            function event() {
                if (click) {
                    $("#containermenu").slideUp('800');
                    click = false;
                } else {
                    $("#containermenu").slideDown('800');
                    $('#containermenu').css({
                        display: 'flex'
                    });
                    click = true;
                }

            }
            var bouttonBurg = $(".hamburger");
            $(".hamburger,#containermenu").on("click", function () {
                if (click == false && bouttonBurg.hasClass("is-active")) {
                    $("#macdo").addClass("is-active");
                } else if (click == true) {
                    $("#macdo").removeClass("is-active");
                }
                event();
            });


        } else {
            $("#macdo").removeClass("is-active");
            $('#containermenu').css({
                display: 'flex'
            });
            add();
        }

    });
});