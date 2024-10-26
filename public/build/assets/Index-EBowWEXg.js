import{r as d,c as U,w,o as v,a as e,k as g,q as b,d as c,g as x,t as V,F as _,b as f,p as h,e as A,s as k}from"./app-B6kCF4v-.js";import{_ as B}from"./AppLayout-4GcNu9QG.js";import F from"./RecordLists-BwSrhGLR.js";import{_ as y}from"./Input-BQ95jYon.js";import{_ as R}from"./Icon-BQxdVemu.js";import"./index-CXg0JzlJ.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./moment-C5S46NFB.js";const $={class:"py-4"},K={class:"flex justify-between"},N={class:"flex gap-2 ml-8"},O=["value"],D=["value"],E={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},j={class:"overflow-hidden"},Q={__name:"Index",props:["client_record","offices","services","search","role","office","service","from","to"],setup(S){const t=S,s=d(t.search),a=d(t.role),r=d(t.office),n=d(t.service),u=d(t.from),i=d(t.to),m=()=>{k.get(route("record.index",{search:s.value,role:a.value,office:r.value,service:n.value,from:u.value,to:i.value}))},C=()=>{s.value="",a.value="",r.value="",n.value="",u.value="",i.value="",k.get(route("record.index",{search:s.value,role:a.value,office:r.value,service:n.value,from:u.value,to:i.value}))};return(q,l)=>(v(),U(B,{title:"Records"},{header:w(()=>l[6]||(l[6]=[e("h2",{class:"font-semibold text-lg text-white leading-tight"}," Records ",-1)])),default:w(()=>[e("div",$,[e("div",K,[e("div",N,[e("div",null,[g(e("select",{"onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o),onChange:m,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full"},l[7]||(l[7]=[e("option",{value:"",disabled:""},"Select Client Role",-1),e("option",{value:""},"All Roles",-1),e("option",{value:"student"},"Student",-1),e("option",{value:"employee"},"Employee",-1),e("option",{value:"alumni"},"Alumni",-1),e("option",{value:"guardian"},"Guardian",-1),e("option",{value:"others"},"Others",-1)]),544),[[b,a.value]])]),e("div",null,[g(e("select",{"onUpdate:modelValue":l[1]||(l[1]=o=>r.value=o),onChange:m,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full"},[l[8]||(l[8]=e("option",{value:"",disabled:""},"Select Office",-1)),l[9]||(l[9]=e("option",{value:""},"All Offices",-1)),(v(!0),c(_,null,x(t.offices,(o,p)=>(v(),c("option",{key:p,value:o.id},V(o.abbrevation),9,O))),128))],544),[[b,r.value]])]),e("div",null,[g(e("select",{"onUpdate:modelValue":l[2]||(l[2]=o=>n.value=o),onChange:m,class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[10vmin] h-10 mt-5 w-full"},[l[10]||(l[10]=e("option",{value:"",disabled:""},"Select Service",-1)),l[11]||(l[11]=e("option",{value:""},"All Services",-1)),(v(!0),c(_,null,x(t.services,(o,p)=>(v(),c("option",{key:p,class:"break-words ml-1",value:o.id},V(o.name)+" fsdfsdfsdfsdf",9,D))),128))],544),[[b,n.value]])]),e("div",null,[f(y,{modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=o=>u.value=o),class:"rounded-lg mb-2 w-[20vmin]",type:"date",label:"From date"},null,8,["modelValue"])]),e("div",null,[f(y,{modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=o=>i.value=o),class:"rounded-lg mb-2 w-[20vmin]",type:"date",label:"To date",onKeyup:h(m,["enter"])},null,8,["modelValue"])]),f(y,{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=o=>s.value=o),class:"rounded-lg mb-2 w-[20vmin]",type:"text",label:"Search Client",onKeyup:h(m,["enter"])},null,8,["modelValue"]),s.value||a.value||r.value||n.value||u.value||i.value?(v(),c("button",{key:0,class:"h-10 my-auto mt-5",onClick:C},[f(R,{icon:"close_icon",size:"sm"})])):A("",!0)])]),e("div",E,[e("div",j,[f(F,{client_record:t.client_record,search:t.search,role:t.role,office:t.office,service:t.service,from:t.from,to:t.to},null,8,["client_record","search","role","office","service","from","to"])])])])]),_:1}))}};export{Q as default};
