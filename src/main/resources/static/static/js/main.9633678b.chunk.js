(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var C=n(2),c=n(4),r=n.n(c),i=n(55),a=n.n(i),s=(n(64),n(40),n(65),n(17)),l=n(34),d=n(9),o=n(8);function j(){var e=Object(d.a)(["\n    mutation createExercise($text: String!) {\n        createExercise(name: $text) {\n            id\n            name\n        }\n    }\n"]);return j=function(){return e},e}var u=Object(o.gql)(j());function b(){var e=Object(d.a)(["\n    mutation deleteExercise($id: Int!) {\n        deleteExercise(id: $id){\n            id\n            name\n        }\n    }\n"]);return b=function(){return e},e}var x=Object(o.gql)(b());function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var C in n)Object.prototype.hasOwnProperty.call(n,C)&&(e[C]=n[C])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,C,c=function(e,t){if(null==e)return{};var n,C,c={},r=Object.keys(e);for(C=0;C<r.length;C++)n=r[C],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(C=0;C<r.length;C++)n=r[C],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var h=c.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"#F5A629",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),f=c.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"#F5A629",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m=c.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"#F5A629",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function v(e,t){var n=e.title,C=e.titleId,r=O(e,["title","titleId"]);return c.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":C},r),n?c.createElement("title",{id:C},n):null,h,f,m)}var p=c.forwardRef(v);n.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var C in n)Object.prototype.hasOwnProperty.call(n,C)&&(e[C]=n[C])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,C,c=function(e,t){if(null==e)return{};var n,C,c={},r=Object.keys(e);for(C=0;C<r.length;C++)n=r[C],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(C=0;C<r.length;C++)n=r[C],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var E=c.createElement("g",{clipPath:"url(#clip0)"},c.createElement("path",{d:"M3.43721 15.2283C3.45526 15.6596 3.81014 15.9999 4.2417 15.9999H11.7587C12.1903 15.9999 12.5452 15.6596 12.5632 15.2283L13.1 3.896H2.90039L3.43721 15.2283ZM9.70065 6.71074C9.70065 6.53017 9.84707 6.38372 10.0277 6.38372H10.5508C10.7314 6.38372 10.8779 6.53013 10.8779 6.71074V13.1852C10.8779 13.3658 10.7315 13.5122 10.5508 13.5122H10.0277C9.84715 13.5122 9.70065 13.3658 9.70065 13.1852V6.71074ZM7.41164 6.71074C7.41164 6.53017 7.55805 6.38372 7.73866 6.38372H8.26177C8.4423 6.38372 8.58879 6.53013 8.58879 6.71074V13.1852C8.58879 13.3658 8.44242 13.5122 8.26177 13.5122H7.73866C7.55809 13.5122 7.41164 13.3658 7.41164 13.1852V6.71074ZM5.12254 6.71074C5.12254 6.53017 5.26896 6.38372 5.44957 6.38372H5.97271C6.15328 6.38372 6.29974 6.53013 6.29974 6.71074V13.1852C6.29974 13.3658 6.15332 13.5122 5.97271 13.5122H5.44957C5.269 13.5122 5.12254 13.3658 5.12254 13.1852V6.71074Z",fill:"#F5A629"}),c.createElement("path",{d:"M13.457 0.82424H9.98911V0.168624C9.98911 0.0755184 9.91363 0 9.82048 0H6.17887C6.08577 0 6.01029 0.0755184 6.01029 0.168624V0.824201H2.54239C2.26331 0.824201 2.03711 1.05044 2.03711 1.32952V2.91694H13.9622V1.32956C13.9622 1.05048 13.736 0.82424 13.457 0.82424Z",fill:"#F5A629"})),_=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0"},c.createElement("rect",{width:16,height:16,fill:"white"})));function I(e,t){var n=e.title,C=e.titleId,r=w(e,["title","titleId"]);return c.createElement("svg",g({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t,"aria-labelledby":C},r),n?c.createElement("title",{id:C},n):null,E,_)}var N=c.forwardRef(I),y=(n.p,n(37)),M=n.n(y),k=function(e){return Object(C.jsx)("div",{className:"form_submit",children:Object(C.jsx)("button",{className:"create_btn",disabled:""===e.input,onClick:e.onClick,children:Object(C.jsx)("div",{className:"element",children:Object(C.jsx)("p",{children:e.buttonText})})})})};function Z(){var e=Object(d.a)(["\n                                        fragment NewExercise on Exercise {\n                                            name\n                                        }\n                                    "]);return Z=function(){return e},e}var H=function(e){var t=Object(o.useMutation)(x,{update:function(e,t){var n="Exercise:"+t.data.deleteExercise.id.toString();e.evict({id:n})}}),n=Object(s.a)(t,1)[0];return Object(C.jsxs)("div",{"data-testid":"exercise-menu",className:M()("exercise_menu"),children:[Object(C.jsx)("div",{className:"exercise_menu_sub_header",children:function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(o.useMutation)(u,{update:function(e,t){var n=t.data.createExercise;e.modify({fields:{exercises:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],C=e.writeFragment({data:n,fragment:Object(o.gql)(Z())});return[].concat(Object(l.a)(t),[C])}}})}}),a=Object(s.a)(i,2),d=a[0],j=(a[1].error,function(){""!==n&&(d({variables:{text:n}}),r(""))});return Object(C.jsxs)("div",{className:"create_exercise_form",children:[Object(C.jsx)("div",{className:"form_input",children:Object(C.jsx)("input",{className:"exercise_menu_input_text",value:n,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j()},placeholder:"Title"})}),Object(C.jsx)(k,{buttonText:"Add Exercise",input:n,onClick:j})]})}()}),Object(C.jsx)("div",{id:"container",className:M()("exercise_menu_items"),children:Object(C.jsx)("div",{className:"card_stacks",children:e.list.slice().sort((function(e,t){var n=e.name.toUpperCase(),C=t.name.toUpperCase(),c=0;return n>C?c=1:n<C&&(c=-1),c})).map((function(t){return Object(C.jsxs)("div",{"data-testid":"exercise-menu-row",className:"exercise_menu_row",children:[Object(C.jsx)("div",{className:"card_stack",children:Object(C.jsx)("button",{className:"btn-exercise h-50 w-120 rounded bg-grey",onClick:function(){return function(t){e.callback(t)}(t)},children:Object(C.jsxs)("a",{href:"#",children:[Object(C.jsx)("span",{}),Object(C.jsx)("span",{}),Object(C.jsx)("span",{}),Object(C.jsx)("span",{}),Object(C.jsx)("span",{className:"",children:Object(C.jsx)("p",{className:"text-xs",children:t.name})})]})})}),Object(C.jsxs)("div",{className:"exercise_menu_action_area",children:[Object(C.jsx)(p,{className:"exercise_menu_action_area_dots"}),Object(C.jsx)("button",{className:"exercise_menu_action_btn_delete",onClick:function(){n({variables:{id:t.id.toString()}})},children:Object(C.jsx)(N,{})})]})]},t.id)}))})})]})};function T(){var e=Object(d.a)(["\n    query getIdeas($exerciseId: Int!) {\n        ideas(exerciseId: $exerciseId) {\n            id\n            name\n            exerciseId\n        }\n    }\n"]);return T=function(){return e},e}var A=Object(o.gql)(T());function V(){var e=Object(d.a)(["\n    mutation createIdea($text: String!, $exerciseId: Int!) {\n        createIdea(name: $text, exerciseId: $exerciseId) {\n            id\n            name\n            exerciseId\n        }\n    }\n"]);return V=function(){return e},e}var D=Object(o.gql)(V()),S=(n(72),function(e){return Object(C.jsxs)("div",{className:"card",children:[Object(C.jsx)("div",{className:"arrow-right",onClick:function(){e.onClick(F.DELETE_IDEA,e.idea)},children:Object(C.jsx)("h4",{children:"Delete"})}),Object(C.jsx)("h3",{className:"title",children:e.idea.name}),Object(C.jsxs)("div",{className:"bar",children:[Object(C.jsx)("div",{className:"emptybar"}),Object(C.jsx)("div",{className:"filledbar"})]}),Object(C.jsx)("div",{className:"circle",children:Object(C.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("circle",{className:"stroke",cx:"32",cy:"60",r:"30"})})}),Object(C.jsx)("h4",{children:"vote"})]})});function P(){var e=Object(d.a)(["\n    mutation deleteIdea($id: Int!) {\n        deleteIdea(id: $id){\n            id\n            name\n            exerciseId\n        }\n    }\n"]);return P=function(){return e},e}var $=Object(o.gql)(P());function q(){var e=Object(d.a)(["\n                                        fragment NewIdea on Idea {\n                                            name\n                                            exerciseId\n                                        }\n                                    "]);return q=function(){return e},e}var F={DELETE_IDEA:"DELETE_IDEA",VOTE_IDEA:"VOTE_IDEA"},B=function(e){var t=Object(o.useQuery)(A,{variables:{exerciseId:e.exercise.id}}),n=(t.loading,t.error,t.data);function r(e,t){switch(e){case F.DELETE_IDEA:console.log(t),a({variables:{id:t.id.toString(),exerciseId:null===t||void 0===t?void 0:t.exerciseId}});break;case F.VOTE_IDEA:}}var i=Object(o.useMutation)($,{update:function(e,t){var n="Idea:"+t.data.deleteIdea.id.toString();e.evict({id:n})}}),a=Object(s.a)(i,1)[0];return Object(C.jsxs)("div",{"data-testid":"exercise-current",className:"exercise_current",children:[Object(C.jsx)("div",{className:"exercise_menu_sub_header",children:function(){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1],a=Object(o.useMutation)(D,{update:function(e,t){var n=t.data.createIdea;e.modify({fields:{ideas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],C=e.writeFragment({data:n,fragment:Object(o.gql)(q())});return[].concat(Object(l.a)(t),[C])}}})}}),d=Object(s.a)(a,1)[0],j=function(){""!==r&&(e.exercise&&d({variables:{text:r,exerciseId:e.exercise.id}}),i(""))};return Object(C.jsxs)("div",{"data-testid":"current-exercise",className:"create_exercise_form",children:[Object(C.jsx)("div",{className:"form_input",children:Object(C.jsx)("input",{className:"exercise_menu_input_text",value:r,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&j()},placeholder:"Title"})}),Object(C.jsx)(k,{buttonText:"Add Idea",input:r,onClick:j})]})}()}),Object(C.jsx)("div",{className:"container",children:n?n.ideas.map((function(e){return Object(C.jsx)(S,{idea:e,onClick:r},e.id)})):null})]})},R=(n(73),function(e){return Object(C.jsx)("div",{className:"wrapper",onClick:e.onClick,children:Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268.832 268.832",children:Object(C.jsx)("path",{d:"M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"})})})})}),U=function(){return Object(C.jsxs)("svg",{width:"30",height:"40",viewBox:"0 0 30 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(C.jsx)("path",{d:"M0.433594 2.50781C0.433594 1.40324 1.32902 0.507812 2.43359 0.507812L27.0088 0.507812C28.1134 0.507812 29.0088 1.40324 29.0088 2.50781L29.0088 37.512C29.0088 38.6165 28.1134 39.512 27.0088 39.512H2.43359C1.32902 39.512 0.433594 38.6165 0.433594 37.512L0.433594 2.50781Z",fill:"white"}),Object(C.jsx)("path",{d:"M4.85457 5.09955C4.54608 4.93075 4.17937 4.84635 3.75447 4.84635C3.55656 4.84635 3.34702 4.8609 3.12583 4.89L3.30918 3.37954H5.47447L5.5094 2.59375H2.62817L2.25273 5.70199C2.70675 5.58557 3.1171 5.52736 3.48381 5.52736C3.91453 5.52736 4.25795 5.64087 4.51406 5.86787C4.77017 6.08906 4.89823 6.40338 4.89823 6.81082C4.89823 7.17752 4.77599 7.47147 4.53152 7.69265C4.29288 7.91384 3.97856 8.02443 3.58858 8.02443C3.32083 8.02443 3.07345 7.98951 2.84644 7.91966C2.61944 7.84399 2.38079 7.73631 2.1305 7.59661L1.92969 8.36494C2.15087 8.51046 2.40989 8.62396 2.70675 8.70545C3.00942 8.78694 3.31792 8.82768 3.63223 8.82768C4.0455 8.82768 4.41511 8.74619 4.74107 8.58321C5.07285 8.41441 5.33187 8.17868 5.51813 7.876C5.71021 7.57333 5.80625 7.21827 5.80625 6.81082C5.80625 6.43248 5.72476 6.09488 5.56178 5.79803C5.3988 5.50117 5.16307 5.26835 4.85457 5.09955Z",fill:"#743636"}),Object(C.jsx)("path",{d:"M3.87242 13.0305H3.86979C2.90612 13.0305 2.12491 12.2486 2.12491 11.2841C2.12491 11.1314 2.14448 10.9833 2.18124 10.8422L2.18232 10.8409L2.21288 10.7475C2.21288 10.7475 2.25657 10.6255 2.29291 10.5509C2.33589 10.4626 2.36387 10.4144 2.42058 10.334C2.46888 10.2654 2.49914 10.2289 2.55634 10.1673C2.62358 10.0949 2.6694 10.0569 2.74059 9.99776L2.7407 9.99768C2.74706 9.99239 2.75363 9.98694 2.76044 9.98127C2.76747 9.97542 2.77409 9.96989 2.78041 9.96461C2.82181 9.93 2.85039 9.90612 2.8998 9.87194C2.92463 9.85476 2.96454 9.82961 2.96454 9.82961C2.96933 9.82697 2.97964 9.82291 2.98252 9.82785L2.95645 9.85959C2.95645 9.85959 2.92875 9.89268 2.91149 9.91426C2.88145 9.95181 2.86492 9.97313 2.83686 10.0121C2.80487 10.0566 2.78698 10.0817 2.75864 10.1285C2.72353 10.1865 2.70465 10.2199 2.67772 10.2819C2.65598 10.332 2.64584 10.3611 2.63007 10.4133C2.61116 10.4759 2.60133 10.5117 2.59231 10.5764C2.58506 10.6284 2.58429 10.658 2.58332 10.7105L2.58311 10.7214C2.58226 10.7651 2.58172 10.7929 2.58691 10.8392C2.59211 10.8855 2.59772 10.9113 2.60939 10.9565C2.62237 11.0067 2.63217 11.0344 2.65165 11.0825C2.67896 11.1501 2.69699 11.1875 2.73616 11.2492C2.76894 11.3008 2.78935 11.329 2.83057 11.3744C2.86887 11.4166 2.89204 11.4394 2.93756 11.474C2.9775 11.5044 3.00115 11.5206 3.04636 11.5428C3.08543 11.562 3.10807 11.5729 3.15065 11.5825C3.20375 11.5944 3.2362 11.597 3.29001 11.5886C3.36249 11.5774 3.40352 11.5569 3.46084 11.5119C3.51076 11.4728 3.53206 11.4417 3.56424 11.3876C3.59989 11.3277 3.61147 11.2886 3.62718 11.221C3.64607 11.1395 3.6445 11.0911 3.64156 11.0076C3.63851 10.9207 3.63113 10.8716 3.61009 10.7872C3.5917 10.7133 3.5807 10.671 3.54626 10.6029C3.5002 10.5118 3.46506 10.4619 3.38802 10.3939C3.3356 10.3477 3.23876 10.2943 3.23876 10.2943L3.19741 10.2775L3.4006 10.0509C3.4006 10.0509 3.45908 10.0861 3.49501 10.1109C3.49999 10.1143 3.50459 10.1175 3.50894 10.1204L3.50899 10.1204C3.52805 10.1334 3.54222 10.1431 3.56244 10.1603C3.58408 10.1786 3.59672 10.1921 3.61332 10.2099C3.6176 10.2145 3.62215 10.2193 3.62718 10.2246C3.6364 10.2343 3.64428 10.2432 3.65168 10.2515L3.65174 10.2516L3.65178 10.2517C3.65876 10.2595 3.66531 10.2669 3.67213 10.274C3.68622 10.2887 3.71259 10.3287 3.71259 10.3287C3.71169 10.3157 3.71061 10.3018 3.709 10.2846C3.70853 10.2796 3.70815 10.2751 3.70779 10.271C3.70676 10.2587 3.70592 10.2488 3.7036 10.2343C3.69849 10.2023 3.69284 10.1839 3.68371 10.1543L3.68202 10.1488C3.67179 10.1155 3.66505 10.0971 3.65145 10.065C3.6406 10.0394 3.63283 10.0241 3.62137 10.0017L3.61639 9.99185C3.61456 9.98825 3.61286 9.98489 3.61125 9.98169C3.60209 9.96356 3.59562 9.95075 3.58402 9.93101C3.57434 9.91454 3.56544 9.90074 3.55795 9.88957L3.87111 9.5381L4.18427 9.88956C4.17677 9.90073 4.16788 9.91453 4.15819 9.931C4.14659 9.95074 4.14012 9.96355 4.13096 9.98169L4.12582 9.99184L4.12084 10.0016C4.10939 10.0241 4.10161 10.0394 4.09076 10.065C4.07717 10.0971 4.07042 10.1155 4.06019 10.1488L4.0585 10.1543C4.04937 10.1839 4.04372 10.2023 4.03861 10.2343C4.03629 10.2488 4.03545 10.2587 4.03442 10.2709L4.03441 10.271L4.0344 10.2711L4.03393 10.2766L4.03359 10.2805L4.03322 10.2846C4.03161 10.3018 4.03052 10.3157 4.02962 10.3287C4.02962 10.3287 4.05599 10.2887 4.07008 10.274C4.07691 10.2669 4.08347 10.2595 4.09046 10.2516C4.09788 10.2433 4.10579 10.2344 4.11503 10.2246C4.12005 10.2193 4.12458 10.2145 4.12885 10.2099L4.12889 10.2099C4.14549 10.1921 4.15813 10.1786 4.17977 10.1603C4.2 10.1431 4.21416 10.1334 4.23322 10.1204L4.23326 10.1204L4.23749 10.1175C4.24057 10.1154 4.2438 10.1132 4.2472 10.1109C4.28313 10.0861 4.34161 10.0509 4.34161 10.0509L4.54481 10.2775L4.50345 10.2943C4.50345 10.2943 4.40661 10.3477 4.3542 10.3939C4.27715 10.4619 4.24201 10.5118 4.19595 10.6029C4.16151 10.671 4.15051 10.7133 4.13212 10.7872C4.11108 10.8716 4.1037 10.9207 4.10065 11.0076C4.09771 11.0911 4.09614 11.1395 4.11503 11.221C4.13074 11.2886 4.14232 11.3277 4.17797 11.3876C4.21016 11.4417 4.23146 11.4728 4.28137 11.5119C4.3387 11.5568 4.37972 11.5774 4.4522 11.5886C4.50601 11.597 4.53846 11.5944 4.59156 11.5825C4.63414 11.5729 4.65679 11.562 4.69586 11.5428C4.74106 11.5206 4.76472 11.5044 4.80465 11.474C4.85017 11.4394 4.87334 11.4166 4.91164 11.3744C4.95287 11.329 4.97327 11.3008 5.00605 11.2492C5.04523 11.1875 5.06325 11.1501 5.09057 11.0825C5.11005 11.0344 5.11984 11.0067 5.13283 10.9564C5.1445 10.9113 5.15011 10.8855 5.1553 10.8392C5.1605 10.7929 5.15996 10.7651 5.15911 10.7214L5.1591 10.7211L5.1589 10.7104C5.15793 10.658 5.15715 10.6284 5.14991 10.5764C5.14089 10.5117 5.13106 10.4759 5.11215 10.4133C5.09638 10.3611 5.08624 10.332 5.06449 10.2819C5.03756 10.2199 5.01868 10.1865 4.98357 10.1285C4.95524 10.0817 4.93735 10.0566 4.90535 10.0121C4.8773 9.97312 4.86077 9.9518 4.83073 9.91425C4.81346 9.89267 4.78577 9.85958 4.78577 9.85958L4.7597 9.82784C4.76257 9.8229 4.77288 9.82696 4.77768 9.82961C4.77768 9.82961 4.81759 9.85475 4.84241 9.87193C4.89183 9.90611 4.9204 9.92999 4.96181 9.9646L4.97181 9.97296L4.98178 9.98126C4.98843 9.9868 4.99487 9.99215 5.0011 9.99733L5.00162 9.99776C5.07281 10.0569 5.11863 10.0949 5.18587 10.1673C5.24308 10.2289 5.27334 10.2654 5.32164 10.334C5.37835 10.4144 5.40633 10.4626 5.44931 10.5509C5.48565 10.6255 5.52933 10.7475 5.52933 10.7475L5.5599 10.8409L5.56098 10.8422C5.59774 10.9833 5.61731 11.1314 5.61731 11.284C5.61731 12.2486 4.8361 13.0305 3.87242 13.0305Z",fill:"#743636"}),Object(C.jsx)("path",{d:"M25.495 27.2755H25.4924C24.5287 27.2755 23.7475 28.0574 23.7475 29.022C23.7475 29.1746 23.7671 29.3227 23.8039 29.4638L23.8049 29.4651L23.8355 29.5585C23.8355 29.5585 23.8792 29.6806 23.9155 29.7552C23.9585 29.8434 23.9865 29.8916 24.0432 29.9721C24.0915 30.0406 24.1218 30.0771 24.179 30.1387C24.2462 30.2111 24.292 30.2491 24.3632 30.3083L24.3633 30.3083C24.3697 30.3136 24.3763 30.3191 24.3831 30.3248C24.387 30.328 24.3907 30.3312 24.3944 30.3342L24.403 30.3414C24.4444 30.376 24.473 30.3999 24.5224 30.4341C24.5472 30.4513 24.5872 30.4764 24.5872 30.4764C24.5919 30.4791 24.6023 30.4831 24.6051 30.4782L24.5791 30.4464C24.5791 30.4464 24.5514 30.4133 24.5341 30.3918C24.5041 30.3542 24.4875 30.3329 24.4595 30.2939C24.4275 30.2494 24.4096 30.2243 24.3813 30.1775C24.3461 30.1195 24.3273 30.0862 24.3003 30.0241C24.2786 29.974 24.2685 29.9449 24.2527 29.8927C24.2338 29.8301 24.2239 29.7943 24.2149 29.7296C24.2077 29.6776 24.2069 29.648 24.2059 29.5956L24.2057 29.5847C24.2049 29.5409 24.2043 29.5131 24.2095 29.4668C24.2147 29.4205 24.2203 29.3947 24.232 29.3496C24.245 29.2993 24.2548 29.2717 24.2743 29.2235C24.3016 29.1559 24.3196 29.1185 24.3588 29.0568C24.3916 29.0052 24.412 28.9771 24.4532 28.9316C24.4915 28.8894 24.5147 28.8666 24.5602 28.832C24.6001 28.8016 24.6238 28.7854 24.669 28.7632C24.708 28.7441 24.7307 28.7331 24.7733 28.7235C24.8264 28.7116 24.8588 28.709 24.9126 28.7174C24.9851 28.7286 25.0261 28.7492 25.0835 28.7941C25.1334 28.8332 25.1547 28.8643 25.1869 28.9184C25.2225 28.9784 25.2341 29.0174 25.2498 29.0851C25.2687 29.1665 25.2671 29.215 25.2642 29.2984C25.2611 29.3853 25.2537 29.4344 25.2327 29.5189C25.2143 29.5927 25.2033 29.635 25.1689 29.7031C25.1228 29.7942 25.0877 29.8441 25.0106 29.9121C24.9582 29.9584 24.8614 30.0117 24.8614 30.0117L24.82 30.0285L25.0232 30.2551C25.0232 30.2551 25.0817 30.2199 25.1176 30.1951L25.1213 30.1926L25.1238 30.1909C25.1265 30.1891 25.1291 30.1873 25.1316 30.1856L25.1316 30.1856C25.1507 30.1726 25.1648 30.1629 25.1851 30.1458C25.2067 30.1274 25.2193 30.1139 25.2359 30.0961L25.2417 30.09L25.2456 30.0859C25.2469 30.0844 25.2483 30.0829 25.2498 30.0814C25.259 30.0717 25.2669 30.0629 25.2742 30.0546L25.2744 30.0544L25.2745 30.0543C25.2797 30.0484 25.2846 30.0428 25.2897 30.0374C25.2914 30.0356 25.293 30.0338 25.2947 30.032C25.3088 30.0173 25.3352 29.9774 25.3352 29.9774C25.3348 29.9838 25.3343 29.9905 25.3337 29.9977C25.3335 30.0006 25.3332 30.0036 25.3329 30.0068C25.3325 30.0114 25.3321 30.0163 25.3316 30.0214C25.3311 30.0264 25.3308 30.0309 25.3304 30.0351C25.3294 30.0473 25.3285 30.0572 25.3262 30.0717C25.3211 30.1038 25.3155 30.1221 25.3063 30.1517L25.3046 30.1572C25.2944 30.1905 25.2877 30.2089 25.2741 30.241C25.2632 30.2666 25.2554 30.2819 25.244 30.3044L25.239 30.3142C25.2372 30.3178 25.2355 30.3211 25.2339 30.3243C25.2247 30.3425 25.2182 30.3553 25.2066 30.375C25.2042 30.3791 25.2019 30.3831 25.1995 30.3868C25.1972 30.3908 25.1948 30.3945 25.1926 30.398C25.1883 30.4048 25.1843 30.411 25.1806 30.4165L25.4937 30.7679L25.8069 30.4165C25.7994 30.4053 25.7905 30.3915 25.7808 30.375C25.7692 30.3553 25.7627 30.3425 25.7536 30.3243C25.752 30.3211 25.7503 30.3178 25.7484 30.3142L25.7435 30.3044C25.732 30.2819 25.7242 30.2666 25.7134 30.241C25.6998 30.2089 25.693 30.1905 25.6828 30.1572L25.6811 30.1517C25.672 30.1221 25.6663 30.1038 25.6612 30.0717C25.6589 30.0572 25.6581 30.0473 25.657 30.0352L25.657 30.0351C25.6568 30.0326 25.6566 30.0301 25.6564 30.0274C25.6562 30.0255 25.656 30.0235 25.6558 30.0214C25.6549 30.0118 25.6542 30.0032 25.6536 29.9952C25.6531 29.989 25.6526 29.9831 25.6522 29.9774C25.6522 29.9774 25.6786 30.0173 25.6927 30.032C25.6961 30.0356 25.6995 30.0393 25.7029 30.043C25.7044 30.0447 25.7059 30.0463 25.7074 30.048L25.7183 30.0603C25.7198 30.062 25.7213 30.0637 25.7228 30.0654C25.7274 30.0705 25.7323 30.0758 25.7377 30.0814C25.7405 30.0844 25.7432 30.0873 25.7458 30.0901L25.7481 30.0925L25.7515 30.0961L25.7515 30.0962C25.7681 30.1139 25.7808 30.1274 25.8024 30.1458C25.8226 30.1629 25.8368 30.1726 25.8558 30.1856L25.8558 30.1856L25.8559 30.1856L25.8607 30.1889C25.8636 30.1909 25.8666 30.1929 25.8698 30.1951C25.9058 30.2199 25.9642 30.2551 25.9642 30.2551L26.1674 30.0285L26.1261 30.0117C26.1261 30.0117 26.0292 29.9584 25.9768 29.9121C25.8998 29.8441 25.8646 29.7942 25.8186 29.7031C25.7841 29.6351 25.7731 29.5927 25.7547 29.5189C25.7337 29.4344 25.7263 29.3853 25.7233 29.2984C25.7203 29.215 25.7188 29.1665 25.7377 29.0851C25.7534 29.0174 25.7649 28.9784 25.8006 28.9184C25.8328 28.8643 25.8541 28.8332 25.904 28.7941C25.9613 28.7492 26.0023 28.7286 26.0748 28.7174C26.1286 28.7091 26.1611 28.7116 26.2142 28.7235C26.2568 28.7331 26.2794 28.7441 26.3185 28.7632C26.3637 28.7854 26.3873 28.8016 26.4273 28.832C26.4728 28.8666 26.496 28.8894 26.5343 28.9316C26.5755 28.9771 26.5959 29.0052 26.6287 29.0568C26.6678 29.1185 26.6859 29.1559 26.7132 29.2235C26.7327 29.2717 26.7425 29.2993 26.7554 29.3496C26.7671 29.3947 26.7727 29.4205 26.7779 29.4668C26.7831 29.5131 26.7826 29.5409 26.7817 29.5847L26.7817 29.5849L26.7815 29.5956C26.7805 29.648 26.7798 29.6776 26.7725 29.7296C26.7635 29.7943 26.7537 29.8301 26.7348 29.8927C26.719 29.9449 26.7089 29.974 26.6871 30.0241C26.6602 30.0862 26.6413 30.1195 26.6062 30.1775C26.5779 30.2243 26.56 30.2494 26.528 30.2939C26.4999 30.3329 26.4834 30.3542 26.4533 30.3918C26.4361 30.4133 26.4084 30.4464 26.4084 30.4464L26.3823 30.4782C26.3852 30.4831 26.3955 30.4791 26.4003 30.4764C26.4003 30.4764 26.4402 30.4513 26.465 30.4341C26.5144 30.3999 26.543 30.376 26.5844 30.3414L26.5846 30.3413L26.5973 30.3307L26.6044 30.3248C26.6112 30.3191 26.6178 30.3136 26.6242 30.3083L26.6242 30.3083C26.6954 30.2491 26.7412 30.2111 26.8085 30.1387C26.8657 30.0771 26.896 30.0406 26.9443 29.9721C27.001 29.8916 27.0289 29.8434 27.0719 29.7552C27.1083 29.6806 27.1519 29.5585 27.1519 29.5585L27.1825 29.4651L27.1836 29.4638C27.2204 29.3227 27.2399 29.1746 27.2399 29.022C27.2399 28.0574 26.4587 27.2755 25.495 27.2755Z",fill:"#743636"}),Object(C.jsx)("path",{d:"M26.4772 35.2065C26.1687 35.3753 25.802 35.4597 25.3771 35.4597C25.1792 35.4597 24.9696 35.4451 24.7485 35.416L24.9318 36.9265H27.0971L27.132 37.7123H24.2508L23.8754 34.604C24.3294 34.7204 24.7397 34.7787 25.1064 34.7787C25.5372 34.7787 25.8806 34.6652 26.1367 34.4381C26.3928 34.217 26.5208 33.9026 26.5208 33.4952C26.5208 33.1285 26.3986 32.8346 26.1541 32.6134C25.9155 32.3922 25.6012 32.2816 25.2112 32.2816C24.9434 32.2816 24.6961 32.3165 24.4691 32.3864C24.2421 32.462 24.0034 32.5697 23.7531 32.7094L23.5523 31.9411C23.7735 31.7956 24.0325 31.6821 24.3294 31.6006C24.632 31.5191 24.9405 31.4783 25.2548 31.4783C25.6681 31.4783 26.0377 31.5598 26.3637 31.7228C26.6955 31.8916 26.9545 32.1273 27.1407 32.43C27.3328 32.7327 27.4289 33.0878 27.4289 33.4952C27.4289 33.8735 27.3474 34.2111 27.1844 34.508C27.0214 34.8048 26.7857 35.0377 26.4772 35.2065Z",fill:"#743636"}),Object(C.jsx)("path",{d:"M23.8245 4.04568C23.5966 3.89701 23.284 3.95695 23.1265 4.17957L13.1818 18.2284C13.512 18.3222 13.8324 18.4392 14.1412 18.5776L23.9519 4.71798C24.1095 4.49536 24.0524 4.19436 23.8245 4.04568Z",fill:"#743636"}),Object(C.jsx)("path",{d:"M6.06211 29.9909C5.82783 29.7442 5.61102 29.4807 5.41368 29.2025L2.23291 33.696C2.07533 33.9186 2.13235 34.2196 2.36029 34.3683C2.58822 34.5169 2.90075 34.457 3.05833 34.2344L6.06211 29.9909Z",fill:"#743636"}),Object(C.jsx)("path",{d:"M11.2337 31.5861H11.2239C7.62676 31.5861 4.71073 28.6675 4.71073 25.0672C4.71073 24.4973 4.78378 23.9446 4.921 23.4178L4.92501 23.4132L5.03912 23.0643C5.03912 23.0643 5.20218 22.6088 5.33781 22.3304C5.49826 22.0009 5.60269 21.821 5.81438 21.5207C5.99467 21.265 6.10762 21.1285 6.32115 20.8987C6.57214 20.6285 6.74318 20.4865 7.00891 20.2658L7.00988 20.265C7.03346 20.2454 7.05779 20.2252 7.08299 20.2042C7.10924 20.1824 7.13394 20.1617 7.15752 20.142C7.31208 20.0129 7.41873 19.9237 7.60318 19.7961C7.69586 19.732 7.84482 19.6381 7.84482 19.6381C7.86272 19.6283 7.90121 19.6131 7.91194 19.6316L7.81462 19.75C7.81462 19.75 7.71125 19.8736 7.64681 19.9541C7.53468 20.0943 7.47297 20.1739 7.36826 20.3194C7.24882 20.4855 7.18203 20.5791 7.07627 20.7539C6.94522 20.9704 6.87475 21.0949 6.77422 21.3265C6.69307 21.5136 6.6552 21.622 6.59635 21.8169C6.52576 22.0507 6.48907 22.1842 6.4554 22.4258C6.42836 22.6198 6.42546 22.7303 6.42183 22.9261C6.42158 22.9397 6.42133 22.9528 6.42108 22.9656L6.42105 22.9668C6.41789 23.1301 6.41588 23.2339 6.43526 23.4066C6.45466 23.5795 6.47559 23.6757 6.51916 23.8443C6.56762 24.0319 6.60419 24.1351 6.6769 24.315C6.77886 24.5672 6.84614 24.7067 6.99237 24.937C7.11472 25.1297 7.19089 25.2348 7.34476 25.4044C7.48774 25.5619 7.57422 25.647 7.74414 25.7763C7.89321 25.8897 7.98149 25.9502 8.15023 26.033C8.29607 26.1045 8.3806 26.1453 8.53954 26.1811C8.73774 26.2257 8.85886 26.2352 9.05974 26.2041C9.33028 26.1623 9.48341 26.0854 9.69739 25.9178C9.88371 25.7718 9.96322 25.6558 10.0833 25.4537C10.2164 25.23 10.2597 25.0843 10.3183 24.8317C10.3888 24.5277 10.3829 24.3468 10.372 24.0352C10.3606 23.711 10.333 23.5276 10.2545 23.2124C10.1858 22.9368 10.1448 22.7787 10.0162 22.5245C9.84429 22.1846 9.71315 21.9983 9.42555 21.7445C9.22991 21.5719 8.86844 21.3726 8.86844 21.3726L8.71405 21.3101L9.47253 20.4642C9.47253 20.4642 9.69081 20.5956 9.82493 20.688C9.84353 20.7009 9.8607 20.7126 9.87692 20.7236L9.8771 20.7238C9.94827 20.7723 10.0011 20.8083 10.0766 20.8724C10.1574 20.9409 10.2046 20.9914 10.2665 21.0576C10.2825 21.0747 10.2995 21.0928 10.3183 21.1126C10.3528 21.149 10.3823 21.1822 10.41 21.2134C10.4361 21.2427 10.4606 21.2703 10.4861 21.2969C10.5387 21.3518 10.6371 21.501 10.6371 21.501C10.6337 21.4527 10.6297 21.4006 10.6237 21.3364C10.6219 21.3178 10.6205 21.3011 10.6192 21.2855C10.6153 21.2399 10.6122 21.2031 10.6035 21.1488C10.5845 21.0291 10.5634 20.9606 10.5293 20.85L10.523 20.8296C10.4848 20.7054 10.4596 20.6367 10.4089 20.5169C10.3684 20.4213 10.3394 20.3643 10.2966 20.2803C10.2907 20.2687 10.2845 20.2565 10.278 20.2437C10.275 20.2379 10.2722 20.2322 10.2694 20.2267C10.2657 20.2195 10.2622 20.2126 10.2588 20.2058C10.2246 20.1381 10.2005 20.0903 10.1572 20.0166C10.121 19.9551 10.0878 19.9036 10.0599 19.862L11.2288 18.55L12.3977 19.8619C12.3698 19.9036 12.3366 19.9551 12.3004 20.0166C12.2571 20.0903 12.2329 20.1381 12.1988 20.2058C12.1927 20.2177 12.1864 20.2303 12.1796 20.2437C12.1756 20.2515 12.1718 20.259 12.1681 20.2662L12.161 20.2802L12.161 20.2803C12.1182 20.3643 12.0892 20.4213 12.0487 20.5169C11.998 20.6366 11.9728 20.7054 11.9346 20.8295L11.9283 20.85C11.8942 20.9606 11.8731 21.0291 11.854 21.1488C11.8454 21.203 11.8423 21.2399 11.8384 21.2855C11.8371 21.3011 11.8356 21.3177 11.8339 21.3364C11.8279 21.4006 11.8238 21.4527 11.8205 21.501C11.8205 21.501 11.9189 21.3518 11.9715 21.2969C11.997 21.2703 12.0215 21.2428 12.0475 21.2134L12.0476 21.2133C12.0753 21.1822 12.1048 21.1489 12.1393 21.1126C12.1581 21.0928 12.1751 21.0747 12.191 21.0576C12.253 20.9913 12.3002 20.9409 12.3809 20.8723C12.4564 20.8083 12.5093 20.7722 12.5805 20.7237L12.5806 20.7236C12.5904 20.717 12.6005 20.7101 12.6111 20.7028C12.6181 20.6981 12.6252 20.6931 12.6327 20.688C12.7668 20.5955 12.9851 20.4642 12.9851 20.4642L13.7435 21.3101L13.5892 21.3726C13.5892 21.3726 13.2277 21.5719 13.032 21.7445C12.7444 21.9983 12.6133 22.1846 12.4414 22.5245C12.3128 22.7787 12.2717 22.9368 12.2031 23.2124C12.1245 23.5276 12.097 23.7109 12.0856 24.0352C12.0747 24.3467 12.0688 24.5277 12.1393 24.8317C12.1979 25.0843 12.2412 25.2299 12.3742 25.4537C12.4944 25.6557 12.5739 25.7718 12.7602 25.9178C12.9742 26.0854 13.1273 26.1623 13.3979 26.2041C13.5987 26.2352 13.7198 26.2257 13.9181 26.1811C14.077 26.1453 14.1615 26.1045 14.3074 26.033C14.4761 25.9502 14.5644 25.8897 14.7135 25.7763C14.8834 25.6469 14.9699 25.5619 15.1128 25.4043C15.2667 25.2348 15.3429 25.1297 15.4652 24.937C15.6115 24.7067 15.6787 24.5672 15.7807 24.315C15.8534 24.1351 15.89 24.0318 15.9384 23.8443C15.982 23.6757 16.0029 23.5795 16.0223 23.4066C16.0417 23.2339 16.0397 23.1301 16.0365 22.9668L16.0365 22.9659L16.0361 22.9453C16.036 22.939 16.0359 22.9326 16.0358 22.9261C16.0321 22.7303 16.0292 22.6198 16.0022 22.4258C15.9685 22.1842 15.9318 22.0507 15.8612 21.8169C15.8024 21.622 15.7645 21.5136 15.6834 21.3265C15.5828 21.0948 15.5124 20.9704 15.3813 20.7538C15.2756 20.5791 15.2088 20.4854 15.0893 20.3194C14.9846 20.1738 14.9229 20.0942 14.8108 19.9541C14.7463 19.8735 14.643 19.75 14.643 19.75L14.5456 19.6315C14.5564 19.6131 14.5949 19.6282 14.6128 19.6381C14.6128 19.6381 14.7617 19.732 14.8544 19.7961C15.0389 19.9237 15.1455 20.0128 15.3001 20.142L15.3008 20.1426C15.3241 20.1621 15.3486 20.1826 15.3746 20.2042C15.4001 20.2254 15.4247 20.2458 15.4485 20.2656L15.4487 20.2658C15.7144 20.4864 15.8855 20.6285 16.1364 20.8987C16.35 21.1285 16.4629 21.2649 16.6432 21.5207C16.8549 21.821 16.9593 22.0009 17.1198 22.3303C17.2554 22.6088 17.4185 23.0643 17.4185 23.0643L17.5326 23.4132L17.5366 23.4178C17.6738 23.9446 17.7469 24.4973 17.7469 25.0671C17.7469 28.6675 14.8308 31.5861 11.2337 31.5861Z",fill:"#743636"}),Object(C.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2381 32.9415C15.5867 32.9415 19.112 29.4163 19.112 25.0677C19.112 20.7191 15.5867 17.1939 11.2381 17.1939C6.88955 17.1939 3.36431 20.7191 3.36431 25.0677C3.36431 29.4163 6.88955 32.9415 11.2381 32.9415ZM11.2303 32.211C15.1661 32.211 18.3567 29.0204 18.3567 25.0846C18.3567 21.1488 15.1661 17.9582 11.2303 17.9582C7.29445 17.9582 4.10384 21.1488 4.10384 25.0846C4.10384 29.0204 7.29445 32.211 11.2303 32.211Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M27.0814 2.84681C26.8535 2.69814 26.541 2.75808 26.3834 2.9807L15.0129 19.0438C15.2919 19.2189 15.5578 19.4127 15.8091 19.6236L27.2088 3.51911C27.3664 3.29649 27.3094 2.99549 27.0814 2.84681Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M7.60109 31.219C7.3177 31.051 7.04695 30.8639 6.79061 30.6595L2.20627 37.1358C2.04868 37.3584 2.10571 37.6594 2.33364 37.8081C2.56158 37.9568 2.8741 37.8968 3.03169 37.6742L7.60109 31.219Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M12.1303 18.0145L20.6245 6.01479C20.7821 5.79216 20.725 5.49117 20.4971 5.34249C20.2692 5.19381 19.9566 5.25376 19.7991 5.47638L10.9601 17.9632C11.0497 17.9599 11.1398 17.9582 11.2303 17.9582C11.5351 17.9582 11.8355 17.9773 12.1303 18.0145Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M4.42264 27.1987C4.53932 27.5748 4.68632 27.9376 4.86077 28.2842L3.10929 30.7585C2.95171 30.9812 2.63919 31.0411 2.41125 30.8924C2.18332 30.7438 2.12629 30.4428 2.28387 30.2201L4.42264 27.1987Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M9.63751 18.1369L17.3717 7.21075C17.5293 6.98813 17.4722 6.68713 17.2443 6.53846C17.0164 6.38978 16.7038 6.44972 16.5463 6.67234L8.01662 18.7222C8.52493 18.4649 9.06824 18.2668 9.63751 18.1369Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M4.16235 24.1671C4.12375 24.4675 4.10384 24.7737 4.10384 25.0846C4.10384 25.3571 4.11914 25.6261 4.14892 25.8906L3.15063 27.3009C2.99304 27.5235 2.68052 27.5835 2.45258 27.4348C2.22465 27.2861 2.16762 26.9851 2.32521 26.7625L4.16235 24.1671Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M8.49213 31.666C8.80673 31.7971 9.13274 31.9062 9.46826 31.9915L6.27748 36.4992C6.11989 36.7218 5.80737 36.7817 5.57943 36.633C5.3515 36.4844 5.29447 36.1834 5.45205 35.9608L8.49213 31.666Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M17.1582 21.1279C16.9671 20.842 16.7557 20.5707 16.5263 20.3161L26.3375 6.45582C26.4951 6.2332 26.8076 6.17326 27.0355 6.32193C27.2635 6.47061 27.3205 6.7716 27.1629 6.99423L17.1582 21.1279Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M10.5528 32.1793L8.72485 34.7616C8.56726 34.9842 8.62429 35.2852 8.85223 35.4339C9.08016 35.5826 9.39269 35.5226 9.55027 35.3L11.7501 32.1924C11.5784 32.2047 11.4051 32.211 11.2303 32.211C11.0018 32.211 10.7758 32.2003 10.5528 32.1793Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M18.1078 23.2108C18.002 22.8218 17.8642 22.4459 17.6972 22.0864L26.317 9.90914C26.4746 9.68652 26.7871 9.62658 27.015 9.77525C27.243 9.92393 27.3 10.2249 27.1424 10.4475L18.1078 23.2108Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M13.1303 31.955L11.983 33.5757C11.8254 33.7983 11.8825 34.0993 12.1104 34.2479C12.3383 34.3966 12.6509 34.3367 12.8085 34.1141L14.8565 31.2208C14.3221 31.5373 13.7427 31.786 13.1303 31.955Z",fill:"#313131"}),Object(C.jsx)("path",{d:"M18.2232 26.4647C18.3108 26.0182 18.3567 25.5567 18.3567 25.0846C18.3567 24.92 18.3511 24.7567 18.3401 24.595L26.2877 13.3675C26.4452 13.1448 26.7578 13.0849 26.9857 13.2336C27.2136 13.3822 27.2707 13.6832 27.1131 13.9059L18.2232 26.4647Z",fill:"#313131"})]})},W=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){}),[r]),Object(C.jsxs)("div",{"data-testid":"exercise-view",className:"exercise_view",children:[Object(C.jsxs)("header",{className:"exercise_view_header",children:[r?Object(C.jsx)(R,{onClick:function(){i("")}}):null,r?Object(C.jsx)("h1",{children:r.name}):Object(C.jsx)("h1",{children:"The Dot Voter by"}),Object(C.jsx)("a",{className:"Red5Logo",href:"https://www.dgs1sdt.com",target:"_blank",children:Object(C.jsx)(U,{})})]}),r?Object(C.jsx)(B,{exercise:r}):null,e.loading?Object(C.jsx)("p",{children:"Loading... "}):e.error?Object(C.jsxs)("p",{children:["Uh oh! ",e.error]}):e.exercises&&!r?Object(C.jsx)(H,{list:e.exercises,callback:function(e){i(e)}}):null]})};function J(){var e=Object(d.a)(["\n    query getExercises{\n        exercises {\n            id\n            name\n        }\n    }\n"]);return J=function(){return e},e}var K=Object(o.gql)(J()),Q=n(38);var z=function(){var e=Object(o.useQuery)(K),t=e.loading,n=e.error,c=e.data;return Object(C.jsxs)("div",{"data-testid":"app",id:"container",className:"app",children:[Object(C.jsx)(Q.BrowserView,{children:c?Object(C.jsx)(W,{loading:t,exercises:c.exercises,error:n}):null}),Object(C.jsx)(Q.MobileView,{children:Object(C.jsx)("h1",{children:" This app is not designed for mobile yet..."})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,C=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),C(e),c(e),r(e),i(e)}))},X=new o.ApolloClient({uri:"/api/graphql",cache:new o.InMemoryCache,connectToDevTools:!0});a.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(o.ApolloProvider,{client:X,children:Object(C.jsx)(z,{})})}),document.getElementById("root")),G()}},[[75,1,2]]]);
//# sourceMappingURL=main.9633678b.chunk.js.map