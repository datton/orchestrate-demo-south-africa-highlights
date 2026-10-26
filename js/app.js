// Full-Stack: site behaviour
(function () {
  var wrap = document.getElementById('region-buttons');
  if (!wrap) return;
  var out = document.getElementById('region-summary');
  var regions = {
    'Western Cape': 'Cape Town, Table Mountain, the winelands and the Garden Route.',
    'Mpumalanga and Limpopo': 'Kruger National Park and the surrounding game reserves.',
    'KwaZulu-Natal': 'Durban, the Indian Ocean coast and the Drakensberg mountains.',
    'Gauteng': 'Johannesburg, Pretoria and Soweto, with a focus on history and city life.'
  };
  Object.keys(regions).forEach(function (name) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = name;
    b.addEventListener('click', function () { out.textContent = name + ': ' + regions[name]; });
    wrap.appendChild(b);
  });
})();
