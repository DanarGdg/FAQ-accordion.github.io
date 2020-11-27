var list = document.querySelectorAll('li');


list.forEach((i) => {
    i.addEventListener('click', () => {
        i.classList.toggle('active');
    });
});
/*function list(i){
  i.addEventListener('click' , function(){
    i.classList.toggle('active');
  });
};  */
