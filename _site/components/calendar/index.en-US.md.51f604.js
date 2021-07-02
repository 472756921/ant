(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{3027:function(e,t){e.exports={content:["section",["p","Container for displaying data in calendar form."],["h2","When To Use"],["p","When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch."]],meta:{category:"Components",type:"Data Display",cols:1,title:"Calendar",cover:"https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg",filename:"components/calendar/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p",["strong","Note:"]," Part of the Calendar's locale is read from ",["code","value"],". So, please set the locale of ",["code","moment"]," correctly."],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.</span>
<span class="token comment" spellcheck="true">// import moment from 'moment';</span>
<span class="token comment" spellcheck="true">// import 'moment/locale/zh-cn';</span>
<span class="token comment" spellcheck="true">// moment.locale('zh-cn');</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>
  <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span>
  <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span>
  <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span>
  <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
<span class="token punctuation">/></span></span>`},["code",`// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>`]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","dateCellRender"],["td","Customize the display of the date cell, the returned content will be appended to the cell"],["td","function(date: moment): ReactNode"],["td","-"],["td"]],["tr",["td","dateFullCellRender"],["td","Customize the display of the date cell, the returned content will override the cell"],["td","function(date: moment): ReactNode"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","The date selected by default"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","disabledDate"],["td","Function that specifies the dates that cannot be selected"],["td","(currentDate: moment) => boolean"],["td","-"],["td"]],["tr",["td","fullscreen"],["td","Whether to display in full-screen"],["td","boolean"],["td","true"],["td"]],["tr",["td","headerRender"],["td","Render custom header in panel"],["td","function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()})"],["td","-"],["td"]],["tr",["td","locale"],["td","The calendar's locale"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"(default)"]],["td"]],["tr",["td","mode"],["td","The display mode of the calendar"],["td",["code","month"]," ","|"," ",["code","year"]],["td",["code","month"]],["td"]],["tr",["td","monthCellRender"],["td","Customize the display of the month cell, the returned content will be appended to the cell"],["td","function(date: moment): ReactNode"],["td","-"],["td"]],["tr",["td","monthFullCellRender"],["td","Customize the display of the month cell, the returned content will override the cell"],["td","function(date: moment): ReactNode"],["td","-"],["td"]],["tr",["td","validRange"],["td","To set valid range"],["td","[",["a",{title:null,href:"http://momentjs.com/"},"moment"],", ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"]"],["td","-"],["td"]],["tr",["td","value"],["td","The current selected date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback for when date changes"],["td","function(date: moment\uFF09"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","Callback for when panel changes"],["td","function(date: moment, mode: string)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Callback for when a date is selected"],["td","function(date: moment\uFF09"],["td","-"],["td"]]]],["h2","FAQ"],["ul",["li",["p",["a",{title:null,href:"/docs/react/replace-moment#Calendar"},"How to use Calendar with customize date library like dayjs"]]]]]}}}]);
