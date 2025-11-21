
// PW Coupon Code interactions
const coupon = 'RAHRAJ0005';

async function copyText(btn){
  try{
    await navigator.clipboard.writeText(coupon);
    const original = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(()=> btn.innerText = original, 1800);
  }catch(e){
    alert('Unable to copy. Please select and copy: ' + coupon);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  const copyBtn = document.getElementById('copyBtn');
  const copyBtn2 = document.getElementById('copyBtn2');
  const applyBtn = document.getElementById('applyBtn');
  const openBtn = document.getElementById('openBtn');

  if(copyBtn) copyBtn.addEventListener('click', function(){ this.dataset.label = this.innerText; copyText(this); });
  if(copyBtn2) copyBtn2.addEventListener('click', function(){ this.dataset.label = this.innerText; copyText(this); });

  if(applyBtn) applyBtn.addEventListener('click', function(){ window.open('https://pwcouponcode.in', '_blank'); });
  if(openBtn) openBtn.addEventListener('click', function(){ window.open('https://pwcouponcode.in', '_blank'); });
});
