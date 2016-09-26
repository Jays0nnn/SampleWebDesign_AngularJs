var app = angular.module('myApp', []);

app.controller('myCtrl', function() {

    var vm = this;

    vm.toggle = false;

    vm.animate = function() {

        vm.toggle = !vm.toggle;
        console.log(vm.toggle);

    };

});

//Need to Separate Angular & Jquery file

$(document).ready(function() {

    var nav = $('.nav');


    $.fn.scrollView = function() {
        return this.each(function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    };

    $('#arrow').click(function() {

        $('.section').scrollView();


    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 696) {
            console.log('hey');

            nav.addClass("fixed");

        } else {

            nav.removeClass("fixed");

        }

    });



});
