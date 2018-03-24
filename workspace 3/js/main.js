$(document).ready(function() {
    
    var headerSM = false;
    var screenOn = false;
    var mobileCloseOn = false;
    var isMobile;
    
    function setMobile () {
        if ($(window).width() < 650) {
            isMobile = true;
            $('#header_logo').attr('src', 'images/logo_hero_2x2.png');
        } else {
            isMobile = false;
            $('#header_logo').attr('src', 'images/logo_hero2.png');
        }
    }
    
    function loadCandidateForm() {
        var z19no87o1f58xc2;(function(d, t) {
        var s = d.createElement(t), options = {
        'userName':'jadamduff',
        'formHash':'z19no87o1f58xc2',
        'autoResize':true,
        'height':'497',
        'async':true,
        'host':'wufoo.com',
        'header':'hide',
        'ssl':true};
        s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
        s.onload = s.onreadystatechange = function() {
        var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
        try { z19no87o1f58xc2 = new WufooForm();z19no87o1f58xc2.initialize(options);z19no87o1f58xc2.display(); } catch (e) {}};
        var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
        })(document, 'script');
        console.log('done');
    };
    
    
    $(window).on("scroll", function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 15 && headerSM == false) {
            
            $('#header_lg').toggle(0, function() {
                headerSM = true;
                $('#header_sm').fadeIn(200);
            });
            
            if (mobileCloseOn) {
                $('#mobile_close').css({'top': '17px'}).attr('src', 'images/mobile_close2.png');
            }
            
        }
        else if ($(window).scrollTop() <= 15 && headerSM == true) {
            
            $('#header_sm').toggle(0, function() {
                headerSM = false;
                $('#header_lg').fadeIn(200);
            });
            
            if (mobileCloseOn) {
                $('#mobile_close').css({'top': '35px'}).attr('src', 'images/mobile_close.png');
            }
            
        }
    });
    
    $(window).resize(function() {
        if (isMobile && mobileCloseOn && $(window).width() >= 650) {
            isMobile = false;
            $('#header_logo').attr('src', 'images/logo_hero2.png');
            if (mobileCloseOn) {
                $('#screen, #mobile_close, #contact_button3').fadeOut(0);
            }
        } else if (!isMobile && $(window).width() < 650) {
            isMobile = true;
            $('#header_logo').attr('src', 'images/logo_hero_2x2.png');
            $('.hamburger_wrap').fadeIn(0);
        }
    });
    
    function loadCTO () {
        $.when($('#about_cto_image').css('opacity', 1)).done(function() {
            console.log('worked');
            $('#cto_label').css({'opacity': '1', 'margin': '0'});
        console.log('loaded');
        });
    }
    
    function contactToggle () {
        if (!screenOn) {
            $('#screen').toggle(0, function() {
                screenOn = true;
                mobileCloseOn = false;
                $('#form_box').fadeIn(200);
            });
        }
        else {
            mobileCloseOn = false;
            $('#form_box').fadeIn(200);
        }
    }
    
    $('#contact_button, #contact_button_sm, #contact_button2, #contact_button3').on('click', function() {
        contactToggle();
    });
    
    $('#contact_button3').on('click', function() {
        $.when($('#mobile_close, #contact_button3').fadeOut(0)).done(console.log('yep'));
    });
    

    $('#close_btn').on('click', function() {
        $('#form_box').fadeOut(200, function() {
            screenOn = false;
            $('#screen').fadeOut(0);
            if (isMobile) {
                $('.hamburger_wrap').fadeIn(0);
            }
        });
    });
    
    $('.hamburger_wrap').on('click', function() {
        mobileCloseOn = true;
        $('#screen').toggle(0, function() {
            screenOn = true;
            $('#contact_button3').fadeIn(200);
            $('.hamburger_wrap').fadeOut(0, function() {
                if (headerSM) {
                    $.when($('#mobile_close').css({'top': '17px'}).attr('src', 'images/mobile_close2.png')).done(function() {
                        $('#mobile_close').fadeIn(100);
                    });
                } else {
                    $.when($('#mobile_close').css({'top': '35px'}).attr('src', 'images/mobile_close.png')).done(function() {
                        $('#mobile_close').fadeIn(100);
                    });
                }
            });
        });
    });
    
    $('#mobile_close').on('click', function() {
        mobileCloseOn = false;
        screenOn = false;
        $('#mobile_close, #contact_button3').fadeOut(200, function() {
            $('#screen').fadeOut(0);
            $('.hamburger_wrap').fadeIn(0);
        });
    });
    
    setMobile();
    loadCTO();
    loadCandidateForm();
    
    $('#req_1').text('');

});