const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
	  return;
    }
    entry.target.classList.remove('is-visible');
  });
});
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-trans');
	  return;
    }
    entry.target.classList.remove('is-trans');
  });
});


observer.observe(document.querySelector('.image'))
setInterval(
  ()=>{
    if(window.innerWidth>900){
      observer.observe(document.querySelector('.level'))
      observer.observe(document.querySelector('.teat'))
      observer.observe(document.querySelector('.green'))
      observer.observe(document.querySelector('.pink'))
      observer.observe(document.querySelector('.blue'))
    }else{
      observer.unobserve(document.querySelector('.level'))
      observer.unobserve(document.querySelector('.teat'))
      observer.unobserve(document.querySelector('.green'))
      observer.unobserve(document.querySelector('.pink'))
      observer.unobserve(document.querySelector('.blue'))
    }
  },4
)

observer2.observe(document.querySelector('h1.nico'))


document.querySelector('.burger').addEventListener(('click'),(e)=>{
  document.querySelector('.burger').classList.toggle('close')
  document.querySelector('.burger').classList.toggle('open')
  document.querySelector('.link').classList.toggle('openli')
})