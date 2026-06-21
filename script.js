function openEnvelope(){
  const stage = document.getElementById('envelopeStage');
  const envelope = document.getElementById('envelope');
  const hint = document.getElementById('tapHint');
  const card = document.getElementById('letterCard');

  if(envelope.classList.contains('open')) return;

  // seal melts away, flap unfolds
  envelope.classList.add('open');
  hint.style.opacity = '0';

  // envelope dissolves while the letter rises into view, same spot, no jump
  setTimeout(()=>{
    stage.classList.add('opening');
    card.classList.add('show');
  }, 280);

  // fully detach the envelope once it's invisible
  setTimeout(()=>{
    stage.style.display = 'none';
  }, 1150);
}

function sendHug(e){
  const zone = document.getElementById('burstZone');
  const rect = e.target.getBoundingClientRect();
  const cardRect = document.querySelector('.card').getBoundingClientRect();
  const startX = rect.left + rect.width/2 - cardRect.left;
  const emojis = ['💛','✨','🤍','⭐'];
  for(let i=0;i<6;i++){
    const span = document.createElement('span');
    span.className = 'pop';
    span.textContent = emojis[i % emojis.length];
    const dx = (Math.random()-0.5)*120;
    span.style.setProperty('--dx', dx+'px');
    span.style.left = (startX + (Math.random()-0.5)*30) + 'px';
    span.style.top = '-40px';
    zone.appendChild(span);
    setTimeout(()=>span.remove(), 1200);
  }
}
