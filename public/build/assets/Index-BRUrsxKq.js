import{T as M,r as p,D as te,d as i,b as n,w as c,F as h,o as a,a as s,k as N,q as B,g as y,t as P,e as _,p as le,c as F,f as g,h as R,u as t,v as G,n as H,s as E}from"./app-BR0-6RX7.js";import{_ as re}from"./AppLayout-DM3l-2Uy.js";import ae from"./ServiceLists-rQukKN36.js";import{_ as $}from"./PrimaryButton-DB3kJ4Z2.js";import{_ as z}from"./DialogModal-Bom4yNT8.js";import{_ as J}from"./SecondaryButton-DULk4g78.js";import{_ as V}from"./Input-Bx6ERe1I.js";import{_ as k}from"./InputError-CD2P3Cmr.js";import{_ as ne}from"./Icon-DBQPEBr9.js";import{i as v}from"./index-Kraluj5U.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./ConfirmationModal-Bh_f4q79.js";import"./Pagination2-YWOQvcyZ.js";const ie={class:"py-4"},de={class:"flex justify-between"},ue={class:"flex gap-2 ml-8"},ce={key:0},me=["value"],ve={class:"flex"},ge={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},fe={class:"overflow-hidden"},pe={class:"grid grid-cols-12 gap-2"},be={key:0,class:"col-span-12 mx-auto"},xe=["src"],he=["onClick"],we={class:"grid grid-cols-12 gap-1"},ye={class:"col-span-12"},_e={class:"col-span-full"},ke=["value"],Se={class:"grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto"},Ce=["value"],Ie={for:"bordered-checkbox-1",class:"w-full py-1 ms-2 text-sm font-medium text-gray-700"},Ve={class:"grid grid-cols-12 gap-2"},Te={key:0,class:"col-span-12 mx-auto"},Oe=["src"],Le=["onClick"],Ne={class:"grid grid-cols-12 gap-1"},Pe={class:"col-span-12"},Re={class:"col-span-full"},$e={class:"grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto"},je=["value"],Ue={for:"bordered-checkbox-1",class:"w-full py-1 ms-2 text-sm font-medium text-gray-700"},Qe={__name:"Index",props:["services","search","offices","office","units"],setup(K){const m=K,r=M({name:null,abbrevation:null,image:[],office_id:"",selected_units:[]}),d=M({name:null,abbrevation:null,image:[],selected_units:[]}),S=p(!1),C=p(!1),f=p([]),T=p(""),b=p([]),O=p(""),w=p(m.search),I=p(m.office),L=p(null),j=()=>{r.reset(),f.value=[],S.value=!S.value},U=()=>{d.reset(),f.value=[],C.value=!C.value},W=()=>{r.post(route("service.store"),{preserveScroll:!0,onSuccess:()=>{r.reset(),v.success("Service has been successfully added!",{autoClose:1e3,transition:v.TRANSITIONS.FLIP,position:v.POSITION.TOP_RIGHT}),r.reset(),f.value=[],L.value=[],j()}})},X=()=>{d.post(route("service.store_director"),{preserveScroll:!0,onSuccess:()=>{d.reset(),v.success("Service has been successfully added!",{autoClose:1e3,transition:v.TRANSITIONS.FLIP,position:v.POSITION.TOP_RIGHT}),d.reset(),b.value=[],U()}})},q=()=>{O.value="";let l=document.getElementById("profile_photo_director");l.click(),l.onchange=e=>{for(let o=0;o<e.target.files.length;o++)b.value.push(window.URL.createObjectURL(e.target.files[0])),d.image=e.target.files[0]}},Q=l=>{if(O.value="",l.preventDefault(),l.dataTransfer.files.length>1)O.value="Only 1 image can be selected";else for(const o of l.dataTransfer.files){var e=URL.createObjectURL(o);b.value.push(e),d.image=o}},Y=l=>{b.value.splice(l,1),d.image=null,v.warn("Image remove",{autoClose:1e3,transition:v.TRANSITIONS.FLIP,position:v.POSITION.TOP_RIGHT})},Z=()=>{T.value="";let l=document.getElementById("profile_photo");l.click(),l.onchange=e=>{for(let o=0;o<e.target.files.length;o++)f.value.push(window.URL.createObjectURL(e.target.files[0])),r.image=e.target.files[0]}},ee=l=>{if(T.value="",l.preventDefault(),l.dataTransfer.files.length>1)T.value="Only 1 image can be selected";else for(const o of l.dataTransfer.files){var e=URL.createObjectURL(o);f.value.push(e),r.image=o}},se=l=>{f.value.splice(l,1),r.image=null,v.warn("Image remove",{autoClose:1e3,transition:v.TRANSITIONS.FLIP,position:v.POSITION.TOP_RIGHT})},A=()=>{E.get(route("service.index",{search:w.value,office:I.value}))},oe=()=>{w.value="",I.value="",E.get(route("service.index",{search:w.value,office:I.value}))};return te(()=>r.office_id,l=>{r.selected_units=[];var e=m.offices.findIndex(o=>o.id===l);L.value=m.offices[e].units,console.log(e,l,L.value)},{deep:!0}),(l,e)=>(a(),i(h,null,[n(re,{title:"Services"},{header:c(()=>e[19]||(e[19]=[s("h2",{class:"font-semibold text-lg text-white leading-tight"}," Services ",-1)])),default:c(()=>[s("div",ie,[s("div",de,[s("div",ue,[l.$page.props.auth.user.user_type!="director"?(a(),i("div",ce,[N(s("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>I.value=o),onChange:A,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 p-1"},[e[20]||(e[20]=s("option",{value:"",disabled:""},"Select Office",-1)),e[21]||(e[21]=s("option",{value:""},"All Offices",-1)),(a(!0),i(h,null,y(m.offices,(o,u)=>(a(),i("option",{key:u,value:o.id},P(o.abbrevation),9,me))),128))],544),[[B,I.value]])])):_("",!0),n(V,{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=o=>w.value=o),class:"rounded-lg mb-2 w-[30vmin]",type:"text",label:"Search Service",onKeyup:le(A,["enter"])},null,8,["modelValue"]),w.value?(a(),i("button",{key:1,class:"h-10 my-auto mt-5",onClick:oe},[n(ne,{icon:"close_icon",size:"sm"})])):_("",!0)]),s("div",ve,[l.$page.props.auth.user.user_type=="director"?(a(),F($,{key:0,onClick:e[2]||(e[2]=o=>U()),class:"mb-2 mr-10 h-10 mt-5"},{default:c(()=>e[22]||(e[22]=[g(" Add Service ")])),_:1})):(a(),F($,{key:1,onClick:e[3]||(e[3]=o=>j()),class:"mb-2 mr-12 h-10 mt-5"},{default:c(()=>e[23]||(e[23]=[g(" Add Service ")])),_:1}))])]),s("div",ge,[s("div",fe,[n(ae,{services:m.services,search:m.search,office:m.office,offices:m.offices,units:m.units},null,8,["services","search","office","offices","units"])])])])]),_:1}),n(z,{show:S.value,onClose:e[11]||(e[11]=o=>S.value=!1),maxWidth:"2xl"},{title:c(()=>e[24]||(e[24]=[g("Add Services here!")])),content:c(()=>[s("div",pe,[f.value.length!=0?(a(),i("div",be,[(a(!0),i(h,null,y(f.value,(o,u)=>(a(),i("div",{key:u,class:"flex-shrink-0"},[s("img",{class:"w-64 h-64 rounded-lg",src:o},null,8,xe),s("button",{onClick:x=>se(u),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[25]||(e[25]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),s("span",{class:"text-red-500"},"Remove",-1)]),8,he)]))),128))])):_("",!0),f.value.length!=1?(a(),i("div",{key:1,class:"col-span-12",onDragover:e[4]||(e[4]=R(()=>{},["prevent"])),onDrop:e[5]||(e[5]=R(()=>{},["prevent"]))},[s("label",{onDrop:ee,onClick:Z,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[26]||(e[26]=[s("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[s("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),s("p",{class:"mb-1 text-sm text-gray-500"},[s("span",{class:"font-semibold"},"Click to upload"),g(" or drag and drop ")]),s("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),s("input",{id:"profile_photo",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32),n(k,{message:t(r).errors.image||T.value,class:"mt-2"},null,8,["message"])],32)):_("",!0)]),s("div",we,[s("div",ye,[n(V,{type:"text",label:"Service name",modelValue:t(r).name,"onUpdate:modelValue":e[6]||(e[6]=o=>t(r).name=o)},null,8,["modelValue"]),n(k,{message:t(r).errors.name,class:"mt-2"},null,8,["message"])])]),s("div",_e,[n(V,{type:"text",label:"Service abbrevation",modelValue:t(r).abbrevation,"onUpdate:modelValue":e[7]||(e[7]=o=>t(r).abbrevation=o)},null,8,["modelValue"]),n(k,{message:t(r).errors.abbrevation,class:"mt-2"},null,8,["message"])]),s("div",null,[N(s("select",{"onUpdate:modelValue":e[8]||(e[8]=o=>t(r).office_id=o),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[27]||(e[27]=s("option",{value:"",disabled:""},"Select Office",-1)),(a(!0),i(h,null,y(m.offices,(o,u)=>(a(),i("option",{key:u,value:o.id},P(o.name),9,ke))),128))],512),[[B,t(r).office_id]])]),s("div",Se,[(a(!0),i(h,null,y(L.value,(o,u)=>(a(),i("div",{key:u,class:"col-span-4 flex items-center ps-4 border border-gray-200 rounded"},[N(s("input",{id:"bordered-checkbox-1",type:"checkbox",value:o.id,"onUpdate:modelValue":e[9]||(e[9]=x=>t(r).selected_units=x),name:"bordered-checkbox",class:"w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"},null,8,Ce),[[G,t(r).selected_units]]),s("label",Ie,P(o.name),1)]))),128))])]),footer:c(()=>[n(J,{onClick:e[10]||(e[10]=o=>S.value=!1),class:"mr-2 hover:bg-red-500"},{default:c(()=>e[28]||(e[28]=[g(" Cancel ")])),_:1}),n($,{class:H([{"opacity-25":t(r).processing},"hover:bg-green-300"]),disabled:t(r).processing,onClick:W},{default:c(()=>e[29]||(e[29]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),n(z,{show:C.value,onClose:e[18]||(e[18]=o=>C.value=!1),maxWidth:"2xl"},{title:c(()=>e[30]||(e[30]=[g("Add Services here!")])),content:c(()=>{var o;return[s("div",Ve,[b.value.length!=0?(a(),i("div",Te,[(a(!0),i(h,null,y(b.value,(u,x)=>(a(),i("div",{key:x,class:"flex-shrink-0"},[s("img",{class:"w-64 h-64 rounded-lg",src:u},null,8,Oe),s("button",{onClick:D=>Y(x),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[31]||(e[31]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),s("span",{class:"text-red-500"},"Remove",-1)]),8,Le)]))),128))])):_("",!0),b.value.length!=1?(a(),i("div",{key:1,class:"col-span-12",onDragover:e[12]||(e[12]=R(()=>{},["prevent"])),onDrop:e[13]||(e[13]=R(()=>{},["prevent"]))},[s("label",{onDrop:Q,onClick:q,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[32]||(e[32]=[s("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[s("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),s("p",{class:"mb-1 text-sm text-gray-500"},[s("span",{class:"font-semibold"},"Click to upload"),g(" or drag and drop ")]),s("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),s("input",{id:"profile_photo_director",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32),n(k,{message:t(d).errors.image||O.value,class:"mt-2"},null,8,["message"])],32)):_("",!0)]),s("div",Ne,[s("div",Pe,[n(V,{type:"text",label:"Service name",modelValue:t(d).name,"onUpdate:modelValue":e[14]||(e[14]=u=>t(d).name=u)},null,8,["modelValue"]),n(k,{message:t(d).errors.name,class:"mt-2"},null,8,["message"])])]),s("div",Re,[n(V,{type:"text",label:"Service abbrevation",modelValue:t(d).abbrevation,"onUpdate:modelValue":e[15]||(e[15]=u=>t(d).abbrevation=u)},null,8,["modelValue"]),n(k,{message:t(d).errors.abbrevation,class:"mt-2"},null,8,["message"])]),s("div",$e,[(a(!0),i(h,null,y((o=m.offices)==null?void 0:o.units,(u,x)=>(a(),i("div",{key:x,class:"col-span-4 flex items-center ps-4 border border-gray-200 rounded"},[N(s("input",{id:"bordered-checkbox-1",type:"checkbox",value:u.id,"onUpdate:modelValue":e[16]||(e[16]=D=>t(d).selected_units=D),name:"bordered-checkbox",class:"w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"},null,8,je),[[G,t(d).selected_units]]),s("label",Ue,P(u.name),1)]))),128))])]}),footer:c(()=>[n(J,{onClick:e[17]||(e[17]=o=>C.value=!1),class:"mr-2 hover:bg-red-500"},{default:c(()=>e[33]||(e[33]=[g(" Cancel ")])),_:1}),n($,{class:H([{"opacity-25":t(d).processing},"hover:bg-green-300"]),disabled:t(d).processing,onClick:X},{default:c(()=>e[34]||(e[34]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{Qe as default};
