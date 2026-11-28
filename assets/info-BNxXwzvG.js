import{i as E,s as i,b as n,x as p,e as c,c as _,w as g,d as $,G as f,y as k,g as A,S as b,C as I}from"./shell-Bnmi2tW6.js";import{b as R,a as j}from"./guides-BSmvJnjR.js";const C=document.getElementById("app"),M=["일","월","화","수","목","금","토"];(async function(){C.innerHTML='<main class="wrap" id="infoMain"></main>';const e=await E("info"),h=R(e).map(a=>[a.cat,a.title,a.desc,`${a.cat} · ${a.tag}`,a.item]),o=[...e.items].sort((a,s)=>s.count7-a.count7||s.countAll-a.countAll),t=o[0],y=e.categories.slice(1,6),u=[...e.categories.slice(1)].sort((a,s)=>e.items.filter(l=>l.category===s&&l.countAll).length-e.items.filter(l=>l.category===a&&l.countAll).length).slice(0,2),d=(a,s)=>`background:${b[(I[a]??s)%b.length]}`,m=e.now;document.getElementById("infoMain").innerHTML=`
  <div class="ihero-hd"><div><h1>오늘도, 즐거운 거래.</h1><p>아이템을 찾고, 시세를 비교하고, 지금 거래까지.</p></div><small>${m.getMonth()+1}월 ${m.getDate()}일 (${M[m.getDay()]})</small></div>
  <div class="ihero">
    <a class="ih big" href="${n(t.item_id)}" style="${d(t.category,0)}"><span class="glyph">${p(t.category)}</span>
      <small>인기 아이템 · 시세 비교</small><h2>${c(t.name)}</h2><p>${c(t.brief||"지금 가장 많이 거래되는 아이템")}</p>
      <div class="ft"><span>최근 7일 거래 ${_(t.count7)}건 · ${g(t.price)}</span><span>시세 보기${i.arrowR}</span></div></a>
    ${y.map((a,s)=>`<a class="ih" href="/?cat=${encodeURIComponent(a)}" style="${d(a,s)}"><span class="glyph">${p(a)}</span><b>${a}</b></a>`).join("")}
  </div>
  <section class="card top10"><div class="card-hd"><h2>거래량 TOP 10<small>최근 7일</small></h2><a class="more" href="/rank">거래량 순위${i.arrowR}</a></div>
    <div class="card-bd"><div class="t10">${o.slice(0,10).map((a,s)=>`<a href="${n(a.item_id)}"><span class="no">${s+1}</span>${$(a)}<span class="nm"><b>${c(a.name)}</b><small>시세 보기</small></span>${i.chevR}</a>`).join("")}</div></div></section>
  <div class="grid-info">
    <section class="card posts"><div class="card-hd"><h2>새 가이드<small>${h.length}편</small></h2></div>
      <div class="card-bd"><div class="pgrid">${h.map(([a,s,l,r,v],w)=>`<a class="pc" href="${v?n(v.item_id):f}"><span class="th" style="${d(a,w)}">${p(a)}</span><b>${c(s)}</b><p>${c(l)}</p><small>조이톡 온라인 · ${c(r)}</small></a>`).join("")}</div></div></section>
    <div class="side-col">
      <section class="card quick"><div class="card-hd"><h2>바로 찾기</h2></div><div class="card-bd">
        ${[["/info/play","시세 계산기","수량 × 시세 · 호가 차익 · 단위 환산","소모품"],["/rank","거래량 순위","최근 7일 점유율 · 순위표","상자"],[f,"게임정보 홈","조이톡 온라인 · 단위 안내 · 수집 현황","가구"],...u.map(a=>[`/?cat=${encodeURIComponent(a)}`,`${a} 시세`,j(e,a).join(" · ")||"거래 글이 쌓이면 보여요",a]),["https://joy-talk.com/","원문 게시판","조이톡 거래 게시판 바로가기","도구"]].map(([a,s,l,r])=>`<a class="qk" href="${a}"${a.startsWith("http")?' target="_blank" rel="noopener"':""}>${$({item_id:s,name:s,category:r})}<div><b>${s}</b><small>${l}</small></div>${i.chevR}</a>`).join("")}
      </div></section>
      ${k("tall")}
      <div class="mprice-wrap"><section class="card mprice"><div class="card-hd"><h2>아이템 시세<small>팝니다 기준</small></h2><a class="more" href="/">시세${i.arrowR}</a></div>
        ${o.slice(0,6).map(a=>`<a class="mp" href="${n(a.item_id)}">${$(a)}<span class="nm"><b>${c(a.name)}</b><small>${c(a.category)} · ${c(a.unit)}</small></span><span class="pr"><b>${g(a.lowAsk??a.price)}</b>${A(a.change)}</span></a>`).join("")}
      </section></div>
    </div>
  </div>`,document.title="게임 정보 | JOY-PRICE"})();
