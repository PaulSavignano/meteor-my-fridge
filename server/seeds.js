Meteor.startup(function() {
  Products.remove({});

  Products.insert({
    name: 'Milk',
    img: '/milk.png',
    place: 'fridge'
  });

  Products.insert({
    name: 'Bread',
    img: '/bread.png',
    place: 'supermarket'
  });
});
