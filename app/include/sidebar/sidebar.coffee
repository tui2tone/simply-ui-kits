$ ->
  $('.btn-toggle-sidebar').bind 'click', ->
    $('.app-container').toggleClass 'app-sidebar-collapse'

  $('.sidebar-toggle').bind 'click', (e) ->
    e.preventDefault()
    next = $(this).next()
    if next.hasClass('sidebar-sub-menu')
      next.toggleClass('dropdown')
      if next.height() == 0
        autoHeight = next.css('height', 'auto').height()
        next.height(0)
        next.stop().animate({ height: autoHeight }, 0);
      else
        next.css('height', 0)
