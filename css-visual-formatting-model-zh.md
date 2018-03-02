---
  author: dondevi
  create: 2018-02-27
  update: 2018-03-02
---

<style>
  .markdown-body { position: relative; }
  label { cursor: pointer; }
  .case { background-color: #f7f7f7; padding: 20px 15px; overflow: hidden; }
  fieldset.bfc, fieldset.ifc { border: none; }
  .bfc { background-color: highlight; }
  .ifc { background-color: infobackground; }
    .bfc > legend, .ifc > legend { color: gray; font-size: smaller; }
  .i-l-box, .i-box, .a-i-box, .at-i-l-box { display: inline; }
    .i-l-box { background-color: rgba(255,255,255,0.6); }
    .i-box, .a-i-box { background-color: transparent; }
  .b-l-box, .b-box, .a-b-box, .b-c-box,.at-i-l-box, .f-box { background-color: white; }
    .bfc > .b-c-box { background-color: rgba(255,255,255,0.5); }
  .b-l-box, .b-box, .b-c-box, .i-box, .at-i-l-box, .f-box { border-style: solid; }
    .a-b-box, .a-i-box { border-style: dashed; }
  .l-box { background-color: transparent; border-style: dotted; }
    .l-box > legend { color: gray; }
  .f-box { float: left; margin-top: -2px; margin-right: 10px; box-shadow: 5px 6px 5px #888; }
  .tc { text-align: center; }
</style>

<div style="position: absolute; top: 50px; right: 50px; font-size: small;">
  <a href="./css-visual-formatting-model.html">English</a>
  &nbsp;<span style="text-decoration: underline;">中文</span>
</div>


# CSS 视觉格式化模型
> W3C: <http://www.ayqy.net/doc/css2-1/visuren.html>
> MDN: <https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model>


### 图示

<section class="case" style="overflow: auto; padding: 20px 25px; white-space: nowrap;">
  <div style="display: inline-block; margin-right: 100px;">
    <div style="width: 260px; height: 150px; border: 1px solid; border-radius: 50%; text-align: center; line-height: 90px;">
      <strong>块级盒</strong>
      <p style="margin-top: -20px;"><small style="color: #888">(匿名)</small> 块盒</p>
    </div>
    <div style="width: 260px; height: 200px; border: 1px dotted; border-radius: 50%; text-align: center; line-height: 200px; margin-top: -70px; position: relative;">
      <span>块容器盒</span>
      <div style="position: absolute; top: 0; right: 0; left: 0; bottom: 0; margin: -3px; clip: rect(168px auto auto auto); border: 10px dashed #f7f7f7; border-radius: 50%;"></div>
    </div>
    <div style="width: 260px; height: 200px; border: 1px solid; border-radius: 50%; text-align: center; line-height: 200px; margin-top: -70px;">
      <p style="margin: -65px auto -135px;">原子行内级盒</p>
      <strong>行内级盒</strong>
      <p style="margin-top: -140px;"><small style="color: #888">(匿名)</small> 行内盒</p>
    </div>
    <div style="width: 260px; height: 150px; border: 1px dotted #aaa; border-radius: 50%; text-align: center; line-height: 220px; margin-top: -70px;">
      <small style="display: inline-block; color: #666; line-height: normal;">内容参与父容器的 <br> 行内格式化上下文</small>
    </div>
  </div>
  <div style="display: inline-block; font-size: small; vertical-align: top;">
    <p style="margin-top: 35px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px solid #888; line-height: 0; vertical-align: middle;"></span>
      <strong>display { block | list-item | table }</strong></p>
    <p style="margin-top: 10px;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;"></span>
      块级替换元素, 表格元素</p>
    <p style="margin-top: 58px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px dashed #ccc; line-height: 0; vertical-align: middle;"></span>
      创建: <strong>块级格式化上下文</strong> (BFC)</p>
    <p style="margin-top: 10px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px dashed #ccc; line-height: 0; vertical-align: middle;"></span>
      创建: <strong>行内格式化上下文</strong> (IFC)</p>
    <p style="margin-top: 30px; position: relative;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;"></span>
      非替换行内块, 非替换表格单元</p>
    <p style="margin-top: -2px;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;">
        <span style="display: inline-block; width: 50px; margin-top: -29px; margin-left: -48px; border-top: 1px dashed #ccc; line-height: 0; vertical-align: middle; transform: rotate(30deg);"></span>
      </span>
      行内级替换元素, 行内表格元素</p>
    <p style="margin-top: -3px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px solid #888; line-height: 0; vertical-align: middle;"></span>
      <strong>display { inline | inline-block | inline-table }</strong></p>
    <p style="margin-top: 38px;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;"></span>
      非替换行内元素</p>
  </div>
</section>

<br>

<div>
  <fieldset class="bfc"> <legend>BFC</legend>
    <fieldset class="b-c-box"> <legend>块容器盒</legend>
      <fieldset class="b-box"> <legend>块盒</legend> </fieldset>
      <fieldset class="b-l-box"> <legend>块级盒</legend> </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">or</div>

<div>
  <fieldset class="b-c-box"> <legend>块容器盒</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="b-box"> <legend>块盒</legend> </fieldset>
      <fieldset class="b-l-box"> <legend>块级盒</legend> </fieldset>
      <fieldset class="a-b-box"> <legend>匿名块盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="i-l-box"> <legend>行内级盒</legend> </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">or</div>

<div>
  <fieldset class="b-c-box"> <legend>块容器盒</legend>
    <fieldset class="ifc"> <legend>IFC</legend>
      <fieldset class="f-box" style="margin-left: -20px;">
        <legend>浮动盒</legend>
        <fieldset class="bfc"> <legend>BFC</legend> </fieldset>
      </fieldset>
      <fieldset class="l-box"> <legend>行盒</legend>
        <fieldset class="i-box"> <legend>行内盒</legend> </fieldset>
        <fieldset class="at-i-l-box"> <legend>原子行内级盒</legend> </fieldset>
        <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>


<br><hr><br>


### Case 1: 块级元素 in 行内级元素
> [W3C] 当行内盒包含流内块级盒时，该行内盒（及与它处于同一行盒里的行内祖先）会打破周围的块级盒（以及任何连续的或只被可合并的空白符和/或流外元素隔开的块级兄弟），把**行内盒分成两个盒**（即使有一边是空的），分别位于块级盒的两边。拆分前的行盒与拆分后的行盒都被包进匿名块盒，并且该块级盒作为这些匿名盒的兄弟。

```html
  <span>
    <span>行内级元素</span>
    <p>块级元素</p>
    Inline Text
  </span>
```

<section class="case">
  <span class="ifc" style="border: 1px solid; padding: 10px;">
    <span style="border: 1px solid; padding: 5px; background: white;">行内级元素</span>
    <p style="border: 1px solid; margin: 12px 0; padding: 2px 5px; background: white;">块级元素</p>
    Inline Text
  </span>
</section>

<div class="tc">as</div>

<div>
  <fieldset class="i-box" style="display: block; opacity: 0.5;">
      <legend>行内盒</legend>
    <fieldset class="ifc"> <legend>IFC</legend>
      <fieldset class="l-box"> <legend>行盒</legend>
        <fieldset class="i-box"> <legend>行内盒</legend> </fieldset>
        <fieldset class="b-l-box"> <legend>块级盒</legend> </fieldset>
        <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">↓↓↓</div>

<div>
  <fieldset class="bfc"> <legend>BFC</legend>
    <fieldset class="a-b-box"> <legend>匿名块盒</legend>
      <fieldset class="i-box" style="border-right: 0;">
        <legend>行内盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="l-box"> <legend>行盒</legend>
            <fieldset class="i-box"> <legend>行内盒</legend> </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
    <fieldset class="b-l-box"> <legend>块级盒</legend> </fieldset>
    <fieldset class="a-b-box"> <legend>匿名块盒</legend>
      <fieldset class="i-box" style="border-left: 0;">
        <legend>行内盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="l-box"> <legend>行盒</legend>
            <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>



<br><br>



### Case 2: `float` vs `display:inline-block`
> [W3C] 然而，挨着浮动（盒）创建的当前及后续的**行盒**，会根据需要**被缩短**，以便给浮动（盒）的外边距框让出空间。

```html
  <div>
    <span style="float: left;">浮动盒</span>
    <p style="display: inline-block;">原子行内级盒</p>
  </div>
```

<section class="case">
  <div class="ifc" style="border: 1px solid; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">浮动盒</span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; display: inline-block;">
      原子行内级盒 <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quas quisquam beatae illo, sit aliquid. Debitis architecto distinctio perspiciatis commodi!
    </p>
  </div>
  <div class="ifc" style="border: 1px solid; margin-top: 15px; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">
      浮动盒 <br> Lorem ipsum dolor sit amet commodi!
    </span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; display: inline-block;">
      原子行内级盒
    </p>
  </div>
</section>

<div class="tc">as</div>

<div>
  <fieldset class="b-box" style="opacity: 0.5;">
      <legend>块盒</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="a-b-box" style="float: left;">
        <legend>匿名块盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="i-box"> <legend>行内盒</legend> </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="b-box"> <legend>块盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">↓↓↓</div>

<div>
  <fieldset class="b-box"> <legend>块盒</legend>
    <fieldset class="ifc"> <legend>IFC</legend>
      <fieldset class="f-box" style="margin-left: -20px;">
        <legend>浮动盒</legend>
        <fieldset class="bfc"> <legend>BFC</legend>
          <fieldset class="a-b-box"> <legend>匿名块盒</legend>
            <fieldset class="ifc"> <legend>IFC</legend>
              <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="l-box"> <legend>行盒</legend>
        <fieldset class="at-i-l-box"> <legend>原子行内级盒</legend>
          <fieldset class="bfc"> <legend>BFC</legend>
            <fieldset class="a-b-box"> <legend>匿名块盒</legend>
              <fieldset class="ifc"> <legend>IFC</legend>
                <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
              </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>



<br><br>



### Case 3: `float` vs `overflow:hidden`
> [W3C] 表格、块级替换元素或常规流中建立了新的块格式化上下文的元素（例如一个'overflow'不为'visible'的元素）不能和与元素自身处于**同一块格式化上下文中**的任何浮动（盒）的外边距框重叠。

```html
  <div>
    <span style="float: left;">浮动元素</span>
    <p style="overflow: hidden;">块级元素</p>
  </div>
```

<section class="case">
  <div class="ifc" style="border: 1px solid; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">浮动元素</span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; overflow: hidden;">
      块级元素 <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quas quisquam beatae illo, sit aliquid. Debitis architecto distinctio perspiciatis commodi!
    </p>
  </div>
  <div class="ifc" style="border: 1px solid; margin-top: 15px; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">
      浮动元素 <br> Lorem ipsum dolor sit amet commodi!
    </span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; overflow: hidden;">
      块级元素
    </p>
  </div>
</section>

<div class="tc">as</div>

<div>
  <fieldset class="b-box" style="opacity: 0.5;">
      <legend>块盒</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="a-b-box" style="float: left;">
        <legend>匿名块盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="i-box"> <legend>行内盒</legend> </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="b-box"> <legend>块盒</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">↓↓↓</div>

<div>
  <fieldset class="b-box"> <legend>块盒</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="f-box" style="margin-left: -20px;">
        <legend>浮动盒</legend>
        <fieldset class="bfc"> <legend>BFC</legend>
          <fieldset class="a-b-box"> <legend>匿名块盒</legend>
            <fieldset class="ifc"> <legend>IFC</legend>
              <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="b-box"> <legend>块盒</legend>
        <fieldset class="bfc"> <legend>BFC</legend>
          <fieldset class="a-b-box"> <legend>匿名块盒</legend>
            <fieldset class="ifc"> <legend>IFC</legend>
              <fieldset class="a-i-box"> <legend>匿名行内盒</legend> </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>


<br><br><hr><br>


### 块级元素 <small style="font-weight: normal;"><sup>[[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)]</sup></small>
- 条件: `display` { `block` | `list-item` | `table` }
- 生成: 块级盒 <small>(主要 + 额外)</small>

### 行内级元素 <small style="font-weight: normal;"><sup>[[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)]</sup></small>
- 条件: `display` { `inline` | `inline-block` | `inline-table` }
- 生成: 行内级盒

<br><hr><br>

### 块级盒 <small style="font-weight: normal;"><sup>[[W3C](http://www.ayqy.net/doc/css2-1/visuren.html#block-boxes)]</sup></small>
> 参与块级格式化上下文

##### 1. 块盒
> 块级盒 ∩ 块容器盒

- 除了: 表格元素, 替换元素

##### 2. 匿名块盒

##### 3. 块容器盒
> 只包含块级盒 或 只包含行内级盒

- 包括: 非替换行内块, 非替换表格单元

<br>

### 行内级盒 <small style="font-weight: normal;"><sup>[[W3C](http://www.ayqy.net/doc/css2-1/visuren.html#inline-boxes)]</sup></small>

##### 1. 行内盒
> 其内容参与父容器的行内格式化上下文 (IFC)

- 条件: 非替换行内元素

##### 2. 匿名行内盒

##### 3. 原子行内级盒
> 其内容参与父容器的行内格式化上下文 (IFC)

- 包括: 行内级替换元素, 行内块元素, 行内表格元素


<br><hr><br>

### 块级格式化上下文 <small style="font-weight: normal;"><sup>[[W3C](http://www.ayqy.net/doc/css2-1/visuren.html#block-formatting), [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)]</sup></small>

- 包含: 块级盒

#### 规则

- 从[包含块](http://www.ayqy.net/doc/css2-1/visuren.html#containing-block)的顶部开始，盒在**垂直**方向一个接一个地**放置**。
- 两个兄弟盒之间的**垂直距离**由 **'margin'** 属性决定。
- 同一 <abbr title="块级格式化上下文">BFC</abbr> 中的相邻块级盒之间的**垂直外边距**会[**合并**](http://www.ayqy.net/doc/css2-1/box.html#collapsing-margins)。
- 每个盒的左**外边界**挨着包含块的左外边界（从右向左反之亦然），<br> 即使存在**浮动**这也成立，除非该盒建立了一个新的 <abbr title="块级格式化上下文">BFC</abbr>。

#### 条件
> 将为其内容创建新的 <abbr title="块级格式化上下文">BFC</abbr>

- 浮动
    - `float` { `left` | `right` }
- 绝对定位元素
    - `position` { `absolute` | `fixed` }
- 不是块盒的块容器盒
    - `display` { `inline-*`| `table-*`} - { `table-column`| `table-column-group` }
- 'overflow' 不为 'visible' 的<u>块盒</u>
    - `overflow` { `auto` | `hidden` | `scroll` }
- 根元素或其父容器: `<html>`

<br>

### 行内格式化上下文 <small style="font-weight: normal;"><sup>[[W3C](http://www.ayqy.net/doc/css2-1/visuren.html#inline-formatting)]</sup></small>

- 包含: 行内级盒

#### 规则

- 从[包含块](http://www.ayqy.net/doc/css2-1/visuren.html#containing-block)的顶部开始，盒在**水平**方向一个接一个地**放置**。
- 盒可能会以不同的方式**垂直对齐**：以它们的底部或者顶部对齐，或者以它们里面的文本的基线对齐。

#### 行盒
> 包含来自同一行的盒的矩形区域

- 行盒高度 ≥ 最高的盒的高度
- 当盒高度 <small>＜</small> 行盒高度，它的**垂直对齐方式**由 **'vertical-align'** 决定。
- 当所有盒的总宽度 <small>＜</small> 行盒宽度，它们的 **水平分布** 由 **'text-align'** 决定。
- 当多个盒在水平方向上不能共存于一个行盒时，它们会被分到两个或多个**垂直堆叠**行盒里。
- 行框**没有垂直间隔**地堆放（除非在其它地方有特别说明）并且它们**不会重叠**。
- 当**行内盒超出**行盒宽度时，它会被**分成几个盒**，并且这些盒会跨多行盒分布，<br> 它的外边距，边框和内边距在发生分割的地方将**没有视觉效果**，<br> 如果一个行内块无法分割（例 `white-space:nowrap`），那么它会从行盒溢出。
- 一般来说，一个行盒的左**边界**挨着其包含块的左边界（从右向左反之亦然），<br> 然而，**浮动盒**可能会跑到包含块边界与行盒边界之间。

<div></div>
