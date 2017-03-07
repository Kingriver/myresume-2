$(document).ready(function() {
    //重置hash地址
    if (window.location.hash) {
        var oldHash = window.location.hash.split('#')[1].split('&');
        var newHash;
        for (var i in oldHash) {
            if (oldHash[i].indexOf('page') != -1) newHash = oldHash[i];
        }
        history.replaceState({}, newHash, window.location.href.split('#')[0] + '#' + newHash);
    }

    //浏览器窗口改变，设置页面尺寸
    setSize();

    $(window).resize(function() {
        setSize();
    });

    //fullpage插件设置页面切换
    $.fn.fullpage({
        scrollingSpeed: 500,
        css3: true,
        scrollOverflow: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
        menu: 'header,aside',
        verticalCentered: false,

        // 页面结构生成后回调
        afterRender: function(param) {
            localStorage.setItem('index', 1);

            $('#page-home').addClass('icon-kongxinyuan');
            $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', $.fn.conllapseFun);
            $('#contactMe').off('click').on('click', function(e) {
                $('.qrcode img').removeClass('bounceOutRight').addClass('bounceInLeft');
            });
            $('.qrcode img').off('click').on('click', function(e) {
                $(this).removeClass('bounceInLeft').addClass('bounceOutRight');
            });
        },

        // 离开该页面的时候
        // 滚动前的回调函数，接收 index、nextIndex 和 direction
        // 3个参数：
        // index 是离开的“页面”的序号，从1开始计算；
        // nextIndex 是滚动到的“页面”的序号，从1开始计算；
        // direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index, nextIndex, direction) {
            if ($.gallery) {
                $.gallery.close();
                $.pswpElement.remove();
                $.pswpElement = null;
                $.gallery = null;
            }
            $('.my-gallery').hide();
            if (index == 2) {
                $('#war-experience .title').hide();
                $('#war-experience .work-item').hide();
            }
            if (index == 3) {
                $('#war-project-1 .title').hide();
                $('#war-project-1 .project-item').hide();
            }
            if (index == 4) {
                $('#war-project-2 .title').hide();
                $('#war-project-2 .project-item').hide();
            }
            if (index == 5) {
                $('#war-project-3 .title').hide();
                $('#war-project-3 .project-item').hide();
            }
            if (index == 6) {
                $('#war-project-4 .title').hide();
                $('#war-project-4 .project-item').hide();
            }
            if (index == 7) {
                $('#war-project-5 .title').hide();
                $('#war-project-5 .project-item').hide();
            }
            if (index == 8) {
                $('#war-project-6 .title').hide();
                $('#war-project-6 .project-item').hide();
            }
            if (index == 9) {
                $('#war-project-7 .title').hide();
                $('#war-project-7 .project-item').hide();
            }
            if (index == 10) {
                $('#war-education .title').hide();
                $('#war-education .education-item').hide();
            }
            if (index == 11) {
                $('#war-introducation .title').hide();
                $('#war-introducation .introducation-item').hide();
            }
        },


        // 滚动到某一屏后的回调函数，
        // 接收 anchorLink 和 index 两个参数，
        // anchorLink 是锚链接的名称，index 是序号，从1开始计算

        afterLoad: function(anchorLink, index) {
            localStorage.setItem('index', index);

            if (index == 1) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-home').addClass('icon-kongxinyuan');
            }
            if (index == 2) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-exprience').addClass('icon-kongxinyuan');
                if (!$('#war-experience')[0].style.backgroundImage) $('#war-experience').bubble();

                $('#war-experience .title').fadeIn(500, function() {
                    $('#war-experience .work-item:eq(0)').fadeIn(300, function() {
                        $('#war-experience .work-item:eq(1)').fadeIn(300);
                        var _height = $('#war-experience .work-name:eq(0)').height() + $('#war-experience .work-content:eq(0)').height()
                        $('#war-experience .work-content:eq(1)').height(_height - $('#war-experience .work-name:eq(1)').height());
                    });
                });
            }
            if (index == 3) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-1').addClass('icon-kongxinyuan');
                $('#war-project-1 .my-gallery').initPhotoSwipeFromDOM();

                $('#war-project-1 .title').fadeIn(500, function() {
                    $('#war-project-1 .project-item').fadeIn(300, function() {
                        $('#war-project-1 .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 4) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-2').addClass('icon-kongxinyuan');
                if (!$('#war-project-2')[0].style.backgroundImage) $('#war-project-2').bubble();

                $('#war-project-2 .title').fadeIn(500, function() {
                    $('#war-project-2 .project-item').fadeIn(300);
                });
            }
            if (index == 5) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-3').addClass('icon-kongxinyuan');
                $('#war-project-3 .my-gallery').initPhotoSwipeFromDOM();

                $('#war-project-3 .title').fadeIn(500, function() {
                    $('#war-project-3 .project-item').fadeIn(300, function() {
                        $('#war-project-3 .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 6) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-4').addClass('icon-kongxinyuan');
                if (!$('#war-project-4')[0].style.backgroundImage) $('#war-project-4').bubble();
                $('#war-project-4 .my-gallery').initPhotoSwipeFromDOM();

                $('#war-project-4 .title').fadeIn(500, function() {
                    $('#war-project-4 .project-item').fadeIn(300, function() {
                        $('#war-project-4 .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 7) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-5').addClass('icon-kongxinyuan');
                $('#war-project-5 .my-gallery').initPhotoSwipeFromDOM();

                $('#war-project-5 .title').fadeIn(500, function() {
                    $('#war-project-5 .project-item').fadeIn(300, function() {
                        $('#war-project-5 .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 8) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-6').addClass('icon-kongxinyuan');
                if (!$('#war-project-6')[0].style.backgroundImage) $('#war-project-6').bubble();

                $('#war-project-6 .title').fadeIn(500, function() {
                    $('#war-project-6 .project-item').fadeIn(300, function() {
                        // $('#war-project-5 .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 9) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-project-7').addClass('icon-kongxinyuan');
                $('#war-project-7 .my-gallery').initPhotoSwipeFromDOM();

                $('#war-project-7 .title').fadeIn(500, function() {
                    $('#war-project-7 .project-item').fadeIn(300, function() {
                        $('#war-project-7 .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 10) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-education').addClass('icon-kongxinyuan');
                $('#war-education .my-gallery').initPhotoSwipeFromDOM();

                $('#war-education .title').fadeIn(500, function() {
                    $('#war-education .education-item').fadeIn(300, function() {
                        $('#war-education .my-gallery').fadeIn(300);
                    });
                });
            }
            if (index == 11) {
                $('.page').removeClass('icon-kongxinyuan');
                $('#page-introducation').addClass('icon-kongxinyuan');

                $('#war-introducation .title').fadeIn(500, function() {
                    $('#war-introducation .introducation-item').fadeIn(300, function() {});
                });
            }
        }
    });

});

//设置元素尺寸
var setSize = function() {
    var nWinHeight = $(window).height();

    $('.war').css({ 'height': nWinHeight });
    $('aside').css({ 'top': (nWinHeight - $('aside').height()) / 2 });
};