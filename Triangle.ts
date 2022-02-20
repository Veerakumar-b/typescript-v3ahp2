export class Dot {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Line {
  start: Dot;
  end: Dot;

  constructor(start: Dot, end: Dot) {
    this.start = start;
    this.end = end;
  }
}

// class Triangle{
//   dot1 : Dot (start : Dot,end : Dot);
//   dot2 : Dot (start : Dot,end : Dot);
//   dot3 : Dot (start : Dot,end : Dot);

//   line1 : new Line (dot1,dot2);
//   line2 : new Line (dot2,dot3);
//   line3 : new Line (dot3,dot1);
// }
