import{T,r as C,d,a as s,F as k,g as F,b as n,t as r,w as i,o as u,e as I,f as c,u as o,k as U,q as B,n as D}from"./app-D-rA1TwB.js";import{_ as O}from"./Icon-BKFP5_yd.js";import{_ as Y}from"./PrimaryButton-BhHMLEIT.js";import{_ as $}from"./DialogModal-BU6LYd31.js";import{_ as V}from"./SecondaryButton-DDsm42Xd.js";import{_}from"./Input-BLhfz_rl.js";import{_ as g}from"./InputError-RwjkD5Kn.js";import{_ as j}from"./Pagination2-wmmNPwtY.js";import{i as h}from"./index-ByDn4Jzk.js";import{h as L}from"./moment-C5S46NFB.js";const P={key:0},A={key:1,class:"relative overflow-x-auto overflow-y-auto rounded-lg"},G={class:"w-full text-sm text-left rtl:text-right text-gray-700"},H={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex"},R=["href"],W={class:"px-6 py-4"},q={class:"px-6 py-4"},z={class:"px-6 py-4"},E=["onClick"],J={class:"flex items-center justify-between bottom-1 fixed"},K={class:"mt-6 text-sm text-gray-500"},Q={class:"col-span-full"},X={class:"col-span-full"},Z={class:"col-span-full"},ee={class:"col-span-full"},se={class:"flex mt-2 bg-[#fff7d1] shadow-lg rounded-lg justify-between"},te={class:"flex"},le={class:"p-3"},oe={class:"text-xl uppercase"},ae={class:"text-sm"},ne={class:"p-3 flex"},re={class:"uppercase"},ge={__name:"ClientLists",props:["clients","search"],setup(p){const y=p,t=T({fname:null,mname:null,lname:null,sex:null}),m=C(!1),x=C(!1),N=a=>{t.reset(),t.client=a,t.fname=a.fname,t.mname=a.mname,t.lname=a.lname,t.sex=a.sex,m.value=!m.value},S=()=>{t.post(route("client.update",{client:t.client}),{preserveScroll:!0,onSuccess:()=>{t.reset(),h.success("Client has been successfully updated!",{autoClose:1e3,transition:h.TRANSITIONS.FLIP,position:h.POSITION.TOP_RIGHT}),t.reset(),m.value=!m.value}})},M=a=>L(a).format("MMMM Do YYYY, h:mm:ss a");return(a,e)=>(u(),d(k,null,[p.clients.data.length==0?(u(),d("div",P,e[8]||(e[8]=[s("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Clients! ",-1)]))):(u(),d("div",A,[s("table",G,[e[9]||(e[9]=s("thead",{class:"text-xs text-white uppercase bg-yellow-500"},[s("tr",null,[s("th",{scope:"col",class:"px-6 py-3"}," Client Name "),s("th",{scope:"col",class:"px-6 py-3"}," Gender "),s("th",{scope:"col",class:"px-6 py-3"}," Date & Time "),s("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1)),s("tbody",null,[(u(!0),d(k,null,F(p.clients.data,(l,f)=>(u(),d("tr",{key:f,class:"odd:bg-white even:bg-gray-200 border-b"},[s("th",H,[s("a",{class:"hover:font-bold hover:underline",href:a.route("client.index_details",{client_id:l.id})},r(l.lname+", ")+r(l.fname+" ")+r(" "+!l.mname?l.mname:""),9,R)]),s("td",W,r(l.sex=="male"?"Male":"Female"),1),s("td",q,r(M(l.created_at)),1),s("td",z,[a.$page.props.auth.user.user_type=="root"||a.$page.props.auth.user.user_type=="admin"||a.$page.props.auth.user.user_type=="vcsas"||a.$page.props.auth.user.user_type=="director"||a.$page.props.auth.user.user_type=="unit_head"?(u(),d("button",{key:0,onClick:v=>N(l),class:"bg-orange-500 rounded-md p-1 mr-1"},[n(O,{icon:"pencil"})],8,E)):I("",!0)])]))),128))])])])),s("div",J,[n(j,{links:y.clients.links,search:y.search},null,8,["links","search"]),s("p",K," Showing "+r(p.clients.data.length)+" Clients ",1)]),n($,{show:m.value,onClose:e[5]||(e[5]=l=>m.value=!1),maxWidth:"2xl"},{title:i(()=>e[10]||(e[10]=[c("Update Client here!")])),content:i(()=>[s("div",Q,[n(_,{type:"text",label:"Client First Name",modelValue:o(t).fname,"onUpdate:modelValue":e[0]||(e[0]=l=>o(t).fname=l)},null,8,["modelValue"]),n(g,{message:o(t).errors.fname,class:"mt-2"},null,8,["message"])]),s("div",X,[n(_,{type:"text",label:"Client Middle Name",modelValue:o(t).mname,"onUpdate:modelValue":e[1]||(e[1]=l=>o(t).mname=l)},null,8,["modelValue"])]),s("div",Z,[n(_,{type:"text",label:"Client Surname",modelValue:o(t).lname,"onUpdate:modelValue":e[2]||(e[2]=l=>o(t).lname=l)},null,8,["modelValue"]),n(g,{message:o(t).errors.lname,class:"mt-2"},null,8,["message"])]),s("div",ee,[U(s("select",{class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full","onUpdate:modelValue":e[3]||(e[3]=l=>o(t).sex=l)},e[11]||(e[11]=[s("option",{value:null,disabled:""},"Select Client Sex",-1),s("option",{value:"male"},"Male",-1),s("option",{value:"female"},"Female",-1)]),512),[[B,o(t).sex]]),n(g,{message:o(t).errors.sex,class:"mt-2"},null,8,["message"])])]),footer:i(()=>[n(V,{onClick:e[4]||(e[4]=l=>m.value=!1),class:"mr-2 hover:bg-red-500"},{default:i(()=>e[12]||(e[12]=[c(" Cancel ")])),_:1}),n(Y,{class:D([{"opacity-25":o(t).processing},"hover:bg-green-300"]),disabled:o(t).processing,onClick:S},{default:i(()=>e[13]||(e[13]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),c(" Update ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),n($,{show:x.value,onClose:e[7]||(e[7]=l=>x.value=!1),maxWidth:"6xl"},{title:i(()=>{var l,f,v,b,w;return[s("div",se,[s("div",te,[e[14]||(e[14]=s("p",{class:"border-r-2 p-3"}," Name: ",-1)),s("div",le,[s("p",oe,r(((l=o(t).client)==null?void 0:l.lname)+", "),1),s("p",ae,r(((f=o(t).client)==null?void 0:f.fname)+" "+((v=o(t).client)!=null&&v.mname?(b=o(t).client)==null?void 0:b.mname:"")),1)])]),s("div",ne,[e[15]||(e[15]=s("p",null," Sex: ",-1)),s("p",re,"   "+r((w=o(t).client)==null?void 0:w.sex),1)])])]}),content:i(()=>e[16]||(e[16]=[])),footer:i(()=>[n(V,{onClick:e[6]||(e[6]=l=>x.value=!1),class:"mr-2 hover:bg-red-500"},{default:i(()=>e[17]||(e[17]=[c(" Close ")])),_:1})]),_:1},8,["show"])],64))}};export{ge as default};
