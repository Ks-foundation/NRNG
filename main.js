// nanosecond_rng.js

class NanoSecondRNG {
  constructor(seed) {
    this.seed = seed;
  }

  // XORShift 알고리즘을 사용한 랜덤 숫자 생성
  random() {
    this.seed ^= this.seed << 13;
    this.seed ^= this.seed >> 17;
    this.seed ^= this.seed << 5;
    return (this.seed >>> 0) / Math.pow(2, 32);
  }

  // 주어진 범위 내의 난수 생성
  randomInRange(min, max) {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }

  // 난수 시드 설정
  setSeed(seed) {
    this.seed = seed;
  }
}

// 모듈 내보내기 (Node.js 환경)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = NanoSecondRNG;
}

// 브라우저에서 사용할 수 있도록 전역 객체로 할당 (브라우저 환경)
if (typeof window !== 'undefined') {
  window.NanoSecondRNG = NanoSecondRNG;
}
