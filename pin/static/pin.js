// Generated by CoffeeScript 1.4.0
(function() {
  var i, span, _i;

  for (i = _i = 1; _i <= 5; i = ++_i) {
    span = $('<span/>').addClass('rating').attr('data-rating', i).html('<i class="fa fa-star"></i>');
    span.hover((function() {
      var rating, _j, _results;
      rating = $(this).attr('data-rating');
      _results = [];
      for (i = _j = 0; 0 <= rating ? _j <= rating : _j >= rating; i = 0 <= rating ? ++_j : --_j) {
        _results.push($('.rating').each(function() {
          $(this).removeClass('selected');
          if (parseInt($(this).attr('data-rating')) <= i) {
            return $(this).addClass('selected');
          }
        }));
      }
      return _results;
    }), (function() {
      return $('.rating').removeClass('selected');
    }));
    span.click(function() {
      var rating;
      rating = $(this).attr('data-rating');
      return $.getJSON('/rate/' + window.pinId + '/' + rating, function(data) {
        if (data.error != null) {
          alert(data.error);
          return;
        }
        if (!(data.rating != null)) {
          alert('rating not given');
          return;
        }
        $('#rating').text(data.rating + '/5');
        return $('#ratings').empty();
      });
    });
    $('#ratings').append(span);
  }

}).call(this);