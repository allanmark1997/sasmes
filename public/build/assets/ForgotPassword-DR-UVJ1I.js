import{T as d,d as m,b as s,u as a,w as r,F as f,o as i,Z as c,a as o,t as p,e as _,n as w,f as g,h as y}from"./app-D6dFhiMf.js";import{A as x}from"./AuthenticationCard-DTh4N-m3.js";import{_ as b}from"./AuthenticationCardLogo-B2-cchX8.js";import{_ as k}from"./InputError-xrngI8Au.js";import{_ as V}from"./InputLabel-BR2AG70g.js";import{_ as v}from"./PrimaryButton-71-90e4B.js";import{_ as F}from"./TextInput-DHoDLZ47.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sasmes_logo-C-K0o8NT.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(l){const e=d({email:""}),n=()=>{e.post(route("password.email"))};return(C,t)=>(i(),m(f,null,[s(a(c),{title:"Forgot Password"}),s(x,null,{logo:r(()=>[s(b)]),default:r(()=>[t[2]||(t[2]=o("div",{class:"mb-4 text-sm text-gray-300"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(i(),m("div",N,p(l.status),1)):_("",!0),o("form",{onSubmit:y(n,["prevent"])},[o("div",null,[s(V,{for:"email",value:"Email"}),s(F,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":t[0]||(t[0]=u=>a(e).email=u),type:"email",class:"mt-1 block w-full text-gray-700",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(k,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",$,[s(v,{class:w({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:r(()=>t[1]||(t[1]=[g(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{z as default};