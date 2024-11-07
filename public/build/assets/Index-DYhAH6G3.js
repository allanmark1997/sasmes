import{T as P,r as c,d as i,b as l,w as u,F as U,o as n,a as s,k as g,q as y,g as $,t as _,e as b,p as R,f as w,u as a,n as B,s as C}from"./app-CBJz-P0Z.js";import{_ as D}from"./AppLayout-DQ-VRXYL.js";import{_ as N}from"./PrimaryButton-DJrJSKJ5.js";import{_ as F}from"./DialogModal-DUcuS041.js";import{_ as H}from"./SecondaryButton-BiFyXpEL.js";import{_ as V}from"./Input-C-YFW9l6.js";import{_ as x}from"./InputError-BKMaT1Z3.js";import{_ as j}from"./Icon-RyGwq0-F.js";import{i as S}from"./index-DWa2gnuY.js";import z from"./UserLists-D9rpYNaI.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./ConfirmationModal-BxCp3ZD2.js";import"./Pagination2--ZhHyVJi.js";import"./moment-C5S46NFB.js";const E={class:"py-4"},K={class:"flex justify-between"},L={class:"flex gap-2 ml-8"},M={key:0},q=["value"],G={key:1},W={key:0},J={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},Q={class:"overflow-hidden"},X={class:"col-span-full"},Y={class:"col-span-full"},Z={class:"col-span-full"},ee=["value"],se={class:"col-span-full"},ye={__name:"Index",props:["users","offices","services","search","office","position","units"],setup(A){const r=A,t=P({name:null,email:null,user_type:"",office_id:""}),d=c(!1),m=c(r.search),p=c(r.position),f=c(r.office),h=()=>{C.get(route("user.index",{search:m.value,position:p.value,office:f.value}))},I=()=>{m.value="",p.value="",f.value="",C.get(route("user.index",{search:m.value,position:p.value,office:f.value}))},O=()=>{t.reset(),d.value=!d.value},T=()=>{t.post(route("user.store"),{preserveScroll:!0,onSuccess:()=>{t.reset(),S.success("User has been successfully registered!",{autoClose:1e3,transition:S.TRANSITIONS.FLIP,position:S.POSITION.TOP_RIGHT}),t.reset(),d.value=!d.value}})};return(v,e)=>(n(),i(U,null,[l(D,{title:"Users"},{header:u(()=>e[10]||(e[10]=[s("h2",{class:"font-semibold text-lg text-white leading-tight"}," Users ",-1)])),default:u(()=>[s("div",E,[s("div",K,[s("div",L,[v.$page.props.auth.user.user_type=="root"||v.$page.props.auth.user.user_type=="admin"?(n(),i("div",M,[g(s("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>f.value=o),onChange:h,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[11]||(e[11]=s("option",{value:"",disabled:""},"Select Office",-1)),e[12]||(e[12]=s("option",{value:""},"All Offices",-1)),(n(!0),i(U,null,$(r.offices,(o,k)=>(n(),i("option",{key:k,value:o.id},_(o.abbrevation)+" ("+_(o.name)+")",9,q))),128))],544),[[y,f.value]])])):b("",!0),v.$page.props.auth.user.user_type=="root"||v.$page.props.auth.user.user_type=="admin"?(n(),i("div",G,[g(s("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>p.value=o),onChange:h,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},e[13]||(e[13]=[s("option",{value:"",disabled:""},"Select User Position",-1),s("option",{value:""},"All Positions",-1),s("option",{value:"root"},"Root",-1),s("option",{value:"admin"},"Admin",-1),s("option",{value:"vcsas"},"VCSAS",-1),s("option",{value:"director"},"Director",-1),s("option",{value:"unit_head"},"Unit Head",-1),s("option",{value:"unit_staff"},"Unit Staff",-1)]),544),[[y,p.value]])])):b("",!0),l(V,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=o=>m.value=o),class:"rounded-lg mb-2 w-[30vmin]",type:"text",label:"Search User",onKeyup:R(h,["enter"])},null,8,["modelValue"]),m.value||p.value||f.value?(n(),i("button",{key:2,class:"h-10 my-auto mt-5",onClick:I},[l(j,{icon:"close_icon",size:"sm"})])):b("",!0)]),v.$page.props.auth.user.user_type=="root"||v.$page.props.auth.user.user_type=="admin"?(n(),i("div",W,[l(N,{onClick:e[3]||(e[3]=o=>O()),class:"mb-2 mr-12 h-10 mt-5"},{default:u(()=>e[14]||(e[14]=[w(" Create User ")])),_:1})])):b("",!0)]),s("div",J,[s("div",Q,[l(z,{users:r.users,offices:r.offices,search:r.search,position:r.position,office:r.office,units:r.units},null,8,["users","offices","search","position","office","units"])])])])]),_:1}),l(F,{show:d.value,onClose:e[9]||(e[9]=o=>d.value=!1),maxWidth:"2xl"},{title:u(()=>e[15]||(e[15]=[w("Register User here!")])),content:u(()=>[s("div",X,[l(V,{type:"text",label:"User Name",modelValue:a(t).name,"onUpdate:modelValue":e[4]||(e[4]=o=>a(t).name=o)},null,8,["modelValue"]),l(x,{message:a(t).errors.name,class:"mt-2"},null,8,["message"])]),s("div",Y,[l(V,{type:"email",label:"User Email",modelValue:a(t).email,"onUpdate:modelValue":e[5]||(e[5]=o=>a(t).email=o)},null,8,["modelValue"]),l(x,{message:a(t).errors.email,class:"mt-2"},null,8,["message"])]),s("div",Z,[g(s("select",{"onUpdate:modelValue":e[6]||(e[6]=o=>a(t).office_id=o),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[e[16]||(e[16]=s("option",{value:"",disabled:""},"Select Office",-1)),(n(!0),i(U,null,$(r.offices,(o,k)=>(n(),i("option",{key:k,value:o.id},_(o.abbrevation)+" ("+_(o.name)+")",9,ee))),128))],512),[[y,a(t).office_id]]),l(x,{message:a(t).errors.office_id,class:"mt-2"},null,8,["message"])]),s("div",se,[g(s("select",{"onUpdate:modelValue":e[7]||(e[7]=o=>a(t).user_type=o),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},e[17]||(e[17]=[s("option",{value:"",disabled:""},"Select User Position",-1),s("option",{value:"root"},"Root",-1),s("option",{value:"admin"},"Admin",-1),s("option",{value:"vcsas"},"VCSAS",-1),s("option",{value:"director"},"Director",-1),s("option",{value:"unit_head"},"Unit Head",-1),s("option",{value:"unit_staff"},"Unit Staff",-1)]),512),[[y,a(t).user_type]]),l(x,{message:a(t).errors.user_type,class:"mt-2"},null,8,["message"])])]),footer:u(()=>[l(H,{onClick:e[8]||(e[8]=o=>d.value=!1),class:"mr-2 hover:bg-red-500"},{default:u(()=>e[18]||(e[18]=[w(" Cancel ")])),_:1}),l(N,{class:B([{"opacity-25":a(t).processing},"hover:bg-green-300"]),disabled:a(t).processing,onClick:T},{default:u(()=>e[19]||(e[19]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),w(" Register ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{ye as default};
