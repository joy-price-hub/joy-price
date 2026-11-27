import{i as j,u as x,s as l,v as M,c as e,b as v,x as y,e as d,d as I,w,m,y as L,S as C,C as R}from"./shell-BmlOZqkw.js";import{b as T,t as p}from"./guides-DF9_39mL.js";const B=document.getElementById("app");(async function(){B.innerHTML='<div id="gtabsSlot"></div><main class="wrap" id="gMain"></main>';const a=await j("info"),$=[...a.items].sort((s,t)=>t.count7-s.count7),i=a.now,g=s=>String(s).padStart(2,"0"),E=`${i.getFullYear()}.${g(i.getMonth()+1)}.${g(i.getDate())}`,h=s=>`background:${C[R[s]??0]}`;document.getElementById("gtabsSlot").innerHTML=`<nav class="gtabs" aria-label="게임정보 메뉴"><div class="gtabs-in">
    <span class="gname">${x}조이톡 온라인 ${l.chevD.replace("<svg",'<svg width="14" height="14"')}</span>
    <div class="gtab-list"><a class="on" href="#">홈</a><a href="#guide">거래 가이드</a><a href="#items">아이템 도감</a><a href="#units">단위 안내</a><a href="/info/play">계산기</a></div>
    <a class="go" href="/">시세 보기${l.arrowR}</a><button type="button" class="fav-btn" id="gFav" aria-label="즐겨찾기">${l.star}</button>
  </div></nav>`,document.getElementById("gFav").addEventListener("click",s=>{s.currentTarget.classList.toggle("on"),M("즐겨찾기를 바꿨어요")});const b=T(a).slice(0,4).map(s=>[s.cat,s.tag,s.title,s.desc,s.item]),n=s=>a.prices.filter(t=>t.unit_label===s).length,f=[["개","기본 단위",p(a,"개").join(" · ")||"—",`${e(n("개"))}건`,"개당 가격 비교","소모품"],["묶음","묶음 단위 (“묶당”)",p(a,"묶음").join(" · ")||"—",`${e(n("묶음"))}건`,"재료 대량 거래","도구"],["동방","동방 단위",p(a,"동방").join(" · ")||"—",`${e(n("동방"))}건`,"대량 거래","가구"]],S=a.posts.filter(s=>s.t.toDateString()===i.toDateString()).length;document.getElementById("gMain").innerHTML=`
  <section class="ghero"><div class="fxb-art"></div><small>JOYTALK ONLINE</small><h1>조이톡 온라인</h1><p>아이템 시세 · 거래 게시판 · 줄임말 사전 · 시세 계산</p><div class="meta"><span>아이템 ${e(a.items.length)}종</span><span>거래 글 ${e(a.total)}건</span></div></section>
  <div class="ggrid">
    <div class="gcol">
      <section class="card" id="guide"><div class="card-hd"><h2>새 가이드<small>${b.length}편</small></h2><a class="more" href="/info">가이드 전체${l.arrowR}</a></div>
        <div class="card-bd"><div class="g2">${b.map(([s,t,o,r,c])=>`<a class="gp" href="${c?v(c.item_id):"/info"}"><span class="th" style="${h(s)}">${y(s)}</span><div class="bd"><em>${t}</em><b>${d(o)}</b><p>${d(r)}</p><small>${E}</small></div></a>`).join("")}</div></div></section>
      <section class="card" id="items"><div class="card-hd"><h2>많이 찾는 아이템<small>${a.items.length}종</small></h2><a class="more" href="/">아이템 전체${l.arrowR}</a></div>
        <div class="card-bd"><div class="g3">${$.slice(0,6).map(s=>`<a class="gi" href="${v(s.item_id)}"><div class="top">${I(s)}<div><small>${d(s.category)} · ${d(s.unit)}</small><b>${d(s.name)}</b><span>${d(s.aliases.slice(0,3).join(" · ")||"—")}</span></div></div><div class="pr">${w(s.price)} 삥</div></a>`).join("")}</div></div></section>
      <section class="card" id="units"><div class="card-hd"><h2>거래 단위 안내<small>${f.length}가지</small></h2><a class="more" href="/info/play">단위 환산${l.arrowR}</a></div>
        <div class="card-bd"><div class="g3">${f.map(([s,t,o,r,c,u])=>`<div class="tip"><div class="th" style="${h(u)}"><span class="glyph">${y(u)}</span><div><small>${t}</small><b>${s}</b></div></div><div class="bd"><dl><dt>많이 쓰는 아이템</dt><dd>${d(o)}</dd><dt>거래 글</dt><dd>${r}</dd><dt>쓰임</dt><dd>${c}</dd></dl><div class="ft"><span>표기 예: 3${s}</span><span>자세히</span></div></div></div>`).join("")}</div></div></section>
    </div>
    <div class="side-col">
      <section class="card"><div class="card-hd"><h2>수집 현황</h2><a class="more" href="/">시세 보기${l.arrowR}</a></div>
        <div class="card-bd" style="padding:0 22px 22px"><div class="sched"><div class="dt"><small>${i.getMonth()+1}월</small><b>${i.getDate()}</b><span>최근</span></div><div><em>• ${a.source==="file"?"수집 중":"샘플 데이터"}</em><b class="t">오늘 거래 글 ${e(S)}건</b><small class="d">${m(a.first)} ~ ${m(i)} · 전체 ${e(a.posts.length)}건</small></div></div></div></section>
      <section class="card"><div class="card-hd"><h2>아이템 시세<small>${m(i)} 기준</small></h2></div>
        <div class="card-bd plist" style="padding:0 22px 16px">${$.slice(0,8).map(s=>`<a class="pl" href="${v(s.item_id)}"><b>${d(s.name)}</b><small>${w(s.price)} 삥</small></a>`).join("")}</div></section>
      <section class="card"><div class="card-hd"><h2>조이톡 온라인 시세</h2></div><div class="card-bd" style="padding:0 20px 20px"><a class="more" style="color:var(--blue);font-weight:600" href="/">시세 보기 →</a></div></section>
      ${L("tall")}
    </div>
  </div>`,document.title="조이톡 온라인 게임정보 | JOY-PRICE"})();
