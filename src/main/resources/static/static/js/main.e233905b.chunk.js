(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(4),i=n.n(c),a=n(54),s=n.n(a),l=(n(63),n(39),n(64),n(17)),d=n(34),o=n(9),u=n(8);function j(){var e=Object(o.a)(["\n    mutation createExercise($text: String!) {\n        createExercise(name: $text) {\n            id\n            name\n        }\n    }\n"]);return j=function(){return e},e}var b=Object(u.gql)(j());function x(){var e=Object(o.a)(["\n    mutation deleteExercise($id: Int!) {\n        deleteExercise(id: $id){\n            id\n            name\n        }\n    }\n"]);return x=function(){return e},e}var O=Object(u.gql)(x());function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var v=c.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"#F5A629",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),h=c.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"#F5A629",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p=c.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"#F5A629",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function g(e,t){var n=e.title,r=e.titleId,i=f(e,["title","titleId"]);return c.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,v,h,p)}var _=c.forwardRef(g);n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var I=c.createElement("g",{clipPath:"url(#clip0)"},c.createElement("path",{d:"M3.43721 15.2283C3.45526 15.6596 3.81014 15.9999 4.2417 15.9999H11.7587C12.1903 15.9999 12.5452 15.6596 12.5632 15.2283L13.1 3.896H2.90039L3.43721 15.2283ZM9.70065 6.71074C9.70065 6.53017 9.84707 6.38372 10.0277 6.38372H10.5508C10.7314 6.38372 10.8779 6.53013 10.8779 6.71074V13.1852C10.8779 13.3658 10.7315 13.5122 10.5508 13.5122H10.0277C9.84715 13.5122 9.70065 13.3658 9.70065 13.1852V6.71074ZM7.41164 6.71074C7.41164 6.53017 7.55805 6.38372 7.73866 6.38372H8.26177C8.4423 6.38372 8.58879 6.53013 8.58879 6.71074V13.1852C8.58879 13.3658 8.44242 13.5122 8.26177 13.5122H7.73866C7.55809 13.5122 7.41164 13.3658 7.41164 13.1852V6.71074ZM5.12254 6.71074C5.12254 6.53017 5.26896 6.38372 5.44957 6.38372H5.97271C6.15328 6.38372 6.29974 6.53013 6.29974 6.71074V13.1852C6.29974 13.3658 6.15332 13.5122 5.97271 13.5122H5.44957C5.269 13.5122 5.12254 13.3658 5.12254 13.1852V6.71074Z",fill:"#F5A629"}),c.createElement("path",{d:"M13.457 0.82424H9.98911V0.168624C9.98911 0.0755184 9.91363 0 9.82048 0H6.17887C6.08577 0 6.01029 0.0755184 6.01029 0.168624V0.824201H2.54239C2.26331 0.824201 2.03711 1.05044 2.03711 1.32952V2.91694H13.9622V1.32956C13.9622 1.05048 13.736 0.82424 13.457 0.82424Z",fill:"#F5A629"})),w=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0"},c.createElement("rect",{width:16,height:16,fill:"white"})));function N(e,t){var n=e.title,r=e.titleId,i=E(e,["title","titleId"]);return c.createElement("svg",C({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,I,w)}var k=c.forwardRef(N),y=(n.p,n(37)),T=n.n(y),A=function(e){return Object(r.jsx)("div",{className:"form_submit",children:Object(r.jsx)("button",{className:"create_btn",disabled:""===e.input,onClick:e.onClick,children:Object(r.jsx)("div",{className:"element",children:Object(r.jsx)("p",{children:e.buttonText})})})})};function L(){var e=Object(o.a)(["\n                                        fragment NewExercise on Exercise {\n                                            name\n                                        }\n                                    "]);return L=function(){return e},e}var M=function(e){var t=Object(u.useMutation)(O,{update:function(e,t){var n="Exercise:"+t.data.deleteExercise.id.toString();e.evict({id:n})}}),n=Object(l.a)(t,1)[0];return Object(r.jsxs)("div",{"data-testid":"exercise-menu",className:T()("exercise_menu"),children:[Object(r.jsx)("div",{className:"exercise_menu_sub_header",children:function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(u.useMutation)(b,{update:function(e,t){var n=t.data.createExercise;e.modify({fields:{exercises:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.writeFragment({data:n,fragment:Object(u.gql)(L())});return[].concat(Object(d.a)(t),[r])}}})}}),s=Object(l.a)(a,2),o=s[0],j=(s[1].error,function(){""!==n&&(o({variables:{text:n}}),i(""))});return Object(r.jsxs)("div",{className:"create_exercise_form",children:[Object(r.jsx)("div",{className:"form_input",children:Object(r.jsx)("input",{className:"exercise_menu_input_text",value:n,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j()},placeholder:"Title"})}),Object(r.jsx)(A,{buttonText:"Add Exercise",input:n,onClick:j})]})}()}),Object(r.jsx)("div",{id:"container",className:T()("exercise_menu_items"),children:Object(r.jsx)("div",{className:"card_stacks",children:e.list.slice().sort((function(e,t){var n=e.name.toUpperCase(),r=t.name.toUpperCase(),c=0;return n>r?c=1:n<r&&(c=-1),c})).map((function(t){return Object(r.jsxs)("div",{"data-testid":"exercise-menu-row",className:"exercise_menu_row",children:[Object(r.jsx)("div",{className:"card_stack",children:Object(r.jsx)("button",{className:"btn-exercise h-50 w-120 rounded bg-grey",onClick:function(){return function(t){e.callback(t)}(t)},children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{className:"",children:Object(r.jsx)("p",{className:"text-xs",children:t.name})})]})})}),Object(r.jsxs)("div",{className:"exercise_menu_action_area",children:[Object(r.jsx)(_,{className:"exercise_menu_action_area_dots"}),Object(r.jsx)("button",{className:"exercise_menu_action_btn_delete",onClick:function(){n({variables:{id:t.id.toString()}})},children:Object(r.jsx)(k,{})})]})]},t.id)}))})})]})};function S(){var e=Object(o.a)(["\n    query getIdeas($exerciseId: Int!) {\n        ideas(exerciseId: $exerciseId) {\n            id\n            name\n            exerciseId\n        }\n    }\n"]);return S=function(){return e},e}var D=Object(u.gql)(S());function V(){var e=Object(o.a)(["\n    mutation createIdea($text: String!, $exerciseId: Int!) {\n        createIdea(name: $text, exerciseId: $exerciseId) {\n            id\n            name\n            exerciseId\n        }\n    }\n"]);return V=function(){return e},e}var H=Object(u.gql)(V()),P=(n(71),function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("h3",{className:"title",children:e.idea.name}),Object(r.jsxs)("div",{className:"bar",children:[Object(r.jsx)("div",{className:"emptybar"}),Object(r.jsx)("div",{className:"filledbar"})]}),Object(r.jsx)("div",{className:"circle",onClick:function(){e.onClick(Z.DELETE_IDEA,e.idea)},children:Object(r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("circle",{className:"stroke",cx:"32",cy:"60",r:"30"})})})]})});function $(){var e=Object(o.a)(["\n    mutation deleteIdea($id: Int!) {\n        deleteIdea(id: $id){\n            id\n            name\n            exerciseId\n        }\n    }\n"]);return $=function(){return e},e}var q=Object(u.gql)($());function F(){var e=Object(o.a)(["\n                                        fragment NewIdea on Idea {\n                                            name\n                                            exerciseId\n                                        }\n                                    "]);return F=function(){return e},e}var Z={DELETE_IDEA:"DELETE_IDEA",VOTE_IDEA:"VOTE_IDEA"},B=function(e){var t=Object(u.useQuery)(D,{variables:{exerciseId:e.exercise.id}}),n=(t.loading,t.error,t.data);function i(e,t){switch(e){case Z.DELETE_IDEA:console.log(t),s({variables:{id:t.id.toString(),exerciseId:null===t||void 0===t?void 0:t.exerciseId}});break;case Z.VOTE_IDEA:}}var a=Object(u.useMutation)(q,{update:function(e,t){var n="Idea:"+t.data.deleteIdea.id.toString();e.evict({id:n})}}),s=Object(l.a)(a,1)[0];return Object(r.jsxs)("div",{"data-testid":"exercise-current",className:"exercise_current",children:[Object(r.jsx)("div",{className:"exercise_menu_sub_header",children:function(){var t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],s=Object(u.useMutation)(H,{update:function(e,t){var n=t.data.createIdea;e.modify({fields:{ideas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.writeFragment({data:n,fragment:Object(u.gql)(F())});return[].concat(Object(d.a)(t),[r])}}})}}),o=Object(l.a)(s,1)[0],j=function(){""!==i&&(e.exercise&&o({variables:{text:i,exerciseId:e.exercise.id}}),a(""))};return Object(r.jsxs)("div",{"data-testid":"current-exercise",className:"create_exercise_form",children:[Object(r.jsx)("div",{className:"form_input",children:Object(r.jsx)("input",{className:"exercise_menu_input_text",value:i,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j()},placeholder:"Title"})}),Object(r.jsx)(A,{buttonText:"Add Idea",input:i,onClick:j})]})}()}),Object(r.jsx)("div",{className:"container",children:n?n.ideas.map((function(e){return Object(r.jsx)(P,{idea:e,onClick:i},e.id)})):null})]})},U=(n(72),function(e){return Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsxs)("div",{className:"link_wrapper",children:[Object(r.jsx)("a",{className:"back_btn_txt",onClick:e.onClick,children:"Back"}),Object(r.jsx)("div",{className:"icon",children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268.832 268.832",children:Object(r.jsx)("path",{d:"M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"})})})]})})}),W=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),i=n[0],a=n[1];return Object(r.jsxs)("div",{"data-testid":"exercise-view",className:"exercise_view",children:[Object(r.jsxs)("header",{className:"exercise_view_header",children:[i?Object(r.jsx)(U,{onClick:function(){a(null)}}):null,i?Object(r.jsx)("h1",{children:i.name}):Object(r.jsx)("h1",{children:"The Dot Voter"})]}),i?Object(r.jsx)(B,{exercise:i}):null,e.loading?Object(r.jsx)("p",{children:"Loading... "}):e.error?Object(r.jsxs)("p",{children:["Uh oh! ",e.error]}):e.exercises&&!i?Object(r.jsx)(M,{list:e.exercises,callback:function(e){a(e)}}):null]})};function J(){var e=Object(o.a)(["\n    query getExercises{\n        exercises {\n            id\n            name\n        }\n    }\n"]);return J=function(){return e},e}var K=Object(u.gql)(J());var Q=function(){var e=Object(u.useQuery)(K),t=e.loading,n=e.error,c=e.data;return Object(r.jsx)("div",{"data-testid":"app",id:"container",className:"app",children:c?Object(r.jsx)(W,{loading:t,exercises:c.exercises,error:n}):null})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},z=new u.ApolloClient({uri:"/api/graphql",cache:new u.InMemoryCache,connectToDevTools:!0});s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.ApolloProvider,{client:z,children:Object(r.jsx)(Q,{})})}),document.getElementById("root")),R()}},[[73,1,2]]]);
//# sourceMappingURL=main.e233905b.chunk.js.map