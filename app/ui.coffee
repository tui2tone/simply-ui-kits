# Match Height Element
$ ->
  $('.eqh-item').matchHeight({
    byRow: true
  })

  $('code').each (i, block) ->
    hljs.highlightBlock block
    return

  full_width_func = () ->
    $('.full-width-bg').each (i, block) ->
      setTimeout ->
        position = $(block).offset()
        height = $(block).height();
        bg_color = $(block).attr("bg-color")
        $(block).prepend("<div class='bg-block' style='background-color: " + bg_color + "'></div>")
        bg_block = $(block).find(".bg-block")
        bg_block.css({ top: position.top, height: height })
      , 200


  full_width_func()

  $(window).resize ->
    full_width_func()

  datatable = $('.datatable').DataTable({
    "dom": '<"top"fl<"clear">>rt<"bottom"ip<"clear">>',
    "oLanguage": {
      "sSearch": "",
      "sLengthMenu": "_MENU_"
    },
    "initComplete": (settings, json) -> 
      $(".dataTables_wrapper select").select2({
        minimumResultsForSearch: Infinity
      });
    });

  datatable.on 'search.dt, length.dt', ->
     full_width_func()

  $('div.dataTables_filter input').attr('placeholder', 'Search...');
  $( datatable.table().container() ).addClass( 'success' );

  $(".mega-dropdown-menu").click (e) ->
    e.stopPropagation()

  $('.navbar-fixed-top .navbar-collapse').on 'hidden.bs.collapse', ->
    $('body').removeClass('navbar-collapse-open')

  $('.navbar-fixed-top .navbar-collapse').on 'shown.bs.collapse', ->
    $('body').addClass('navbar-collapse-open')