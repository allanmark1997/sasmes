import{d as c,a as e,F as p,g as m,b as h,t as s,o as l}from"./app-CRQrbWlJ.js";import{_}from"./index-CIoF1V23.js";import{h as f}from"./moment-C5S46NFB.js";const x={key:0},y={key:1,class:"relative overflow-x-auto overflow-y-auto rounded-lg"},u={class:"w-full text-sm text-left rtl:text-right text-gray-700"},g={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex"},v=["src"],w={class:"my-auto ml-2"},b={class:"px-6 py-4"},k={class:"px-6 py-4 uppercase"},M={class:"px-6 py-4 uppercase"},N={class:"px-6 py-4 uppercase"},Y={class:"px-6 py-4"},B={class:"px-6 py-4"},D={class:"px-6 py-4"},F={class:"flex items-center justify-between bottom-1 fixed"},R={class:"mt-6 text-sm text-gray-500"},L={__name:"RecordLists",props:["client_record","search","role","office","service","from","to"],setup(a){const o=a,r=i=>f(i).format("MMMM Do YYYY, h:mm:ss a");return(i,n)=>(l(),c(p,null,[a.client_record.data.length==0?(l(),c("div",x,n[0]||(n[0]=[e("p",{class:"text-center font-bold text-[5vmin] mt-12"}," No Records! ",-1)]))):(l(),c("div",y,[e("table",u,[n[1]||(n[1]=e("thead",{class:"text-xs text-white uppercase bg-yellow-500"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Client Name "),e("th",{scope:"col",class:"px-6 py-3"}," Gender "),e("th",{scope:"col",class:"px-6 py-3"}," Type "),e("th",{scope:"col",class:"px-6 py-3"}," Role "),e("th",{scope:"col",class:"px-6 py-3"}," Appointment Type "),e("th",{scope:"col",class:"px-6 py-3"}," Office "),e("th",{scope:"col",class:"px-6 py-3"}," Service "),e("th",{scope:"col",class:"px-6 py-3"}," Date & Time ")])],-1)),e("tbody",null,[(l(!0),c(p,null,m(a.client_record.data,(t,d)=>(l(),c("tr",{key:d,class:"odd:bg-white even:bg-gray-200 border-b"},[e("th",g,[e("img",{src:t.client.photo,class:"w-12 h-12 rounded-full",alt:""},null,8,v),e("p",w,s(t.client.name),1)]),e("td",b,s(t.client.gender=="male"?"Male":"Female"),1),e("td",k,s(t.client.type),1),e("td",M,s(t.client.role),1),e("td",N,s(t.appointment_type),1),e("td",Y,s(t.office.name),1),e("td",B,s(t.service.unit_service.name),1),e("td",D,s(r(t.created_at)),1)]))),128))])])])),e("div",F,[h(_,{links:o.client_record.links,search:o.search,role:o.role,office:o.office,service:o.service,from:o.from,to:o.to},null,8,["links","search","role","office","service","from","to"]),e("p",R," Showing "+s(a.client_record.data.length)+" Clients ",1)])],64))}};export{L as default};