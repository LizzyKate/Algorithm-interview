function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return (
    ("0" + r.toString(16)).slice(-2).toUpperCase() +
    ("0" + g.toString(16)).slice(-2).toUpperCase() +
    ("0" + b.toString(16)).slice(-2).toUpperCase()
  );
}
