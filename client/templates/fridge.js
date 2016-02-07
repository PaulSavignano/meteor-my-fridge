Template.fridge.helpers({
  products: function() {
    return Products.find({
      place: 'fridge'
    });
  }
});


Template.fridge.onRendered(function() {
  var templateInstance = this;
  templateInstance.$('#fridge').droppable({
    drop: function(event, ui) {
      var query = {_id: ui.draggable.data('id')};
      var changes = {$set: {place: 'fridge'}};
      Products.update(query, changes);
    }
  });
});
