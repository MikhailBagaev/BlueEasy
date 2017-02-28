(function ($) {
  'use strict';

  $(document).ready(function () {
    
    function blueasyTabs() {
      var $wrapper = $('.tab-wrapper'),
          $menu = $wrapper.find('.tab-menu li'),
          $content = $wrapper.find('.thumbs-row');
      
      $content.not(':first-of-type').hide();
      $content.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
      $menu.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });
      
      $menu.click(function(e) {
        e.preventDefault();
        var $getWrapper = $(this).closest($wrapper),
            dataTab = $(this).attr('data-tab');
        
        $getWrapper.find($menu).find('a').removeClass('active');
        $(this).find('a').addClass('active');
        
        $getWrapper.find($content).hide();
        $getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
      });
    }
    blueasyTabs();
    //end blueasyTabs

    function blueeasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-target');

      $trigger.click(function() {
          $(this).next($menu).stop().slideToggle(300);
      });   

      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });    
    };

    blueeasyMenu();
    //end blueeasyMenu
  });
  //fancybox
  $(document).ready(function() {
        $('.fancybox').fancybox({
            padding : 5,
            openEffect  : 'elastic',
            closeBtn: false
        });
    });
}(jQuery));


   