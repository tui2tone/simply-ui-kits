# Match Height Element
$ ->
  $('.equal-height-item').matchHeight({
    target: $('.equal-height-container')
  })

  $('code').each (i, block) ->
    hljs.highlightBlock block
    return

  $('.full-width-bg').each (i, block) ->
    setTimeout ->
      position = $(block).offset()
      height = $(block).height();
      bg_color = $(block).attr("bg-color")
      $(block).prepend("<div class='bg-block' style='background-color: " + bg_color + "'></div>")
      bg_block = $(block).find(".bg-block")
      bg_block.css({ top: position.top, height: height })
    , 1000