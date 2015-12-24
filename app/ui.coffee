# Match Height Element
$ ->
  $('.equal-height-item').matchHeight({
    target: $('.equal-height-container')
  })

  $('code').each (i, block) ->
    hljs.highlightBlock block
    return

  full_width_func = (block) ->
    position = $(block).offset()
    height = $(block).height();
    bg_color = $(block).attr("bg-color")
    $(block).prepend("<div class='bg-block' style='background-color: " + bg_color + "'></div>")
    bg_block = $(block).find(".bg-block")
    bg_block.css({ top: position.top, height: height })


  $('.full-width-bg').each (i, block) ->
    setTimeout ->
      full_width_func(block)
    , 200

  $(window).resize ->
    $('.full-width-bg').each (i, block) ->
      setTimeout ->
        full_width_func(block)
      , 200

  $('.datatable').DataTable({
    "dom": '<"top"fl<"clear">>rt<"bottom"ip<"clear">>',
    "oLanguage": {
      "sSearch": "",
      "sLengthMenu": "_MENU_"
    },
    "initComplete": (settings, json) -> 
      $(".dataTables_wrapper select").select2({
        containerCss: "datatable-select",
        minimumResultsForSearch: Infinity
      });
    });

  $('div.dataTables_filter input').attr('placeholder', 'Search...');