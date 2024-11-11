import{T,r as _,z as N,A as V,d as l,b as m,u as C,a as e,t as u,k as d,q as I,F as c,g as f,B as S,e as B,w as x,o as a,Z as E,C as y,f as w}from"./app-D-rA1TwB.js";import{_ as M}from"./PrimaryButton-BhHMLEIT.js";import{_ as O}from"./SecondaryButton-DDsm42Xd.js";import{i as p}from"./index-ByDn4Jzk.js";const P={class:"bg-gray-50 text-black/50 mt-[25vmin] mx-auto w-[75vmin] p-3 rounded-lg"},U={class:"text-center font-bold text-5xl"},F={class:"text-lg font-bold text-center"},R={class:"bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3 rounded-lg"},A={class:"text-xl font-bold"},D={key:0},L=["value"],$={key:1,class:"mt-2"},z={for:"default-radio-1",class:"ms-2 text-sm font-medium text-gray-500"},G={key:2,class:"mt-2"},H={for:"default-radio-1",class:"ms-2 text-sm font-medium text-gray-500"},W={key:3,class:"mt-4"},Z={class:"bg-white text-black/50 mt-12 mx-auto w-[75vmin] p-3 flex"},j={class:"flex gap-4 ml-[30%]"},J={class:""},K={class:""},te={__name:"Evaluation",props:["questions"],setup(h){const o=h,g=T({answer:[]}),t=_(0),n=_("");N({question:null,question_series:null,answer:null}),V(()=>{o.questions.forEach(b=>{g.answer.push(b)})});const q=()=>{g.answer[t.value].answer=n,n.value="",t.value++},k=()=>{t.value<=0?p.error("This is the first question",{autoClose:1e3,transition:p.TRANSITIONS.FLIP,position:p.POSITION.TOP_RIGHT}):t.value--};return(b,s)=>(a(),l(c,null,[m(C(E),{title:"Evaluation"}),e("div",P,[e("p",U,u(o.questions[t.value].title),1),e("p",F,u(o.questions[t.value].sub_title),1)]),e("div",R,[e("div",null,[e("p",A,u(o.questions[t.value].question),1)]),o.questions[t.value].qtype=="dropdown"?(a(),l("div",D,[d(e("select",{"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r),class:"border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"},[s[4]||(s[4]=e("option",{value:"",disabled:""},"Select options",-1)),(a(!0),l(c,null,f(o.questions[t.value].choices,(r,i)=>(a(),l("option",{key:i,value:r},u(r),9,L))),128))],512),[[I,n.value]])])):o.questions[t.value].qtype=="radio"?(a(),l("div",$,[(a(!0),l(c,null,f(o.questions[t.value].choices,(r,i)=>(a(),l("div",{key:i,class:"flex items-center mb-4"},[d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=v=>n.value=v),id:"default-radio-1",type:"radio",value:"",name:"default-radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"},null,512),[[y,n.value]]),e("label",z,u(r),1)]))),128))])):o.questions[t.value].qtype=="button"?(a(),l("div",G,[(a(!0),l(c,null,f(o.questions[t.value].choices,(r,i)=>(a(),l("div",{key:i,class:"flex items-center mb-4"},[d(e("input",{"onUpdate:modelValue":s[2]||(s[2]=v=>n.value=v),id:"default-radio-1",type:"radio",value:"",name:"default-radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"},null,512),[[y,n.value]]),e("label",H,u(r),1)]))),128))])):o.questions[t.value].qtype=="open_ended"?(a(),l("div",W,[d(e("textarea",{"onUpdate:modelValue":s[3]||(s[3]=r=>n.value=r),id:"message",rows:"4",class:"block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",placeholder:"Write your thoughts here..."},null,512),[[S,n.value]])])):B("",!0)]),e("div",Z,[e("div",j,[e("div",J,[m(O,{class:"hover:bg-red-400",onClick:k},{default:x(()=>s[5]||(s[5]=[w(" << Previous")])),_:1})]),e("div",K,[m(M,{class:"hover:bg-green-400",onClick:q},{default:x(()=>s[6]||(s[6]=[w("Next >>")])),_:1})])])])],64))}};export{te as default};
