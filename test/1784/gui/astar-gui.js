let gui, options;

function initGUI(params) {
  if (gui) gui.destroy();
  gui = new dat.GUI();
  gui.width = 380;
  options = params;

  const polyonId = 'gridXY';
  const {gridXY, drawPolygon, clearPolygon, drawPolyline, astarGraph, runSearch, showRoute} = options;

  options.showGrids = () => {
    drawPolygon(polyonId, gridXY.flat());
  };
  options.hideGrids = () => {
    clearPolygon(polyonId);
  };
  gui.add(options, 'showGrids');
  gui.add(options, 'hideGrids');

  options['find-[013,127]-[112,168]'] = () => {
    showRoute(runSearch(astarGraph, [13, 127], [112, 168], {closest: true, diagonal: false}));
  };
  options['find-[013,127]-[130,091]'] = () => {
    showRoute(runSearch(astarGraph, [13, 127], [130, 91], {closest: true, diagonal: false}));
  };
  options['find-[062,009]-[079,159]'] = () => {
    showRoute(runSearch(astarGraph, [62, 9], [79, 159], {closest: true, diagonal: false}));
  };
  options['find-[118,008]-[086,051]'] = () => {
    showRoute(runSearch(astarGraph, [118, 8], [86, 51], {closest: true, diagonal: false}));
  };
  options['find-[113,159]-[013,008]'] = () => {
    showRoute(runSearch(astarGraph, [113, 159], [13, 8], {closest: true, diagonal: false}));
  };
  options['find-[024,156]-[081,101]'] = () => {
    showRoute(runSearch(astarGraph, [24, 156], [81, 101], {closest: true, diagonal: false}));
  };
  options['find-[024,156]-[081,101]'] = () => {
    showRoute(runSearch(astarGraph, [24, 156], [81, 101], {closest: true, diagonal: false}));
  };
  options['find-[081,088]-[136,127]'] = () => {
    showRoute(runSearch(astarGraph, [81, 88], [136, 127], {closest: true, diagonal: false}));
  };
  options['find-[041,094]-[121,036]'] = () => {
    showRoute(runSearch(astarGraph, [41, 94], [121, 36], {closest: true, diagonal: false}));
  };

  Object.keys(options).map((key) => {
    if (key.indexOf('find-') === -1) return;
    gui.add(options, key);
  });
}



