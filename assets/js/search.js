(function(){
  const input=document.getElementById('site-search');
  const results=document.getElementById('search-results');
  const status=document.getElementById('search-status');
  const clear=document.getElementById('search-clear');
  if(!input||!results||!status) return;
  let index=[];
  const normalize=s=>(s||'').toLowerCase().replace(/[^a-z0-9\s-]/g,' ').replace(/\s+/g,' ').trim();
  const escapeHtml=s=>(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  function score(item,terms){
    const title=normalize(item.title), desc=normalize(item.description), cat=normalize(item.category), content=normalize(item.content);
    let total=0;
    for(const t of terms){
      if(title.includes(t)) total+=12;
      if(title.startsWith(t)) total+=5;
      if(desc.includes(t)) total+=6;
      if(cat.includes(t)) total+=5;
      if(content.includes(t)) total+=1;
    }
    const phrase=terms.join(' ');
    if(phrase && title.includes(phrase)) total+=20;
    if(phrase && desc.includes(phrase)) total+=8;
    return total;
  }
  function render(q){
    const terms=normalize(q).split(' ').filter(Boolean);
    const u=new URL(window.location.href);
    if(q.trim()) u.searchParams.set('q',q.trim()); else u.searchParams.delete('q');
    history.replaceState(null,'',u);
    if(!terms.length){results.innerHTML='';status.textContent='Start typing to search the content library.';return;}
    const found=index.map(item=>({item,score:score(item,terms)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score || (b.item.date||'').localeCompare(a.item.date||''));
    status.textContent=found.length+ (found.length===1?' result':' results') +' for “'+q.trim()+'”. Title matches are ranked first.';
    results.innerHTML=found.slice(0,40).map(({item})=>`<article class="search-result"><div class="search-result-meta">${escapeHtml(item.category)}${item.date?' · '+escapeHtml(item.date):''}</div><h2><a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a></h2><p>${escapeHtml(item.description||'')}</p><a class="search-read" href="${escapeHtml(item.url)}">Read →</a></article>`).join('') || '<p class="search-empty">No matching content found. Try fewer or broader keywords.</p>';
  }
  fetch('/search.json',{cache:'no-store'}).then(r=>r.json()).then(data=>{index=data;const q=new URLSearchParams(location.search).get('q')||'';if(q){input.value=q;render(q);}}).catch(()=>status.textContent='Search index could not be loaded.');
  input.addEventListener('input',()=>render(input.value));
  if(clear) clear.addEventListener('click',()=>{input.value='';render('');input.focus();});
})();
