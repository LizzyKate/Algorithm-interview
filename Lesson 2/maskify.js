function maskify(txt) {
    if (txt.length > 4) {
      return "#".repeat(txt.length - 4) + txt.slice(-4);
    } else {
      return txt;
    }
  }

  function maskifyTwo(txt) {
    if (txt.length > 4) {
      return "#".repeat(txt.length - 4) + txt.substr(-4);
    } else {
      return txt;
    }
  }