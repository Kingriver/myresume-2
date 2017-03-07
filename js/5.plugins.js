/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


! function($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function() { called = true })
        var callback = function() { if (!called) $($el).trigger($.support.transition.end) }
        setTimeout(callback, duration)
        return this;
    }

    $(function() {
        $.support.transition = transitionEnd()

        if (!$.support.transition) return

        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

! function($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
            '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;

        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }

        if (this.options.toggle) this.toggle();
    }

    Collapse.VERSION = '3.3.7';

    Collapse.TRANSITION_DURATION = 350;

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width');
        return hasWidth ? 'width' : 'height';
    }

    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in')) return

        var activesData;
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return;
        }

        var startEvent = $.Event('show.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        if (actives && actives.length) {
            Plugin.call(actives, 'hide');
            activesData || actives.data('bs.collapse', null);
        }

        var dimension = this.dimension()

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')[dimension](0)
            .attr('aria-expanded', true)

        this.$trigger
            .removeClass('collapsed')
            .attr('aria-expanded', true)

        this.transitioning = 1;

        var complete = function() {
            this.$element
                .removeClass('collapsing')
                .addClass('collapse in')[dimension]('')
            this.transitioning = 0;
            this.$element
                .trigger('shown.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        var scrollSize = $.camelCase(['scroll', dimension].join('-'))

        this.$element
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    }

    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in')) return;

        var startEvent = $.Event('hide.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        var dimension = this.dimension();

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

        this.$element
            .addClass('collapsing')
            .removeClass('collapse in')
            .attr('aria-expanded', false);

        this.$trigger
            .addClass('collapsed')
            .attr('aria-expanded', false);

        this.transitioning = 1;

        var complete = function() {
            this.transitioning = 0;
            this.$element
                .removeClass('collapsing')
                .addClass('collapse')
                .trigger('hidden.bs.collapse');
        };

        if (!$.support.transition) return complete.call(this);

        this.$element[dimension](0)
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };

    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
        if (!this.$element.hasClass('in')) {
            setTimeout(function($el) {
                $el['hide']();
            }, 5000, this);
        }
    };

    Collapse.prototype.getParent = function() {
        return $(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each($.proxy(function(i, element) {
                var $element = $(element);
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
            }, this))
            .end();
    };

    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass('in');

        $element.attr('aria-expanded', isOpen);
        $trigger
            .toggleClass('collapsed', !isOpen)
            .attr('aria-expanded', isOpen);
    };

    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr('data-target') ||
            (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

        return $(target);
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('bs.collapse');
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)));
            if (typeof option == 'string') data[option]();
        });
    }

    var old = $.fn.collapse;

    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this;
    };


    // COLLAPSE DATA-API
    // =================

    $.fn.conllapseFun = function(e) {
        var $this = $(this);

        if (!$this.attr('data-target')) e.preventDefault();

        var $target = getTargetFromTrigger($this);
        var data = $target.data('bs.collapse');
        var option = data ? 'toggle' : $this.data();

        Plugin.call($target, option);
    };



}(jQuery);

