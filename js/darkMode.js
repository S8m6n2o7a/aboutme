$("#toggleDark").click( () => {
  if ($(".moon").attr("src") === "images/moon-dark.svg") {
    $(".moon").attr("src", "images/moon-light.svg");
  } else {
    $(".moon").attr("src", "images/moon-dark.svg");
  }
  const elements = [
    { "el": "body", "class": "darkModeBody" },
    { "el": "#root", "class": "bg-dark" },
    { "el": ".container-fluid", "class": "darkModeContainerFluid" },
    { "el": ".icon", "class": "darkModeIcon" },
    { "el": "a", "class": "btn-outline-dark", "classNew": "btn-outline-light" },
  ]
  elements.forEach( (el) => {
    if (el.classNew) {
      if ($(el.el).hasClass(el.class)) {
        $(el.el).removeClass(el.class);
        $(el.el).addClass(el.classNew);
      } else {
        $(el.el).removeClass(el.classNew);
        $(el.el).addClass(el.class);
      }
    } else {
      $(el.el).hasClass(el.class) ? $(el.el).removeClass(el.class) : $(el.el).addClass(el.class);
    }
  })
});