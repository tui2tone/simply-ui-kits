$ ->
  $('.btn-toggle-sidebar').bind 'click', ->
    $('.app-container').toggleClass 'app-sidebar-collapse'

  $('li.dropdown > a').bind 'click', (e) ->
    e.preventDefault()
    next = $(this).next()
    if next.hasClass('dropdown-menu')
      next.toggleClass('open')
      if next.height() == 0
        autoHeight = next.css('height', 'auto').height()
        next.height(0)
        next.stop().animate({ height: autoHeight }, 0);
      else
        next.css('height', 0)
