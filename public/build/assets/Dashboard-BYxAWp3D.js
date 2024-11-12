import{T as D,x as w,c as F,w as y,o as l,a as t,d as a,k as B,q as M,u as n,n as $,F as c,g,t as r,e as v,b as f,p as S}from"./app-ByNts8ai.js";import{_ as Y}from"./AppLayout-1VS_6WVc.js";import{_ as k}from"./Input-g9HVHR3b.js";import{h as N}from"./moment-C5S46NFB.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./Icon-B-zGG17M.js";const U={class:"py-4"},E={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},K={class:"flex gap-2"},O={key:0},T=["disabled"],q=["value"],z={class:"bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 w-[150vmin] mx-auto"},A={class:""},L={class:"mt-12 text-2xl font-normal"},Q={class:"flex gap-2"},j={class:"bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2"},G={class:"bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto"},H={class:"mt-10 text-center font-bold"},I={class:"text-xl"},J={class:"text-xl underline"},P={class:"grid grid-cols-2 gap-8"},R={class:"col-span-1 text-right"},W={class:"col-span-1 text-left"},at={__name:"Dashboard",props:["client_chart","from","to","offices","office_id","office_count_role_gender"],setup(m){const x=i=>N(i).format("MMMM Do YYYY"),d=m,s=D({from:d.from,to:d.to,office_id:d.office_id}),p=()=>{s.get(route("dashboard"))},C=()=>{s.filter="",s.from="",s.to="",s.office_id="",s.unit="",s.get(route("dashboard"))};return(i,e)=>{const b=w("column-chart"),V=w("pie-chart");return l(),F(Y,{title:"Dashboard"},{header:y(()=>e[4]||(e[4]=[t("h2",{class:"font-semibold text-xl text-white leading-tight"}," Dashboard ",-1)])),default:y(()=>[t("div",U,[t("div",E,[t("div",K,[i.$page.props.auth.user.user_type=="root"||i.$page.props.auth.user.user_type=="admin"||i.$page.props.auth.user.user_type=="vcsas"?(l(),a("div",O,[B(t("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>n(s).office_id=o),onChange:e[1]||(e[1]=(...o)=>p&&p(...o)),class:$(["border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full",{"opacity-25":n(s).processing}]),disabled:n(s).processing},[e[5]||(e[5]=t("option",{value:"",disabled:""},"Select office",-1)),e[6]||(e[6]=t("option",{value:""},"All Office",-1)),(l(!0),a(c,null,g(d.offices,(o,_)=>(l(),a("option",{key:_,value:o.id},r(o.abbrevation),9,q))),128))],42,T),[[M,n(s).office_id]])])):v("",!0),t("div",null,[f(k,{modelValue:n(s).from,"onUpdate:modelValue":e[2]||(e[2]=o=>n(s).from=o),class:"rounded-lg mb-2 w-[30vmin]",type:"date",label:"From date"},null,8,["modelValue"])]),t("div",null,[f(k,{modelValue:n(s).to,"onUpdate:modelValue":e[3]||(e[3]=o=>n(s).to=o),class:"rounded-lg mb-2 w-[30vmin]",type:"date",label:"To date",onKeyup:S(p,["enter"])},null,8,["modelValue"])]),i.filter||m.from||m.to?(l(),a("button",{key:1,class:"h-10 my-auto mt-5",onClick:p},e[7]||(e[7]=[t("small",{class:"bg-green-500 text-white p-2 rounded-lg"},"Search",-1)]))):v("",!0),i.filter||m.from||m.to?(l(),a("button",{key:2,class:"h-10 my-auto mt-5",onClick:C},e[8]||(e[8]=[t("small",{class:"bg-red-500 text-white p-2 rounded-lg"},"remove filter",-1)]))):v("",!0)]),e[9]||(e[9]=t("p",{class:"m-2 text-2xl font-normal"}," Quantity of clients ",-1)),t("div",z,[f(b,{data:d.client_chart,legend:"bottom"},null,8,["data"])]),(l(!0),a(c,null,g(d.office_count_role_gender,(o,_)=>(l(),a(c,{key:_},[t("div",A,[t("p",L,r(_),1),t("div",Q,[t("div",j,[f(b,{data:o.type,legend:"bottom",width:"100vmin"},null,8,["data"])]),t("div",G,[f(V,{data:o.sex,legend:"bottom",colors:["#4CC9FE","#FF77B7"],width:"500px"},null,8,["data"])])])]),t("div",H,[t("p",I,r(x(d.from))+" - "+r(x(d.to)),1),t("p",J," Overall Clients: "+r(o.overall_count),1),t("div",P,[t("div",R,[(l(!0),a(c,null,g(o.type_text,(h,u)=>(l(),a("p",{key:u,class:"uppercase"},r(u)+": "+r(h),1))),128))]),t("div",W,[(l(!0),a(c,null,g(o.sex,(h,u)=>(l(),a("p",{key:u,class:"uppercase"},r(u)+": "+r(h),1))),128))])])])],64))),128))])])]),_:1})}}};export{at as default};
