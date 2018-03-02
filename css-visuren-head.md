<style>
  .markdown-body {
    position: relative;
  }
  fieldset { background: white; }
  legend { text-shadow: 0 0 10px white; }
  label { cursor: pointer; }
  .case { background: #f7f7f7; padding: 20px 15px; overflow: hidden; }
  .bfc { background: highlight; }
  .ifc { background: infobackground; }
</style>

<script>
  var FcProto = Object.create(HTMLElement.prototype);
  FcProto.createdCallback = function () {
    var legend = document.createElement("legend");
    switch (this.getAttribute("type")) {
      case "block":
        // legend.textContent = "Block Formatting Context";
        legend.textContent = "BFC";
        this.style.background = "highlight"
        break;
      case "inline":
        // legend.textContent = "Inline Formatting Context";
        legend.textContent = "IFC";
        this.style.background = "infobackground"
        break;
    }
    this.style.border = "none";
    legend.style.color = "gray";
    legend.style.fontSize = "smaller";
    this.appendChild(legend);
  };
  var AnonyProto = Object.create(HTMLElement.prototype);
  AnonyProto.createdCallback = function () {
    var legend = document.createElement("legend");
    if ("block" === this.getAttribute("type")) {
      legend.textContent = "Anonymous Block Box";
    }
    if ("inline" === this.getAttribute("type")) {
      legend.textContent = "Anonymous Inline Box";
      this.style.display = "inline";
      this.style.background = "none";
    }
    this.style.borderStyle = "dashed";
    this.appendChild(legend);
  };
  var BoxProto = Object.create(HTMLElement.prototype);
  BoxProto.createdCallback = function () {
    var legend = document.createElement("legend");
    this.style.borderStyle = "solid";
    switch (this.getAttribute("type")) {
      case "block":
        legend.textContent = "Block Box";
        break;
      case "block-level":
        legend.textContent = "Block-level Box";
        break;
      case "block-container":
        legend.textContent = "Block Container Box";
        break;
      case "inline":
        legend.textContent = "Inline Box";
        this.style.display = this.style.display || "inline";
        this.style.background = "none";
        break;
      case "inline-level":
        legend.textContent = "Inline-level Box";
        this.style.display = this.style.display || "inline";
        this.style.background = "rgba(255,255,255,0.6)";
        break;
      case "atomic-inline-level":
        legend.textContent = "Atomic Inline-level Box";
        this.style.display = this.style.display || "inline";
        break;
      case "line":
        legend.textContent = "Line Box";
        legend.style.color = "gray";
        this.style.background = "none";
        this.style.borderStyle = "dotted";
        break;
      case "float":
        legend.textContent = "Float Box";
        this.style.float = "left";
        this.style.marginTop = "-2px";
        this.style.marginRight = "10px";
        this.style.boxShadow = "5px 6px 5px #888";
        break;
      // case "holder":
      //   legend.textContent = "Holder";
      //   this.style.visibility = "hidden";
      //   break;
    }
    this.appendChild(legend);
  };
  document.registerElement("formatting-context", { prototype: FcProto, extends: "fieldset" });
  document.registerElement("anonymous-box", { prototype: AnonyProto, extends: "fieldset" });
  document.registerElement("model-box", { prototype: BoxProto, extends: "fieldset" });
</script>

<!-- <div style="position: absolute; top: 15px; right: 20px; font-size: small;">
  <span style="text-decoration: underline;">English</span>&nbsp;
  <a href="./css-visual-formatting-model-zh.html">中文</a>
</div> -->
