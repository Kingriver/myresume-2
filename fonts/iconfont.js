;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M954.056 833.333q5.64 22.5-2.34 42.66t-24.84 35.64-41.25 24.39-52.5 8.91q-177.18 0.93-316.89 0.93h-318.75q-33.75 0-59.52-12.18t-41.25-30-20.64-38.91 1.41-37.98q5.64-13.14 11.25-27.18 4.68-12.18 11.25-27.66t14.070-31.41l35.64-86.25h106.89l-40.32 118.14h603.75l-40.32-118.14h102.18q19.68 47.82 35.64 86.25 6.57 16.89 13.14 32.82t11.73 28.59 8.43 21.57 3.27 9.84zM482.486 659.903q-17.82-20.64-40.77-51.57t-47.34-63.75-48.27-64.68-42.66-55.32q-21.57-25.32-16.89-41.73t31.89-16.41q15 0.93 40.32-0.48t42.18-1.41q18.75 0 23.43-11.25t4.68-30q0-20.64-0.48-45.48t-0.48-51.090-0.48-51.57-0.48-46.89q0-9.39 1.41-19.68t6.57-18.75 15-14.070 26.73-5.64q19.68 0 36.090-0.48t37.98-0.48q30.93 0 41.73 14.52t11.73 46.41v36.57q0 21.57 0.48 45.93t0.48 48.75v44.070q0 27.18 5.64 43.59t25.32 15.48q14.070 0 34.23 0.93t35.16 0.93q25.32 0 32.34 13.59t-9.84 35.16q-17.82 22.5-41.25 54.39t-48.27 66.090-48.75 66.57-42.66 55.77q-16.89 21.57-32.34 22.020t-32.34-20.16z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shixinyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.009 306.22c-113.653 0-205.786 92.12-205.786 205.779 0 113.64 92.134 205.78 205.787 205.78 113.644 0 205.769-92.141 205.769-205.78 0.001-113.66-92.122-205.779-205.769-205.779z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-erweima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M411.69 60.096v-0.311h-250.031c-52.238 0-94.544 42.020-94.841 93.972h-0.028v236.18c0 2.809 0.569 5.442 1.41 7.965 7.598 44.653 46.458 78.693 93.458 78.693h250.031v-0.27c44.234-2.767 80.187-35.684 87.379-78.423 0.868-2.524 1.467-5.156 1.467-7.965v-236.18h-0.030c-0.244-49.931-39.428-90.566-88.817-93.661zM450.605 377.127c0 27.475-22.363 49.727-49.933 49.727h-234.049c-27.569 0-49.902-22.252-49.902-49.727v-217.861c0-27.476 22.333-49.742 49.902-49.742h234.050c27.569 0 49.933 22.267 49.933 49.742v217.861zM956.014 151.452c-0.245-48.697-38.478-88.341-86.645-91.37v-0.298h-218.122c-50.961 0-92.207 41.004-92.507 91.666h-0.028v230.413c0 2.74 0.543 5.317 1.411 7.773 7.382 43.568 45.317 76.769 91.123 76.769h218.122v-0.257c43.147-2.714 78.204-34.831 85.289-76.512 0.841-2.455 1.385-5.034 1.385-7.773v-230.412h-0.030zM907.333 369.367c0 26.796-21.791 48.518-48.711 48.518h-202.49c-26.918 0-48.737-21.723-48.737-48.518v-212.545c0-26.797 21.818-48.518 48.737-48.518h202.49c26.921 0 48.711 21.723 48.711 48.518v212.545zM402.411 543.729v-0.297h-243.303c-50.825 0-92.018 40.896-92.29 91.45h-0.028v229.802c0 2.753 0.544 5.334 1.383 7.761 7.355 43.442 45.21 76.591 90.933 76.591h243.303v-0.269c43.036-2.675 78.015-34.735 85.042-76.322 0.867-2.428 1.412-5.007 1.412-7.761v-229.802h-0.055c-0.244-48.575-38.339-88.138-86.398-91.153zM440.291 852.242c0 26.73-21.763 48.384-48.573 48.384h-219.967c0 0-0.027 0-0.053 0h-7.762c-26.811 0-48.572-21.653-48.572-48.384v-212.029c0-26.704 21.762-48.385 48.572-48.385h227.785c26.811 0 48.573 21.681 48.573 48.385v212.029zM749.971 786.342c-16.773 0-30.341 13.093-30.341 29.239v58.477c0 16.189 13.568 29.266 30.341 29.266 16.767 0 30.337-13.076 30.337-29.266v-58.477c0-16.146-13.569-29.239-30.337-29.239zM879.247 757.076c-16.771 0-30.339 13.078-30.339 29.237v87.743c0 16.174 13.568 29.242 30.339 29.242 16.797 0 30.366-13.071 30.366-29.242v-87.743c0-16.158-13.57-29.237-30.366-29.237zM879.247 581.6c-16.771 0-30.339 13.091-30.339 29.267v58.477c0 16.144 13.568 29.237 30.339 29.237 16.797 0 30.366-13.093 30.366-29.237v-58.477c0-16.175-13.57-29.267-30.366-29.267zM749.971 581.628c-16.773 0-30.341 13.092-30.341 29.252v116.997c0 16.147 13.568 29.225 30.341 29.225 16.767 0 30.337-13.076 30.337-29.225v-116.997c0-16.159-13.569-29.252-30.337-29.252zM619.009 727.876c-16.714 0-30.311 13.010-30.311 29.199v116.982c0 16.174 13.598 29.242 30.311 29.242 16.826 0 30.393-13.071 30.393-29.242v-116.982c0.001-16.189-13.568-29.199-30.393-29.199zM619.009 581.6c-16.714 0-30.311 13.091-30.311 29.267v29.252c0 16.158 13.598 29.225 30.311 29.225 16.826 0 30.393-13.068 30.393-29.225v-29.252c0.001-16.175-13.568-29.267-30.393-29.267z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-git" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M945.062 471.922l-392.963-392.934c-22.613-22.641-59.316-22.641-81.984 0l-91.294 91.294 68.709 68.709c11.025-5.259 23.344-8.241 36.366-8.241 46.603 0 84.375 37.772 84.375 84.375 0 13.022-2.953 25.369-8.241 36.366l112.472 112.472c11.025-5.259 23.344-8.241 36.366-8.241 46.603 0 84.375 37.772 84.375 84.375s-37.772 84.375-84.375 84.375-84.375-37.772-84.375-84.375c0-13.022 2.953-25.369 8.241-36.366l-112.472-112.472c-2.672 1.294-5.428 2.419-8.241 3.403v234.647c32.766 11.588 56.25 42.806 56.25 79.566 0 46.603-37.772 84.375-84.375 84.375s-84.375-37.772-84.375-84.375c0-36.731 23.484-67.978 56.25-79.566v-234.647c-32.766-11.587-56.25-42.806-56.25-79.566 0-13.022 2.953-25.369 8.241-36.366l-68.709-68.709-260.072 260.044c-22.641 22.669-22.641 59.344 0 81.984l392.991 392.934c22.613 22.641 59.316 22.641 81.984 0l391.106-391.106c22.641-22.641 22.641-59.372 0-81.984z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kongxinyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M507.85 829.595c-181.415 0-328.998-147.589-328.998-328.998s147.589-328.998 328.998-328.998 328.998 147.589 328.998 328.998-147.589 328.998-328.998 328.998zM507.85 215.472c-157.214 0-285.136 127.922-285.136 285.136s127.922 285.136 285.136 285.136c157.228 0 285.136-127.922 285.136-285.136s-127.908-285.136-285.136-285.136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-blog" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M284.643364 492.949109l-76.287477 0 0 105.222483 81.544201 0c42.951231 0 64.460104-17.96107 64.460104-53.924143C351.709829 512.684592 328.469522 495.600495 284.643364 492.949109zM342.510306 423.25377c-1.774413-28.932959-22.36231-43.850717-61.810764-44.725644l-72.343655 0 0 94.709035 72.343655 0C318.395072 471.485261 339.005482 454.815603 342.510306 423.25377zM580.57533 441.674305c-42.974767 0.874927-64.900126 28.932959-65.774029 84.173075 0.873903 50.858318 22.799262 77.163427 65.774029 78.915327 39.447431-1.7519 59.618842-28.494984 60.493769-80.228229C638.441249 473.675136 618.268814 446.055079 580.57533 441.674305zM511.076466 63.73765c-247.744477 0-448.573435 200.806445-448.573435 448.530456 0 247.768013 200.828958 448.573435 448.573435 448.573435 247.746524 0 448.571389-200.805422 448.571389-448.573435C959.647855 264.545118 758.821967 63.73765 511.076466 63.73765zM293.842887 615.277178 187.305455 615.277178 187.305455 358.792643l99.965759 0c49.982368 2.651386 76.725452 23.678282 80.229253 63.146179-2.626827 30.685883-21.925359 50.420343-57.866942 59.181891 42.952254 7.885598 65.75254 30.248931 68.381413 67.067488C375.386064 592.060407 347.329055 614.401228 293.842887 615.277178zM449.046714 613.9653l-21.049409 0 0-255.171634 21.049409 0L449.046714 613.9653zM577.945433 619.218954c-54.385655-2.626827-82.859149-33.313733-85.487-92.057649 1.730411-65.774029 31.56081-99.505271 89.428775-101.279684 52.612265 3.504824 80.232322 35.96512 82.861196 97.315396C663.872454 586.344219 634.937448 618.34505 577.945433 619.218954zM773.91164 682.344666c-30.707372-0.874927-53.048193-9.199523-67.066465-24.991184l7.884574-10.514471c16.647145 11.391445 35.505655 17.522072 56.553017 18.422581 45.581128 0.853437 67.944462-20.195971 67.067488-63.146179l0-36.81958c-11.388375 30.707372-33.751708 45.163619-67.067488 43.412742-47.352471-1.752924-71.906703-31.124881-73.65758-88.138386 2.626827-60.495816 29.370935-92.057649 80.229253-94.686523 24.553209 0.87595 44.726667 14.039761 60.495816 39.447431l0-35.505655 22.363334 0 0 164.403351C864.218412 654.726655 835.283406 684.098613 773.91164 682.344666zM783.111163 442.989253c-41.22082 1.7519-62.686714 27.619034-64.438615 77.579913 1.7519 47.353494 21.48636 72.344678 59.180867 74.973552 35.942607-5.256724 56.116065-27.15957 60.495816-65.75254l0-28.932959C833.970504 469.294362 815.548946 449.997877 783.111163 442.989253z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)