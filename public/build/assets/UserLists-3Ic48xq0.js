import{T as A,r as S,d as c,a as t,F as U,g as O,b as a,t as u,w as r,o as i,e as H,n as h,c as V,u as o,f as d,k as $,q as B,v as R}from"./app-5JvOj9Ab.js";import{_ as I}from"./Icon-BpPSPFYG.js";import{d as q}from"./sasmes_logo-C-K0o8NT.js";import{_ as k}from"./PrimaryButton-DNMj1f0D.js";import{_ as j}from"./DialogModal-PfS1nHGC.js";import{_ as T}from"./SecondaryButton-xevICETi.js";import{_ as M}from"./Input-CUZKZruL.js";import{_ as N}from"./InputError-xY5OeEEf.js";import{_ as D}from"./ConfirmationModal-DQYG7OWb.js";import{_ as z}from"./Pagination2-DEv4_G8B.js";import{i as f}from"./index-kkv2jsVV.js";import"./moment-C5S46NFB.js";const J={key:0},K={key:1,class:"grid grid-cols-12 gap-2"},Q={class:"w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative"},X={class:"absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded"},Y=["onClick"],Z=["onClick"],ee=["onClick"],se=["src","onerror"],te={class:"px-2 pb-2"},oe={class:"text-md font-semibold tracking-tight text-gray-900 text-center -mt-4"},le={class:"text-center mx-auto text-xs"},re={class:"text-center text-white mx-auto text-[1vmin] uppercase bg-green-500 w-[20vmin] rounded-lg mt-2 p-1"},ae={class:"text-center text-white mx-auto text-[1vmin] uppercase bg-orange-500 w-[10vmin] rounded-lg mt-2 p-1 pl-1 pr-1"},ne={class:"flex items-center justify-between bottom-1 fixed"},ie={class:"mt-6 text-sm text-gray-500"},de={class:"col-span-full"},ue={class:"col-span-full"},me={class:"col-span-full"},pe=["value"],ce={class:"col-span-full"},fe={class:"col-span-full mt-4"},ge={class:"inline-flex items-center cursor-pointer"},ve={class:"grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[70vmin] overflow-y-auto"},be=["value"],we={for:"bordered-checkbox-1",class:"w-full py-1 ms-2 text-sm font-medium text-gray-700"},Ne={__name:"UserLists",props:["users","offices","search","position","office","units"],setup(x){const _=x,m=A({user:null,status:null}),p=A({user:null,selected:[]}),l=A({user:null,name:null,email:null,user_type:"",office_id:"",change_pass:!1}),b=S(!1),g=S(!1),y=S(!1),w=S(!1),F=n=>{p.reset(),p.user=n,n.access_control.units.forEach(e=>{p.selected.push(e)}),w.value=!w.value},L=n=>{m.reset(),m.user=n,m.status=n.status!=1,b.value=!b.value},W=n=>{l.reset(),l.user=n,l.name=n.name,l.email=n.email,l.user_type=n.user_type,l.office_id=n.office_id,g.value=!g.value},E=()=>{m.put(route("user.status",{user:m.user}),{preserveScroll:!0,onSuccess:()=>{m.reset(),f.success("User has been successfully updated the status!",{autoClose:1e3,transition:f.TRANSITIONS.FLIP,position:f.POSITION.TOP_RIGHT}),b.value=!b.value}})},P=()=>{l.put(route("user.update",{user:l.user}),{preserveScroll:!0,onSuccess:()=>{l.reset(),f.success("User has been successfully updated.",{autoClose:1e3,transition:f.TRANSITIONS.FLIP,position:f.POSITION.TOP_RIGHT}),g.value=!g.value,y.value=!1}})},G=()=>{p.put(route("access.update",{accessControl:p.user.access_control.id}),{preserveScroll:!0,onSuccess:()=>{p.reset(),f.success("User has been successfully updated.",{autoClose:1e3,transition:f.TRANSITIONS.FLIP,position:f.POSITION.TOP_RIGHT}),w.value=!w.value}})};return(n,e)=>(i(),c(U,null,[x.users.data.length==0?(i(),c("div",J,e[14]||(e[14]=[t("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Users! ",-1)]))):(i(),c("div",K,[(i(!0),c(U,null,O(x.users.data,(s,v)=>(i(),c("div",{key:v,class:"col-span-3"},[t("div",Q,[t("div",X,[(n.$page.props.auth.user.user_type=="root"||n.$page.props.auth.user.user_type=="admin")&&n.$page.props.auth.user.id!=s.id?(i(),c("button",{key:0,onClick:C=>W(s),class:"bg-orange-500 rounded-md p-1 mr-1",title:"Update User"},[a(I,{icon:"pencil"})],8,Y)):H("",!0),(n.$page.props.auth.user.user_type=="root"||n.$page.props.auth.user.user_type=="admin")&&n.$page.props.auth.user.id!=s.id?(i(),c("button",{key:1,onClick:C=>L(s),class:h(["rounded-md p-1",s.status==1?"bg-red-500":"bg-green-500"]),title:"User Status"},[s.status==1?(i(),V(I,{key:0,icon:"close_icon"})):(i(),V(I,{key:1,icon:"check"}))],10,Z)):H("",!0),t("button",{onClick:C=>F(s),class:"rounded-md p-1 ml-1 bg-teal-500",title:"Access Control"},[a(I,{icon:"option"})],8,ee)]),t("img",{class:"object-obtain p-8 h-[20vmin] w-[20vmin] mx-auto rounded-full -mt-5",src:s.profile_photo_url,onerror:`this.src='${o(q)}'`,alt:"User image"},null,8,se),t("div",te,[t("div",null,[t("h5",oe,u(s.name),1),t("p",le,u(s.email),1),t("p",re,u(s.user_type=="root"?"Super Admin":s.user_type=="admin"?"Admin":s.user_type=="vcsas"?"VCSAS":s.user_type=="director"?"Director":s.user_type=="unit_head"?"Unit Head":"Unit Staff"),1),t("p",ae,u(s.office.abbrevation),1),t("p",{class:h(["text-[1vmin] p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto mt-2",s.status==1?"bg-green-500":"bg-red-500"])},u(s.status==1?"Active":"Deactivated"),3)])])])]))),128))])),t("div",ne,[a(z,{links:_.users.links,search:_.search,position:_.position,office:_.office},null,8,["links","search","position","office"]),t("p",ie," Showing "+u(x.users.data.length)+" Users ",1)]),a(D,{show:b.value,onClose:e[1]||(e[1]=s=>b.value=!1),maxWidth:"2xl"},{title:r(()=>[d(" Are you sure you want to update status of this user("+u(o(m).user.name)+")?",1)]),content:r(()=>e[15]||(e[15]=[])),footer:r(()=>[a(T,{onClick:e[0]||(e[0]=s=>b.value=!1),class:"mr-2"},{default:r(()=>e[16]||(e[16]=[d(" nevermind ")])),_:1}),a(k,{class:h([{"opacity-25":o(m).processing},"hover:bg-green-400"]),disabled:o(m).processing,onClick:E},{default:r(()=>e[17]||(e[17]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),d(" Confirm ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(j,{show:g.value,onClose:e[9]||(e[9]=s=>g.value=!1),maxWidth:"2xl"},{title:r(()=>e[18]||(e[18]=[d("Update User here!")])),content:r(()=>[t("div",de,[a(M,{type:"text",label:"User Name",modelValue:o(l).name,"onUpdate:modelValue":e[2]||(e[2]=s=>o(l).name=s)},null,8,["modelValue"]),a(N,{message:o(l).errors.name,class:"mt-2"},null,8,["message"])]),t("div",ue,[a(M,{type:"email",label:"User Email",modelValue:o(l).email,"onUpdate:modelValue":e[3]||(e[3]=s=>o(l).email=s)},null,8,["modelValue"]),a(N,{message:o(l).errors.email,class:"mt-2"},null,8,["message"])]),t("div",me,[$(t("select",{"onUpdate:modelValue":e[4]||(e[4]=s=>o(l).office_id=s),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[19]||(e[19]=t("option",{value:"",disabled:""},"Select Office",-1)),(i(!0),c(U,null,O(_.offices,(s,v)=>(i(),c("option",{key:v,value:s.id},u(s.abbrevation)+"("+u(s.name)+")",9,pe))),128))],512),[[B,o(l).office_id]]),a(N,{message:o(l).errors.office_id,class:"mt-2"},null,8,["message"])]),t("div",ce,[$(t("select",{"onUpdate:modelValue":e[5]||(e[5]=s=>o(l).user_type=s),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},e[20]||(e[20]=[t("option",{value:"",disabled:""},"Select User Position",-1),t("option",{value:"root"},"Root",-1),t("option",{value:"admin"},"Admin",-1),t("option",{value:"vcsas"},"VCSAS",-1),t("option",{value:"director"},"Director",-1),t("option",{value:"unit_head"},"Unit Head",-1),t("option",{value:"unit_staff"},"Unit Staff",-1)]),512),[[B,o(l).user_type]]),a(N,{message:o(l).errors.user_type,class:"mt-2"},null,8,["message"])]),t("div",fe,[t("label",ge,[$(t("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=s=>o(l).change_pass=s),value:"",class:"sr-only peer",checked:""},null,512),[[R,o(l).change_pass]]),e[21]||(e[21]=t("div",{class:"relative w-11 h-6 bg-orange-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"},null,-1)),e[22]||(e[22]=t("span",{class:"ms-3 text-sm font-medium text-gray-500"},"Reset Password",-1))])])]),footer:r(()=>[a(T,{onClick:e[7]||(e[7]=s=>g.value=!1),class:"mr-2 hover:bg-red-500"},{default:r(()=>e[23]||(e[23]=[d(" Cancel ")])),_:1}),o(l).change_pass==!1?(i(),V(k,{key:0,class:h([{"opacity-25":o(l).processing},"hover:bg-green-300"]),disabled:o(l).processing,onClick:P},{default:r(()=>e[24]||(e[24]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),d(" Update ")])),_:1},8,["class","disabled"])):(i(),V(k,{key:1,class:h([{"opacity-25":o(l).processing},"hover:bg-green-300"]),disabled:o(l).processing,onClick:e[8]||(e[8]=s=>y.value=!0)},{default:r(()=>e[25]||(e[25]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),d(" Updates ")])),_:1},8,["class","disabled"]))]),_:1},8,["show"]),a(j,{show:w.value,onClose:e[12]||(e[12]=s=>w.value=!1),maxWidth:"2xl"},{title:r(()=>{var s,v;return[d("Access Control for user ("+u((v=(s=o(p))==null?void 0:s.user)==null?void 0:v.name)+")",1)]}),content:r(()=>[t("div",ve,[(i(!0),c(U,null,O(_.units,(s,v)=>(i(),c("div",{key:v,class:"col-span-4 flex items-center ps-4 border border-gray-200 rounded h-[5vmin]"},[$(t("input",{id:"bordered-checkbox-1",type:"checkbox",value:s.id,"onUpdate:modelValue":e[10]||(e[10]=C=>o(p).selected=C),name:"bordered-checkbox",class:"w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"},null,8,be),[[R,o(p).selected]]),t("label",we,u(s.name),1)]))),128))])]),footer:r(()=>[a(T,{onClick:e[11]||(e[11]=s=>w.value=!1),class:"mr-2 hover:bg-red-500"},{default:r(()=>e[26]||(e[26]=[d(" Cancel ")])),_:1}),a(k,{class:h([{"opacity-25":o(p).processing},"hover:bg-green-300"]),disabled:o(p).processing,onClick:G},{default:r(()=>e[27]||(e[27]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),d(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(D,{show:y.value,maxWidth:"2xl"},{title:r(()=>[d(" Are you sure you want to reset password of ("+u(o(l).name)+")?",1)]),content:r(()=>e[28]||(e[28]=[])),footer:r(()=>[a(T,{onClick:e[13]||(e[13]=s=>(y.value=!1,g.value=!0)),class:"mr-2"},{default:r(()=>e[29]||(e[29]=[d(" nevermind ")])),_:1}),a(k,{class:h([{"opacity-25":o(m).processing},"hover:bg-green-400"]),disabled:o(m).processing,onClick:P},{default:r(()=>e[30]||(e[30]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),d(" Confirm ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{Ne as default};
