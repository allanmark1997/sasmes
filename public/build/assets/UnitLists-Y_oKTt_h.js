import{T as I,r as C,d as u,a as t,e as _,F as $,g as V,b as l,t as g,w as r,o as i,n as k,c as P,u as n,f as m,h as L}from"./app-D6dFhiMf.js";import{_ as T}from"./Icon-CSyEqRhr.js";import{d as R}from"./sasmes_logo-C-K0o8NT.js";import{_ as S}from"./PrimaryButton-71-90e4B.js";import{_ as z}from"./DialogModal-Duaetnax.js";import{_ as N}from"./SecondaryButton-DONeOB1T.js";import{_ as j}from"./Input-DHj0ya-B.js";import{_ as O}from"./InputError-xrngI8Au.js";import{_ as B}from"./ConfirmationModal-DvIUYIDo.js";import{_ as J}from"./Pagination2-CPZnxpJk.js";import{i as d}from"./index-C3ciihIq.js";const X={key:0},q={class:"grid grid-cols-12 gap-2"},K={class:"w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative"},Q={class:"absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded"},Y=["onClick"],Z=["onClick"],ee=["src","onerror"],te={class:"px-5 pb-5"},se=["href"],oe={class:"text-md font-semibold tracking-tight text-gray-900"},ae={key:1},ne={class:"text-md font-semibold tracking-tight text-gray-900 cursor-not-allowed"},le={class:"flex items-center justify-between bottom-1 fixed"},re={class:"mt-6 text-sm text-gray-500"},ie={class:"grid grid-cols-12 gap-2"},ue={key:0,class:"col-span-12 mx-auto"},de=["src","onerror"],me=["onClick"],ce={class:"col-span-12"},pe={class:"grid grid-cols-12 gap-1"},ge={class:"col-span-12"},ve={class:"col-span-full"},Te={__name:"UnitLists",props:["units","search","office_id","office"],setup(x){const b=x,a=I({name:null,abbrevation:null,image:[],unit:null}),h=I({unit:null}),c=I({unit:null,status:null}),v=C(!1),w=C(!1),p=C([]),f=C(!1),A=o=>{a.reset(),p.value=[],a.unit=o,a.name=o.name,a.abbrevation=o.abbrevation,p.value.push(o.photo),v.value=!v.value},F=()=>{let o=document.getElementById("profile_photo");o.click(),o.onchange=e=>{p.value.push(window.URL.createObjectURL(e.target.files[0])),a.image=e.target.files[0]}},H=o=>{o.preventDefault();for(const s of o.dataTransfer.files){var e=URL.createObjectURL(s);p.value.push(e),a.image=s}},M=o=>{p.value.splice(o,1),a.image=null,d.warn("Image remove",{autoClose:1e3,transition:d.TRANSITIONS.FLIP,position:d.POSITION.TOP_RIGHT})},D=o=>{c.reset(),c.unit=o,c.status=o.status!=1,f.value=!f.value},G=()=>{a.post(route("unit.update",{unit:a.unit}),{preserveScroll:!0,onSuccess:()=>{a.reset(),d.success("Unit has been successfully updated!",{autoClose:1e3,transition:d.TRANSITIONS.FLIP,position:d.POSITION.TOP_RIGHT}),v.value=!v.value}})},E=()=>{h.delete(route("unit.destroy",{unit:h.unit}),{preserveScroll:!0,onSuccess:()=>{h.reset(),d.success("Unit has been successfully deleted!",{autoClose:1e3,transition:d.TRANSITIONS.FLIP,position:d.POSITION.TOP_RIGHT}),w.value=!w.value}})},W=()=>{c.put(route("unit.status",{unit:c.unit}),{preserveScroll:!0,onSuccess:()=>{c.reset(),d.success("Unit has been successfully updated the status!",{autoClose:1e3,transition:d.TRANSITIONS.FLIP,position:d.POSITION.TOP_RIGHT}),f.value=!f.value}})};return(o,e)=>(i(),u($,null,[x.units.data.length==0?(i(),u("div",X,e[10]||(e[10]=[t("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Units! ",-1)]))):_("",!0),t("div",q,[(i(!0),u($,null,V(x.units.data,(s,y)=>(i(),u("div",{key:y,class:"col-span-3"},[t("div",K,[t("div",Q,[o.$page.props.auth.user.user_type=="root"||o.$page.props.auth.user.user_type=="admin"||o.$page.props.auth.user.user_type=="director"?(i(),u("button",{key:0,onClick:U=>A(s),class:"bg-orange-500 rounded-md p-1 mr-1"},[l(T,{icon:"pencil"})],8,Y)):_("",!0),(o.$page.props.auth.user.user_type=="root"||o.$page.props.auth.user.user_type=="admin"||o.$page.props.auth.user.user_type=="director")&&b.office.status==1?(i(),u("button",{key:1,onClick:U=>D(s),class:k(["rounded-md p-1",s.status==1?"bg-red-500":"bg-green-500"])},[s.status==1?(i(),P(T,{key:0,icon:"close_icon"})):(i(),P(T,{key:1,icon:"check"}))],10,Z)):_("",!0)]),t("img",{class:"object-scale-down p-8 rounded-t-lg h-[25vmin] w-[25vmin] mx-auto rounded-lg -mt-6",src:s.photo,onerror:`this.src='${n(R)}'`,alt:"Unit image"},null,8,ee),t("div",te,[s.status==1?(i(),u("a",{key:0,href:o.route("unit_service.index",{office_id:b.office_id,unit_id:s.id})},[t("h5",oe,g(s.name),1),t("small",null,g(s.abbrevation),1)],8,se)):(i(),u("p",ae,[t("h5",ne,g(s.name),1),t("small",null,g(s.abbrevation),1)])),t("div",null,[t("p",{class:k(["text-xs p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto",s.status==1?"bg-green-500":"bg-red-500"])},g(s.status==1?"Active":"Deactivated"),3)])])])]))),128))]),t("div",le,[l(J,{links:b.units.links,search:b.search,office_id:b.office_id},null,8,["links","search","office_id"]),t("p",re," Showing "+g(x.units.data.length)+" Units ",1)]),l(z,{show:v.value,onClose:e[5]||(e[5]=s=>v.value=!1),maxWidth:"2xl"},{title:r(()=>e[11]||(e[11]=[m("Update Unit here!")])),content:r(()=>[t("div",ie,[p.value.length!=0?(i(),u("div",ue,[(i(!0),u($,null,V(p.value,(s,y)=>(i(),u("div",{key:y,class:"flex-shrink-0"},[t("img",{class:"w-64 h-64 rounded-lg",src:s,onerror:`this.src='${n(R)}'`},null,8,de),t("button",{onClick:U=>M(y),class:"flex text-gray-400 hover:text-gray-600 mt-2 mx-auto"},e[12]||(e[12]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{class:"text-red-500","stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),t("span",{class:"text-red-500"},"Remove",-1)]),8,me)]))),128))])):_("",!0),p.value.length!=1?(i(),u("div",{key:1,class:"col-span-12",onDragover:e[0]||(e[0]=L(()=>{},["prevent"])),onDrop:e[1]||(e[1]=L(()=>{},["prevent"]))},[t("label",{onDrop:H,onClick:F,for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},e[13]||(e[13]=[t("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[t("svg",{"aria-hidden":"true",class:"w-8 h-8 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),t("p",{class:"mb-1 text-sm text-gray-500"},[t("span",{class:"font-semibold"},"Click to upload"),m(" or drag and drop ")]),t("p",{class:"text-xs text-gray-500"}," PNG, JPG or JPEG (MAX.1024kb) ")],-1),t("input",{id:"profile_photo",type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden"},null,-1)]),32)],32)):_("",!0),t("div",ce,[l(O,{message:n(a).errors.image,class:"mt-2"},null,8,["message"])])]),t("div",pe,[t("div",ge,[l(j,{type:"text",label:"Unit name",modelValue:n(a).name,"onUpdate:modelValue":e[2]||(e[2]=s=>n(a).name=s)},null,8,["modelValue"]),l(O,{message:n(a).errors.name,class:"mt-2"},null,8,["message"])])]),t("div",ve,[l(j,{type:"text",label:"Unit abbrevation",modelValue:n(a).abbrevation,"onUpdate:modelValue":e[3]||(e[3]=s=>n(a).abbrevation=s)},null,8,["modelValue"]),l(O,{message:n(a).errors.abbrevation,class:"mt-2"},null,8,["message"])])]),footer:r(()=>[l(N,{onClick:e[4]||(e[4]=s=>v.value=!1),class:"mr-2 hover:bg-red-500"},{default:r(()=>e[14]||(e[14]=[m(" Cancel ")])),_:1}),l(S,{class:k([{"opacity-25":n(a).processing},"hover:bg-green-300"]),disabled:n(a).processing,onClick:G},{default:r(()=>e[15]||(e[15]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),m(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(B,{show:w.value,onClose:e[7]||(e[7]=s=>w.value=!1),maxWidth:"2xl"},{title:r(()=>[m(" Are you sure you want to delete this unit("+g(n(h).unit.name)+")?",1)]),content:r(()=>e[16]||(e[16]=[t("p",{class:"text-red-500"}," This action can update the system and this is not reversible! ",-1)])),footer:r(()=>[l(N,{onClick:e[6]||(e[6]=s=>w.value=!1),class:"mr-2"},{default:r(()=>e[17]||(e[17]=[m(" nevermind ")])),_:1}),l(S,{class:k([{"opacity-25":n(h).processing},"hover:bg-green-400"]),disabled:n(h).processing,onClick:E},{default:r(()=>e[18]||(e[18]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),m(" Delete ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(B,{show:f.value,onClose:e[9]||(e[9]=s=>f.value=!1),maxWidth:"2xl"},{title:r(()=>[m(" Are you sure you want to update status of unit("+g(n(c).unit.name)+")?",1)]),content:r(()=>e[19]||(e[19]=[])),footer:r(()=>[l(N,{onClick:e[8]||(e[8]=s=>f.value=!1),class:"mr-2"},{default:r(()=>e[20]||(e[20]=[m(" nevermind ")])),_:1}),l(S,{class:k([{"opacity-25":n(c).processing},"hover:bg-green-400"]),disabled:n(c).processing,onClick:W},{default:r(()=>e[21]||(e[21]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),m(" Confirm ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{Te as default};