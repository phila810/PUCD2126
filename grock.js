var buttonMap = {
  "kingsmen": "#container1",
  "velvets": "#container2",
  "beatles": "#container3"
};

// var pageHeight = $(window).height();
// console.log(pageHeight);
//
// $('.spacer').forEach(function(){
//   $(this).css("height",pageHeight);
//
// });


function onNavigationButtonClick(e) {
  var allTargets = Object.values(buttonMap);
  // ['.container1', '.container2']
  var targetEl = e.currentTarget;
  allTargets.forEach(function(val) {
    console.log($(val))
    $(val).hide();
  })

  $(buttonMap[targetEl.id]).show();
}

(function() {

  $(document).ready(function(){
    var allNavElements = Object.keys(buttonMap);
    allNavElements.forEach(function(val) {
      $("#" + val).click(onNavigationButtonClick);
    })
  });

})();
