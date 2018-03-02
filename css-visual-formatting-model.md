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
  <span style="text-decoration: underline;">English</span>&nbsp;
  <a href="./css-visual-formatting-model-zh.html">中文</a>
</div>


# CSS Visual Formatting Model
> W3C: <https://www.w3.org/TR/CSS2/visuren.html>
> MDN: <https://developer.mozilla.org/docs/Web/Guide/CSS/Visual_formatting_model>


### Diagram

<section class="case" style="overflow: auto; padding: 20px 25px; white-space: nowrap;">
  <div style="display: inline-block; margin-right: 100px;">
    <div style="width: 260px; height: 150px; border: 1px solid; border-radius: 50%; text-align: center; line-height: 90px;">
      <strong>Block-level Box</strong>
      <p style="margin-top: -20px;"><small style="color: #888">(Anonymous)</small> Block Box</p>
    </div>
    <div style="width: 260px; height: 200px; border: 1px dotted; border-radius: 50%; text-align: center; line-height: 200px; margin-top: -70px; position: relative;">
      <span>Block Container Box</span>
      <div style="position: absolute; top: 0; right: 0; left: 0; bottom: 0; margin: -3px; clip: rect(168px auto auto auto); border: 10px dashed #f7f7f7; border-radius: 50%;"></div>
    </div>
    <div style="width: 260px; height: 200px; border: 1px solid; border-radius: 50%; text-align: center; line-height: 200px; margin-top: -70px;">
      <p style="margin: -65px auto -135px;">Atomic Inline-level Box</p>
      <strong>Inline-level Box</strong>
      <p style="margin-top: -140px;"><small style="color: #888">(Anonymous)</small> Inline Box</p>
    </div>
    <div style="width: 260px; height: 150px; border: 1px dotted #aaa; border-radius: 50%; text-align: center; line-height: 220px; margin-top: -70px;">
      <small style="display: inline-block; color: #666; line-height: normal;">Contents participate in container's <br> Inline Formatting Context</small>
    </div>
  </div>
  <div style="display: inline-block; font-size: small; vertical-align: top;">
    <p style="margin-top: 35px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px solid #888; line-height: 0; vertical-align: middle;"></span>
      <strong>display { block | list-item | table }</strong></p>
    <p style="margin-top: 10px;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;"></span>
      Replaced Block-level Element, Table Element</p>
    <p style="margin-top: 58px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px dashed #ccc; line-height: 0; vertical-align: middle;"></span>
      Establish: <strong>Block Formatting Context</strong> (BFC)</p>
    <p style="margin-top: 10px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px dashed #ccc; line-height: 0; vertical-align: middle;"></span>
      Establish: <strong>Inline Formatting Context</strong> (IFC)</p>
    <p style="margin-top: 30px; position: relative;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;"></span>
      Non-replaced Inline Block, Non-replaced Table Cells</p>
    <p style="margin-top: -2px;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;">
        <span style="display: inline-block; width: 50px; margin-top: -29px; margin-left: -48px; border-top: 1px dashed #ccc; line-height: 0; vertical-align: middle; transform: rotate(30deg);"></span>
      </span>
      Replaced Inline-level Element, Inline-table Element</p>
    <p style="margin-top: -3px;">
      <span style="display: inline-block; width: 150px; margin-left: -150px; border-top: 1px solid #888; line-height: 0; vertical-align: middle;"></span>
      <strong>display { inline | inline-block | inline-table }</strong></p>
    <p style="margin-top: 38px;">
      <span style="display: inline-block; width: 180px; margin-left: -150px; border-top: 1px solid #ccc; line-height: 0; vertical-align: middle;"></span>
      Non-replaced Inline Element</p>
  </div>
</section>

<br>

<div>
  <fieldset class="bfc"> <legend>BFC</legend>
    <fieldset class="b-c-box"> <legend>Block Container Box</legend>
      <fieldset class="b-box"> <legend>Block Box</legend> </fieldset>
      <fieldset class="b-l-box"> <legend>Block-level Box</legend> </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">or</div>

<div>
  <fieldset class="b-c-box"> <legend>Block Container Box</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="b-box"> <legend>Block Box</legend> </fieldset>
      <fieldset class="b-l-box"> <legend>Block-level Box</legend> </fieldset>
      <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="i-l-box"> <legend>Inline-level Box</legend> </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">or</div>

<div>
  <fieldset class="b-c-box"> <legend>Block Container Box</legend>
    <fieldset class="ifc"> <legend>IFC</legend>
      <fieldset class="f-box" style="margin-left: -20px;">
        <legend>Float Box</legend>
        <fieldset class="bfc"> <legend>BFC</legend> </fieldset>
      </fieldset>
      <fieldset class="l-box"> <legend>Line Box</legend>
        <fieldset class="i-box"> <legend>Inline Box</legend> </fieldset>
        <fieldset class="at-i-l-box"> <legend>Atomic Inline-level Box</legend> </fieldset>
        <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>


<br><hr><br>


