(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,n,t){},58:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var c=t(10),i=t(3),r=t.n(i),s=t(47),a=t.n(s),o=(t(57),t(58),t(17)),d=t(48);function l(){var e=Object(d.a)(["\n    query getExercises{\n        exercises {\n            id\n            name\n        }\n    }\n"]);return l=function(){return e},e}var j=Object(o.gql)(l()),u=function(e){var n=Object(o.useQuery)(j),t=n.loading,i=n.error,r=n.data;return Object(c.jsx)("div",{"data-testid":"exercise-view",className:"exercise_view",children:t?Object(c.jsx)("p",{children:"Loading... "}):i?Object(c.jsxs)("p",{children:["Uh oh! ",i.message]}):r&&void 0!==r?Object(c.jsx)("div",{children:r.exercises.map((function(e){return Object(c.jsx)("div",{"data-testid":"exercise-row",className:"dataRow",children:Object(c.jsx)("p",{children:e.name})},e.id)}))}):null})};var h=function(){return Object(c.jsx)("div",{"data-testid":"app",className:"App",children:Object(c.jsx)(u,{})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),r(e),s(e)}))},b=new o.ApolloClient({uri:"http://localhost:8080/api/graphql",cache:new o.InMemoryCache,connectToDevTools:!0});a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.ApolloProvider,{client:b,children:Object(c.jsx)(h,{})})}),document.getElementById("root")),p()}},[[66,1,2]]]);
//# sourceMappingURL=main.8c081e5e.chunk.js.map