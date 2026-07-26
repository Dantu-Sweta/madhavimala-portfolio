function openLightbox(src,alt){
  const img=document.getElementById('lightbox-img');
  img.src=src;
  img.alt=alt||'';
  img.classList.remove('zoomed');
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}
function toggleZoom(e){
  e.stopPropagation();
  e.currentTarget.classList.toggle('zoomed');
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
