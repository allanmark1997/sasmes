import{T as P,r as h,d as m,b as l,w as i,F as k,o as d,a as s,p as R,e as p,c as B,f as g,g as F,h as O,u as r,n as U,s as C}from"./app-CBJz-P0Z.js";import{_ as A}from"./AppLayout-DQ-VRXYL.js";import M from"./OfficeLists-oqOTPxrZ.js";import{_ as $}from"./PrimaryButton-DJrJSKJ5.js";import{_ as G}from"./DialogModal-DUcuS041.js";import{_ as D}from"./SecondaryButton-BiFyXpEL.js";import{_}from"./Input-C-YFW9l6.js";import{_ as b}from"./InputError-BKMaT1Z3.js";import{_ as H}from"./Icon-RyGwq0-F.js";import{i as c}from"./index-DWa2gnuY.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./ConfirmationModal-BxCp3ZD2.js";import"./Pagination2--ZhHyVJi.js";const z={class:"py-4"},E={class:"flex justify-between"},J={key:0,class:"flex gap-2 ml-8"},K={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},W={class:"overflow-hidden"},X={class:"grid grid-cols-12 gap-2"},q={key:0,class:"col-span-12 mx-auto"},Q=["src"],Y=["onClick"],Z={class:"grid grid-cols-12 gap-1"},ee={class:"col-span-12"},se={class:"col-span-full"},he={__name:"Index",props:["offices","search"],setup(I){const x=I,o=P({name:null,abbrevation:null,image:[]}),f=h(!1),v=h(""),n=h([]),u=h(x.search),w=()=>{o.reset(),n.value=[],f.value=!f.value},V=()=>{o.post(route("office.store"),{preserveScroll:!0,onSuccess:()=>{o.reset(),c.success("Office has been successfully added!",{autoClose:1e3,transition:c.TRANSITIONS.FLIP,position:c.POSITION.TOP_RIGHT}),o.reset(),n.value=[],w()}})},T=()=>{v.value="";let a=document.getElementById("profile_photo");a.click(),a.onchange=e=>{for(let t=0;t<e.target.files.length;t++)n.value.push(window.URL.createObjectURL(e.target.files[0])),o.image=e.target.files[0]}},L=a=>{if(v.value="",a.preventDefault(),a.dataTransfer.files.length>1)v.value="Only 1 image can be selected";else for(const t of a.dataTransfer.files){var e=URL.createObjectURL(t);n.value.push(e),o.image=t}},N=a=>{n.value.splice(a,1),o.image=null,c.warn("Image remove",{autoClose:1e3,transition:c.TRANSITIONS.FLIP,position:c.POSITION.TOP_RIGHT})},S=()=>{C.get(route("office.index",{search:u.value}))},j=()=>{u.value="",C.get(route("office.index",{search:u.value}))};return(a,e)=>(d(),m(k,null,[l(A,{title:"Offices"},{header:i(()=>e[8]||(e[8]=[s("h2",{class:"font-semibold text-lg text-white leading-tight"}," Offices ",-1)])),default:i(()=>[s("div",z,[s("div",E,[a.$page.props.auth.user.user_type=="root"||a.$page.props.auth.user.user_type=="admin"?(d(),m("div",J,[l(_,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),class:"rounded-lg mb-2 w-[30vmin]",type:"text",label:"Search Office",onKeyup:R(S,["enter"])},null,8,["modelValue"]),u.value?(d(),m("button",{key:0,class:"h-10 my-auto mt-5",onClick:j},[l(H,{icon:"close_icon",size:"sm"})])):p("",!0)])):p("",!0),a.$page.props.auth.user.user_type=="root"||a.$page.props.auth.user.user_type=="admin"?(d(),B($,{key:1,onClick:e[1]||(e[1]=t=>w()),class:"mb-2 mr-12 h-10 mt-5"},{default:i(()=>e[9]||(e[9]=[g(" Add Office ")])),_:1})):p("",!0)]),s("div",K,[s("div",W,[l(M,{offices:x.offices,search:x.search},null,8,["offices","search"])])])])]),_:1}),l(G,{show:f.value,onClose:e[7]||(e[7]=t=>f.value=!1),maxWidth:"2xl"},{title:i(()=>e[10]||(e[10]=[g("Add Office here!")])),content:i(()=>[s("div",X,[n.value.length!=0?(d(),m("div",q,[(d(!0),m(k,null,F(n.value,(t,y)=>(d(),m("div",{key:y,class:"flex-shrink-0"},[s("img",{class:"w-64 h-64 rounded-lg",src:t},null,8,Q),s("button",{onClick:oe=>N(y),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[11]||(e[11]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),s("span",{class:"text-red-500"},"Remove",-1)]),8,Y)]))),128))])):p("",!0),n.value.length!=1?(d(),m("div",{key:1,class:"col-span-12",onDragover:e[2]||(e[2]=O(()=>{},["prevent"])),onDrop:e[3]||(e[3]=O(()=>{},["prevent"]))},[s("label",{onDrop:L,onClick:T,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[12]||(e[12]=[s("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[s("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),s("p",{class:"mb-1 text-sm text-gray-500"},[s("span",{class:"font-semibold"},"Click to upload"),g(" or drag and drop ")]),s("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),s("input",{id:"profile_photo",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32),l(b,{message:r(o).errors.image||v.value,class:"mt-2"},null,8,["message"])],32)):p("",!0)]),s("div",Z,[s("div",ee,[l(_,{type:"text",label:"Office name",modelValue:r(o).name,"onUpdate:modelValue":e[4]||(e[4]=t=>r(o).name=t)},null,8,["modelValue"]),l(b,{message:r(o).errors.name,class:"mt-2"},null,8,["message"])])]),s("div",se,[l(_,{type:"text",label:"Office abbrevation",modelValue:r(o).abbrevation,"onUpdate:modelValue":e[5]||(e[5]=t=>r(o).abbrevation=t)},null,8,["modelValue"]),l(b,{message:r(o).errors.abbrevation,class:"mt-2"},null,8,["message"])])]),footer:i(()=>[l(D,{onClick:e[6]||(e[6]=t=>f.value=!1),class:"mr-2 hover:bg-red-500"},{default:i(()=>e[13]||(e[13]=[g(" Cancel ")])),_:1}),l($,{class:U([{"opacity-25":r(o).processing},"hover:bg-green-300"]),disabled:r(o).processing,onClick:V},{default:i(()=>e[14]||(e[14]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{he as default};
