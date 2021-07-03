class Massage {
  constructor() {}
  send(msg = false, type = 'info', animationTime = 4){
    type = type.match(/error|warn|success|info/i) ? type : 'info';
    animationTime = Number.isInteger(animationTime) ? animationTime : 4 ;
    
    if (!msg) throw new Error('No massage has been set!');
      let id = Math.random() * (9999 - 1111) + 1111;
      id = 'id_' + Math.floor(id);

      /* Creating section element */
      let elSection = document.createElement('section');
      elSection.classList.add('msg', type);
      elSection.setAttribute('id', id);
      elSection.setAttribute('style', `--animation-time:${animationTime};`);
      elSection.innerHTML = msg;

      /* Adding section element to the bottom of body */
      document.body.appendChild(elSection);
      let timeToDelete = (animationTime * 1000) + 1500;
      window.setTimeout(function() {
        document.getElementById(id).remove();
      }, timeToDelete);
  }
}