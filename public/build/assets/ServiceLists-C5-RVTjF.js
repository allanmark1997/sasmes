import{T as C,r as k,d as n,a as s,e as h,F as y,g as S,b as a,t as f,w as i,o as d,u as l,f as g,h as I,n as T}from"./app-M6POBlLn.js";import{_ as O}from"./Icon-C4UowvS8.js";import{d as A}from"./sasmes_logo-C-K0o8NT.js";import{_ as N}from"./PrimaryButton-BnWKs9eT.js";import{_ as D}from"./DialogModal-K_HSa4jC.js";import{_ as V}from"./SecondaryButton-DtmSjjLY.js";import{_ as L}from"./Input-CT5FRr-o.js";import{_ as x}from"./InputError-C6usZpw8.js";import{_ as G}from"./ConfirmationModal-CFdSXMhl.js";import{_ as H,i as u}from"./index-B4k9l_Mh.js";const E={key:0},z={class:"grid grid-cols-12 gap-2"},J={class:"w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative"},W={class:"absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded"},X=["onClick"],q=["onClick"],K=["src","onerror"],Q={class:"px-5 pb-5"},Y={class:"text-md font-semibold tracking-tight text-gray-900"},Z={class:"flex items-center justify-between bottom-1 fixed"},ee={class:"mt-6 text-sm text-gray-500"},se={class:"grid grid-cols-12 gap-2"},te={key:0,class:"col-span-12 mx-auto"},oe=["src"],re=["onClick"],ae={class:"col-span-12"},le={class:"grid grid-cols-12 gap-1"},ne={class:"col-span-12"},ie={class:"col-span-full"},_e={__name:"ServiceLists",props:["services","search","office_id","office","offices"],setup(b){const w=b,o=C({name:null,abbrevation:null,image:[],service:null,office_id:""}),c=C({service:null}),p=k(!1),v=k(!1),m=k([]),P=t=>{o.reset(),m.value=[],o.service=t,o.name=t.name,o.abbrevation=t.abbrevation,o.office_id=t.office_id,m.value.push(t.photo),p.value=!p.value},j=t=>{c.reset(),c.service=t,v.value=!v.value},R=()=>{let t=document.getElementById("profile_photo");t.click(),t.onchange=e=>{m.value.push(window.URL.createObjectURL(e.target.files[0])),o.image=e.target.files[0]}},B=t=>{t.preventDefault();for(const r of t.dataTransfer.files){var e=URL.createObjectURL(r);m.value.push(e),o.image=r}},F=t=>{m.value.splice(t,1),o.image=null,u.warn("Image remove",{autoClose:1e3,transition:u.TRANSITIONS.FLIP,position:u.POSITION.TOP_RIGHT})},M=()=>{o.post(route("service.update",{service:o.service}),{preserveScroll:!0,onSuccess:()=>{o.reset(),u.success("Service has been successfully updated!",{autoClose:1e3,transition:u.TRANSITIONS.FLIP,position:u.POSITION.TOP_RIGHT}),p.value=!p.value}})},U=()=>{c.delete(route("service.destroy",{service:c.service}),{preserveScroll:!0,onSuccess:()=>{c.reset(),u.success("Service has been successfully deleted!",{autoClose:1e3,transition:u.TRANSITIONS.FLIP,position:u.POSITION.TOP_RIGHT}),v.value=!v.value}})};return(t,e)=>(d(),n(y,null,[b.services.data.length==0?(d(),n("div",E,e[8]||(e[8]=[s("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Services! ",-1)]))):h("",!0),s("div",z,[(d(!0),n(y,null,S(b.services.data,(r,_)=>(d(),n("div",{key:_,class:"col-span-3"},[s("div",J,[s("div",W,[t.$page.props.auth.user.user_type=="root"||t.$page.props.auth.user.user_type=="admin"||t.$page.props.auth.user.user_type=="vcsas"||t.$page.props.auth.user.user_type=="director"||t.$page.props.auth.user.user_type=="unit_head"?(d(),n("button",{key:0,onClick:$=>P(r),class:"bg-orange-500 rounded-md p-1 mr-1"},[a(O,{icon:"pencil"})],8,X)):h("",!0),t.$page.props.auth.user.user_type=="root"||t.$page.props.auth.user.user_type=="admin"||t.$page.props.auth.user.user_type=="vcsas"||t.$page.props.auth.user.user_type=="director"||t.$page.props.auth.user.user_type=="unit_head"?(d(),n("button",{key:1,onClick:$=>j(r),class:"bg-red-500 rounded-md p-1"},[a(O,{icon:"trash"})],8,q)):h("",!0)]),s("img",{class:"object-scale-down p-8 rounded-t-lg h-[25vmin] w-[25vmin] mx-auto rounded-lg -mt-6",src:r.photo,onerror:`this.src='${l(A)}'`,alt:"Service image"},null,8,K),s("div",Q,[s("div",null,[s("h5",Y,f(r.name),1),s("small",null,f(r.abbrevation),1)]),s("small",null,"Own by "+f(r.office.name)+"("+f(r.office.abbrevation)+")",1)])])]))),128))]),s("div",Z,[a(H,{links:w.services.links,search:w.search,office:w.office},null,8,["links","search","office"]),s("p",ee," Showing "+f(b.services.data.length)+" Services ",1)]),a(D,{show:p.value,onClose:e[5]||(e[5]=r=>p.value=!1),maxWidth:"2xl"},{title:i(()=>e[9]||(e[9]=[g("Update Service here!")])),content:i(()=>[s("div",se,[m.value.length!=0?(d(),n("div",te,[(d(!0),n(y,null,S(m.value,(r,_)=>(d(),n("div",{key:_,class:"flex-shrink-0"},[s("img",{class:"w-64 h-64 rounded-lg",src:r},null,8,oe),s("button",{onClick:$=>F(_),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[10]||(e[10]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),s("span",{class:"text-red-500"},"Remove",-1)]),8,re)]))),128))])):h("",!0),m.value.length!=1?(d(),n("div",{key:1,class:"col-span-12",onDragover:e[0]||(e[0]=I(()=>{},["prevent"])),onDrop:e[1]||(e[1]=I(()=>{},["prevent"]))},[s("label",{onDrop:B,onClick:R,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[11]||(e[11]=[s("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[s("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),s("p",{class:"mb-1 text-sm text-gray-500"},[s("span",{class:"font-semibold"},"Click to upload"),g(" or drag and drop ")]),s("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),s("input",{id:"profile_photo",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32)],32)):h("",!0),s("div",ae,[a(x,{message:l(o).errors.image,class:"mt-2"},null,8,["message"])])]),s("div",le,[s("div",ne,[a(L,{type:"text",label:"Office name",modelValue:l(o).name,"onUpdate:modelValue":e[2]||(e[2]=r=>l(o).name=r)},null,8,["modelValue"]),a(x,{message:l(o).errors.name,class:"mt-2"},null,8,["message"])])]),s("div",ie,[a(L,{type:"text",label:"Office abbrevation",modelValue:l(o).abbrevation,"onUpdate:modelValue":e[3]||(e[3]=r=>l(o).abbrevation=r)},null,8,["modelValue"]),a(x,{message:l(o).errors.abbrevation,class:"mt-2"},null,8,["message"])])]),footer:i(()=>[a(V,{onClick:e[4]||(e[4]=r=>p.value=!1),class:"mr-2 hover:bg-red-500"},{default:i(()=>e[12]||(e[12]=[g(" Cancel ")])),_:1}),a(N,{class:T([{"opacity-25":l(o).processing},"hover:bg-green-300"]),disabled:l(o).processing,onClick:M},{default:i(()=>e[13]||(e[13]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(G,{show:v.value,onClose:e[7]||(e[7]=r=>v.value=!1),maxWidth:"2xl"},{title:i(()=>[g(" Are you sure you want to delete this service("+f(l(c).service.name)+")?",1)]),content:i(()=>e[14]||(e[14]=[s("p",{class:"text-red-500"}," This action can update the system and this is not reversible! ",-1)])),footer:i(()=>[a(V,{onClick:e[6]||(e[6]=r=>v.value=!1),class:"mr-2"},{default:i(()=>e[15]||(e[15]=[g(" nevermind ")])),_:1}),a(N,{class:T([{"opacity-25":l(c).processing},"hover:bg-green-400"]),disabled:l(c).processing,onClick:U},{default:i(()=>e[16]||(e[16]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Delete ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{_e as default};
