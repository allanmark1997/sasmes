import{T as D,r as p,D as oe,d as i,b as n,w as u,F as x,o as a,a as s,k as L,q as M,g as w,t as N,e as y,p as te,c as B,f as g,h as P,u as t,v as F,n as G,s as H}from"./app-D-rA1TwB.js";import{_ as le}from"./AppLayout-BRsSHt8B.js";import re from"./ServiceLists-CZi58U2T.js";import{_ as R}from"./PrimaryButton-BhHMLEIT.js";import{_ as E}from"./DialogModal-BU6LYd31.js";import{_ as z}from"./SecondaryButton-DDsm42Xd.js";import{_ as V}from"./Input-BLhfz_rl.js";import{_}from"./InputError-RwjkD5Kn.js";import{_ as ae}from"./Icon-BKFP5_yd.js";import{i as m}from"./index-ByDn4Jzk.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./ConfirmationModal-CySrIPqK.js";import"./Pagination2-wmmNPwtY.js";const ne={class:"py-4"},ie={class:"flex justify-between"},de={class:"flex gap-2 ml-8"},ue={key:0},ce=["value"],me={class:"flex"},ve={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},ge={class:"overflow-hidden"},fe={class:"grid grid-cols-12 gap-2"},pe={key:0,class:"col-span-12 mx-auto"},be=["src"],xe=["onClick"],he={class:"grid grid-cols-12 gap-1"},we={class:"col-span-12"},ye={class:"col-span-full"},_e=["value"],ke={class:"grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto"},Se=["value"],Ce={for:"bordered-checkbox-1",class:"w-full py-1 ms-2 text-sm font-medium text-gray-700"},Ie={class:"grid grid-cols-12 gap-2"},Ve={key:0,class:"col-span-12 mx-auto"},Te=["src"],Oe=["onClick"],Le={class:"grid grid-cols-12 gap-1"},Ne={class:"col-span-12"},Pe={class:"col-span-full"},Re={class:"grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto"},$e=["value"],je={for:"bordered-checkbox-1",class:"w-full py-1 ms-2 text-sm font-medium text-gray-700"},qe={__name:"Index",props:["services","search","offices","office"],setup(J){const v=J,r=D({name:null,abbrevation:null,image:[],office_id:"",selected_units:[]}),d=D({name:null,abbrevation:null,image:[],selected_units:[]}),k=p(!1),S=p(!1),f=p([]),T=p(""),b=p([]),O=p(""),h=p(v.search),C=p(v.office),$=p(null),j=()=>{r.reset(),f.value=[],k.value=!k.value},U=()=>{d.reset(),f.value=[],S.value=!S.value},K=()=>{r.post(route("service.store"),{preserveScroll:!0,onSuccess:()=>{r.reset(),m.success("Service has been successfully added!",{autoClose:1e3,transition:m.TRANSITIONS.FLIP,position:m.POSITION.TOP_RIGHT}),r.reset(),f.value=[],j()}})},W=()=>{d.post(route("service.store_director"),{preserveScroll:!0,onSuccess:()=>{d.reset(),m.success("Service has been successfully added!",{autoClose:1e3,transition:m.TRANSITIONS.FLIP,position:m.POSITION.TOP_RIGHT}),d.reset(),b.value=[],U()}})},X=()=>{O.value="";let l=document.getElementById("profile_photo_director");l.click(),l.onchange=e=>{for(let o=0;o<e.target.files.length;o++)b.value.push(window.URL.createObjectURL(e.target.files[0])),d.image=e.target.files[0]}},q=l=>{if(O.value="",l.preventDefault(),l.dataTransfer.files.length>1)O.value="Only 1 image can be selected";else for(const o of l.dataTransfer.files){var e=URL.createObjectURL(o);b.value.push(e),d.image=o}},Q=l=>{b.value.splice(l,1),d.image=null,m.warn("Image remove",{autoClose:1e3,transition:m.TRANSITIONS.FLIP,position:m.POSITION.TOP_RIGHT})},Y=()=>{T.value="";let l=document.getElementById("profile_photo");l.click(),l.onchange=e=>{for(let o=0;o<e.target.files.length;o++)f.value.push(window.URL.createObjectURL(e.target.files[0])),r.image=e.target.files[0]}},Z=l=>{if(T.value="",l.preventDefault(),l.dataTransfer.files.length>1)T.value="Only 1 image can be selected";else for(const o of l.dataTransfer.files){var e=URL.createObjectURL(o);f.value.push(e),r.image=o}},ee=l=>{f.value.splice(l,1),r.image=null,m.warn("Image remove",{autoClose:1e3,transition:m.TRANSITIONS.FLIP,position:m.POSITION.TOP_RIGHT})},A=()=>{H.get(route("service.index",{search:h.value,office:C.value}))},se=()=>{h.value="",C.value="",H.get(route("service.index",{search:h.value,office:C.value}))};return oe(()=>r.office_id,l=>{r.selected_units=[];var e=v.offices.findIndex(o=>o.id===l);$.value=v.offices[e].units,console.log(e,l,$.value)},{deep:!0}),(l,e)=>(a(),i(x,null,[n(le,{title:"Services"},{header:u(()=>e[19]||(e[19]=[s("h2",{class:"font-semibold text-lg text-white leading-tight"}," Services ",-1)])),default:u(()=>[s("div",ne,[s("div",ie,[s("div",de,[l.$page.props.auth.user.user_type!="director"?(a(),i("div",ue,[L(s("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>C.value=o),onChange:A,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 p-1"},[e[20]||(e[20]=s("option",{value:"",disabled:""},"Select Office",-1)),e[21]||(e[21]=s("option",{value:""},"All Offices",-1)),(a(!0),i(x,null,w(v.offices,(o,c)=>(a(),i("option",{key:c,value:o.id},N(o.abbrevation),9,ce))),128))],544),[[M,C.value]])])):y("",!0),n(V,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=o=>h.value=o),class:"rounded-lg mb-2 w-[30vmin]",type:"text",label:"Search Service",onKeyup:te(A,["enter"])},null,8,["modelValue"]),h.value?(a(),i("button",{key:1,class:"h-10 my-auto mt-5",onClick:se},[n(ae,{icon:"close_icon",size:"sm"})])):y("",!0)]),s("div",me,[l.$page.props.auth.user.user_type=="director"?(a(),B(R,{key:0,onClick:e[2]||(e[2]=o=>U()),class:"mb-2 mr-10 h-10 mt-5"},{default:u(()=>e[22]||(e[22]=[g(" Add Service ")])),_:1})):(a(),B(R,{key:1,onClick:e[3]||(e[3]=o=>j()),class:"mb-2 mr-12 h-10 mt-5"},{default:u(()=>e[23]||(e[23]=[g(" Add Service ")])),_:1}))])]),s("div",ve,[s("div",ge,[n(re,{services:v.services,search:v.search,office:v.office,offices:v.offices},null,8,["services","search","office","offices"])])])])]),_:1}),n(E,{show:k.value,onClose:e[11]||(e[11]=o=>k.value=!1),maxWidth:"2xl"},{title:u(()=>e[24]||(e[24]=[g("Add Services here!")])),content:u(()=>[s("div",fe,[f.value.length!=0?(a(),i("div",pe,[(a(!0),i(x,null,w(f.value,(o,c)=>(a(),i("div",{key:c,class:"flex-shrink-0"},[s("img",{class:"w-64 h-64 rounded-lg",src:o},null,8,be),s("button",{onClick:I=>ee(c),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[25]||(e[25]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),s("span",{class:"text-red-500"},"Remove",-1)]),8,xe)]))),128))])):y("",!0),f.value.length!=1?(a(),i("div",{key:1,class:"col-span-12",onDragover:e[4]||(e[4]=P(()=>{},["prevent"])),onDrop:e[5]||(e[5]=P(()=>{},["prevent"]))},[s("label",{onDrop:Z,onClick:Y,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[26]||(e[26]=[s("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[s("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),s("p",{class:"mb-1 text-sm text-gray-500"},[s("span",{class:"font-semibold"},"Click to upload"),g(" or drag and drop ")]),s("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),s("input",{id:"profile_photo",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32),n(_,{message:t(r).errors.image||T.value,class:"mt-2"},null,8,["message"])],32)):y("",!0)]),s("div",he,[s("div",we,[n(V,{type:"text",label:"Service name",modelValue:t(r).name,"onUpdate:modelValue":e[6]||(e[6]=o=>t(r).name=o)},null,8,["modelValue"]),n(_,{message:t(r).errors.name,class:"mt-2"},null,8,["message"])])]),s("div",ye,[n(V,{type:"text",label:"Service abbrevation",modelValue:t(r).abbrevation,"onUpdate:modelValue":e[7]||(e[7]=o=>t(r).abbrevation=o)},null,8,["modelValue"]),n(_,{message:t(r).errors.abbrevation,class:"mt-2"},null,8,["message"])]),s("div",null,[L(s("select",{"onUpdate:modelValue":e[8]||(e[8]=o=>t(r).office_id=o),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[27]||(e[27]=s("option",{value:"",disabled:""},"Select Office",-1)),(a(!0),i(x,null,w(v.offices,(o,c)=>(a(),i("option",{key:c,value:o.id},N(o.name),9,_e))),128))],512),[[M,t(r).office_id]])]),s("div",ke,[(a(!0),i(x,null,w($.value,(o,c)=>(a(),i("div",{key:c,class:"col-span-4 flex items-center ps-4 border border-gray-200 rounded"},[L(s("input",{id:"bordered-checkbox-1",type:"checkbox",value:o.id,"onUpdate:modelValue":e[9]||(e[9]=I=>t(r).selected_units=I),name:"bordered-checkbox",class:"w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"},null,8,Se),[[F,t(r).selected_units]]),s("label",Ce,N(o.name),1)]))),128))])]),footer:u(()=>[n(z,{onClick:e[10]||(e[10]=o=>k.value=!1),class:"mr-2 hover:bg-red-500"},{default:u(()=>e[28]||(e[28]=[g(" Cancel ")])),_:1}),n(R,{class:G([{"opacity-25":t(r).processing},"hover:bg-green-300"]),disabled:t(r).processing,onClick:K},{default:u(()=>e[29]||(e[29]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),n(E,{show:S.value,onClose:e[18]||(e[18]=o=>S.value=!1),maxWidth:"2xl"},{title:u(()=>e[30]||(e[30]=[g("Add Services here!")])),content:u(()=>[s("div",Ie,[b.value.length!=0?(a(),i("div",Ve,[(a(!0),i(x,null,w(b.value,(o,c)=>(a(),i("div",{key:c,class:"flex-shrink-0"},[s("img",{class:"w-64 h-64 rounded-lg",src:o},null,8,Te),s("button",{onClick:I=>Q(c),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[31]||(e[31]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),s("span",{class:"text-red-500"},"Remove",-1)]),8,Oe)]))),128))])):y("",!0),b.value.length!=1?(a(),i("div",{key:1,class:"col-span-12",onDragover:e[12]||(e[12]=P(()=>{},["prevent"])),onDrop:e[13]||(e[13]=P(()=>{},["prevent"]))},[s("label",{onDrop:q,onClick:X,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[32]||(e[32]=[s("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[s("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),s("p",{class:"mb-1 text-sm text-gray-500"},[s("span",{class:"font-semibold"},"Click to upload"),g(" or drag and drop ")]),s("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),s("input",{id:"profile_photo_director",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32),n(_,{message:t(d).errors.image||O.value,class:"mt-2"},null,8,["message"])],32)):y("",!0)]),s("div",Le,[s("div",Ne,[n(V,{type:"text",label:"Service name",modelValue:t(d).name,"onUpdate:modelValue":e[14]||(e[14]=o=>t(d).name=o)},null,8,["modelValue"]),n(_,{message:t(d).errors.name,class:"mt-2"},null,8,["message"])])]),s("div",Pe,[n(V,{type:"text",label:"Service abbrevation",modelValue:t(d).abbrevation,"onUpdate:modelValue":e[15]||(e[15]=o=>t(d).abbrevation=o)},null,8,["modelValue"]),n(_,{message:t(d).errors.abbrevation,class:"mt-2"},null,8,["message"])]),s("div",Re,[(a(!0),i(x,null,w(v.offices.units,(o,c)=>(a(),i("div",{key:c,class:"col-span-4 flex items-center ps-4 border border-gray-200 rounded"},[L(s("input",{id:"bordered-checkbox-1",type:"checkbox",value:o.id,"onUpdate:modelValue":e[16]||(e[16]=I=>t(d).selected_units=I),name:"bordered-checkbox",class:"w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"},null,8,$e),[[F,t(d).selected_units]]),s("label",je,N(o.name),1)]))),128))])]),footer:u(()=>[n(z,{onClick:e[17]||(e[17]=o=>S.value=!1),class:"mr-2 hover:bg-red-500"},{default:u(()=>e[33]||(e[33]=[g(" Cancel ")])),_:1}),n(R,{class:G([{"opacity-25":t(d).processing},"hover:bg-green-300"]),disabled:t(d).processing,onClick:W},{default:u(()=>e[34]||(e[34]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{qe as default};