### Case 1: Block-level Element in Inline-level Element
> [W3C] When an inline box contains an in-flow block-level box, the **inline box** (and its inline ancestors within the same line box) **are broken around** the block-level box (and any block-level siblings that are consecutive or separated only by collapsible whitespace and/or out-of-flow elements), splitting the inline box into two boxes (even if either side is empty), one on each side of the block-level box(es). The line boxes before the break and after the break are enclosed in anonymous block boxes, and the block-level box becomes a sibling of those anonymous boxes.

```html
  <span>
    <span>Inline-level Element</span>
    <p>Block-level Element</p>
    Inline Text
  </span>
```

<section class="case">
  <span class="ifc" style="border: 1px solid; padding: 10px;">
    <span style="border: 1px solid; padding: 5px; background: white;">Inline-level Element</span>
    <p style="border: 1px solid; margin: 12px 0; padding: 2px 5px; background: white;">Block-level Element</p>
    Inline Text
  </span>
</section>

<div class="tc">as</div>

<div>
  <fieldset class="i-box" style="display: block; opacity: 0.5;">
      <legend>Inline Box</legend>
    <fieldset class="ifc"> <legend>IFC</legend>
      <fieldset class="l-box"> <legend>Line Box</legend>
        <fieldset class="i-box"> <legend>Inline Box</legend> </fieldset>
        <fieldset class="b-l-box"> <legend>Block-level Box</legend> </fieldset>
        <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">↓↓↓</div>

<div>
  <fieldset class="bfc"> <legend>BFC</legend>
    <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
      <fieldset class="i-box" style="border-right: 0;">
        <legend>Inline Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="l-box"> <legend>Line Box</legend>
            <fieldset class="i-box"> <legend>Inline Box</legend> </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
    <fieldset class="b-l-box"> <legend>Block-level Box</legend> </fieldset>
    <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
      <fieldset class="i-box" style="border-left: 0;">
        <legend>Inline Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="l-box"> <legend>Line Box</legend>
            <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>



<br><br>



### Case 2: `float` vs `display:inline-block`
> [W3C] However, the current and subsequent **line boxes** created next to the float are **shortened** as necessary to make room for the margin box of the float.


```html
  <div>
    <span style="float: left;">Float Box</span>
    <p style="display: inline-block;">Atomic Inline-level Box</p>
  </div>
```

<section class="case">
  <div class="ifc" style="border: 1px solid; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">Float Box</span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; display: inline-block;">
      Atomic Inline-level Box <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quas quisquam beatae illo, sit aliquid. Debitis architecto distinctio perspiciatis commodi!
    </p>
  </div>
  <div class="ifc" style="border: 1px solid; margin-top: 15px; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">
      Float Box <br> Lorem ipsum dolor sit amet commodi!
    </span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; display: inline-block;">
      Atomic Inline-level Box
    </p>
  </div>
</section>

<div class="tc">as</div>

<div>
  <fieldset class="b-box" style="opacity: 0.5;">
      <legend>Block Box</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="a-b-box" style="float: left;">
        <legend>Anonymous Block Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="i-box"> <legend>Inline Box</legend> </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="b-box"> <legend>Block Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">↓↓↓</div>

<div>
  <fieldset class="b-box"> <legend>Block Box</legend>
    <fieldset class="ifc"> <legend>IFC</legend>
      <fieldset class="f-box" style="margin-left: -20px;">
        <legend>Float Box</legend>
        <fieldset class="bfc"> <legend>BFC</legend>
          <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
            <fieldset class="ifc"> <legend>IFC</legend>
              <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="l-box"> <legend>Line Box</legend>
        <fieldset class="at-i-l-box"> <legend>Atomic Inline-level Box</legend>
          <fieldset class="bfc"> <legend>BFC</legend>
            <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
              <fieldset class="ifc"> <legend>IFC</legend>
                <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
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
> [W3C] The border box of a table, a block-level replaced element, or an element in the normal flow that establishes a new block formatting context (such as an element with 'overflow' other than 'visible') **must not overlap** the margin box of any floats **in the same block formatting context** as the element itself.

```html
  <div>
    <span style="float: left;">Float Element</span>
    <p style="overflow: hidden;">Block-level Element</p>
  </div>
```

<section class="case">
  <div class="ifc" style="border: 1px solid; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">Float ELement</span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; overflow: hidden;">
      Block-level Element <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quas quisquam beatae illo, sit aliquid. Debitis architecto distinctio perspiciatis commodi!
    </p>
  </div>
  <div class="ifc" style="border: 1px solid; margin-top: 15px; padding: 10px;">
    <span style="border: 1px solid; background: white; margin: 10px; padding: 5px; width: 200px; float: left;">
      Float Element <br> Lorem ipsum dolor sit amet commodi!
    </span>
    <p style="border: 1px solid; background: white; margin: 10px; padding: 5px; overflow: hidden;">
      Block-level Element
    </p>
  </div>
</section>

<div class="tc">as</div>

<div>
  <fieldset class="b-box" style="opacity: 0.5;">
      <legend>Block Box</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="a-b-box" style="float: left;">
        <legend>Anonymous Block Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="i-box"> <legend>Inline Box</legend> </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="b-box"> <legend>Block Box</legend>
        <fieldset class="ifc"> <legend>IFC</legend>
          <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div class="tc">↓↓↓</div>

