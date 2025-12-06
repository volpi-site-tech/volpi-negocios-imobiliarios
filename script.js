
// Load data.json and populate featured and all properties
fetch('data.json').then(r=>r.json()).then(function(data){
  var featured = data.featured || [];
  var props = data.properties || [];
  var featuredGrid = document.getElementById('featured-grid');
  var allGrid = document.getElementById('all-grid');
  function makeCard(p){
    var a = document.createElement('a');
    a.className = 'card';
    a.href = 'imoveis/' + p.slug + '/';
    var img = document.createElement('img');
    img.src = p.images && p.images[0] ? p.images[0].replace('../','') : 'images/gallery_1.jpg';
    a.appendChild(img);
    var h3 = document.createElement('h3');
    h3.textContent = p.name;
    a.appendChild(h3);
    var p1 = document.createElement('p');
    p1.textContent = p.location + ' • ' + p.metragem;
    a.appendChild(p1);
    var btn = document.createElement('div');
    btn.className = 'btn-card';
    btn.textContent = 'Ver detalhes';
    a.appendChild(btn);
    return a;
  }
  featured.forEach(function(slug){
    var p = props.find(x=>x.slug===slug);
    if(p) featuredGrid.appendChild(makeCard(p));
  });
  props.forEach(function(p){
    allGrid.appendChild(makeCard(p));
  });
});
