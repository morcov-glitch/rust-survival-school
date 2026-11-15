/* Rust Survival School — touch controls and phone/tablet layout.
   Loaded after the main script. It never reaches into the game's internals: on-screen buttons send the same
   keyboard / mouse events a desktop player would, so every module (parkour, vehicles, skills, dog…) just works.
   Turns itself on for touch-first devices, or on the first touch on a hybrid laptop. */
(function(){
'use strict';
const $=s=>document.querySelector(s);
const cv=$('#cv'),hud=$('#hud');
if(!cv||!hud)return;

/* ---------- styles ---------- */
const css=document.createElement('style');css.textContent=`
/* small / short screens (any input type) */
@media(max-height:520px){
  #menu{padding:0 6vw;overflow:auto;align-items:flex-start}#menu>div{margin:auto 0;padding:14px 0}
  #menu .logo{font-size:52px}#menu .sub{margin:4px 0 26px;font-size:14px}#menu .sub+div{margin:-20px 0 14px!important;font-size:10px!important}
  #menu .mbtn{font-size:21px;padding:5px 0}#menu .note{margin-top:12px;font-size:12px}
  #death{justify-content:flex-start;overflow:auto}#death h1{font-size:36px}#death .lesson{font-size:13px;margin-bottom:10px}#death .spawns button{padding:9px 12px}
  #pause .card{padding:12px 16px}#pause h2{font-size:22px}#pause table{margin-top:8px;font-size:13px}#pause td{padding:2px 8px}
}
@media(max-width:520px){#menu .sub+div{letter-spacing:.08em!important;margin-top:-22px!important}#menu .note{font-size:12px}}
.win{max-height:calc(100dvh - 32px)}#guide .win{height:calc(100dvh - 32px)}
#pause .card{max-height:calc(100dvh - 16px);overflow:auto;margin:8px}
#bigmap{max-height:calc(100dvh - 120px)}
/* narrow screens: Field Guide chapters become a swipeable strip above the text */
@media(max-width:520px){
  #guide .bd{flex-direction:column}
  #gnav{width:auto;flex:none;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;padding:6px 8px;gap:2px}
  #gnav input{width:132px;flex:none;margin:0 6px 0 0}
  #gnav button{width:auto;flex:none;white-space:nowrap;padding:8px 10px;border-left:0;border-bottom:3px solid transparent}
  #gnav button.on{border-bottom-color:var(--red)}
  #gbody{padding:12px 14px 30px;font-size:15px}#gbody h2{font-size:22px}
  #gbody table{display:block;overflow-x:auto}
}

/* touch mode */
#tc,#tMenuHint{display:none}
body.touch{-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;overscroll-behavior:none;touch-action:manipulation;
  --sl:env(safe-area-inset-left,0px);--sr:env(safe-area-inset-right,0px);--st:env(safe-area-inset-top,0px);--sb:env(safe-area-inset-bottom,0px);--lift:0px}
body.touch #cv{touch-action:none}
body.touch #tMenuHint{display:block;margin-top:10px;color:#9fe08a;font-size:12.5px;letter-spacing:.04em}
body.touch #menu .mbtn{padding-top:10px;padding-bottom:10px}
body.touch .inp,body.touch #gnav input,body.touch #chat{font-size:16px}
body.touch .ov{padding:6px}body.touch .win{max-height:calc(100dvh - 12px)}body.touch #guide .win{height:calc(100dvh - 12px)}
body.touch .win .close{min-height:36px;padding:6px 14px}
@media(max-height:520px){body.touch .win .hd{padding:5px 8px 5px 12px}body.touch .win .hd h2{font-size:16px}body.touch .win .bd{padding:10px}body.touch #guide .bd{padding:0}}
body.touch .btn{min-height:34px}body.touch .btn.sm{min-height:30px;padding:5px 10px}
body.touch #gnav button{padding-top:10px;padding-bottom:10px}

/* HUD re-flow: left = objective + stick, right = status + action buttons, bottom centre = hotbar */
body.touch #objective{left:calc(8px + var(--sl));top:calc(8px + var(--st));width:232px;padding:6px 9px;pointer-events:auto}
body.touch #objective .k{font-size:10px}body.touch #objective .t{font-size:14px;margin:1px 0 2px}
body.touch #objective .d{font-size:12px;line-height:1.3}body.touch #objective .prog{margin-top:3px}
body.touch #objective .keys{display:none}body.touch #objective.tmin .d{display:none}
body.touch #objective .k:after{content:' · TAP: LESS';color:var(--dim);letter-spacing:.08em}
body.touch #objective.tmin .k:after{content:' · TAP: MORE'}
body.touch #compass{width:240px;max-width:32vw;top:calc(8px + var(--st))}
body.touch #clock{top:calc(36px + var(--st))}body.touch #netinfo{top:calc(50px + var(--st))}
body.touch #minimap{left:auto;bottom:auto;right:calc(8px + var(--sr));top:calc(54px + var(--st));width:96px;height:96px}
body.touch #vitals{right:calc(112px + var(--sr));bottom:auto;top:calc(54px + var(--st));width:124px;gap:3px}
body.touch .vbar{height:17px}body.touch .vbar .ic{width:26px;font-size:9.5px}body.touch .vbar .fill{left:26px;top:2px;bottom:2px;right:2px}
body.touch .vbar .val{left:31px;font-size:11.5px}
body.touch #queue{right:calc(112px + var(--sr));bottom:auto;top:calc(162px + var(--st));width:124px}
body.touch #queue .qi{font-size:11px;padding:3px 6px}
body.touch #status{right:auto;left:50%;transform:translateX(-50%);bottom:calc(58px + var(--sb) + var(--lift));width:auto;max-width:56vw;justify-content:center;flex-wrap:wrap}
body.touch #status span{font-size:11px;padding:1px 6px}
body.touch #hotbar{bottom:calc(6px + var(--sb));gap:3px;pointer-events:auto}
body.touch .hslot{width:46px;height:46px;font-size:8.5px;padding:2px;overflow:hidden}
body.touch .hslot .sw{width:20px;height:9px;margin-bottom:2px;flex:none}body.touch .hslot .n{font-size:8px;left:2px;top:0}body.touch .hslot .c{font-size:10px;right:2px;bottom:0;text-shadow:0 1px 2px #000}
body.touch #selname{bottom:calc(82px + var(--sb) + var(--lift));font-size:14px;width:max-content;max-width:60vw}body.touch #selname small{font-size:11.5px}
body.touch #buildmode{bottom:calc(126px + var(--sb) + var(--lift))}
body.touch #feed{right:auto;left:calc(8px + var(--sl));bottom:calc(178px + var(--sb) + var(--lift));width:168px}
body.touch #feed .pick{font-size:12px;padding:3px 7px}body.touch #feed .pick:nth-last-child(n+4){display:none}
body.touch #kfeed{left:calc(8px + var(--sl));bottom:calc(254px + var(--sb) + var(--lift));max-width:210px;font-size:11px}
body.touch #kfeed div:nth-last-child(n+3){display:none}
body.touch #chat{left:50%;transform:translateX(-50%);bottom:auto;top:calc(70px + var(--st));width:min(340px,72vw)}
body.touch #info{display:none}
body.touch #tip{top:calc(46px + var(--st));max-width:max(250px,calc(100vw - 520px));padding:7px 10px}
body.touch #tip .t{font-size:14px}body.touch #tip .d{font-size:12.5px;line-height:1.35}
body.touch #prompt{font-size:13px;max-width:92vw;white-space:normal;text-align:center}
body.touch #sklQ{left:auto;right:calc(178px + var(--sr));bottom:calc(92px + var(--sb) + var(--lift));pointer-events:auto}
body.touch #sklQ kbd,body.touch #ixUv kbd{display:none}
body.touch #ixUv{left:calc(50% + 150px);bottom:calc(6px + var(--sb));height:46px;width:26px;pointer-events:auto}
@media(min-width:1000px) and (min-height:620px){body.touch #info{display:block;top:calc(160px + var(--st));right:calc(8px + var(--sr))}body.touch #tip{max-width:440px}}

/* portrait: usable, landscape is roomier */
@media(orientation:portrait){
  body.touch{--lift:58px}
  body.touch #compass{left:calc(8px + var(--sl));transform:none;width:calc(100vw - 200px);max-width:none}
  body.touch #clock,body.touch #netinfo{left:calc(8px + var(--sl));transform:none}
  body.touch #objective{top:calc(158px + var(--st));width:calc(100vw - 16px - var(--sl) - var(--sr))}
  body.touch #tip{top:calc(232px + var(--st));max-width:calc(100vw - 16px)}
  body.touch #sklQ{right:calc(12px + var(--sr));bottom:calc(282px + var(--sb))}
  body.touch #ixUv{left:auto;right:calc(8px + var(--sr));bottom:calc(340px + var(--sb))}
  body.touch #tKick{right:calc(104px + var(--sr));bottom:calc(156px + var(--sb) + var(--lift))}
}

/* on-screen controls */
body.touch #tc{display:block;position:fixed;inset:0;z-index:6;pointer-events:none;touch-action:none;font-family:inherit}
body.touch #tc.hidden{display:none}
#tc>*{pointer-events:auto;touch-action:none}
#tZone{position:absolute;left:0;bottom:calc(var(--lift));width:30%;min-width:190px;height:52%;max-height:300px}
#tBase{position:absolute;left:calc(30px + var(--sl));bottom:calc(30px + var(--sb));width:120px;height:120px;border-radius:50%;
  background:rgba(20,20,18,.3);border:1.5px solid rgba(255,255,255,.22);pointer-events:none}
#tBase.sprint{border-color:rgba(159,224,138,.8);box-shadow:0 0 14px rgba(159,224,138,.35)}
#tKnob{position:absolute;left:50%;top:50%;width:52px;height:52px;margin:-26px 0 0 -26px;border-radius:50%;background:rgba(227,220,207,.5);border:1.5px solid rgba(255,255,255,.5)}
#tBase:after{content:'MOVE';position:absolute;left:0;right:0;top:-17px;text-align:center;font-size:9.5px;font-weight:700;letter-spacing:.16em;color:rgba(227,220,207,.55);text-shadow:0 1px 2px #000}
#tBase.sprint:after{content:'SPRINT';color:#9fe08a}
.tb{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;padding:0;
  background:rgba(20,20,18,.42);border:1.5px solid rgba(255,255,255,.3);color:#e3dccf;font:700 15px/1 "Roboto Condensed",Arial Narrow,Arial,sans-serif;
  letter-spacing:.04em;text-shadow:0 1px 2px #000;-webkit-user-select:none;user-select:none}
.tb small{font-size:8.5px;font-weight:700;letter-spacing:.1em;color:rgba(227,220,207,.7);margin-top:2px}
.tb.on{background:rgba(63,135,191,.55);border-color:rgba(160,205,240,.9)}
#tFire{right:calc(20px + var(--sr));bottom:calc(64px + var(--sb) + var(--lift));width:80px;height:80px;font-size:17px;background:rgba(205,65,43,.4);border-color:rgba(255,160,140,.55)}
#tFire.on{background:rgba(205,65,43,.75);border-color:#ffb9a8}
#tJump{right:calc(112px + var(--sr));bottom:calc(22px + var(--sb) + var(--lift));width:60px;height:60px;font-size:12px}
#tUse{right:calc(108px + var(--sr));bottom:calc(92px + var(--sb) + var(--lift));width:54px;height:54px}
#tAlt{right:calc(44px + var(--sr));bottom:calc(154px + var(--sb) + var(--lift));width:50px;height:50px}
#tDuck{right:calc(24px + var(--sr));bottom:calc(8px + var(--sb) + var(--lift));width:48px;height:48px;font-size:11px}
#tKick{right:calc(180px + var(--sr));bottom:calc(30px + var(--sb) + var(--lift));width:44px;height:44px;font-size:13px}
#tTop{position:absolute;right:calc(8px + var(--sr));top:calc(8px + var(--st));display:flex;gap:4px}
#tTop button{width:40px;height:40px;border-radius:4px;border:1px solid rgba(255,255,255,.22);background:rgba(20,20,18,.6);color:#e3dccf;
  font:700 11px/1 "Roboto Condensed",Arial Narrow,Arial,sans-serif;letter-spacing:.06em;padding:0}
#tTop button.on{background:rgba(63,135,191,.55)}
#tMore{position:absolute;right:calc(8px + var(--sr));top:calc(52px + var(--st));width:214px;max-height:calc(100dvh - 60px);overflow:auto;touch-action:pan-y;
  background:rgba(36,34,30,.97);border:1px solid rgba(255,255,255,.14);box-shadow:0 10px 30px rgba(0,0,0,.6)}
#tMore.hidden{display:none}
#tMore button{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:33px;padding:0 12px;background:none;border:0;border-bottom:1px solid rgba(255,255,255,.07);
  color:#e3dccf;font:700 14px/1 "Roboto Condensed",Arial Narrow,Arial,sans-serif;letter-spacing:.04em;text-align:left}
#tMore button:active{background:rgba(255,255,255,.08)}
#tMore button i{font-style:normal;font-size:11px;color:#111;background:#e3dccf;padding:2px 6px;min-width:20px;text-align:center}
`;document.head.appendChild(css);

/* ---------- synthetic input: exactly what a keyboard / mouse would send ---------- */
function key(type,k){document.body.dispatchEvent(new KeyboardEvent(type,{key:k,bubbles:true,cancelable:true}))}
const held={};                                  // key -> time it went down
function down(k){if(held[k])return;held[k]=performance.now();key('keydown',k)}
// keep a tapped key down for a few frames so the game's per-frame "was this just pressed" polling always sees it
function up(k){const t=held[k];if(!t)return;const wait=Math.max(0,130-(performance.now()-t));held[k]=0;
  setTimeout(()=>{if(!held[k])key('keyup',k)},wait)}
function tap(k){down(k);up(k)}
function mouse(type,button){cv.dispatchEvent(new MouseEvent(type,{button,bubbles:true,cancelable:true,view:window}))}
function playing(){try{return !!(S&&S.active&&P&&P.alive&&!hud.classList.contains('hidden'))}catch(e){return false}}

/* ---------- build the controls ---------- */
let built=false,tc,base,knob,more;
function el(tag,id,html,parent){const e=document.createElement(tag);if(id)e.id=id;if(html)e.innerHTML=html;(parent||tc).appendChild(e);return e}
function build(){if(built)return;built=true;
  tc=document.createElement('div');tc.id='tc';tc.className='hidden';document.body.appendChild(tc);
  const zone=el('div','tZone');base=el('div','tBase');knob=el('div','tKnob','',base);
  const fire=el('button','tFire','USE');fire.className='tb';
  const mk=(id,label,sub)=>{const b=el('button',id,label+(sub?`<small>${sub}</small>`:''));b.className='tb';return b};
  const jump=mk('tJump','JUMP'),use=mk('tUse','E','interact'),alt=mk('tAlt','R','alt'),duck=mk('tDuck','DUCK'),kick=mk('tKick','F','kick');
  const top=el('div','tTop','<button data-k="Escape" aria-label="Pause">&#10074;&#10074;</button><button data-k="Tab">BAG</button><button data-k="m">MAP</button><button id="tMoreBtn" aria-label="More actions">&bull;&bull;&bull;</button>');
  more=el('div','tMore','');more.className='hidden';
  const items=[['Field Guide','g'],['Skills','k'],['Pulse','q'],['UV flashlight','v'],['Dog: stay / follow','z'],['Vehicle camera','t'],['Hide / show hints','h'],['Chat','Enter','chat'],['Sound on / off','','sound'],['Full screen','','fs']];
  more.innerHTML=items.map(([n,k,a])=>`<button data-k="${k}" data-a="${a||''}">${n}${k&&k.length===1?`<i>${k.toUpperCase()}</i>`:''}</button>`).join('');
  if(!document.documentElement.requestFullscreen)more.querySelector('[data-a=fs]').style.display='none';

  /* movement stick: floats to wherever the thumb lands inside the left zone */
  const R=50;let sid=null,ox=0,oy=0;const dir={w:0,a:0,s:0,d:0,shift:0};
  function setDir(n){for(const k in dir){if(!!n[k]!==!!dir[k]){dir[k]=n[k]?1:0;n[k]?down(k):up(k)}}}
  function stickMove(t){let dx=t.clientX-ox,dy=t.clientY-oy;const m=Math.hypot(dx,dy);if(m>R){dx*=R/m;dy*=R/m}
    knob.style.transform=`translate(${dx}px,${dy}px)`;const nx=dx/R,ny=dy/R,mag=Math.min(1,m/R),n={};
    if(mag>.24){const ux=nx/mag,uy=ny/mag;n.w=uy<-.38;n.s=uy>.38;n.a=ux<-.38;n.d=ux>.38;n.shift=mag>.9&&uy<-.5}
    base.classList.toggle('sprint',!!n.shift);setDir(n)}
  function stickEnd(){sid=null;knob.style.transform='';base.style.left='';base.style.bottom='';base.classList.remove('sprint');setDir({})}
  zone.addEventListener('touchstart',e=>{e.preventDefault();if(sid!==null)return;const t=e.changedTouches[0];sid=t.identifier;
    ox=Math.max(66,t.clientX);oy=Math.min(innerHeight-66,t.clientY);base.style.left=(ox-60)+'px';base.style.bottom=(innerHeight-oy-60)+'px';stickMove(t)},{passive:false});
  zone.addEventListener('touchmove',e=>{e.preventDefault();for(const t of e.changedTouches)if(t.identifier===sid)stickMove(t)},{passive:false});
  const zEnd=e=>{for(const t of e.changedTouches)if(t.identifier===sid)stickEnd()};
  zone.addEventListener('touchend',zEnd);zone.addEventListener('touchcancel',zEnd);

  /* camera: drag anywhere on the view (or on the USE button, so you can aim while you swing / shoot) */
  const LOOK=2.3,looks={};
  function lookStart(e){for(const t of e.changedTouches)looks[t.identifier]={x:t.clientX,y:t.clientY}}
  function lookMove(e){for(const t of e.changedTouches){const l=looks[t.identifier];if(!l)continue;const dx=t.clientX-l.x,dy=t.clientY-l.y;l.x=t.clientX;l.y=t.clientY;
    if(playing()&&typeof look==='function')look(dx*LOOK,dy*LOOK)}}
  function lookEnd(e){for(const t of e.changedTouches)delete looks[t.identifier]}
  cv.addEventListener('touchstart',e=>{if(!window.TOUCH_ON)return;e.preventDefault();more.classList.add('hidden');lookStart(e)},{passive:false});
  cv.addEventListener('touchmove',e=>{if(!window.TOUCH_ON)return;e.preventDefault();lookMove(e)},{passive:false});
  cv.addEventListener('touchend',lookEnd);cv.addEventListener('touchcancel',lookEnd);

  /* USE = left mouse button (hold to keep swinging, hold-and-release for the bow) */
  let fireId=null;
  fire.addEventListener('touchstart',e=>{e.preventDefault();if(fireId!==null)return;fireId=e.changedTouches[0].identifier;fire.classList.add('on');lookStart(e);mouse('mousedown',0)},{passive:false});
  fire.addEventListener('touchmove',e=>{e.preventDefault();lookMove(e)},{passive:false});
  const fEnd=e=>{lookEnd(e);for(const t of e.changedTouches)if(t.identifier===fireId){fireId=null;fire.classList.remove('on');mouse('mouseup',0)}};
  fire.addEventListener('touchend',fEnd);fire.addEventListener('touchcancel',fEnd);
  function fireCancel(){if(fireId!==null){fireId=null;fire.classList.remove('on');mouse('mouseup',0)}}

  /* hold buttons */
  function hold(b,k){b.addEventListener('touchstart',e=>{e.preventDefault();b.classList.add('on');down(k)},{passive:false});
    const end=e=>{e.preventDefault();b.classList.remove('on');up(k)};b.addEventListener('touchend',end);b.addEventListener('touchcancel',end)}
  hold(jump,' ');hold(use,'e');hold(kick,'f');hold(alt,'r');
  /* crouch is a toggle: holding a third button while moving and aiming is not possible on a phone */
  let ducked=false;
  duck.addEventListener('touchstart',e=>{e.preventDefault();ducked=!ducked;if(ducked)down('c');else up('c')},{passive:false});

  /* top bar and the "more" menu */
  top.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='tMoreBtn'){more.classList.toggle('hidden');return}more.classList.add('hidden');tap(b.dataset.k)});
  more.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;more.classList.add('hidden');const a=b.dataset.a;
    if(a==='sound'){const s=$('#pSound');if(s)s.click();return}
    if(a==='fs'){const d=document;if(d.fullscreenElement)d.exitFullscreen();else{const p=d.documentElement.requestFullscreen();if(p&&p.then)p.then(()=>{try{const l=screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape');if(l&&l.catch)l.catch(()=>{})}catch(err){}}).catch(()=>{})}return}
    tap(b.dataset.k)});

  /* existing HUD pieces become tappable */
  $('#hotbar').addEventListener('click',e=>{const s=e.target.closest('.hslot');if(!s)return;const i=[...s.parentNode.children].indexOf(s);if(i>=0)tap(String(i+1))});
  $('#objective').addEventListener('click',()=>{if(window.TOUCH_ON)$('#objective').classList.toggle('tmin')});
  hud.addEventListener('click',e=>{if(!window.TOUCH_ON||!e.target.closest)return;if(e.target.closest('#sklQ'))tap('q');else if(e.target.closest('#ixUv'))tap('v')});
  $('#gnav').addEventListener('click',e=>{if(e.target.closest&&e.target.closest('button')){const o=$('#gnav .on');if(o&&o.scrollIntoView)o.scrollIntoView({inline:'center',block:'nearest'})}});
  if(matchMedia('(orientation:portrait)').matches||innerHeight<430)$('#objective').classList.add('tmin');

  /* show the controls only while actually playing; let go of everything the moment we are not */
  let was=false;
  function sync(){requestAnimationFrame(sync);const p=playing();
    if(p!==was){was=p;tc.classList.toggle('hidden',!p);if(!p){if(sid!==null)stickEnd();fireCancel();more.classList.add('hidden');ducked=false;for(const k in held)if(held[k])up(k);
      for(const b of tc.querySelectorAll('.tb.on'))b.classList.remove('on')}}
    if(p){let c=false;try{c=!!keys.c}catch(e){}if(!c&&ducked&&!held.c)ducked=false;duck.classList.toggle('on',ducked);
      let net=false;try{net=!!NET.role}catch(e){}const ch=more.querySelector('[data-a=chat]');if(ch)ch.style.display=net?'':'none'}}
  sync();
  // leaving the app / switching tabs pauses, exactly like losing the mouse does on desktop
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing()&&typeof pause==='function'){let net=false;try{net=!!NET.role}catch(e){}if(!net)pause()}});
}

