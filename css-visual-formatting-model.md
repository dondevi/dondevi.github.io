---
  references:
    - css-visuren-head.md
  author: dondevi
  create: 2018-02-27
---

# CSS Visual Formatting Model
> W3C: <https://www.w3.org/TR/CSS2/visuren.html>
> MDN: <https://developer.mozilla.org/docs/Web/Guide/CSS/Visual_formatting_model>


<br>

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
> Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

- Condition:
    - Block containers that are not block boxes
        - `display` { `inline-*`| `table-?*`} - { `table-column`| `table-column-group` }
    - Block Element & `overflow` { `auto` | `hidden` | `scroll` }
    - Root element: `<html>`
    - `position` { `absolute` | `fixed` }
    - `float` { `left` | `right` }
- Contain: Block-level Box,
<!-- - Feature: Vertical, Margin collapse -->

### Inline Formatting Context <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting)]</sup></small>
- Contain: Inline-level Box


<br><hr><br>


### Diagram

<section class="case" style="position: relative; overflow: auto; margin-bottom: 30px; padding: 20px 25px; white-space: nowrap;">
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
    <p style="margin-top: 145px; position: relative;">
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

<div>
  <fieldset is="model-box" type="block-container">
    <fieldset is="formatting-context" type="block">
      <fieldset is="model-box" type="block"></fieldset>
      <fieldset is="model-box" type="block-level"></fieldset>
      <fieldset is="anonymous-box" type="block">
        <fieldset is="model-box" type="inline-level"></fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div style="text-align: center;">or</div>

<div>
  <fieldset is="formatting-context" type="block">
    <fieldset is="model-box" type="block-container" style="background: rgba(255,255,255,0.5);">
      <fieldset is="model-box" type="block-level"></fieldset>
      <fieldset is="model-box" type="block-level"></fieldset>
    </fieldset>
  </fieldset>
</div>

<div style="text-align: center;">or</div>

<div>
  <fieldset is="model-box" type="block-container">
    <fieldset is="formatting-context" type="inline">
      <fieldset is="model-box" type="float" style="margin-left: -20px;">
        <fieldset is="formatting-context" type="block"></fieldset>
      </fieldset>
      <fieldset is="model-box" type="line">
        <fieldset is="model-box" type="inline"></fieldset>
        <fieldset is="model-box" type="atomic-inline-level"></fieldset>
        <fieldset is="anonymous-box" type="inline"></fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>



<br><br><hr><br>



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

<div style="text-align: center;">as</div>

<div>
  <fieldset is="model-box" type="inline" style="display: block; opacity: 0.5;">
    <fieldset is="formatting-context" type="inline">
      <fieldset is="model-box" type="inline"></fieldset>
      <fieldset is="model-box" type="block-level"></fieldset>
      <fieldset is="anonymous-box" type="inline"></fieldset>
    </fieldset>
  </fieldset>
</div>

<div style="text-align: center;">↓↓↓</div>

<div>
  <fieldset is="formatting-context" type="block">
    <fieldset is="anonymous-box" type="block">
      <fieldset is="model-box" type="inline" style="border-right: 0;">
        <fieldset is="formatting-context" type="inline">
          <fieldset is="model-box" type="inline"></fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
    <fieldset is="model-box" type="block-level"></fieldset>
    <fieldset is="anonymous-box" type="block">
      <fieldset is="model-box" type="inline" style="border-left: 0;">
        <fieldset is="formatting-context" type="inline">
          <fieldset is="anonymous-box" type="inline"></fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>



<br><br><br><br>



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

<div style="text-align: center;">as</div>

<div>
  <fieldset is="model-box" type="block" style="opacity: 0.5;">
    <fieldset is="formatting-context" type="block">
      <fieldset is="anonymous-box" type="block" style="float: left;">
        <fieldset is="formatting-context" type="inline">
          <fieldset is="model-box" type="inline""></fieldset>
        </fieldset>
      </fieldset>
      <fieldset is="model-box" type="block">
        <fieldset is="formatting-context" type="inline">
          <fieldset is="anonymous-box" type="inline"></fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div style="text-align: center;">↓↓↓</div>

<div>
  <fieldset is="model-box" type="block">
    <fieldset is="formatting-context" type="inline">
      <fieldset is="model-box" type="float" style="margin-left: -20px;">
        <fieldset is="formatting-context" type="block">
          <fieldset is="anonymous-box" type="block">
            <fieldset is="formatting-context" type="inline">
              <fieldset is="anonymous-box" type="inline"></fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset is="model-box" type="line">
        <fieldset is="model-box" type="atomic-inline-level">
          <fieldset is="formatting-context" type="block">
            <fieldset is="anonymous-box" type="block">
              <fieldset is="formatting-context" type="inline">
                <fieldset is="anonymous-box" type="inline"></fieldset>
              </fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>



<br><br><br><br>



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

<div style="text-align: center;">as</div>

<div>
  <fieldset is="model-box" type="block" style="opacity: 0.5;">
    <fieldset is="formatting-context" type="block">
      <fieldset is="anonymous-box" type="block" style="float: left;">
        <fieldset is="formatting-context" type="inline">
          <fieldset is="model-box" type="inline""></fieldset>
        </fieldset>
      </fieldset>
      <fieldset is="model-box" type="block">
        <fieldset is="formatting-context" type="inline">
          <fieldset is="anonymous-box" type="inline"></fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<div style="text-align: center;">↓↓↓</div>

<div>
  <fieldset is="model-box" type="block">
    <fieldset is="formatting-context" type="block">
      <fieldset is="model-box" type="float" style="margin-left: -20px;">
        <fieldset is="formatting-context" type="block">
          <fieldset is="anonymous-box" type="block">
            <fieldset is="formatting-context" type="inline">
              <fieldset is="anonymous-box" type="inline"></fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset is="model-box" type="block">
        <fieldset is="formatting-context" type="block">
          <fieldset is="anonymous-box" type="block">
            <fieldset is="formatting-context" type="inline">
              <fieldset is="anonymous-box" type="inline"></fieldset>
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>
