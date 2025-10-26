import{a as f,S as p,i}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="https://pixabay.com/api/",h="52828842-5c1784e92de7248ba7b84eab7";function g(n){const o={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(m,{params:o}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images:",e),e})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(n){const o=n.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="stats">
          <p> ${e.likes}</p>
          <p> ${e.views}</p>
          <p> ${e.comments}</p>
          <p>⬇ ${e.downloads}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){u.innerHTML=""}function w(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}const a=document.querySelector(".form"),v=a.elements["search-text"];a.addEventListener("submit",async n=>{n.preventDefault();const o=v.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),w();try{const e=await g(o);if(l(),!e.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.hits)}catch{l(),i.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight"})}finally{a.reset()}});
//# sourceMappingURL=index.js.map
