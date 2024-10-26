import{T as j,r as S,d,a as e,e as x,F as $,g as M,b as l,t as i,w as u,o as a,n as C,c as A,u as t,f as h,k as G,q}from"./app-CG5HBkN5.js";import{_ as c}from"./Icon-CdQk4SzN.js";import{d as L}from"./sasmes_logo-C-K0o8NT.js";import{_ as P}from"./PrimaryButton-JNUs-dYk.js";import{_ as E}from"./DialogModal-BGb4DQqf.js";import{_ as R}from"./SecondaryButton-DABqh-au.js";import{_ as J}from"./Input-ziG2yTUH.js";import{_ as z}from"./InputError-C_-RpkPd.js";import{_ as K}from"./ConfirmationModal-DhpdefO8.js";import{_ as Q,i as b}from"./index-DDD8AAAM.js";import{h as X}from"./moment-C5S46NFB.js";const Z={key:0},ee={class:"grid grid-cols-12 gap-2"},se={class:"w-full h-[40vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative"},te={class:"absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded"},oe=["onClick"],le=["onClick"],ne=["src","onerror"],ie={class:"px-5 pb-5"},ae={class:"text-xl font-semibold tracking-tight text-gray-900"},re={class:"flex items-center justify-between bottom-1 fixed"},de={class:"mt-6 text-sm text-gray-500"},ce={class:"h-[70vmin]"},ue={class:"col-span-full"},me={class:"col-span-full grid grid-cols-6 gap-1"},_e={class:"col-span-5"},pe={key:0,class:"absolute z-50 w-60 bg-white rounded shadow"},ve={class:"overflow-y-auto py-1 h-[20vmin] text-gray-700","aria-labelledby":"dropdownUsersButton"},fe=["onClick"],ge=["src","onerror"],he={class:"col-span-1 my-auto flex"},xe={key:0,class:"mt-6"},be={class:"w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow"},we={class:"flex flex-col items-center pb-10"},ye=["src"],ke={class:"mb-1 text-xl font-medium text-gray-700"},Ce={class:"grid grid-cols-12 gap-1"},Se={class:"col-span-6 flex text-left"},$e={class:"text-sm text-gray-500"},Ie={class:"col-span-6 flex text-left"},Te={class:"text-sm text-gray-500 uppercase"},Ve={class:"col-span-6 flex text-left"},Ne={class:"text-sm text-gray-500"},Be={class:"col-span-6 flex text-left"},Oe={class:"text-sm text-gray-500 uppercase"},je={class:"col-span-6 flex text-left"},Me={class:"text-sm text-gray-500 uppercase"},Ae={class:"col-span-6 flex text-left"},Le={class:"text-sm text-gray-500 uppercase"},Pe=["src"],Ke={__name:"ServiceLists",props:["unit_services","search","office_id","unit_id","clients"],setup(w){const _=w,m=j({service:null,status:null}),o=j({name:"",id:"",client:"",appointment_type:null,office_id:_.office_id,unit_id:_.unit_id,unit_services_id:null}),p=S(!1),v=S(!1),f=S(!1),D=g=>{o.reset(),o.unit_services_id=g.id,p.value=!p.value},F=g=>{m.reset(),m.service=g,m.status=g.status!=1,v.value=!v.value},H=()=>{o.post(route("record.store"),{preserveScroll:!0,onSuccess:()=>{o.reset(),b.success("Client has been successfully added a service!",{autoClose:1e3,transition:b.TRANSITIONS.FLIP,position:b.POSITION.TOP_RIGHT}),p.value=!p.value}})},U=()=>{m.put(route("unit_service.status",{unitService:m.service}),{preserveScroll:!0,onSuccess:()=>{m.reset(),b.success("Service has been successfully updated the status!",{autoClose:1e3,transition:b.TRANSITIONS.FLIP,position:b.POSITION.TOP_RIGHT}),v.value=!v.value}})},Y=()=>{f.value=!f.value},I=g=>X(g).format("MMMM Do YYYY");return(g,s)=>(a(),d($,null,[w.unit_services.data.length==0?(a(),d("div",Z,s[8]||(s[8]=[e("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Services! ",-1)]))):x("",!0),e("div",ee,[(a(!0),d($,null,M(w.unit_services.data,(n,y)=>(a(),d("div",{key:y,class:"col-span-3"},[e("div",se,[e("div",te,[n.status==1?(a(),d("button",{key:0,onClick:k=>D(n),class:"bg-orange-500 rounded-md p-1 mr-1"},[l(c,{icon:"user"})],8,oe)):x("",!0),e("button",{onClick:k=>F(n),class:C(["rounded-md p-1",n.status==1?"bg-red-500":"bg-green-500"])},[n.status==1?(a(),A(c,{key:0,icon:"close_icon"})):(a(),A(c,{key:1,icon:"check"}))],10,le)]),e("img",{class:"object-scale-down p-8 rounded-t-lg h-[30vmin] w-[30vmin] mx-auto rounded-lg",src:n.unit_service.photo,onerror:`this.src='${t(L)}'`,alt:"Service image"},null,8,ne),e("div",ie,[e("div",null,[e("h5",ae,i(n.unit_service.name),1),e("small",null,i(n.unit_service.abbrevation),1)]),e("div",null,[e("p",{class:C(["text-xs p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto",n.status==1?"bg-green-500":"bg-red-500"])},i(n.status==1?"Active":"Deactivated"),3)])])])]))),128))]),e("div",re,[l(Q,{links:_.unit_services.links,search:_.search,office_id:_.office_id,unit_id:_.unit_id},null,8,["links","search","office_id","unit_id"]),e("p",de," Showing "+i(w.unit_services.data.length)+" Units ",1)]),l(E,{show:p.value,onClose:s[5]||(s[5]=n=>p.value=!1),maxWidth:"2xl"},{title:u(()=>s[9]||(s[9]=[h("Client Admission here!")])),content:u(()=>{var n,y,k,T,V,N,B,O;return[e("div",ce,[e("div",ue,[G(e("select",{class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full","onUpdate:modelValue":s[0]||(s[0]=r=>t(o).appointment_type=r)},s[10]||(s[10]=[e("option",{value:null,disabled:""},"Select Client Appointment",-1),e("option",{value:"schedule"},"Scheduled",-1),e("option",{value:"walkin"},"Walk-in",-1)]),512),[[q,t(o).appointment_type]]),l(z,{message:t(o).errors.appointment_type,class:"mt-2"},null,8,["message"])]),e("div",me,[e("div",_e,[l(J,{disabled:f.value!=!0,type:"text",label:"Search Client name",modelValue:t(o).name,"onUpdate:modelValue":s[1]||(s[1]=r=>t(o).name=r)},null,8,["disabled","modelValue"]),l(z,{message:t(o).errors.client,class:"mt-2"},null,8,["message"]),f.value==!0?(a(),d("div",pe,[e("ul",ve,[(a(!0),d($,null,M(_.clients,(r,W)=>(a(),d("li",{key:W},[r.name.toLowerCase().includes(t(o).name.toLowerCase())?(a(),d("a",{key:0,class:"flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer",onClick:Re=>(t(o).name=r.name,t(o).id=r.id,t(o).client=r,f.value=!1)},[e("img",{class:"mr-2 w-6 h-6 rounded-full",src:r.photo,onerror:`this.src='${t(L)}'`},null,8,ge),h(" "+i(r.name),1)],8,fe)):x("",!0)]))),128))]),s[11]||(s[11]=e("div",{class:"flex justify-center"},[e("small",null,"Results")],-1)),e("a",{onClick:s[2]||(s[2]=r=>(f.value=!1,t(o).name="",t(o).client="",t(o).id=!1)),class:"flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 hover:bg-gray-100 hover:underline cursor-pointer"}," clear search ")])):x("",!0)]),e("div",he,[t(o).id?(a(),d("button",{key:0,class:"h-10 my-auto mt-5",onClick:s[3]||(s[3]=r=>(f.value=!1,t(o).name="",t(o).client="",t(o).id=!1))},[l(c,{icon:"close_icon",size:"sm"})])):x("",!0),e("button",{onClick:Y,class:"bg-yellow-400 text-sm lg:text-xs font-bold rounded-lg p-2 hover:bg-yellow-500 flex gap-2 item-center justify-center mt-4"},[l(c,{icon:"search_icon",size:"sm"})])])]),t(o).name!=""?(a(),d("div",xe,[e("div",be,[e("div",we,[e("img",{class:"w-24 h-24 mb-3 rounded-full shadow-lg mt-4",src:(n=t(o).client)==null?void 0:n.photo,alt:"Bonnie image"},null,8,ye),e("h5",ke,i((y=t(o).client)==null?void 0:y.name),1),e("div",Ce,[e("div",Se,[l(c,{icon:"birthday"}),e("span",$e,i(I((k=t(o).client)==null?void 0:k.birthday)),1)]),e("div",Ie,[l(c,{icon:"sex"}),e("span",Te,i((T=t(o).client)==null?void 0:T.sex),1)]),e("div",Ve,[l(c,{icon:"location"}),e("span",Ne,i((V=t(o).client)==null?void 0:V.address),1)]),e("div",Be,[l(c,{icon:"user"}),e("span",Oe,i((N=t(o).client)==null?void 0:N.type),1)]),e("div",je,[l(c,{icon:"user"}),e("span",Me,i((B=t(o).client)==null?void 0:B.role),1)]),e("div",Ae,[l(c,{icon:"calendar"}),e("span",Le,i(I((O=t(o).client)==null?void 0:O.created_at)),1)])]),e("img",{class:"w-[35vmin] h-[25vmin] mb-3 rounded-lg shadow-lg mt-4 object-scale-down p-2",src:t(o).client.id_photo,alt:"Bonnie image"},null,8,Pe)])])])):x("",!0)])]}),footer:u(()=>[l(R,{onClick:s[4]||(s[4]=n=>p.value=!1),class:"mr-2 hover:bg-red-500"},{default:u(()=>s[12]||(s[12]=[h(" Cancel ")])),_:1}),l(P,{class:C([{"opacity-25":t(o).processing},"hover:bg-green-300"]),disabled:t(o).processing,onClick:H},{default:u(()=>s[13]||(s[13]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),h(" Submit ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(K,{show:v.value,onClose:s[7]||(s[7]=n=>v.value=!1),maxWidth:"2xl"},{title:u(()=>[h(" Are you sure you want to update status of service("+i(t(m).service.unit_service.name)+")?",1)]),content:u(()=>s[14]||(s[14]=[])),footer:u(()=>[l(R,{onClick:s[6]||(s[6]=n=>v.value=!1),class:"mr-2"},{default:u(()=>s[15]||(s[15]=[h(" nevermind ")])),_:1}),l(P,{class:C([{"opacity-25":t(m).processing},"hover:bg-green-400"]),disabled:t(m).processing,onClick:U},{default:u(()=>s[16]||(s[16]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),h(" Confirm ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{Ke as default};
