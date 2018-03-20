$(document).ready(function() {
    
    var headerSM = false;
    
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
            
            headerSM = true;
            
            $('#header_lg').toggle(0, function() {
                $('#header_sm').fadeIn(200);
            });
            
        }
        else if ($(window).scrollTop() <= 15 && headerSM == true) {
            
            $('#header_sm').toggle(0, function() {
                $('#header_lg').fadeIn(200);
            });
            
            headerSM = false;
            
        }
    });
    
    function loadCTO () {
        $.when($('#cto_image').css('opacity', 1)).done(function() {
            $('#cto_label').css({'opacity': '1', 'margin': '0'});
        console.log('loaded');
        });
    }
    
    $('#contact_button').on('click', function() {
        $('#screen').toggle(0, function() {
            $('#form_box').fadeIn(200);
        });
    });
    
    $('#contact_button_sm').on('click', function() {
        $('#screen').toggle(0, function() {
            $('#form_box').fadeIn(200);
        });
    });
    
    $('#contact_button2').on('click', function() {
        console.log('worked');
        $('#screen').toggle(0, function() {
            $('#form_box').fadeIn(200);
        });
    });
    
    $('#close_btn').on('click', function() {
        $('#form_box').fadeOut(200, function() {
            $('#screen').toggle(0);
        });
    });
    
    loadCTO();
    loadCandidateForm();
    
    $('#req_1').text('');

});