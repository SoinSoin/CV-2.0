$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center:true,
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
    });


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
    
    // $("#fotome").on("click", function () {
    //     window.location.replace("moi.php");
    // });

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
        $("#textcss,#textjs,#textphp,#textsql").hide();
        $("#html").toggleClass("test");
        $("#texthtml").animate({width:'toggle'},400).css("display", "flex");
    });

    $("#css").on(" click", function () {
        $("#html,#js,#php,#sql").removeClass("test");
        $("#texthtml,#textjs,#textphp,#textsql").hide();
        $("#css").toggleClass("test");
        $("#textcss").animate({width:'toggle'},400).css("display", "flex");
    });

    $("#js").on(" click", function () {
        $("#html,#css,#php,#sql").removeClass("test");
        $("#texthtml,#textphp,#textsql,#textcss").hide();
        $("#js").toggleClass("test");
        $("#textjs").animate({width:'toggle'},400).css("display", "flex");
    });
    $("#php").on(" click", function () {
        $("#html,#css,#js,#sql").removeClass("test");
        $("#texthtml,#textjs,#textsql,#textcss").hide();
        $("#php").toggleClass("test");
        $("#textphp").animate({width:'toggle'},400).css("display", "flex");
    });
    $("#sql").on(" click", function () {
        $("#html,#css,#php,#js").removeClass("test");
        $("#texthtml,#textphp,#textjs,#textcss").hide();
        $("#sql").toggleClass("test");
        $("#textsql").animate({width:'toggle'},400).css("display", "flex");
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

    function respTuile() {
        var ordi = window.matchMedia("(max-width:768px)");
        var laptop = window.matchMedia("(max-width:1280px)");
        if (laptop.matches || ordi.matches) {
            $(".imgsav").css("display", "block");
            $(".fiche").css("display", "none");
            var click = false;
            var click1 = false;
            var click2 = false;
            var click3 = false;
            var click4 = false;
            var click5 = false;
            $("#comp1").click(function () {
                if (click) {
                    $("#imgcomp1,#imgsav1").show();
                    $("#fiche1").hide();

                    click = false;
                } else {
                    $("#imgcomp1,#imgsav1").hide();
                    $("#fiche1").show();
                    click = true;
                }
            });
            $("#comp2").click(function () {
                if (click1) {
                    $("#imgcomp2,#imgsav2").show();
                    $("#fiche2").hide();

                    click1 = false;
                } else {
                    $("#imgcomp2,#imgsav2").hide();
                    $("#fiche2").show();
                    click1 = true;
                }
            });
            $("#comp3").click(function () {
                if (click2) {
                    $("#imgcomp3,#imgsav3").show();
                    $("#fiche3").hide();

                    click2 = false;
                } else {
                    $("#imgcomp3,#imgsav3").hide();
                    $("#fiche3").show();
                    click2 = true;
                }
            });
            $("#comp4").click(function () {
                if (click3) {
                    $("#imgcomp4,#imgsav4").show();
                    $("#fiche4").hide();

                    click3 = false;
                } else {
                    $("#imgcomp4,#imgsav4").hide();
                    $("#fiche4").show();
                    click3 = true;
                }
            });
            $("#comp5").click(function () {
                if (click4) {
                    $("#imgcomp5,#imgsav5").show();
                    $("#fiche5").hide();

                    click4 = false;
                } else {
                    $("#imgcomp5,#imgsav5").hide();
                    $("#fiche5").show();
                    click4 = true;
                }
            });
            $("#comp6").click(function () {
                if (click5) {
                    $("#imgcomp6,#imgsav6").show();
                    $("#fiche6").hide();

                    click5 = false;
                } else {
                    $("#imgcomp6,#imgsav6").hide();
                    $("#fiche6").show();
                    click5 = true;
                }
            });

        } else {

            $(".comp").unbind("click");
            $(".imgsav").hide();
            $(".imgcomp").show();
            $(".fiche").css("display", "flex");
        }
        window.addEventListener('resize', respTuile, true);
    }
    respTuile()
    function menuResp() {
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
        }
        window.addEventListener('resize', menuResp, true);
    }
    menuResp()
});