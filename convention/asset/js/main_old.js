/**
 * 前端规范系列
 *
 * 包括代码风格、编程实践、工作流
 *
 * @author 董经伟
 * @create 2014-06-25
 */

/**
 * 滚动监听
 *
 * 使用了 DOM 3 的新特性：
 *   querySelectorAll, dataset
 *
 * 使用了 ECMAScript 5 的新特性：
 *   forEach
 */
var scrollSpy = function () {

  // Config
  var SELECTOR = ".menu-item>a";
  var CLASSNAME = "active";
  var OFFSET = 130;

  // Variable
  var menuItems = document.querySelectorAll(SELECTOR);


  // The top of target elements
  var tops = (function() {

    var tmp = [];
    var item = null;
    var target = null;

    for (var i = 0; item = menuItems[i]; i++) {

      target = document.getElementById(item.dataset["target"]);

      if (target) {
        tmp.push(target.getBoundingClientRect().top + document.body.scrollTop);
      }

    }

    // Add the max one
    tmp.push(document.body.scrollHeight);

    return tmp;

  })();


  // Function
  var checkActive = function () {

    var curTop = document.body.scrollTop + OFFSET;

    tops.forEach(function (item, i) {
      if (tops[i] < curTop && tops[i+1] > curTop) {
        menuItems[i].classList.add(CLASSNAME);
      } else {
        menuItems[i].classList.remove(CLASSNAME);
      }
    });

  };


  // Listen event
  window.onscroll = checkActive;

  // The first time
  checkActive();

}


window.onload = function () {
  scrollSpy();
};
