import{T as M,r as S,d,a as e,e as h,F as $,g as j,b as n,t as i,w as c,o as a,n as k,c as A,u as s,f as g,k as W,q as G}from"./app-BKSdO84h.js";import{_ as u}from"./Icon-wau1zN0p.js";import{d as L}from"./sasmes_logo-C-K0o8NT.js";import{_ as P}from"./PrimaryButton-BXKOxM9T.js";import{_ as q}from"./DialogModal-IIYxCwxx.js";import{_ as R}from"./SecondaryButton-BcNwiBev.js";import{_ as E}from"./Input-CHCgUs81.js";import{_ as D}from"./InputError-CCtqb4aI.js";import{_ as J}from"./ConfirmationModal-Bx2RuXMG.js";import{_ as K,i as x}from"./index-998Z1s48.js";import{h as Q}from"./moment-C5S46NFB.js";const X={key:0},Z={class:"grid grid-cols-12 gap-2"},ee={class:"w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative"},se={class:"absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded"},te=["onClick"],oe=["onClick"],ne=["src","onerror"],le={class:"px-5 pb-5"},ie={class:"text-md font-semibold tracking-tight text-gray-900"},ae={class:"flex items-center justify-between bottom-1 fixed"},re={class:"mt-6 text-sm text-gray-500"},de={class:"h-[70vmin]"},ce={class:"col-span-full"},ue={class:"col-span-full grid grid-cols-6 gap-1"},me={class:"col-span-5"},_e={key:0,class:"absolute z-50 w-60 bg-white rounded shadow"},pe={class:"overflow-y-auto py-1 h-[20vmin] text-gray-700","aria-labelledby":"dropdownUsersButton"},fe=["onClick"],ve=["src","onerror"],ge={class:"col-span-1 my-auto flex"},he={key:0,class:"mt-6"},xe={class:"w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow"},be={class:"flex flex-col items-center pb-10"},we=["src"],ye={class:"mb-1 text-xl font-medium text-gray-700"},ke={class:"grid grid-cols-12 gap-1"},Ce={class:"col-span-6 flex text-left"},Se={class:"text-sm text-gray-500"},$e={class:"col-span-6 flex text-left"},Ie={class:"text-sm text-gray-500 uppercase"},Te={class:"col-span-6 flex text-left"},Ve={class:"text-sm text-gray-500"},Ne={class:"col-span-6 flex text-left"},Be={class:"text-sm text-gray-500 uppercase"},Oe={class:"col-span-6 flex text-left"},Me={class:"text-sm text-gray-500 uppercase"},je={class:"col-span-6 flex text-left"},Ae={class:"text-sm text-gray-500 uppercase"},Le=["src"],Je={__name:"ServiceLists",props:["unit_services","search","office_id","unit_id","clients"],setup(b){const _=b,m=M({service:null,status:null}),t=M({name:"",id:"",client:"",appointment_type:null,office_id:_.office_id,unit_id:_.unit_id,unit_services_id:null}),p=S(!1),f=S(!1),C=S(!1),F=v=>{t.reset(),t.unit_services_id=v.id,p.value=!p.value},H=v=>{m.reset(),m.service=v,m.status=v.status!=1,f.value=!f.value},U=()=>{t.post(route("record.store"),{preserveScroll:!0,onSuccess:()=>{t.reset(),x.success("Client has been successfully added a service!",{autoClose:1e3,transition:x.TRANSITIONS.FLIP,position:x.POSITION.TOP_RIGHT}),p.value=!p.value}})},Y=()=>{m.put(route("unit_service.status",{unitService:m.service}),{preserveScroll:!0,onSuccess:()=>{m.reset(),x.success("Service has been successfully updated the status!",{autoClose:1e3,transition:x.TRANSITIONS.FLIP,position:x.POSITION.TOP_RIGHT}),f.value=!f.value}})},I=v=>Q(v).format("MMMM Do YYYY");return(v,o)=>(a(),d($,null,[b.unit_services.data.length==0?(a(),d("div",X,o[8]||(o[8]=[e("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Services! ",-1)]))):h("",!0),e("div",Z,[(a(!0),d($,null,j(b.unit_services.data,(l,w)=>(a(),d("div",{key:w,class:"col-span-3"},[e("div",ee,[e("div",se,[l.status==1?(a(),d("button",{key:0,onClick:y=>F(l),class:"bg-orange-500 rounded-md p-1 mr-1"},[n(u,{icon:"user"})],8,te)):h("",!0),e("button",{onClick:y=>H(l),class:k(["rounded-md p-1",l.status==1?"bg-red-500":"bg-green-500"])},[l.status==1?(a(),A(u,{key:0,icon:"close_icon"})):(a(),A(u,{key:1,icon:"check"}))],10,oe)]),e("img",{class:"object-scale-down p-8 rounded-t-lg h-[25vmin] w-[25vmin] mx-auto rounded-lg -mt-6",src:l.unit_service.photo,onerror:`this.src='${s(L)}'`,alt:"Service image"},null,8,ne),e("div",le,[e("div",null,[e("h5",ie,i(l.unit_service.name),1),e("small",null,i(l.unit_service.abbrevation),1)]),e("div",null,[e("p",{class:k(["text-xs p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto",l.status==1?"bg-green-500":"bg-red-500"])},i(l.status==1?"Active":"Deactivated"),3)])])])]))),128))]),e("div",ae,[n(K,{links:_.unit_services.links,search:_.search,office_id:_.office_id,unit_id:_.unit_id},null,8,["links","search","office_id","unit_id"]),e("p",re," Showing "+i(b.unit_services.data.length)+" Units ",1)]),n(q,{show:p.value,onClose:o[5]||(o[5]=l=>p.value=!1),maxWidth:"2xl"},{title:c(()=>o[9]||(o[9]=[g("Client Admission here!")])),content:c(()=>{var l,w,y,T,V,N,B,O;return[e("div",de,[e("div",ce,[W(e("select",{class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full","onUpdate:modelValue":o[0]||(o[0]=r=>s(t).appointment_type=r)},o[10]||(o[10]=[e("option",{value:null,disabled:""},"Select Client Appointment",-1),e("option",{value:"schedule"},"Scheduled",-1),e("option",{value:"walkin"},"Walk-in",-1)]),512),[[G,s(t).appointment_type]]),n(D,{message:s(t).errors.appointment_type,class:"mt-2"},null,8,["message"])]),e("div",ue,[e("div",me,[n(E,{type:"text",label:"Search Client name",modelValue:s(t).name,"onUpdate:modelValue":o[1]||(o[1]=r=>s(t).name=r)},null,8,["modelValue"]),n(D,{message:s(t).errors.client,class:"mt-2"},null,8,["message"]),s(t).name&&!s(t).client?(a(),d("div",_e,[e("ul",pe,[(a(!0),d($,null,j(_.clients,(r,z)=>(a(),d("li",{key:z},[r.name.toLowerCase().includes(s(t).name.toLowerCase())?(a(),d("a",{key:0,class:"flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer",onClick:Pe=>(s(t).name=r.name,s(t).id=r.id,s(t).client=r,C.value=!1)},[e("img",{class:"mr-2 w-6 h-6 rounded-full",src:r.photo,onerror:`this.src='${s(L)}'`},null,8,ve),g(" "+i(r.name),1)],8,fe)):h("",!0)]))),128))]),o[11]||(o[11]=e("div",{class:"flex justify-center"},[e("small",null,"Results")],-1)),e("a",{onClick:o[2]||(o[2]=r=>(C.value=!1,s(t).name="",s(t).client="",s(t).id=!1)),class:"flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 hover:bg-gray-100 hover:underline cursor-pointer"}," clear search ")])):h("",!0)]),e("div",ge,[s(t).id?(a(),d("button",{key:0,class:"h-10 my-auto mt-5",onClick:o[3]||(o[3]=r=>(C.value=!1,s(t).name="",s(t).client="",s(t).id=!1))},[n(u,{icon:"close_icon",size:"sm"})])):h("",!0)])]),s(t).client?(a(),d("div",he,[e("div",xe,[e("div",be,[e("img",{class:"w-24 h-24 mb-3 rounded-full shadow-lg mt-4",src:(l=s(t).client)==null?void 0:l.photo,alt:"Bonnie image"},null,8,we),e("h5",ye,i((w=s(t).client)==null?void 0:w.name),1),e("div",ke,[e("div",Ce,[n(u,{icon:"birthday"}),e("span",Se,i(I((y=s(t).client)==null?void 0:y.birthday)),1)]),e("div",$e,[n(u,{icon:"sex"}),e("span",Ie,i((T=s(t).client)==null?void 0:T.sex),1)]),e("div",Te,[n(u,{icon:"location"}),e("span",Ve,i((V=s(t).client)==null?void 0:V.address),1)]),e("div",Ne,[n(u,{icon:"user"}),e("span",Be,i((N=s(t).client)==null?void 0:N.type),1)]),e("div",Oe,[n(u,{icon:"user"}),e("span",Me,i((B=s(t).client)==null?void 0:B.role),1)]),e("div",je,[n(u,{icon:"calendar"}),e("span",Ae,i(I((O=s(t).client)==null?void 0:O.created_at)),1)])]),e("img",{class:"w-[35vmin] h-[25vmin] mb-3 rounded-lg shadow-lg mt-4 object-scale-down p-2",src:s(t).client.id_photo,alt:"Bonnie image"},null,8,Le)])])])):h("",!0)])]}),footer:c(()=>[n(R,{onClick:o[4]||(o[4]=l=>p.value=!1),class:"mr-2 hover:bg-red-500"},{default:c(()=>o[12]||(o[12]=[g(" Cancel ")])),_:1}),n(P,{class:k([{"opacity-25":s(t).processing},"hover:bg-green-300"]),disabled:s(t).processing,onClick:U},{default:c(()=>o[13]||(o[13]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),n(J,{show:f.value,onClose:o[7]||(o[7]=l=>f.value=!1),maxWidth:"2xl"},{title:c(()=>[g(" Are you sure you want to update status of service("+i(s(m).service.unit_service.name)+")?",1)]),content:c(()=>o[14]||(o[14]=[])),footer:c(()=>[n(R,{onClick:o[6]||(o[6]=l=>f.value=!1),class:"mr-2"},{default:c(()=>o[15]||(o[15]=[g(" nevermind ")])),_:1}),n(P,{class:k([{"opacity-25":s(m).processing},"hover:bg-green-400"]),disabled:s(m).processing,onClick:Y},{default:c(()=>o[16]||(o[16]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),g(" Confirm ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{Je as default};