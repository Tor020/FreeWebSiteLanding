var main = document.querySelector('section.main'); 
var footer = document.querySelector('#footer');
var margins = window.getComputedStyle(main).marginLeft;



console.log(footer.style.cssText);
console.log(footer);


Object.assign(footer.style,{paddingLeft:margins,paddingRight:margins});




// footer.style.paddingLeft = margins.marginLeft;

var paddingright = main.style.marginRight;

