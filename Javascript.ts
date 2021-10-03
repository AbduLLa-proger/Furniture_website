const chevronDown = (document.querySelectorAll('#chevron-down') as NodeListOf<HTMLStyleElement>);
const burger = (document.querySelectorAll('.burger') as NodeListOf<HTMLStyleElement>);
const burgerStyle = (document.querySelectorAll('.burger-style') as NodeListOf<HTMLElement>);
const headerText = (document.querySelectorAll('.header-text') as NodeListOf<HTMLStyleElement>)

const barsStyle = (document.querySelectorAll('.bars-style') as NodeListOf<HTMLDivElement>);
const barsText = (document.querySelectorAll('.bars-text') as NodeListOf<HTMLStyleElement>);
const chevronRight = (document.querySelectorAll('#chevron-right') as NodeListOf<HTMLStyleElement>);
const barsBurger = (document.querySelectorAll('.bars-burger') as NodeListOf<HTMLStyleElement>);
const bars = (document.querySelector('.bars') as HTMLStyleElement);
const faBars = (document.querySelector('.fa-bars') as HTMLStyleElement);

let burgerId: number = -1;
let barsId: number = -1;

let width = window.innerWidth;

window.addEventListener('resize', () => { if(window.innerWidth > 500) bars?.classList?.remove('bars-show');});


faBars.addEventListener('click', () => {
  if(window.innerWidth <= 500) {
    if(bars?.classList?.contains('bars-show')) bars?.classList?.remove('bars-show');
    else bars?.classList?.add('bars-show');
  }
  
})

burgerStyle.forEach((items: Node) => {
  items.addEventListener('click', (item: Event) => {
    const dataset = (item.target as HTMLStyleElement);
    const id = (dataset.dataset["id"] as string);
    if (burgerId == parseInt(id)) {
      burger[burgerId]?.classList?.add('burger-hide');
      chevronDown[burgerId]?.classList?.remove('burger-transform');
      chevronDown[burgerId]?.classList?.remove('header-chevron_down');
      headerText[burgerId + 1]?.classList?.remove('header-focus_text');
      burgerId = -1;
    }
    else {
      if(burgerId >= 0) {
        burger[burgerId]?.classList?.add('burger-hide');
        chevronDown[burgerId]?.classList?.remove('burger-transform');
        chevronDown[burgerId]?.classList?.remove('header-chevron_down');
        headerText[burgerId + 1]?.classList?.remove('header-focus_text');
      } 
      burger[parseInt(id)]?.classList?.remove('burger-hide');
      headerText[parseInt(id) + 1]?.classList?.add('header-focus_text');
      chevronDown[parseInt(id)]?.classList?.add('header-chevron_down');
      chevronDown[parseInt(id)]?.classList?.add('burger-transform');
      burgerId = parseInt(id);
      
    }
  });
});

barsStyle.forEach((items: Node) => {
  items.addEventListener('click', (item: Event) => {
    const dataset = (item.target as HTMLStyleElement);
    const id = (dataset.dataset["id"] as string);
    barsBurger[parseInt(id)].style.opacity = '0';
    
    if (barsId == parseInt(id)) {
      barsBurger[barsId].style.opacity = '1';
      var hideContent = setInterval(hide, 30, barsId);
      if(barsId == 1) barsStyle[parseInt(id)]?.parentElement?.classList?.remove('bars_move1');
      else barsStyle[parseInt(id)]?.parentElement?.classList?.remove('bars_move');
      chevronRight[parseInt(id)]?.classList?.remove('bars_transform');
      barsId = -1;
    }
    else {
      if(barsId >= 0) {
        barsBurger[barsId].style.opacity = '1';
        var hideContent = setInterval(hide, 30, barsId);
        if(barsId == 1) barsStyle[1]?.parentElement?.classList?.remove('bars_move1');
        else barsStyle[barsId]?.parentElement?.classList?.remove('bars_move');
        chevronRight[barsId]?.classList?.remove('bars_transform');
      }
      barsId = parseInt(id);
      if(parseInt(id) == 1) barsStyle[1]?.parentElement?.classList?.add('bars_move1');
      else barsStyle[parseInt(id)]?.parentElement?.classList?.add('bars_move');
      chevronRight[parseInt(id)]?.classList?.add('bars_transform');
      barsBurger[parseInt(id)].style.opacity = '0';
      var displayContent = setInterval(display, 30, barsId);
    }
    function display(id: number) {
      let opacity: number = parseFloat(barsBurger[id].style.opacity);
      opacity += 0.1; barsBurger[id].style.opacity = opacity.toString();
      if(opacity >= 1) clearInterval(displayContent); 
    }
    function hide(id: number) {
      let opacity: number = parseFloat(barsBurger[id].style.opacity);
      opacity -= 0.1; barsBurger[id].style.opacity = opacity.toString();
      if(opacity <= 0) clearInterval(hideContent);
    }
  });
})