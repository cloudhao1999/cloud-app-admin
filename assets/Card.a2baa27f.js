import{l as n,o as i,c,a as e,M as a,L as o,T as l,U as r}from"./@vue.ae71f803.js";import{_ as u}from"./index.a782ff1d.js";const _={class:"p-2 w-full"},p={class:"flex justify-between items-center"},v={class:"px-5 text-gray-500 text-lg font-bold w-full"},f={class:"mr-5"},m={class:"my-3"},h=n({__name:"Card",props:{empty:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1},errCapture:{type:Boolean,default:!1}},setup(t){const d=t;return(s,b)=>(i(),c("div",_,[e("div",{class:a(["shadow-lg shadow-base",t.autoHeight?"card-box-auto":"card-box"])},[e("div",{class:a([d.empty?"":"border-b h-[60px] pt-5","border-base border-solid"])},[e("div",p,[e("div",v,[o(s.$slots,"title",{},void 0,!0)]),e("div",f,[o(s.$slots,"actions",{},void 0,!0)])])],2),e("div",m,[l(e("div",null,[o(s.$slots,"content",{},void 0,!0)],512),[[r,!t.errCapture]]),l(e("div",null,[o(s.$slots,"error",{},void 0,!0)],512),[[r,t.errCapture]])])],2)]))}});const w=u(h,[["__scopeId","data-v-4381cdea"]]);export{w as _};
