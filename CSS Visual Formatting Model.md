<!--
/**
 * @author dondevi
 * @create 2018-02-27
 */
-->

# CSS Visual Formatting Model
> W3C: <https://www.w3.org/TR/CSS2/visuren.html>
> MDN: <https://developer.mozilla.org/docs/Web/Guide/CSS/Visual_formatting_model>

<style>
  fieldset { background: white; }
  legend { text-shadow: 0 0 10px white; }
  .fs-bfc { background: highlight; }
  .fs-ifc { background: infobackground; }
</style>

<br>

### Block-level Element <small style="font-weight: normal;"><sup>[[MDN](https://developer.mozilla.org/docs/Web/HTML/Block-level_elements)]</sup></small>
- Display: `block`, `list-item`, `table`
- Genarate: Block-level Box <small>(Principal + Additional)</small>, Block Container Box

### Inline-level Element <small style="font-weight: normal;"><sup>[[MDN](https://developer.mozilla.org/docs/Web/HTML/Inline_elements)]</sup></small>
- Display: `inline`, `inline-block`, `inline-table`
- Genarate: Inline-level Box, Block Container Box

<br><hr><br>

### Block-level Box <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#block-boxes)]</sup></small>
> Participating in Block Formatting Context

##### 1. Block Box
- Block-level Box ∩ Block Container Box
- Except: Table Box, Replaced Element

##### 2. Anonymous Block Box

##### 3. Block Container Box
- Contain: Block-level Box, Inline Formatting Context

<br>

### Inline-level Box <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#inline-boxes)]</sup></small>

##### 1. Inline Box
> Participating in Inline Formatting Context

- Display: `inline` & non-replaced element

##### 2. Anonymous Inline Box

##### 3. Atomic Inline-level Box
> Not Participating in Inline Formatting Context

- inline-level element, inline-block element, inline-table element


<br><hr><br>

### Block Formatting Context <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#block-formatting), [MDN](https://developer.mozilla.org/docs/Web/Guide/CSS/Block_formatting_context)]</sup></small>
- Display: `inline-*`, `table-*`, `flex`, `grid`, `flow-root`
- Other: float, position, overflow, contain, column
- Element: `<html>`
- Contain: Block-level Box,
- Vertical, Margin collapse, Clear float

### Inline Formatting Context <small style="font-weight: normal;"><sup>[[W3C](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting)]</sup></small>
- Contain: Inline-level Box

<br><hr><br>

<div>
  <fieldset>
    <legend>Block Container Box</legend>
    <fieldset class="fs-bfc" style="border-style: dotted;">
      <legend style="color: gray;">Block Formatting Context</legend>
      <fieldset>
        <legend>Block Box</legend>
      </fieldset>
      <fieldset>
        <legend>Block-level Box</legend>
      </fieldset>
      <fieldset style="border-style: dashed;">
        <legend>Anonymous Block Box</legend>
        <fieldset style="display: inline;">
          <legend>Inline-level Box</legend>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<br>

<div>
  <fieldset>
    <legend>Block Container Box</legend>
    <fieldset class="fs-ifc" style="border-style: dotted;">
      <legend style="color: gray;">Inline Formatting Context</legend>
      <fieldset style="display: inline;">
        <legend>Inline Box</legend>
        <fieldset style="visibility: hidden;">
          <legend>Holder</legend>
          <fieldset style="visibility: hidden;">
            <legend>Holder</legend>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset style="display: inline; border-style: dashed;">
        <legend>Anonymous Inline Box</legend>
        <fieldset style="visibility: hidden;">
          <legend>Holder</legend>
          <fieldset style="visibility: hidden;">
            <legend>Holder</legend>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset style="display: inline; border-style: dashed;">
        <legend>Anonymous Inline Box <abbr title="not sure">?</abbr></legend>
        <fieldset class="fs-bfc" style="display: inline; border-style: dotted;">
          <legend style="color: gray;">Block Formatting Context</legend>
          <fieldset style="display: inline;">
            <legend>Atomic Inline-level Box</legend>
          </fieldset>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>

<br><hr><br>

<div style="opacity: 0.5;">
  <fieldset class="fs-ifc" style="border-style: dotted;">
    <legend style="color: gray;">Inline Formatting Context</legend>
    <fieldset style="display: inline;">
      <legend>Inline-level Box</legend>
    </fieldset>
    <fieldset>
      <legend>Block-level Box</legend>
    </fieldset>
    <fieldset style="display: inline;">
      <legend>Inline-level Box</legend>
    </fieldset>
  </fieldset>
</div>

<div style="text-align: center;">↓↓↓</div>

<div>
  <fieldset class="fs-bfc" style="border-style: dotted;">
    <legend style="color: gray;">Block Formatting Context</legend>
    <fieldset style="border-style: dashed;">
      <legend>Anonymous Block Box</legend>
      <fieldset class="fs-ifc" style="border-style: dotted; border-right: 3px solid white;">
        <legend style="color: gray;">Inline Formatting Context (part 1)</legend>
        <fieldset style="display: inline;" >
          <legend>Inline-level Box</legend>
        </fieldset>
      </fieldset>
    </fieldset>
    <fieldset>
      <legend>Block-level Box</legend>
    </fieldset>
    <fieldset style="border-style: dashed;">
      <legend>Anonymous Block Box</legend>
      <fieldset class="fs-ifc" style="border-style: dotted; border-left: 3px solid white;">
        <legend style="color: gray;">Inline Formatting Context (part 2)</legend>
        <fieldset style="display: inline;">
          <legend>Inline-level Box</legend>
        </fieldset>
      </fieldset>
    </fieldset>
  </fieldset>
</div>
