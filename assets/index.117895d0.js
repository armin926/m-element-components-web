import{d as D,g as v,r as c,b as h,h as o,w as e,u as a,i as _,o as y,y as i,f as B,E as n}from"./vendor.59325d81.js";const C=i("open"),E=i("\u53D6\u6D88"),A=i("\u786E\u8BA4"),f=i("Click to upload"),k=B("div",{class:"color: #ccc;font-size: 12px;"}," jpg/png files with a size less than 500kb ",-1),j=D({setup(x){let l=v(!1),d=()=>{l.value=!0},m=[{type:"input",value:"",label:"\u7528\u6237\u540D",prop:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:2,max:6,message:"\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"\u5BC6\u7801",prop:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:15,message:"\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:1,placeholder:"\u8BF7\u9009\u62E9\u804C\u4F4D",prop:"role",label:"\u804C\u4F4D",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"option",label:"\u7ECF\u7406",value:1},{type:"option",label:"\u4E3B\u7BA1",value:2},{type:"option",label:"\u5458\u5DE5",value:3}]},{type:"checkbox-group",value:[],prop:"like",label:"\u7231\u597D",rules:[{required:!0,message:"\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"checkbox",label:"\u8DB3\u7403",value:1},{type:"checkbox",label:"\u7BEE\u7403",value:2},{type:"checkbox",label:"\u6392\u7403",value:3}]},{type:"radio-group",value:"",prop:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"radio",label:"\u7537",value:"male"},{type:"radio",label:"\u5973",value:"female"},{type:"radio",label:"\u4FDD\u5BC6",value:"not"}]},{type:"upload",label:"\u4E0A\u4F20",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3}},{type:"editor",value:"<p>\u6211\u662F\u4E00\u6761\u63CF\u8FF0\u5185\u5BB9</p>",prop:"desc",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",label:"\u63CF\u8FF0"}],b=t=>{let r=t.validate(),u=t.getFormData();r(p=>{p?(n.success("\u9A8C\u8BC1\u6210\u529F"),console.log(u)):n.error("\u9A8C\u8BC1\u5931\u8D25")})},g=()=>{};const F=t=>{console.log("success",t)};return(t,r)=>{const u=c("el-button"),p=c("m-modal-form");return y(),h("div",null,[o(u,{type:"primary",onClick:a(d)},{default:e(()=>[C]),_:1},8,["onClick"]),o(p,{isScroll:"",title:"\u7F16\u8F91\u7528\u6237",width:"50%",visible:a(l),"onUpdate:visible":r[0]||(r[0]=s=>_(l)?l.value=s:l=s),options:a(m),"on-success":F},{footer:e(({form:s})=>[o(u,{onClick:a(g)},{default:e(()=>[E]),_:1},8,["onClick"]),o(u,{type:"primary",onClick:w=>a(b)(s)},{default:e(()=>[A]),_:2},1032,["onClick"])]),uploadArea:e(()=>[o(u,{size:"small",type:"primary"},{default:e(()=>[f]),_:1})]),uploadTip:e(()=>[k]),_:1},8,["visible","options"])])}}});export{j as default};
