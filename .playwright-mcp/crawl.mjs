const base='http://localhost:3100';
const seen=new Map();const q=['/'];
const skip=/^\/(_next|api|uploads|images|videos|documents|favicon|preview-mode)/;
while(q.length&&seen.size<220){
  const p=q.shift(); if(seen.has(p)) continue;
  let status=0,html='';
  try{const r=await fetch(base+p,{redirect:'follow'});status=r.status;html=await r.text();}catch(e){status=-1}
  seen.set(p,status);
  if(status!==200) continue;
  for(const m of html.matchAll(/href="(\/[^"#?]*)[^"]*"/g)){
    let h=decodeURI(m[1]).replace(/\/$/,'')||'/';
    if(skip.test(h)||/\.[a-z0-9]{2,4}$/i.test(h)) continue;
    if(!seen.has(h)&&!q.includes(h)) q.push(h);
  }
}
console.log(JSON.stringify({ok:[...seen].filter(([,s])=>s===200).map(([p])=>p)}));
