import _ from 'lodash';


function composant(){
  let elem = document.createElement('div');

  elem.innerHTML = _.join(['hello','webpack'],' ');

  return elem;

}


document.body.appendChild(composant());
