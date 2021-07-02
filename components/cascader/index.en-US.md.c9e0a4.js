(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{3036:function(t,e){t.exports={content:["section",["p","Cascade selection box."],["h2","When To Use"],["ul",["li",["p","When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."]],["li",["p","When selecting from a large data set, with multi-stage classification separated for easy selection."]],["li",["p","Chooses cascade items in one float layer for better user experience."]]]],meta:{category:"Components",type:"Data Entry",title:"Cascader",cover:"https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg",filename:"components/cascader/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","Whether allow clear"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","If get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","Whether has border style"],["td","boolean"],["td","true"],["td"]],["tr",["td","changeOnSelect"],["td","Change value on each selection if set to true, see above demo for details"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","The additional css class"],["td","string"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","Initial selected value"],["td","string","[","] ","|"," number","[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"],["td"]],["tr",["td","displayRender"],["td","The render function of displaying selected options"],["td","(label, selectedOptions) => ReactNode"],["td","label => label.join(",["code","/"],")"],["td"]],["tr",["td","dropdownRender"],["td","Customize dropdown content"],["td","(menus: ReactNode) => ReactNode"],["td","-"],["td","4.4.0"]],["tr",["td","expandIcon"],["td","Customize the current item expand icon"],["td","ReactNode"],["td","-"],["td","4.4.0"]],["tr",["td","expandTrigger"],["td","expand current item when click or hover, one of ",["code","click"]," ",["code","hover"]],["td","string"],["td",["code","click"]],["td"]],["tr",["td","fieldNames"],["td","Custom field name for label and value and children"],["td","object"],["td","{ label: ",["code","label"],", value: ",["code","value"],", children: ",["code","children"]," }"],["td"]],["tr",["td","getPopupContainer"],["td","Parent Node which the selector should be rendered to. Default to ",["code","body"],". When position issues happen, try to modify it into scrollable content and position it relative. ",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"example"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","loadData"],["td","To load option lazily, and it cannot work with ",["code","showSearch"]],["td","(selectedOptions) => void"],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches"],["td","string"],["td",["code","Not Found"]],["td"]],["tr",["td","options"],["td","The data options of cascade"],["td",["a",{title:null,href:"#Option"},"Option"],"[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","The input placeholder"],["td","string"],["td",["code","Please select"]],["td"]],["tr",["td","popupClassName"],["td","The additional className of popup overlay"],["td","string"],["td","-"],["td"]],["tr",["td","popupPlacement"],["td","Use preset popup align config from builtinPlacements\uFF1A",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","popupVisible"],["td","Set visible of cascader popup"],["td","boolean"],["td","-"],["td"]],["tr",["td","showSearch"],["td","Whether show search input in single mode"],["td","boolean ","|"," ",["a",{title:null,href:"#showSearch"},"Object"]],["td","false"],["td"]],["tr",["td","size"],["td","The input size"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td"]],["tr",["td","style"],["td","The additional style"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","The selected value"],["td","string","[","] ","|"," number","[","]"],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback when finishing cascader select"],["td","(value, selectedOptions) => void"],["td","-"],["td"]],["tr",["td","onPopupVisibleChange"],["td","Callback when popup shown or hidden"],["td","(value) => void"],["td","-"],["td"]]]],["h3","showSearch"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","filter"],["td","The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded"],["td","function(inputValue, path): boolean"],["td","-"],["td"]],["tr",["td","limit"],["td","Set the count of filtered items"],["td","number ","|"," false"],["td","50"],["td"]],["tr",["td","matchInputWidth"],["td","Whether the width of list matches input, (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/25779"},"how it looks"],")"],["td","boolean"],["td","true"],["td"]],["tr",["td","render"],["td","Used to render filtered options"],["td","function(inputValue, path): ReactNode"],["td","-"],["td"]],["tr",["td","sort"],["td","Used to sort filtered options"],["td","function(a, b, inputValue)"],["td","-"],["td"]]]],["h3","Option"],["pre",{lang:"typescript",highlighted:`<span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`},["code",`interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
}`]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"],["td"]],["tr",["td","focus()"],["td","Get focus"],["td"]]]]]}}}]);
