/**
 * jQuery Line Progressbar
 * Author: KingRayhan<rayhan095@gmail.com>
 * Author URL: http://rayhan.info
 * Version: 1.0.0
 */

 (function ($) {
    'use strict';


    $.fn.LineProgressbar = function (options) {

         options = $.extend({
            percentage: null,
            ShowProgressCount: true,
            duration: 1000,

            // Styling Options
            fillBackgroundColor: '#3498db',
            backgroundColor: '#2c3f52', /*  */
            radius: '0px',
            height: '10px',
            width: '100%'
        }, options);

        $.options = options;
        return this.each(function (index, el) {
            // Markup
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');



            var progressFill = $(el).find('.proggress');
            var progressBar = $(el).find('.progressbar');


            progressFill.css({
                backgroundColor: options.fillBackgroundColor,
                height: options.height,
                borderRadius: options.radius
            });
            progressBar.css({
                width: options.width,
                backgroundColor: options.backgroundColor,
                borderRadius: options.radius
            });

            // Progressing
            progressFill.animate(
                {
                    width: options.percentage + "%"
                },
                {
                    step: function (x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                }
            );
            ////////////////////////////////////////////////////////////////////
        });
    }
    $.fn.progressTo = function (next) {

        let options = $.options;

        return this.each(function (index, el) {

            var progressFill = $(el).find('.proggress');
            var progressBar = $(el).find('.progressbar');

            progressFill.animate(
                {
                    width: next + "%"
                },
                {
                    step: function (x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                }
            );
            ////////////////////////////////////////////////////////////////////
        });
    }

})(jQuery);


$('#prgbar-1','#prgbar-2','#prgbar-3').LineProgressbar();
$('#prgbar-1').LineProgressbar({
  percentage: 100,
  fillBackgroundColor: '#F09246',
  height: '10px',
  radius: '15px'
});

$('#prgbar-2').LineProgressbar({
  percentage: 100,
  fillBackgroundColor: '#F3E45B',
  height: '10px',
  radius: '15px'
});

$('#prgbar-3').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#BFD255',
  height: '10px',
  radius: '15px'
});
$('#prgbar-4').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#F09246',
  height: '10px',
  radius: '15px'
});
$('#prgbar-5').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#F3E45B',
  height: '10px',
  radius: '15px'
});
$('#prgbar-6').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#BFD255',
  height: '10px',
  radius: '15px'
});
