webpackJsonp([0],{142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_TODO="todos:ADD_TODO",t.TOGGLE_TODO="todos:TOGGLE_TODO",t.DEL_TODO="todos:DEL_TODO"},145:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),d=n(1),l=n(152),s=n(8),i=n(3),u=n(182),c=r(u),f=n(203),p=r(f),j=n(207),m=n(208),b=r(m),g=(0,j.loadState)(),v=(0,s.createStore)(p.default,g);v.subscribe((0,b.default)(function(){(0,j.saveState)({todos:v.getState().todos})},1e3));!function(e){(0,d.render)(a.default.createElement(l.AppContainer,null,a.default.createElement(i.Provider,{store:v},a.default.createElement(e,null))),document.querySelector('[data-js="app"]'))}(c.default)},182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  max-width: 800px;\n  background: #ffffff;\n  margin: 30px auto;\n  border-radius: 10px;\n  padding-top: .8em;\n  padding-bottom: .8em;\n"],["\n  max-width: 800px;\n  background: #ffffff;\n  margin: 30px auto;\n  border-radius: 10px;\n  padding-top: .8em;\n  padding-bottom: .8em;\n"]),a=n(1),d=r(a),l=n(4),s=r(l),i=n(188),u=r(i),c=n(193),f=r(c),p=n(197),j=r(p),m=n(199),b=r(m);n(201);var g=s.default.div(o),v=function(){return d.default.createElement(g,null,d.default.createElement(u.default,null),d.default.createElement(b.default,null),d.default.createElement(f.default,null),d.default.createElement(j.default,null))};t.default=v},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var a=o(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px;\n"],["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px;\n"]),d=o(["\n  width: 100%;\n"],["\n  width: 100%;\n"]),l=o(["\n  width: 100%;\n  box-sizing: border-box;\n  height: 42px;\n  font-size: 16px;\n  font-weight: bold;\n  border: 2px solid #D6D9DC;\n  padding: 8px;\n  border-radius: 4px;\n"],["\n  width: 100%;\n  box-sizing: border-box;\n  height: 42px;\n  font-size: 16px;\n  font-weight: bold;\n  border: 2px solid #D6D9DC;\n  padding: 8px;\n  border-radius: 4px;\n"]),s=n(1),i=r(s),u=n(4),c=r(u),f=n(3),p=n(21),j=c.default.div(a),m=c.default.form(d),b=c.default.input(l),g=function(e){var t=e.handleAddTodo;return i.default.createElement(j,null,i.default.createElement(m,{onSubmit:t},i.default.createElement(b,{type:"text",placeholder:"Digite sua tarefa. Ex.: Comprar pão",name:"todo"})))},v=function(e){return{handleAddTodo:function(t){t.preventDefault(),e((0,p.addTodo)(t.target.todo.value)),t.target.todo.value=""}}};t.default=(0,f.connect)(null,v)(g)},192:function(e,t,n){function r(e){return n(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./af":24,"./af.js":24,"./ar":25,"./ar-dz":26,"./ar-dz.js":26,"./ar-kw":27,"./ar-kw.js":27,"./ar-ly":28,"./ar-ly.js":28,"./ar-ma":29,"./ar-ma.js":29,"./ar-sa":30,"./ar-sa.js":30,"./ar-tn":31,"./ar-tn.js":31,"./ar.js":25,"./az":32,"./az.js":32,"./be":33,"./be.js":33,"./bg":34,"./bg.js":34,"./bm":35,"./bm.js":35,"./bn":36,"./bn.js":36,"./bo":37,"./bo.js":37,"./br":38,"./br.js":38,"./bs":39,"./bs.js":39,"./ca":40,"./ca.js":40,"./cs":41,"./cs.js":41,"./cv":42,"./cv.js":42,"./cy":43,"./cy.js":43,"./da":44,"./da.js":44,"./de":45,"./de-at":46,"./de-at.js":46,"./de-ch":47,"./de-ch.js":47,"./de.js":45,"./dv":48,"./dv.js":48,"./el":49,"./el.js":49,"./en-au":50,"./en-au.js":50,"./en-ca":51,"./en-ca.js":51,"./en-gb":52,"./en-gb.js":52,"./en-ie":53,"./en-ie.js":53,"./en-nz":54,"./en-nz.js":54,"./eo":55,"./eo.js":55,"./es":56,"./es-do":57,"./es-do.js":57,"./es-us":58,"./es-us.js":58,"./es.js":56,"./et":59,"./et.js":59,"./eu":60,"./eu.js":60,"./fa":61,"./fa.js":61,"./fi":62,"./fi.js":62,"./fo":63,"./fo.js":63,"./fr":64,"./fr-ca":65,"./fr-ca.js":65,"./fr-ch":66,"./fr-ch.js":66,"./fr.js":64,"./fy":67,"./fy.js":67,"./gd":68,"./gd.js":68,"./gl":69,"./gl.js":69,"./gom-latn":70,"./gom-latn.js":70,"./gu":71,"./gu.js":71,"./he":72,"./he.js":72,"./hi":73,"./hi.js":73,"./hr":74,"./hr.js":74,"./hu":75,"./hu.js":75,"./hy-am":76,"./hy-am.js":76,"./id":77,"./id.js":77,"./is":78,"./is.js":78,"./it":79,"./it.js":79,"./ja":80,"./ja.js":80,"./jv":81,"./jv.js":81,"./ka":82,"./ka.js":82,"./kk":83,"./kk.js":83,"./km":84,"./km.js":84,"./kn":85,"./kn.js":85,"./ko":86,"./ko.js":86,"./ky":87,"./ky.js":87,"./lb":88,"./lb.js":88,"./lo":89,"./lo.js":89,"./lt":90,"./lt.js":90,"./lv":91,"./lv.js":91,"./me":92,"./me.js":92,"./mi":93,"./mi.js":93,"./mk":94,"./mk.js":94,"./ml":95,"./ml.js":95,"./mr":96,"./mr.js":96,"./ms":97,"./ms-my":98,"./ms-my.js":98,"./ms.js":97,"./my":99,"./my.js":99,"./nb":100,"./nb.js":100,"./ne":101,"./ne.js":101,"./nl":102,"./nl-be":103,"./nl-be.js":103,"./nl.js":102,"./nn":104,"./nn.js":104,"./pa-in":105,"./pa-in.js":105,"./pl":106,"./pl.js":106,"./pt":107,"./pt-br":108,"./pt-br.js":108,"./pt.js":107,"./ro":109,"./ro.js":109,"./ru":110,"./ru.js":110,"./sd":111,"./sd.js":111,"./se":112,"./se.js":112,"./si":113,"./si.js":113,"./sk":114,"./sk.js":114,"./sl":115,"./sl.js":115,"./sq":116,"./sq.js":116,"./sr":117,"./sr-cyrl":118,"./sr-cyrl.js":118,"./sr.js":117,"./ss":119,"./ss.js":119,"./sv":120,"./sv.js":120,"./sw":121,"./sw.js":121,"./ta":122,"./ta.js":122,"./te":123,"./te.js":123,"./tet":124,"./tet.js":124,"./th":125,"./th.js":125,"./tl-ph":126,"./tl-ph.js":126,"./tlh":127,"./tlh.js":127,"./tr":128,"./tr.js":128,"./tzl":129,"./tzl.js":129,"./tzm":130,"./tzm-latn":131,"./tzm-latn.js":131,"./tzm.js":130,"./uk":132,"./uk.js":132,"./ur":133,"./ur.js":133,"./uz":134,"./uz-latn":135,"./uz-latn.js":135,"./uz.js":134,"./vi":136,"./vi.js":136,"./x-pseudo":137,"./x-pseudo.js":137,"./yo":138,"./yo.js":138,"./zh-cn":139,"./zh-cn.js":139,"./zh-hk":140,"./zh-hk.js":140,"./zh-tw":141,"./zh-tw.js":141};r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=192},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var a=o(["\n  border-bottom: 1px solid #cdf6f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1em;\n  &:first-child {\n    border-top: 1px solid #cdf6f7;\n  }\n  &:hover {\n    background: #ebf8f9;\n  }\n"],["\n  border-bottom: 1px solid #cdf6f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1em;\n  &:first-child {\n    border-top: 1px solid #cdf6f7;\n  }\n  &:hover {\n    background: #ebf8f9;\n  }\n"]),d=o(["\n  flex: 1;\n  text-align: center;\n  font-size: 2em;\n"],["\n  flex: 1;\n  text-align: center;\n  font-size: 2em;\n"]),l=o(["\n  color: #000;\n  text-decoration: none;\n  flex: 10;\n  text-align: left;\n  padding: 0.25em 0.75em 0.25em 1em;\n  border-left: 1px solid #cdf6f7;\n"],["\n  color: #000;\n  text-decoration: none;\n  flex: 10;\n  text-align: left;\n  padding: 0.25em 0.75em 0.25em 1em;\n  border-left: 1px solid #cdf6f7;\n"]),s=o(["\n  font-size: 2em;\n  text-decoration: ",";\n  color: ",";\n"],["\n  font-size: 2em;\n  text-decoration: ",";\n  color: ",";\n"]),i=o(["\n  flex: 4;\n  text-align: right;\n"],["\n  flex: 4;\n  text-align: right;\n"]),u=o(["\n  background: #f32929;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  border-radius: 4px;\n"],["\n  background: #f32929;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  border-radius: 4px;\n"]),c=n(1),f=r(c),p=n(4),j=r(p),m=n(3),b=n(21),g=n(194),v=n(195),O=j.default.div(a),_=j.default.div(d),h=j.default.div(l),x=j.default.span(s,function(e){return e.completed?"line-through":"none"},function(e){return e.completed?"#CCC":"#000"}),y=j.default.div(i),E=j.default.button(u),T=function(e){var t=e.todos,n=e.filters,r=e.sorters,o=e.handleToggleTodo,a=e.handleDelTodo,d=(0,g.todosFilter)((0,v.sorterFilter)(t,r),n);return f.default.createElement("div",null,d.map(function(e){return f.default.createElement(O,{key:e.id},f.default.createElement(_,{onClick:o(e.id)},!!e.completed&&f.default.createElement("span",null,"✔")),f.default.createElement(h,{onClick:o(e.id)},f.default.createElement(x,{completed:e.completed},e.text)),f.default.createElement(y,null,f.default.createElement(E,{onClick:a(e.id)},"X")))}))},F=function(e){return{todos:e.todos,filters:e.filters,sorters:e.sorters}},S=function(e){return{handleToggleTodo:function(t){return function(n){n.preventDefault(),e((0,b.toggleTodo)(t))}},handleDelTodo:function(t){return function(n){n.preventDefault(),e((0,b.delTodo)(t))}}}};t.default=(0,m.connect)(F,S)(T)},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.todosFilter=void 0;var r=n(6);t.todosFilter=function(e,t){switch(t){case r.SHOW_ALL:return e;case r.SHOW_COMPLETED:return e.filter(function(e){return e.completed});case r.SHOW_ACTIVE:return e.filter(function(e){return!e.completed})}}},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sorterFilter=void 0;var r=n(196),o=n(7);t.sorterFilter=function(e,t){switch(t){case o.SHOW_RECENTS:return(0,r.orderBy)(e,"created","desc");case o.SHOW_OLDER:return(0,r.orderBy)(e,"created","asc")}}},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var a=o(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: #ECF0F1;\n  padding: 1em;\n  margin: 1.2em 1.6em;\n  border-radius: 6px;\n"],["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: #ECF0F1;\n  padding: 1em;\n  margin: 1.2em 1.6em;\n  border-radius: 6px;\n"]),d=o(["\n  background: #127FAA;\n  border: 1px solid #287591;\n  color: #FFFFFF;\n  padding: 0.25em 1em;\n  border-radius: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background: #287591;\n    border: 1px solid  #127FAA;\n    color: #e4e4e4;\n  }\n"],["\n  background: #127FAA;\n  border: 1px solid #287591;\n  color: #FFFFFF;\n  padding: 0.25em 1em;\n  border-radius: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background: #287591;\n    border: 1px solid  #127FAA;\n    color: #e4e4e4;\n  }\n"]),l=n(1),s=r(l),i=n(4),u=r(i),c=n(3),f=n(198),p=n(6),j=u.default.div(a),m=u.default.a(d),b=function(e){var t=e.handleFilter;return s.default.createElement(j,null,s.default.createElement(m,{onClick:t(p.SHOW_ALL)},"Show All"),s.default.createElement(m,{onClick:t(p.SHOW_COMPLETED)},"Show Completed"),s.default.createElement(m,{onClick:t(p.SHOW_ACTIVE)},"Show Active"))},g=function(e){return{handleFilter:function(t){return function(n){n.preventDefault(),e((0,f.filter)(t))}}}};t.default=(0,c.connect)(null,g)(b)},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filter=void 0;var r=n(6);t.filter=function(e){return{type:r.SET_VISIBILITY_FILTER,payload:{filter:e}}}},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var a=o(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: #ECF0F1;\n  padding: 1em;\n  margin: 1.2em 1.6em;\n  border-radius: 6px;\n"],["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: #ECF0F1;\n  padding: 1em;\n  margin: 1.2em 1.6em;\n  border-radius: 6px;\n"]),d=o(["\n  background: #127FAA;\n  border: 1px solid #127FAA;\n  color: #FFFFFF;\n  padding: 0.25em 1em;\n  border-radius: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background: #287591;\n    border: 1px solid  #127FAA;\n    color: #e4e4e4;\n  }\n"],["\n  background: #127FAA;\n  border: 1px solid #127FAA;\n  color: #FFFFFF;\n  padding: 0.25em 1em;\n  border-radius: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background: #287591;\n    border: 1px solid  #127FAA;\n    color: #e4e4e4;\n  }\n"]),l=n(1),s=r(l),i=n(4),u=r(i),c=n(3),f=n(200),p=n(7),j=u.default.div(a),m=u.default.a(d),b=function(e){var t=e.handleSorter;return s.default.createElement(j,null,s.default.createElement(m,{onClick:t(p.SHOW_RECENTS)},"Show Most Recent"),s.default.createElement(m,{onClick:t(p.SHOW_OLDER)},"Show Older"))},g=function(e){return{handleSorter:function(t){return function(n){n.preventDefault(),e((0,f.sort)(t))}}}};t.default=(0,c.connect)(null,g)(b)},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sort=void 0;var r=n(7);t.sort=function(e){return{type:r.SET_SORTER_FILTER,payload:{sorter:e}}}},201:function(e,t){},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),a=n(204),d=r(a),l=n(205),s=r(l),i=n(206),u=r(i);t.default=(0,o.combineReducers)({todos:d.default,filters:s.default,sorters:u.default})},204:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(142),d=t.initialState=[],l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments[1];switch(t.type){case a.ADD_TODO:return[].concat(r(e),[{id:t.payload.id,text:t.payload.text,created:t.payload.created,completed:!1}]);case a.TOGGLE_TODO:return e.map(function(e){return e.id!==t.payload.id?e:o({},e,{completed:!e.completed})});case a.DEL_TODO:var n=e.findIndex(function(e){return e.id===t.payload.id});return[].concat(r(e.slice(0,n)),r(e.slice(n+1)));default:return e}};t.default=l},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var r=n(6),o=t.initialState=r.SHOW_ALL,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.SET_VISIBILITY_FILTER:return t.payload.filter;default:return e}};t.default=a},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var r=n(7),o=t.initialState=r.SHOW_RECENTS,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.SET_SORTER_FILTER:return t.payload.sorter;default:return e}};t.default=a},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadState=function(){try{var e=localStorage.getItem("entriaTodo");if(null===e)return;return JSON.parse(e)}catch(e){return}},t.saveState=function(e){try{var t=JSON.stringify(e);localStorage.setItem("entriaTodo",t)}catch(e){console.log(e)}}},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delTodo=t.toggleTodo=t.addTodo=void 0;var r=n(189),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),d=n(142);t.addTodo=function(e){return{type:d.ADD_TODO,payload:{id:(0,r.v4)(),created:(0,a.default)().toDate(),text:e}}},t.toggleTodo=function(e){return{type:d.TOGGLE_TODO,payload:{id:e}}},t.delTodo=function(e){return{type:d.DEL_TODO,payload:{id:e}}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SET_VISIBILITY_FILTER="filter:SET_VISIBILITY_FILTER",t.SHOW_ALL="filter:SHOW_ALL",t.SHOW_COMPLETED="filter:SHOW_COMPLETED",t.SHOW_ACTIVE="filter:SHOW_ACTIVE"},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SET_SORTER_FILTER="sorter:SET_SORTER_FILTER",t.SHOW_RECENTS="sorter:SHOW_RECENTS",t.SHOW_OLDER="sorter:SHOW_OLDER"}},[145]);