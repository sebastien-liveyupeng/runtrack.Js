document.getElementById('button').addEventListener('click', function(){
 fetch('./expression.txt')
 .then(reponse => reponse.text())
  .then(data => {
    document.getElementById('text').textContent=data;
  })
  .catch(error => console.error('erreur'));
  
});