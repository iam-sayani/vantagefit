(function(){
  "use strict";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* nav: dark over the field, light after */
  var nav = document.getElementById("nav");
  function navState(){
    var field = document.querySelector(".field");
    var limit = field ? field.offsetHeight - 90 : 60;
    nav.classList.toggle("light", scrollY > limit);
  }
  addEventListener("scroll", navState, {passive:true}); navState();

  /* dropdown: close panel after choosing an item */
  document.querySelectorAll(".panel a").forEach(function(a){
    a.addEventListener("click", function(){
      var panel = a.closest(".panel");
      if(panel){ panel.classList.add("closing"); setTimeout(function(){ panel.classList.remove("closing"); }, 600); }
      a.blur();
    });
  });

  /* mobile sheet */
  var mt = document.getElementById("mtoggle"), sheet = document.getElementById("msheet");
  if(mt && sheet){
    mt.addEventListener("click", function(){
      var open = sheet.classList.toggle("open");
      mt.setAttribute("aria-expanded", open ? "true" : "false");
    });
    sheet.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){ sheet.classList.remove("open"); mt.setAttribute("aria-expanded","false"); });
    });
  }

  /* reveals + counters */
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      e.target.classList.add("in");
      counts(e.target); io.unobserve(e.target);
    });
  }, {threshold:.18});
  document.querySelectorAll("section, header.field").forEach(function(s){ io.observe(s); });

  function counts(scope){
    scope.querySelectorAll("[data-count]").forEach(function(el){
      if(el.dataset.done) return; el.dataset.done = "1";
      var t = parseFloat(el.dataset.count), pre = el.dataset.prefix||"", suf = el.dataset.suffix||"", fmt = t>=1000;
      if(reduced){ el.textContent = pre+(fmt?t.toLocaleString("en-US"):t)+suf; return; }
      var t0 = performance.now(), dur = 1400;
      (function tick(n){
        var p = Math.min((n-t0)/dur,1), e2 = 1-Math.pow(1-p,3), v = Math.round(t*e2);
        el.textContent = pre+(fmt?v.toLocaleString("en-US"):v)+suf;
        if(p<1) requestAnimationFrame(tick);
      })(t0);
    });
  }
  if(reduced) counts(document);

  /* rings draw on load */
  if(!reduced){
    document.querySelectorAll(".rings .ring").forEach(function(r){
      var target = r.getAttribute("stroke-dashoffset")||"0";
      r.style.transition = "none"; r.style.strokeDashoffset = "100";
      requestAnimationFrame(function(){ requestAnimationFrame(function(){
        r.style.transition = "stroke-dashoffset 1.5s cubic-bezier(.22,1,.36,1) .3s";
        r.style.strokeDashoffset = target;
      });});
    });
  }

  /* scroll-illuminated statement (home only) */
  var illume = document.querySelector(".illume"), text = document.getElementById("illume-text");
  if(illume && text){
    var fine = text.querySelector(".fine");
    var raw = [];
    text.childNodes.forEach(function(n){ if(n.nodeType===3) raw.push(n.textContent); });
    var words = raw.join(" ").trim().split(/\s+/);
    text.innerHTML = words.map(function(w){ return '<span class="w-lit">'+w+'</span>'; }).join(" ");
    if(fine) text.appendChild(fine);
    var lit = text.querySelectorAll(".w-lit");
    if(reduced){ lit.forEach(function(w){ w.classList.add("on"); }); }
    else{
      var raf = 0;
      var scrub = function(){
        raf = 0;
        var r = illume.getBoundingClientRect(), vh = innerHeight;
        var total = r.height - vh; if(total <= 0) return;
        var p = Math.min(1, Math.max(0, -r.top / total));
        var n = Math.round(p * 1.15 * lit.length);
        lit.forEach(function(w,i){ w.classList.toggle("on", i < n); });
      };
      addEventListener("scroll", function(){ if(!raf) raf = requestAnimationFrame(scrub); }, {passive:true});
      scrub();
    }
  }
})();

