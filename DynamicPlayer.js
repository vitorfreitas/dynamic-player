class DynamicPlayer {
  constructor(multimedia) {
    this.multimedia = multimedia;
  }

  init() {
    window.addEventListener('scroll', () => {
      const element = document.querySelector(this.multimedia.selector);

      if (this._shouldPlayMultimedia()) {
        element.play();
        return;
      }

      element.pause();
    });
  }

  _getCurrentScrollPosition() {
    return {
      x: window.scrollX,
      y: window.scrollY
    };
  }

  _shouldPlayMultimedia() {
    const { x, y } = this._getCurrentScrollPosition();
    return (
      y >= this.multimedia.playOnCoords.y && x >= this.multimedia.playOnCoords.x
    );
  }
}
