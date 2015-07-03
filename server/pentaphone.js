exports.build = function(launchpad) {
  enableStopButton(launchpad);
  enableColumnLighting(launchpad);
  setupGrid(launchpad);
};

exports.keydown = function(lp, name) {
  lightColumn(lp, keyByName(name).x);
};

exports.keyup = function(lp, name) {
  darkenColumn(lp, keyByName(name).x);
};

exports.echoActions = function(lp, socket) {
  lp.on("press", function(btn) {
    if (isKey(btn)) {
      socket.emit("keydown", keyByCoord(btn.x, btn.y).name);
    }
  });

  lp.on("release", function(btn) {
    if (isKey(btn)) {
      socket.emit("keyup", keyByCoord(btn.x, btn.y).name);
    }
  });
}

function enableStopButton(lp) {
  lp.on("press", function(btn) {
    if (isStopButton(btn)) {
      lp.clear();
    }
  });
}

function isStopButton(btn) {
  return btn.x === 0 && btn.y === 0;
}

function enableColumnLighting(lp) {
  lp.on("press", function(btn) {
    if (isKey(btn)) {
      lightColumn(lp, btn.x);
    }
  });

  lp.on("release", function(btn) {
    if (isKey(btn)) {
      darkenColumn(lp, btn.x);
    }
  });
}

function isKey(btn) {
  return !! keyByCoord(btn.x, btn.y);
}

function lightColumn(lp, x) {
  column(x, activeGrid(lp)).forEach(function(color, y) {
    lp.getButton(x,y).light(color);
  });
}

function darkenColumn(lp, x) {
  column(x, inactiveGrid(lp)).forEach(function(color, y) {
    lp.getButton(x,y).light(color);
  });
}

function column(x, grid) {
  return grid.map(function(row) { return row[x]; });
}

function setupGrid(lp) {
  paint(lp, activeGrid(lp));
  setTimeout(function() {
    paint(lp, inactiveGrid(lp));
  }, 2000);
}

function paint(lp, grid) {
  grid.forEach(function(row, y) {
    row.forEach(function(color, x) {
      lp.getButton(x,y).light(color);
    });
  });
}

function activeGrid(lp) {
  var colors = colorOptions(lp);
  var gm = colors.gm;
  var gh = colors.gh;
  var rm = colors.rm;
  var rh = colors.rh;
  var yh = colors.yh;

  return [
    [ gm, gm, gm, rm, rm, rm, rm, rm ],
    [ gm, gm, gm, rm, rm, rm, rm, rm ],
    [ gh, gh, gh, rm, yh, yh, rm, rm ],
    [ gh, gh, gh, rm, rh, rh, rh, rh ],
    [ gm, gm, gm, rh, rm, rm, rm, rm ],
    [ gm, gm, gm, rm, rm, rm, rm, rm ],
    [ gm, gm, gm, rm, rm, rm, rm, rm ],
    [ gm, gm, gm, rm, rm, rm, rm, rm ]
  ];
}

function inactiveGrid(lp) {
  var colors = colorOptions(lp);
  var keyColors = [ colors.gh, colors.rh, colors.yh ];
  var off = colors.off;
  return activeGrid(lp).map(function(row) {
    return row.map(function(clr) {
      return keyColors.indexOf(clr) >= 0 ? clr : off;
    });
  });
}

function colorOptions(lp) {
  return {
    off: lp.colors.off,
    gh:  lp.colors.green.high,
    gm:  lp.colors.green.medium,
    gl:  lp.colors.green.low,
    rh:  lp.colors.red.high,
    rm:  lp.colors.red.medium,
    rl:  lp.colors.red.low,
    yh:  lp.colors.yellow.high,
    ym:  lp.colors.yellow.medium,
    yl:  lp.colors.yellow.low
  }
}

function keyByName(name) {
  return keys().filter(function(key) { return key.name === name })[0];
}

function keyByCoord(x,y) {
  return keys().filter(function(key) { return key.x === x && key.y === y })[0];
}

function keys() {
  return [
    { name: 'vi',    x: 0, y: 2 },
    { name: 'ii',    x: 1, y: 2 },
    { name: 'iii',   x: 2, y: 2 },
    { name: 'organ', x: 4, y: 2 },
    { name: '8bit',  x: 5, y: 2 },
    { name: 'I',     x: 0, y: 3 },
    { name: 'IV',    x: 1, y: 3 },
    { name: 'V',     x: 2, y: 3 },
    { name: '1',     x: 3, y: 4 },
    { name: '2',     x: 4, y: 3 },
    { name: '3',     x: 5, y: 3 },
    { name: '5',     x: 6, y: 3 },
    { name: '6',     x: 7, y: 3 }
  ];
}
