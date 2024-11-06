import{T as V,x as C,c as D,w as b,o as l,a as t,d as a,k as F,q as B,u as n,n as M,F as m,g as p,t as d,e as w,b as c,p as $}from"./app-CyUbDPZk.js";import{_ as Y}from"./AppLayout-Cb9D4s1l.js";import{_ as y}from"./Input-D_RxbvE1.js";import{h as N}from"./moment-C5S46NFB.js";import"./sasmes_logo-C-K0o8NT.js";import"./sasmes_text-TaE2kHS7.js";import"./Icon-DEdMUppJ.js";const S={class:"py-4"},U={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},E={class:"flex gap-2"},K={key:0},O=["disabled"],T=["value"],q={class:"bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 w-[150vmin] mx-auto"},z={class:""},A={class:"mt-12 text-2xl font-normal"},L={class:"flex gap-2"},Q={class:"bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2"},j={class:"bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto"},G={class:"mt-10 text-center font-bold"},H={class:"text-xl"},I={class:"text-xl underline"},J={class:"grid grid-cols-2 gap-8"},P={class:"col-span-1 text-right"},R={class:"col-span-1 text-left"},lt={__name:"Dashboard",props:["client_chart","from","to","offices","office_id","office_count_role_gender"],setup(_){const x=i=>N(i).format("MMMM Do YYYY"),r=_,s=V({from:r.from,to:r.to,office_id:r.office_id}),g=()=>{s.get(route("dashboard"))},k=()=>{s.filter="",s.from="",s.to="",s.office_id="",s.unit="",s.get(route("dashboard"))};return(i,e)=>{const h=C("column-chart");return l(),D(Y,{title:"Dashboard"},{header:b(()=>e[4]||(e[4]=[t("h2",{class:"font-semibold text-xl text-white leading-tight"}," Dashboard ",-1)])),default:b(()=>[t("div",S,[t("div",U,[t("div",E,[i.$page.props.auth.user.user_type=="root"||i.$page.props.auth.user.user_type=="admin"||i.$page.props.auth.user.user_type=="vcsas"?(l(),a("div",K,[F(t("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>n(s).office_id=o),onChange:e[1]||(e[1]=(...o)=>g&&g(...o)),class:M(["border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full",{"opacity-25":n(s).processing}]),disabled:n(s).processing},[e[5]||(e[5]=t("option",{value:"",disabled:""},"Select office",-1)),e[6]||(e[6]=t("option",{value:""},"All Office",-1)),(l(!0),a(m,null,p(r.offices,(o,f)=>(l(),a("option",{key:f,value:o.id},d(o.abbrevation),9,T))),128))],42,O),[[B,n(s).office_id]])])):w("",!0),t("div",null,[c(y,{modelValue:n(s).from,"onUpdate:modelValue":e[2]||(e[2]=o=>n(s).from=o),class:"rounded-lg mb-2 w-[30vmin]",type:"date",label:"From date"},null,8,["modelValue"])]),t("div",null,[c(y,{modelValue:n(s).to,"onUpdate:modelValue":e[3]||(e[3]=o=>n(s).to=o),class:"rounded-lg mb-2 w-[30vmin]",type:"date",label:"To date",onKeyup:$(g,["enter"])},null,8,["modelValue"])]),i.filter||_.from||_.to?(l(),a("button",{key:1,class:"h-10 my-auto mt-5",onClick:k},e[7]||(e[7]=[t("small",{class:"bg-red-500 text-white p-1 rounded-lg"},"remove filter",-1)]))):w("",!0)]),e[8]||(e[8]=t("p",{class:"m-2 text-2xl font-normal"}," Quantity of clients ",-1)),t("div",q,[c(h,{data:r.client_chart,legend:"bottom"},null,8,["data"])]),(l(!0),a(m,null,p(r.office_count_role_gender,(o,f)=>(l(),a(m,{key:f},[t("div",z,[t("p",A,d(f),1),t("div",L,[t("div",Q,[c(h,{data:o.type,legend:"bottom",width:"100vmin"},null,8,["data"])]),t("div",j,[c(h,{data:o.sex,legend:"bottom",colors:["#4CC9FE","#FF77B7"],width:"500px"},null,8,["data"])])])]),t("div",G,[t("p",H,d(x(r.from))+" - "+d(x(r.to)),1),t("p",I," Overall Clients: "+d(o.overall_count),1),t("div",J,[t("div",P,[(l(!0),a(m,null,p(o.type_text,(v,u)=>(l(),a("p",{key:u,class:"uppercase"},d(u)+": "+d(v),1))),128))]),t("div",R,[(l(!0),a(m,null,p(o.sex,(v,u)=>(l(),a("p",{key:u,class:"uppercase"},d(u)+": "+d(v),1))),128))])])])],64))),128))])])]),_:1})}}};export{lt as default};
