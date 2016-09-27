exports.captain = (info) => {
  const hiddenXNumber = 33;
  info.x += hiddenXNumber;

  return info;
}

exports.firstMate = (info) => {
  const hiddenYNumber = -51;
  info.y += hiddenYNumber;

  return info;
}

exports.deckSwab = (overrideStartingPoint) => {
  const startingPoint = overrideStartingPoint;
  return this.firstMate(this.captain(startingPoint));

}