<div>
  <fieldset class="b-box"> <legend>Block Box</legend>
    <fieldset class="bfc"> <legend>BFC</legend>
      <fieldset class="f-box" style="margin-left: -20px;">
        <legend>Float Box</legend>
        <fieldset class="bfc"> <legend>BFC</legend>
          <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
            <fieldset class="ifc"> <legend>IFC</legend>
              <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset class="b-box"> <legend>Block Box</legend>
        <fieldset class="bfc"> <legend>BFC</legend>
          <fieldset class="a-b-box"> <legend>Anonymous Block Box</legend>
            <fieldset class="ifc"> <legend>IFC</legend>
              <fieldset class="a-i-box"> <legend>Anonymous Inline Box</legend> </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>


<br><br><hr><br>


### Block-level Element <small style="font-weight: normal;"><sup>[[MDN](https://developer.mozilla.org/docs/Web/HTML/Block-level_elements)]</sup></small>
- Condition: `display` { `block` | `list-item` | `table` }
- Genarate: Block-level Box <small>(Principal + Additional)</small>

### Inline-level Element <small style="font-weight: normal;"><sup>[[MDN](https://developer.mozilla.org/docs/Web/HTML/Inline_elements)]</sup></small>
- Condition: `display` { `inline` | `inline-block` | `inline-table` }
- Genarate: Inline-level Box

<br><hr><br>

### Block-level Box <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#block-boxes)]</sup></small>
> Participating in Block Formatting Context

##### 1. Block Box
> Block-level Box ∩ Block Container Box

- Exculde: Table Box, Replaced Element

##### 2. Anonymous Block Box

##### 3. Block Container Box
> Contains only Block-level Box or only Inline-level Box

- Inculde: Non-replaced Inline Block, Non-replaced Table Cell

<br>

### Inline-level Box <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#inline-boxes)]</sup></small>

##### 1. Inline Box
> Contents participate in container's Inline Formatting Context

- Condition: `display` { `inline` } & Non-replaced Element

##### 2. Anonymous Inline Box

##### 3. Atomic Inline-level Box
> Contents not participate in container's Inline Formatting Context

- Inculde: Replaced Inline-level Element, Inline-block Element, Inline-table Element


<br><hr><br>

### Block Formatting Context <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#block-formatting), [MDN](https://developer.mozilla.org/docs/Web/Guide/CSS/Block_formatting_context)]</sup></small>

- Contain: Block-level Box

#### Rules

- Begin at the top of [Containing Block](https://www.w3.org/TR/CSS2/visuren.html#containing-block), boxes are **laid out** one after the other **vertically**.
- The **vertical distance** between two sibling boxes is determined by **'margin'**.
- Vertical [**Margins Collapsed**](https://www.w3.org/TR/CSS2/box.html#collapsing-margins) between adjacent boxes in same BFC.
- Each box's left **outer edge** touches the left edge of containing block (vice versa for right-to-left). <br> This is true even in the presence of **floats**, unless the box establishes a new <abbr title="Block Formatting Context">BFC</abbr>.

#### Conditions
> Establish a new <abbr title="Block Formatting Context">BFC</abbr> for contents

- Floats
    - `float` { `left` | `right` }
- Absolutely positioned element
    - `position` { `absolute` | `fixed` }
- Block Container Box that are not Block Box
    - `display` { `inline-*`| `table-*`} - { `table-column`| `table-column-group` }
- <u>Block Box</u>  with 'overflow' other than 'visible'
    - `overflow` { `auto` | `hidden` | `scroll` }
- Root element or it's container `<html>`

<br>

### Inline Formatting Context <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting)]</sup></small>

- Contain: Inline-level Box

#### Rules

- Begin at the top of [Containing Block](https://www.w3.org/TR/CSS2/visuren.html#containing-block), boxes are **laid out** one after the other **horizontally**.
- The boxes may be **aligned** vertically in different ways: <br> their bottoms or tops may be aligned, or the baselines of text within them may be aligned.

#### Line Box
> The rectangular area that contains the boxes that form a line

- Line box's height ≥ tallest box's height.
- When box's height <small>＜</small> line box's height, it's **vertical alignment** is determined by the **'vertical-align'**.
- When boxes's total width <small>＜</small> line box's width, their **horizontal distribution** is determined by the **'text-align'**
- When boxes cannot fit within a line box, they are distributed among two or more **vertically-stacked** line boxes.
- Line boxes are stacked with **no vertical separation** (except as specified elsewhere) and they **never overlap**.
- When an **Inline Box exceeds** a line box, it is **split** into several boxes across several line boxes. <br> It's margins, borders, and padding have **no visual effect** where the split occurs. <br> If it cannot be split (e.g. `white-space:nowrap`), then it **overflows** the line box.
- In general, line box's left **edge** touches the left edge of containing block (vice versa for right-to-left). <br> However, **floating boxes** may come between the containing block edge and the line box edge.

<div></div>
