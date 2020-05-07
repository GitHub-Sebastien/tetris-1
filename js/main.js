// import L from './L';

// class Bloc {
//   color;
//   constructor() {
//     this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
//   }
// }

// class L extends Bloc {
//   cells = [[true,false,false],
//            [true,true,true]];
// }

// class T_90 extends Bloc {
//   cells =  [
//     [true, false],
//     [true, true],
//     [true, false],
//   ]
// }

// class Z extends Bloc {
//   cells =  [
//     [true, true, false],
//     [false, true, true],
//   ]
// };

// L_shape = new L ;
// T_90_shape = new T_90;
// Z_shape = new Z ;
const BLOCS_EASIER = {
  1:{
    id: 7,
    color: `white`,
    cells: [[[true,true,true,true,true,true,true,true,true,true,true,true]]]
  }
}

const BLOCS_EASY = {
  1:{ 
    id: 1,
    color : `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells : [
      [
         [true,true,true,true,true,true],
         [true,true,true,true,true,true],
         [true,true,true,true,true,true]
      ],
      [
        [true,true,true],
        [true,true,true],
        [true,true,true],
        [true,true,true],
        [true,true,true],
        [true,true,true],
      ]     
    ]
  },
  2: {
    id:2,
    color : `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true,true],
        [true,true,true],
        [true,true,true],

      ]
    ]
  },
  3: {
    id:3,
    color : `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells: [
      [
        [true,true,true,false,false,false],
        [true,true,true,false,false,false],
        [true,true,true,false,false,false],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true]
      ],
     [
      [true,true,true,true,true,true],
      [true,true,true,true,true,true],
      [true,true,true,true,true,true],
      [true,true,true,false,false,false],
      [true,true,true,false,false,false],
      [true,true,true,false,false,false]
    ],
     [
      [true,true,true,true,true,true],
      [true,true,true,true,true,true],
      [true,true,true,true,true,true],
      [false,false,false,true,true,true],
      [false,false,false,true,true,true],
      [false,false,false,true,true,true]
    ],
    [
      [false,false,false,true,true,true],
      [false,false,false,true,true,true],
      [false,false,false,true,true,true],
      [true,true,true,true,true,true],
      [true,true,true,true,true,true],
      [true,true,true,true,true,true]
    ]
    ]
  }
}




const BLOCS = {

  1: { //  T
    id: 1 ,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true,true],
        [false,true,false]
      ],
     [
      [true,false],
      [true,true],
      [true,false]
    ],
     [
      [false,true,false],
      [true,true,true]
    ],
    [
      [false,true],
      [true,true],
      [false,true]
    ]
        ]
    },
  2: {   //  L
    id: 2,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,false,false],
        [true,true,true]
      ],
     [
      [true,true],
      [true,false],
      [true,false]
    ],
     [
      [true,true,true],
      [false,false,true]
    ],
    [
      [false,true],
      [false,true],
      [true,true]
    ]
        ]
  },
  3: { //  Z
    id: 3,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true,false],
        [false,true,true]
      ],
      [
        [false,true],
        [true,true],
        [true,false]
      ],
    ]
  },
  4:{  //  I
    id: 4,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true,true,true]
      ],
      [
        [true],
        [true],
        [true],
        [true]
      ],
    ]
  },
  5: {   //  O
    id: 5,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true],
        [true,true]
      ]
    ]
  },
  6: { //  S
    id: 6,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [false,true,true],
        [true,true,false]
      ],
      [
        [true,false],
        [true,true],
        [false,true]
      ],
    ]
  },
}

const BLOCS_HARD = {

  1: { //  C
    id: 1 ,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true,true],
        [true,false,true]
      ],
     [
      [true,true],
      [true,false],
      [true,true]
    ],
     [
      [true,false,true],
      [true,true,true]
    ],
    [
      [true,true],
      [false,true],
      [true,true]
    ]
        ]
    },
  2: {   //  ^
    id: 2,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,false,true],
        [false,true,false]
      ],
     [
      [false,true],
      [true,false],
      [false,true]
    ],
     [
      [false,true,false],
      [true,false,true]
    ],
    [
      [true,false],
      [false,true],
      [true,false]
    ]
        ]
  },
  3: { //  Z
    id: 3,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,false,true],
        [true,false,true]
      ],
      [
        [true,true],
        [false,false],
        [true,true]
      ],
    ]
  },
  4:{  //  I
    id: 4,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true]
      ],
      [
        [true],
        [true],
      ],
    ]
  },
  5: {   //  O
    id: 5,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [true,true],
        [true,true]
      ]
    ]
  },
  6: { //  S
    id: 6,
    color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    cells:[
      [
        [false,true],
        [true,false]
      ],
      [
        [true,false],
        [false,true],
      ],
    ]
  },
}

const GRID = {};
initializeModel(GRID,'normal');
initializeView(GRID);
initializeController(GRID);
