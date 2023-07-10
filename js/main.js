
class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {

        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }
  var tabs = new ItcTabs('.tabs');




 
  document.addEventListener( 'click', (e) => {
    const div = document.querySelector( '#tabs');
    const withinBoundaries = e.composedPath().includes(div);
    if(window.innerWidth >= 920){
    if ( ! withinBoundaries ) {
      const elLinkActive = tabs._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = tabs._elTabs.querySelector('.tabs__pane_show');

      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      return;
    }
  }
  })

  let menu = document.querySelector('.menu')
  let burger = document.getElementById('burger')
  let menuTitleAct = document.querySelector('.menu-title-act')
  let tabsPaneAct = document.querySelector('.tabs__pane-act')
  
  menuTitleAct.classList.remove('tabs__btn_active')
  tabsPaneAct.classList.remove('tabs__pane_show')
 
  window.addEventListener('resize',(e)=>{
    if(window.innerWidth >= 920){
      menu.classList.add('desktop')
      menuTitleAct.classList.remove('tabs__btn_active')
      tabsPaneAct.classList.remove('tabs__pane_show')
    }else{
      menu.classList.remove('desktop')
      menuTitleAct.classList.add('tabs__btn_active')
      tabsPaneAct.classList.add('tabs__pane_show')
    }
  })


  let close = document.getElementById('close')
  
  let menuArrow = document.getElementById('arrow-back')
  let menuArrows = document.getElementById('arrows-back')

  let languages = document.getElementById('languages')
  let langusgesLinks = document.getElementById('langusges-links')

  let currency =  document.getElementById('currency')
  let currencyLinks =  document.getElementById('currency-links')


  menuArrow.onclick = function(){
    langusgesLinks.style.display='none';
    
  }
  menuArrows.onclick = function(){
    currencyLinks.style.display='none';
  }
  languages.onclick = function(){
    langusgesLinks.style.display='block';
  }
  currency.onclick = function(){
    currencyLinks.style.display='block';
  }
  close.onclick = function(){
    menu.style.display='none';
  }
  burger.onclick = function(){
    menu.style.display='block';
  }
