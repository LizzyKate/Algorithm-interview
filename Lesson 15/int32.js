function int32ToIp(int32) {
  //...
  const octets = [];

  for (let i = 3; i >= 0; i--) {
    octets[i] = int32 & 255;
    int32 >>= 8;
  }

  return octets.join(".");
}
