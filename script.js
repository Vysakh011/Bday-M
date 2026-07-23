
const env=document.getElementById('env');
const seal=document.getElementById('seal');
const card=document.getElementById('card');
const fx=document.getElementById('effects');
let state=0;

seal.addEventListener('click',()=>{
 if(state!==0)return;
 state=1;
 env.classList.add('out');
});

card.addEventListener('click',()=>{
 if(state===1){
   state=2;
   card.classList.add('open');
   for(let i=0;i<25;i++){
      const b=document.createElement('div');
      b.className='balloon';
      b.style.left=Math.random()*100+'vw';
      b.style.background=['#ff6b81','#74c0fc','#69db7c','#ffd43b'][i%4];
      b.style.animationDelay=(Math.random()*2)+'s';
      fx.appendChild(b);
   }
 }else if(state===2){
   state=0;
   card.classList.remove('open');
   env.classList.remove('out');
   fx.innerHTML='';
 }
});