! function($) {
    var bubble = function(el) {
        var that = this;
        this.content = null;
        this.move = true;
        this.data = {
            radiusRange: [5, 45],
            speedRange: [-5, 5],
            scrollHeight: null,
            scrollWdith: null,
            renderNumer: 10,
            bgColor: null
        };
        this.bgColors = [
            'rgba(144, 180, 75, .5)',
            'rgba(181, 202, 160, .6)',
            'rgba(185, 158, 75, .6)',
            'rgba(140, 138, 124, .6)',
            'rgba(240, 114, 128, .6)',
            'rgba(59, 186, 176, .5)',
            'rgba(55, 60, 56, .4)',
            'rgba(55, 107, 109, .3)'
        ];
        this.balls = [];
        this.ele = {
            wrap: el,
            canvas: document.createElement('canvas')
        };

        this.creatRandom = function(startInt, endInt) { //生产随机数
            var iResult;
            iResult = startInt + (Math.floor(Math.random() * (endInt - startInt + 1)));
            return iResult
        };
        this.init = function() {
            that.data.scrollWdith = that.ele.wrap.scrollWidth;
            that.data.scrollHeight = that.ele.wrap.scrollHeight;
            that.content = that.ele.canvas.getContext('2d');
            that.ele.canvas.width = that.data.scrollWdith;
            that.ele.canvas.height = that.data.scrollHeight;

            that.data.renderNumer = Math.round(that.ele.canvas.width * that.ele.canvas.height / (Math.pow(30, 2) * that.creatRandom(10, 15)));
            for (var i = 0; i < that.data.renderNumer; i++) {
                that.addBall();
            }
            that.data.bgColor = that.bgColors[that.creatRandom(0, 6)];
            that.drawBall();

            if (that.move) that.handleDevice();
        };
        this.addBall = function() {
            var aRandomColor = [];
            aRandomColor.push(that.creatRandom(8, 190));
            aRandomColor.push(that.creatRandom(25, 210));
            aRandomColor.push(that.creatRandom(40, 150));
            var iRandomRadius = that.creatRandom(that.data.radiusRange[0], that.data.radiusRange[1]);
            var oTempBall = {
                coordsX: that.creatRandom(iRandomRadius, that.ele.canvas.width - iRandomRadius),
                coordsY: that.creatRandom(iRandomRadius, that.ele.canvas.height - iRandomRadius),
                radius: iRandomRadius,
                bgColor: 'rgba(' + aRandomColor[0] + ',' + aRandomColor[1] + ',' + aRandomColor[2] + ', 0.5)',
                alpha: that.creatRandom(1, 9) * 0.1
            };
            that.balls.push(oTempBall)
        };
        this.drawBall = function(x, y) {
            var i, iSize;
            var x = x || 0,
                y = y || 0;
            that.content.clearRect(0, 0, that.ele.canvas.width, that.ele.canvas.height);
            for (var i = 0, iSize = that.balls.length; i < iSize; i++) {
                var oTarger = that.balls[i];
                that.content.beginPath();
                that.content.arc(oTarger.coordsX + x, oTarger.coordsY + y, oTarger.radius, 0, 10);
                that.content.fillStyle = oTarger.bgColor;
                that.content.globalAlpha = oTarger.alpha;
                that.content.fill();
            }
            that.ele.wrap.style.background = that.data.bgColor + ' url(' + that.ele.canvas.toDataURL() + ')';
        };
        this.handleDevice = function() {
            window.requestAnimFrame = (function() {
                return function(callback) {
                    window.setTimeout(callback, 55);
                };
            })();
            var timefragment = 0, // 时间片计时
                animating = false, //时候动效中
                startBeta = 0,
                startGamma = 0,
                endTop,
                endLeft; // 当前变化度数

            var nTop = 0,
                nLeft = 0;
            window.addEventListener('deviceorientation', function(e) {
                if ($(that.ele.wrap).attr('index') != localStorage.getItem('index')) return;
                var nowts = new Date().getTime();
                // 控制时间片
                if (nowts - timefragment > 1000 && !animating) {
                    timefragment = nowts;
                    var beta = Math.round(e.beta), //横向 X 轴 -180 ~ 180
                        gamma = Math.round(e.gamma); //纵向 Y 轴 -90 ~ 90
                    var _beta = beta - startBeta,
                        _gamma = gamma - startGamma;
                    startBeta = beta;
                    startGamma = gamma;
                    var _top = Math.round(_beta / 180 * 20),
                        _left = Math.round(_gamma / 90 * 10);
                    requestAnimationFrame(step);
                    endTop = nTop + _top;
                    endLeft = nLeft + _left;
                }

                function step() {
                    animating = true;

                    var _y = _top === 0 || nTop == endTop ? 0 : _top > 0 ? 1 : -1;
                    var _x = _left === 0 || nLeft == endLeft ? 0 : _left > 0 ? 1 : -1;

                    nTop += _y;
                    nLeft += _x;

                    that.ele.wrap.style.backgroundPositionY = nTop + 'px';
                    that.ele.wrap.style.backgroundPositionX = nLeft + 'px';
                    if (nTop != endTop || nLeft != endLeft) {
                        requestAnimationFrame(step);
                    } else {
                        animating = false;
                    }
                }
            }, false);
        }

        this.init();
    }

    $.fn.bubble = function() {
        return new bubble(this[0]);
    };
}(jQuery);

! function($) {
    $.fn.initPhotoSwipeFromDOM = function() {
        var that = this;
        // parse slide data (url, title, size ...) from DOM elements 
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for (var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpHTML = $('#photoTemplate').html();
            var bgSelector = that.selector.split(' ')[0];
            if (!$.pswpElement) $.pswpElement = $(pswpHTML).prependTo($(bgSelector)[0])[0];
            var options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            $.gallery = new PhotoSwipe($.pswpElement, PhotoSwipeUI_Default, items, options);
            $.gallery.init();
            if ($.fn.fullpage) $.fn.fullpage.setAllowScrolling(false);
        };

        // loop through all gallery elements and bind events
        var galleryElements = $(this);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
}(jQuery);