import{T as P,r as c,d as i,b as l,w as n,F as V,o as u,a as s,k as g,q as y,g as C,t as _,e as h,p as R,f as b,u as a,n as B,s as $}from"./app-BKSdO84h.js";import{_ as D}from"./AppLayout-DLPE4JA0.js";import{_ as N}from"./PrimaryButton-BXKOxM9T.js";import{_ as F}from"./DialogModal-IIYxCwxx.js";import{_ as H}from"./SecondaryButton-BcNwiBev.js";import{_ as k}from"./Input-CHCgUs81.js";import{_ as w}from"./InputError-CCtqb4aI.js";import{_ as j}from"./Icon-wau1zN0p.js";import{i as S}from"./index-998Z1s48.js";import z from"./UserLists-D5OX7HkO.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./ConfirmationModal-Bx2RuXMG.js";import"./moment-C5S46NFB.js";const E={class:"py-4"},K={class:"flex justify-between"},L={class:"flex gap-2 ml-8"},M={key:0},q=["value"],G={key:1},W={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},J={class:"overflow-hidden"},Q={class:"col-span-full"},X={class:"col-span-full"},Y={class:"col-span-full"},Z=["value"],ee={class:"col-span-full"},ce={__name:"Index",props:["users","offices","services","search","office","position","units"],setup(A){const r=A,t=P({name:null,email:null,user_type:"",office_id:""}),d=c(!1),m=c(r.search),p=c(r.position),f=c(r.office),x=()=>{$.get(route("user.index",{search:m.value,position:p.value,office:f.value}))},I=()=>{m.value="",p.value="",f.value="",$.get(route("user.index",{search:m.value,position:p.value,office:f.value}))},O=()=>{t.reset(),d.value=!d.value},T=()=>{t.post(route("user.store"),{preserveScroll:!0,onSuccess:()=>{t.reset(),S.success("User has been successfully registered!",{autoClose:1e3,transition:S.TRANSITIONS.FLIP,position:S.POSITION.TOP_RIGHT}),t.reset(),d.value=!d.value}})};return(v,e)=>(u(),i(V,null,[l(D,{title:"Users"},{header:n(()=>e[10]||(e[10]=[s("h2",{class:"font-semibold text-lg text-white leading-tight"}," Users ",-1)])),default:n(()=>[s("div",E,[s("div",K,[s("div",L,[v.$page.props.auth.user.user_type=="root"||v.$page.props.auth.user.user_type=="admin"?(u(),i("div",M,[g(s("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>f.value=o),onChange:x,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[11]||(e[11]=s("option",{value:"",disabled:""},"Select Office",-1)),e[12]||(e[12]=s("option",{value:""},"All Offices",-1)),(u(!0),i(V,null,C(r.offices,(o,U)=>(u(),i("option",{key:U,value:o.id},_(o.abbrevation)+" ("+_(o.name)+")",9,q))),128))],544),[[y,f.value]])])):h("",!0),v.$page.props.auth.user.user_type=="root"||v.$page.props.auth.user.user_type=="admin"?(u(),i("div",G,[g(s("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>p.value=o),onChange:x,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},e[13]||(e[13]=[s("option",{value:"",disabled:""},"Select User Position",-1),s("option",{value:""},"All Positions",-1),s("option",{value:"root"},"Root",-1),s("option",{value:"admin"},"Admin",-1),s("option",{value:"vcsas"},"VCSAS",-1),s("option",{value:"director"},"Director",-1),s("option",{value:"unit_head"},"Unit Head",-1),s("option",{value:"unit_staff"},"Unit Staff",-1)]),544),[[y,p.value]])])):h("",!0),l(k,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=o=>m.value=o),class:"rounded-lg mb-2 w-[30vmin]",type:"text",label:"Search User",onKeyup:R(x,["enter"])},null,8,["modelValue"]),m.value||p.value||f.value?(u(),i("button",{key:2,class:"h-10 my-auto mt-5",onClick:I},[l(j,{icon:"close_icon",size:"sm"})])):h("",!0)]),s("div",null,[l(N,{onClick:e[3]||(e[3]=o=>O()),class:"mb-2 mr-12 h-10 mt-5"},{default:n(()=>e[14]||(e[14]=[b(" Create User ")])),_:1})])]),s("div",W,[s("div",J,[l(z,{users:r.users,offices:r.offices,search:r.search,position:r.position,office:r.office,units:r.units},null,8,["users","offices","search","position","office","units"])])])])]),_:1}),l(F,{show:d.value,onClose:e[9]||(e[9]=o=>d.value=!1),maxWidth:"2xl"},{title:n(()=>e[15]||(e[15]=[b("Register User here!")])),content:n(()=>[s("div",Q,[l(k,{type:"text",label:"User Name",modelValue:a(t).name,"onUpdate:modelValue":e[4]||(e[4]=o=>a(t).name=o)},null,8,["modelValue"]),l(w,{message:a(t).errors.name,class:"mt-2"},null,8,["message"])]),s("div",X,[l(k,{type:"email",label:"User Email",modelValue:a(t).email,"onUpdate:modelValue":e[5]||(e[5]=o=>a(t).email=o)},null,8,["modelValue"]),l(w,{message:a(t).errors.email,class:"mt-2"},null,8,["message"])]),s("div",Y,[g(s("select",{"onUpdate:modelValue":e[6]||(e[6]=o=>a(t).office_id=o),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[16]||(e[16]=s("option",{value:"",disabled:""},"Select Office",-1)),(u(!0),i(V,null,C(r.offices,(o,U)=>(u(),i("option",{key:U,value:o.id},_(o.abbrevation)+" ("+_(o.name)+")",9,Z))),128))],512),[[y,a(t).office_id]]),l(w,{message:a(t).errors.office_id,class:"mt-2"},null,8,["message"])]),s("div",ee,[g(s("select",{"onUpdate:modelValue":e[7]||(e[7]=o=>a(t).user_type=o),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},e[17]||(e[17]=[s("option",{value:"",disabled:""},"Select User Position",-1),s("option",{value:"root"},"Root",-1),s("option",{value:"admin"},"Admin",-1),s("option",{value:"vcsas"},"VCSAS",-1),s("option",{value:"director"},"Director",-1),s("option",{value:"unit_head"},"Unit Head",-1),s("option",{value:"unit_staff"},"Unit Staff",-1)]),512),[[y,a(t).user_type]]),l(w,{message:a(t).errors.user_type,class:"mt-2"},null,8,["message"])])]),footer:n(()=>[l(H,{onClick:e[8]||(e[8]=o=>d.value=!1),class:"mr-2 hover:bg-red-500"},{default:n(()=>e[18]||(e[18]=[b(" Cancel ")])),_:1}),l(N,{class:B([{"opacity-25":a(t).processing},"hover:bg-green-300"]),disabled:a(t).processing,onClick:T},{default:n(()=>e[19]||(e[19]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),b(" Register ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{ce as default};