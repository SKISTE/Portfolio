let page = document.querySelector('html')
document.addEventListener('scroll',()=>{
    if(page.scrollTop>=400){
        document.querySelector('.secondmaintext').style.animation = 'showsecondtextarea 1s cubic-bezier(0.42, 0, 0.19, 2) forwards'
        document.querySelector('.secondsubtext').style.animation = 'showsecondtextarea 1s cubic-bezier(0.42, 0, 0.19, 2) forwards .3s'
    }
  })