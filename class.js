// Priest class hooks for the shared Forever guide app.js
(function(){
const WN={shadow:'Shadow',disc:'Discipline'};
function healAt(l){return l>=20?'Flash Heal':l>=16?'Heal':'Lesser Heal'}
function rotFor(l,W){const a=[];
 a.push('Buffs: <b>Power Word: Fortitude</b>'+(l>=12?' + <b>Inner Fire</b>':'')+' <span class="src">'+WN[W]+'</span>');
 if(l>=6)a.push('<b>Power Word: Shield</b> before the pull');
 if(W==='disc'){
  if(l>=20)a.push('<b>Holy Fire</b> to open');
  if(l>=4)a.push('<b>Shadow Word: Pain</b>'+(l>=17?' (Power in Light boosts Smite on it)':''));
  a.push('<b>Smite</b>, then finish with the wand');
  if(l>=38)a.push('<b>Penance</b> on CD: damage, or a heal on yourself');
  a.push('Heals: Renew · '+healAt(l)+(l>=30?' · Inner Focus for a free big heal':''));
 }else{
  if(l>=42)a.push('<b>Shadowform</b> on (cancel it to heal)');
  if(l>=10)a.push('<b>Mind Blast</b> to pull, then on CD');
  if(l>=4)a.push('<b>Shadow Word: Pain</b>');
  if(l>=20)a.push('<b>Devouring Plague</b> on long fights');
  if(l>=27)a.push('<b>Vampiric Embrace</b> on tough fights');
  a.push(l>=42?'<b>Mind Flay</b> filler (replaces the wand)':(l>=22?'Wand the kill (Spirit Tap) · Mind Flay if mana allows':'Wand the kill yourself (Spirit Tap needs the killing blow)'));
  a.push('Low HP: Renew · '+healAt(l)+(l>=42?' (out of Shadowform)':''));
 }
 if(l>=14)a.push('Bad pull: Psychic Scream (Top 4) · Fade (Top 5) in groups');
 return `<ol>${a.map(x=>'<li>'+x+'</li>').join('')}</ol><span class="src">WoW Forever DB / Wowhead Forever</span>`}
function advice(l,W){return W==='disc'?'Disc alt: shield, Holy Fire, Pain, Smite and the wand; Penance from 38 in the WoW Forever DB order.':(l<42?'Shadow: Pain, Mind Blast and the wand until Shadowform at 42.':'Shadow: Shadowform halves Shadow spell costs; Mind Flay replaces the wand.')}
const SH={'Power Word: Shield':'PW: Shield','Shadow Word: Pain':'SW: Pain','Shadow Word: Death':'SW: Death','Power Word: Fortitude':'PW: Fort.','Devouring Plague':'Devour. Plague','Vampiric Embrace':'Vamp. Embrace','Psychic Scream':'Psychic Scream','Confounding Flash':'Conf. Flash','Contingency Plan':'Conting. Plan','Shadow Protection':'Shadow Prot.','Shackle Undead':'Shackle','Abolish Disease':'Abolish Dis.','Cure Disease':'Cure Disease','Resurrection':'Resur-rection','Hearthstone':'Hearth-stone','Shadowform':'Shadow-form','Lesser Heal':'Lesser Heal','Greater Heal':'Greater Heal','Dispel Magic':'Dispel'};
function wfix(c,l,W){if(W==='disc'){if(c.mid[4]&&c.mid[4].n==='Mind Flay')c.mid[4]={n:'Smite',u:0};
 if(c.mid[5]&&c.mid[5].n==='Devouring Plague')c.mid[5]={n:'Holy Fire',u:0};
 c.mid[6]=l>=38?{n:'Penance',u:1}:null;c.aur[0]=l>=47?{n:'Power Infusion',u:1}:(l>=30?{n:'Inner Focus',u:1}:null);c.aur[4]=null}return c}
function macroUpd(l){const n=healAt(l);const t=document.querySelector('#macroTxt');if(t)t.textContent='#showtooltip '+n+'\n/cancelaura Shadowform\n/cast '+n;const ic=document.querySelector('#macroIc');if(ic)ic.src='icons/spells/'+SPELLS[n].i+'.jpg'}
window.K={prefix:'pri',modeKey:'spec',modes:['shadow','disc'],rotFor,advice,SH,wfix,
 barLab:{top:['Top','click · heals and escapes'],mid:['Middle','keys 1-7 · pressed constantly'],bot:['Bottom','buffs · out of combat'],aur:['Utility','form, racial spells, cures']},
 iconAlias:null,label:null,macroUpd,
 wnote:{shadow:'Shadow main: a wand with the highest damage per second, plus a spell power staff (WoW Forever DB).',disc:'Disc alt: healing power and Intellect; healing gear adds a third of its value as spell damage (WoW Forever DB).'}};
})();
