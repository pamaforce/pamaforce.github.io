import"./base.96266e0f.js";import{a as p}from"./el-button.0ebfcf4b.js";import{E as _}from"./el-input.6e2b86f7.js";import{E as a}from"./el-message.153f25c6.js";import{_ as u,aF as m,o as h,c as g,s,y as i,as as w,m as f,Z as y,$ as V,Y as v}from"./index.368b2d91.js";import"./typescript.b74ad383.js";const x={data(){return{account:"",password:"",loading:!1}},methods:{toLogin(){if(!this.account){a.warning("\u8BF7\u8F93\u5165\u60A8\u7684\u8D26\u53F7");return}if(!this.password){a.warning("\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801");return}this.loading=!0,this.account==="admin"&&this.password==="admin"?setTimeout(()=>{a.success("\u767B\u5F55\u6210\u529F"),this.loading=!1,m("testToken"),this.$router.push("/home")},500):(a.error("\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u8BA4\u771F\u68C0\u67E5\u4E00\u4E0B\u54E6~"),this.loading=!1)}}},n=e=>(y("data-v-01ea5a43"),e=e(),V(),e),b={class:"login"},k={class:"box"},E=n(()=>s("p",{class:"title"},"\u6821\u53CB\u4E4B\u5BB6\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),T=n(()=>s("p",{class:"label"},"\u8D26\u53F7",-1)),B=n(()=>s("p",{class:"label"},"\u5BC6\u7801",-1)),I=v("\u767B\u5F55"),S=n(()=>s("p",{class:"copyright"},"Powered by TWT Studio",-1));function C(e,t,K,L,o,d){const r=_,c=p;return h(),g("div",b,[s("div",k,[E,T,i(r,{modelValue:o.account,"onUpdate:modelValue":t[0]||(t[0]=l=>o.account=l),class:"account",placeholder:"\u9ED8\u8BA4\u4E3Aadmin"},null,8,["modelValue"]),B,i(r,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=l=>o.password=l),class:"password",type:"password",placeholder:"\u9ED8\u8BA4\u4E3Aadmin","show-password":"",onKeydown:w(d.toLogin,["enter"])},null,8,["modelValue","onKeydown"]),i(c,{"auto-insert-space":"",color:"#014B88",class:"btn",onClick:d.toLogin,loading:o.loading},{default:f(()=>[I]),_:1},8,["onClick","loading"]),S])])}var Y=u(x,[["render",C],["__scopeId","data-v-01ea5a43"]]);export{Y as default};
