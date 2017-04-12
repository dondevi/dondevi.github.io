/**
 * =============================================================================
 *  Scroll spy 滚动监听
 * =============================================================================
 *
 *  当滚动至目标区域时，激活导航中相应链接的样式
 *  Use ECMAScript 5: Array.map, Array.filter
 *  Use DOM 3: querySelectorAll, dataset
 *
 * =============================================================================
 *
 * @author dondevi
 * @create 2014-06-25
 *
 * @update 2017-04-12 dondevi
 *   1.Rebuild
 *
 */
(function (window, document) {

  "use strict";

  /**
   * Scroll Spy
   * @param  {String} anchorSelector
   * @param  {Number} spyOffset
   * @param  {String} activeClass
   */
  window.scrollSpy = function (anchorSelector, spyOffset, activeClass) {

    anchorSelector = anchorSelector  || "a";    // Select "<a>" elements to spy
    spyOffset      = spyOffset    || 130;       // Offset from top side of viewport
    activeClass    = activeClass || "active";   // Class name for active state

    var anchors    = getElements(anchorSelector);
    var targetTops = getTargetTops(anchors);

    // Listen scroll event
    var timer = -1;
    window.onscroll = function (event) {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        checkAnchorActive(anchors, targetTops, spyOffset, activeClass);
      }, 300);
    };

    // The first time
    window.onscroll();

  };



  /**
   * Check which anchor show be actived
   */
  function checkAnchorActive (anchors, targetTops, offset, activeClass) {

    var scrollTop = getScrollTop(offset);

    targetTops.forEach(function (targetTop, index) {
      var anchor = anchors[index];
      var nextTop = targetTops[index + 1];
      if (targetTop < scrollTop && nextTop > scrollTop) {
        anchor.classList.add(activeClass);
        anchor.scrollIntoViewIfNeeded();
      } else if (anchor) {
        anchor.classList.remove(activeClass);
      }
    });

  }

  /**
   * Get offsetTop of each target elements
   * @param  {Array[DOM]} anchors
   * @return {Array}
   */
  function getTargetTops (anchors) {

    var scrollTop = document.body.scrollTop;

    var targetTops = anchors.map(function (anchors) {
      var hash   = anchors.hash.slice(1);
      var target = document.getElementById(hash);
      if (!target) { return false; }
      return target.offsetTop + scrollTop;
    }).filter(function (targetTop) {
      return targetTop;
    })

    targetTops.push(document.body.scrollHeight);

    return targetTops;

  }

  /**
   * Get menu anchors
   * @param  {String}     selector
   * @return {Array[DOM]}
   */
  function getElements (selector) {
    var elements = document.querySelectorAll(selector);
    return toArray(elements);
  }

  /**
   * Get current scroll top
   * @param  {Number} offset
   * @return {Array}
   */
  function getScrollTop (offset) {
    var scrollTop = document.body.scrollTop ||
                    document.documentElement.scrollTop;
    return scrollTop + (offset || 0);
  }

  /**
   * Convert array-like object to array
   * @param  {Object} arrayLike
   * @return {Array}
   */
  function toArray (arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  }


})(window, document);
