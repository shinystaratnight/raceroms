(function ($) {
    $(document).ready(function() {

        $.fn.is_on_screen = function(){
            var win = $(window);
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();

            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();

            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };

        //Default plugins
        $("select:not(.hide)").each(function () {
            $(this).select2({
                width: '100%',
                minimumResultsForSearch: Infinity
            });
        });

        $("select:not(.hide)").on("select2:open", function() {

            //$('.select2-search input').prop('focus',false);

            var stmClass = $(this).data('class');
            $('.select2-dropdown--below').parent().addClass(stmClass);

            window.scrollTo(0, $(window).scrollTop() + 1);
            window.scrollTo(0, $(window).scrollTop() - 1);
        });

        $('img.lazy').lazyload({
            effect: "fadeIn",
            failure_limit: Math.max('img'.length - 1, 0)
        });

        var uniform_selectors = ':checkbox:not("#createaccount"),' +
            ':radio:not(".input-radio")';

        $(uniform_selectors).not('#make_featured').uniform({});

        var yLG = $('#youtube-play-video-wrap');
        yLG.on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            $(this).lightGallery({
                iframe: true,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    controls: 0
                },
                dynamic: true,
                dynamicEl: [{
                    src  : $('.video-popup-wrap').find('iframe').attr('src')
                }],
                download: false,
                mode: 'lg-fade',
            });
        })

        $('.owl-stage, .stm-single-image, .boat-gallery').lightGallery({
            selector: '.stm_fancybox',
            mode : 'lg-fade',
            download: false
        });

        $('.owl-stage').lightGallery({
            selector: '.fancy-iframe',
            mode: 'lg-fade',
            download: false
        })

        $('.fancy-iframe').lightGallery({
            selector: 'this',
            iframeMaxWidth: '80%',
            mode: 'lg-fade',
            download: false
        })

        $('#stm-google-map').lightGallery({
            selector: 'this',
            iframeMaxWidth: '80%',
            mode: 'lg-fade',
            download: false
        })

        $('.stm-carousel').lightGallery({
            selector: '.stm_fancybox',
            mode : 'lg-fade',
            download: false
        });

        $('.stm-menu-trigger').on('click', function(){

            $('.stm-opened-menu-listing').toggleClass('opened');
            $(this).toggleClass('opened');
            if($(this).hasClass('opened') && $(this).hasClass('stm-body-fixed')) {
                $('body').addClass('body-noscroll');
            } else {
                $('body').removeClass('body-noscroll');
            }
        });

        $('.stm-share').on('click', function (e) {
            e.preventDefault();
        });

        $('.stm-shareble').on({
            mouseenter: function () {
                $(this).parent().find('.stm-a2a-popup').addClass('stm-a2a-popup-active');
            },
            mouseleave: function () {
                $(this).parent().find('.stm-a2a-popup').removeClass('stm-a2a-popup-active');
            }
        });

        stmShowListingIconFilter();
    });

    $(window).load(function () {
        stmPreloader();
        stm_listing_mobile_functions();
    });

    function stmPreloader() {
        if($('html').hasClass('stm-site-preloader')){
            $('html').addClass('stm-site-loaded');

            setTimeout(function(){
                $('html').removeClass('stm-site-preloader stm-site-loaded');
            }, 250);
        }
    }

    function stm_listing_mobile_functions() {
        $('.listing-menu-mobile > li.menu-item-has-children > a').append('<span class="stm_frst_lvl_trigger"></span>');
        $('body').on('click', '.stm_frst_lvl_trigger', function(e){
            e.preventDefault();
            $(this).closest('li').find('ul.sub-menu').slideToggle();
            $(this).toggleClass('active');
        });

        $('body').on('click', 'a.has-child', function(e){

            if($(this).hasClass('active')) {
                $(this).parent().blur();
                $(this).toggleClass('active');
            } else {
                e.preventDefault();
                $(this).toggleClass('active');
            }
        });
    }

    function stmShowListingIconFilter() {
        $('.stm_icon_filter_label').on('click', function(){

            if(!$(this).hasClass('active')) {
                $(this).closest('.stm_icon_filter_unit').find('.stm_listing_icon_filter').toggleClass('active');
                $(this).closest('.stm_icon_filter_unit').find('.stm_listing_icon_filter .image').hide();

                $(this).addClass('active');
            } else {
                $(this).closest('.stm_icon_filter_unit').find('.stm_listing_icon_filter').toggleClass('active');
                $(this).closest('.stm_icon_filter_unit').find('.stm_listing_icon_filter .image').show();

                $(this).removeClass('active');
            }

        });
    }
})(jQuery)