/* ---------- wording: the tutorial talks about clicks and keys ---------- */
function touchText(s){if(!window.TOUCH_ON||typeof s!=='string')return s;
  return s.replace(/Click to start/g,'Tap to start').replace(/hold left[- ]click/gi,'Hold USE').replace(/left[- ]click/gi,'USE').replace(/right[- ]click/gi,'R')
    .replace(/Press <b>G<\/b> any time for the Field Guide/g,'The <b>&bull;&bull;&bull;</b> menu (top right) has the Field Guide')}
function wrapText(){try{
  if(typeof hintFor==='function'){const f=hintFor;hintFor=function(id){return touchText(f(id))}}
  if(typeof tip==='function'){const f=tip;tip=function(k,t,d,force){return f(k,touchText(t),touchText(d),force)}}
  if(typeof feedMsg==='function'){const f=feedMsg;feedMsg=function(m){return f(touchText(m))}}
}catch(e){}}
function pauseCard(){const c=$('#pause .card');if(!c)return;const h=c.querySelector('h2'),d=h&&h.nextElementSibling,t=c.querySelector('table');
  if(h)h.textContent='TAP TO PLAY';if(d)d.textContent='Touch controls are on. Drag anywhere on the view to look around.';
  if(t)t.innerHTML=[['Left stick','Move · push it all the way up to <b>sprint</b>'],['Drag the view','Look around (also works while holding USE)'],
    ['USE','Left click: hit, gather, shoot, place, eat · hold to draw the bow'],['E','Interact: pick up, open, drink, doors'],['R','Reload · change building piece · hammer upgrade menu'],
    ['JUMP / DUCK','Jump · crouch (tap again to stand) · swim up / dive'],['Hotbar','Tap a slot to select it'],['BAG / MAP','Inventory &amp; crafting / map'],
    ['&bull;&bull;&bull;','Field Guide, skills, chat, sound, full screen'],['Objective','Tap the card to shrink or expand it']].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}
function menuHint(){const n=$('#menu .note');if(!n||$('#tMenuHint'))return;const h=document.createElement('div');h.id='tMenuHint';
  h.textContent='Touch controls are on. Turn your phone sideways for the best view.';n.parentNode.insertBefore(h,n)}

/* ---------- switch on ---------- */
let on=false;
function enable(){if(on)return;on=true;window.TOUCH_ON=true;document.body.classList.add('touch');build();wrapText();pauseCard();menuHint();
  try{if(document.pointerLockElement)document.exitPointerLock()}catch(e){}}
if(matchMedia('(pointer:coarse)').matches)enable();else addEventListener('touchstart',enable,{once:true,passive:true,capture:true});
})();
