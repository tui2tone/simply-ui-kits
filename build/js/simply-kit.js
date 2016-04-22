$(function() {
  var datatable, full_width_func;
  $('.eqh-item').matchHeight({
    byRow: true
  });
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  full_width_func = function() {
    return $('.full-width-bg').each(function(i, block) {
      return setTimeout(function() {
        var bg_block, bg_color, height, position;
        position = $(block).offset();
        height = $(block).height();
        bg_color = $(block).attr("bg-color");
        $(block).prepend("<div class='bg-block' style='background-color: " + bg_color + "'></div>");
        bg_block = $(block).find(".bg-block");
        return bg_block.css({
          top: position.top,
          height: height
        });
      }, 200);
    });
  };
  full_width_func();
  $(window).resize(function() {
    return full_width_func();
  });
  datatable = $('.datatable').DataTable({
    "dom": '<"top"fl<"clear">>rt<"bottom"ip<"clear">>',
    "oLanguage": {
      "sSearch": "",
      "sLengthMenu": "_MENU_"
    },
    "initComplete": function(settings, json) {
      return $(".dataTables_wrapper select").select2({
        minimumResultsForSearch: Infinity
      });
    }
  });
  datatable.on('search.dt, length.dt', function() {
    return full_width_func();
  });
  $('div.dataTables_filter input').attr('placeholder', 'Search...');
  $(datatable.table().container()).addClass('success');
  $(".mega-dropdown-menu").click(function(e) {
    return e.stopPropagation();
  });
  $('.navbar-fixed-top .navbar-collapse').on('hidden.bs.collapse', function() {
    return $('body').removeClass('navbar-collapse-open');
  });
  $('.navbar-fixed-top .navbar-collapse').on('shown.bs.collapse', function() {
    return $('body').addClass('navbar-collapse-open');
  });
  return $.stellar();
});
