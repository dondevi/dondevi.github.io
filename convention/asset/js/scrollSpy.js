/**
 * Scroll spy （滚动监听）
 *
 * 当滚动至目标区域时，激活导航中相应链接的样式
 *
 * @requires
 *   Use DOM 3：querySelectorAll, dataset
 *   Use ECMAScript 5：forEach
 *
 * @author dondevi
 * @create 2014-06-25
 */

var scrollSpy = function (selector, offset) {

  /**
   * ------------------------------
   * Config
   * ------------------------------
   */
  var SELECTOR  = selector || "a";  // Select "<a>" elements to spy
  var CLASSNAME = "active";         // Class name for active state
  var OFFSET    = offset || 130;    // Offset form top side of viewport


  /**
   * ------------------------------
   * Util
   * ------------------------------
   */

  // Convert NodeList to Array
  var nodeList_to_array = function(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };

  // Get main "<a>" elements
  var getItems = function() {
    var anchors = document.querySelectorAll(SELECTOR);
    return nodeList_to_array(anchors);
  };

  // Get offsetTop set of target elements
  var getTops = function(items) {

    var result = [];
    var target = null;
    var curTop = document.body.scrollTop;

    items.forEach(function (item, i) {
      target = document.getElementById(item.hash.slice(1));
      if (target) {
        result.push(target.offsetTop + curTop);
      } else {
        items.splice(i--, 1); // Delete null
      }
    });

    // Add the max one
    result.push(document.body.scrollHeight);

    return result;

  };


  /**
   * ------------------------------
   * Core
   * ------------------------------
   */

  // Variable
  var items   = getItems();
  var tops    = getTops(items);
  var curTop  = 0;

  /**
   * Check which item show be actived
   *
   * !! This function will run many times
   */
  var checkActive = function() {

    curTop = (document.body.scrollTop || document.documentElement.scrollTop) + OFFSET;

    tops.forEach(function (top, i) {
      if (tops[i] < curTop && tops[i+1] > curTop) {
        items[i].classList.add(CLASSNAME);
        items[i].scrollIntoViewIfNeeded();
      } else if (items[i]) {
        items[i].classList.remove(CLASSNAME);
      }
    });

  };

  /**
   * ------------------------------
   * Init
   * ------------------------------
   */

  // Listen event
  var timer = -1;
  window.onscroll = function (event) {
    window.clearTimeout(timer);
    timer = window.setTimeout(checkActive, 300);
  }

  // The first time
  checkActive();

};