/* interaction layer */
(function(){
  "use strict";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* hero entrance stagger on detail fields */
  var heroBits = document.querySelectorAll(".dfield .back, .dfield .kick, .dfield h1, .dfield .sub, .dfield .ctas, .dfield .dheroimg");
  heroBits.forEach(function(el, i){
    el.classList.add("rise");
    el.style.setProperty("--rd", (i * 110) + "ms");
  });

  /* per-row reveals */
  var rows = document.querySelectorAll(".storyrow, .painband, .qcard, .faq");
  if(rows.length){
    if(reduced){ rows.forEach(function(r){ r.classList.add("in"); }); }
    else{
      var rio = new IntersectionObserver(function(es){
        es.forEach(function(e){
          if(!e.isIntersecting) return;
          e.target.classList.add("in");
          rio.unobserve(e.target);
        });
      }, {threshold:.25});
      rows.forEach(function(r){ rio.observe(r); });
    }
  }

  /* 3D tilt + sheen on product imagery */
  if(!reduced && matchMedia("(pointer: fine)").matches){
    document.querySelectorAll(".srimg, .painimg, .dheroimg, .edayimg").forEach(function(box){
      if(box.classList.contains("edayimg")){ box = box.parentElement; }
      box.classList.add("tiltable");
      var raf = 0;
      box.addEventListener("pointermove", function(e){
        if(raf) return;
        raf = requestAnimationFrame(function(){
          raf = 0;
          var r = box.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - .5;
          var py = (e.clientY - r.top) / r.height - .5;
          box.style.setProperty("--ty", (px * 7).toFixed(2) + "deg");
          box.style.setProperty("--tx", (-py * 6).toFixed(2) + "deg");
          box.style.setProperty("--ts", "1.015");
        });
      });
      box.addEventListener("pointerleave", function(){
        box.style.setProperty("--tx", "0deg");
        box.style.setProperty("--ty", "0deg");
        box.style.setProperty("--ts", "1");
      });
    });
  }

  /* scroll progress rail with clickable chapter dots (detail pages) */
  var chapters = document.querySelectorAll("main .chapter, main .belief");
  if(chapters.length >= 2 && document.querySelector(".storyrows, .faqs")){
    var rail = document.createElement("nav");
    rail.className = "prail";
    rail.setAttribute("aria-label", "Page sections");
    var frag = [];
    chapters.forEach(function(c, i){
      var label = (c.querySelector("h2, h3, p") || {}).textContent || ("Section " + (i + 1));
      label = label.trim().slice(0, 42);
      frag.push('<div class="line"' + (i === 0 ? ' data-first' : '') + '><i></i></div>');
      frag.push('<button type="button" class="pdot" data-i="' + i + '"><span class="tip">' + label.replace(/</g, "&lt;") + '</span></button>');
    });
    rail.innerHTML = frag.join("");
    document.body.appendChild(rail);
    var dots = rail.querySelectorAll(".pdot"), lines = rail.querySelectorAll(".line i");
    dots.forEach(function(d){
      d.addEventListener("click", function(){
        chapters[+d.dataset.i].scrollIntoView({behavior: reduced ? "auto" : "smooth", block: "start"});
      });
    });
    var praf = 0;
    function railState(){
      praf = 0;
      var mid = scrollY + innerHeight * .45, active = -1;
      chapters.forEach(function(c, i){
        var top = c.getBoundingClientRect().top + scrollY;
        if(mid >= top) active = i;
        var h = c.offsetHeight, p = Math.min(1, Math.max(0, (mid - top) / h));
        if(lines[i]) lines[i].style.setProperty("--p", p);
      });
      dots.forEach(function(d, i){ d.classList.toggle("on", i <= active); });
    }
    addEventListener("scroll", function(){ if(!praf) praf = requestAnimationFrame(railState); }, {passive:true});
    railState();
  }

  /* magnetic primary CTAs */
  if(!reduced && matchMedia("(pointer: fine)").matches){
    document.querySelectorAll(".cta").forEach(function(b){
      var raf = 0;
      b.addEventListener("pointermove", function(e){
        if(raf) return;
        raf = requestAnimationFrame(function(){
          raf = 0;
          var r = b.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - .5;
          var py = (e.clientY - r.top) / r.height - .5;
          b.style.setProperty("--mx", (px * 8).toFixed(1) + "px");
          b.style.setProperty("--my", (py * 5).toFixed(1) + "px");
        });
      });
      b.addEventListener("pointerleave", function(){
        b.style.setProperty("--mx", "0px");
        b.style.setProperty("--my", "0px");
      });
    });
  }
})();
