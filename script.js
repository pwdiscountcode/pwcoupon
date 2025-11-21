// Interactions for PW coupon landing page
const COUPON = 'RAHRAJ0005';
const PW_URL = 'https://pw.live'; // change to actual PW checkout/course URL if you want

function copyToClipboard(text, btn){
  if(!navigator.clipboard) {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
    if(btn){ temporarilyLabel(btn, 'Copied!'); }
    return;
  }
  navigator.clipboard.writeText(text).then(()=> {
    if(btn){ temporarilyLabel(btn, 'Copied!'); }
  }).catch(()=> {
    if(btn){ temporarilyLabel(btn, 'Copied!'); }
  });
}

function temporarilyLabel(btn, label){
  if(!btn) return;
  const original = btn.innerText;
  btn.innerText = label;
  setTimeout(()=> btn.innerText = original, 1800);
}

document.addEventListener('DOMContentLoaded', ()=> {
  // Buttons
  const copyBtn = document.getElementById('copyBtn');
  const copyBtn2 = document.getElementById('copyBtn2');
  const copyRibbon = document.getElementById('copyRibbon');
  const applyBtn = document.getElementById('applyBtn');
  const openBtn = document.getElementById('openBtn');
  const openRibbon = document.getElementById('openRibbon');
  const couponMain = document.getElementById('couponMain');
  const universalCode = document.getElementById('universalCode');

  // Set code in UI (in case you want to change in one place)
  if(couponMain) couponMain.innerText = COUPON;
  if(universalCode) universalCode.innerText = COUPON;

  if(copyBtn) copyBtn.addEventListener('click', ()=> copyToClipboard(COUPON, copyBtn));
  if(copyBtn2) copyBtn2.addEventListener('click', ()=> copyToClipboard(COUPON, copyBtn2));
  if(copyRibbon) copyRibbon.addEventListener('click', ()=> copyToClipboard(COUPON, copyRibbon));

  if(applyBtn) applyBtn.addEventListener('click', ()=> window.open(PW_URL, '_blank'));
  if(openBtn) openBtn.addEventListener('click', ()=> window.open(PW_URL, '_blank'));
  if(openRibbon) openRibbon.addEventListener('click', ()=> window.open(PW_URL, '_blank'));

  // Subscribe button (demo)
  const subscribe = document.getElementById('subscribe');
  if(subscribe){
    subscribe.addEventListener('click', ()=> {
      const email = document.getElementById('email').value;
      temporarilyLabel(subscribe, 'Saved');
      // In production, hook this to your backend or mailing service
      console.log('Subscribe:', email);
    });
  }
});
