
  const initializeModel = (grid, mode) => {
    grid.cells = [];
    grid.width =  12;
    grid.height =  18;
    grid.bloc = null;
    grid.rot = -1;
    grid.x = -1;
    grid.y = -1;
    grid.score = 0 ;
    grid.difficulty = mode;
    grid.BLOCS = BLOCS;
    grid.SIZE =  grid.difficulty == 'easy' ? 10 : 100;
    set_gamemode(mode,grid);
    initializeGrid(grid);
    get_random_bloc(grid);
    grid.interval = window.setInterval(update, 213, grid);
  }

  const get_random_bloc = (grid) => {
    switch(grid.difficulty){
      case 'easy':
          grid.bloc = BLOCS_EASY[Math.floor(Math.random() * Object.keys(BLOCS_EASY).length) + 1 ];
      break;
      case 'easier' :
          grid.bloc = BLOCS_EASIER[Math.floor(Math.random() * Object.keys(BLOCS_EASIER).length) + 1 ];
      break;
      case 'hard' :
          grid.bloc = BLOCS_HARD[Math.floor(Math.random() * Object.keys(BLOCS_HARD).length) + 1 ]
      break;
      default :
          grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1 ] ;
      break;
    }
    // grid.bloc = grid.difficulty == 'normal' ? BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1 ] : grid.difficulty == 'easy' ? BLOCS_EASY[Math.floor(Math.random() * Object.keys(BLOCS_EASY).length) + 1 ] : BLOCS_EASIER[Math.floor(Math.random() * Object.keys(BLOCS_EASIER).length) + 1 ];
    grid.rot = Math.floor(Math.random() * grid.bloc.cells.length) ;
    grid.x = grid.bloc.id==7 ? 0 : grid.difficulty =='easy' ? grid.width/2   : grid.width / 2 -1;
    grid.y = 0;
  }

  function update(grid){
    // if(!grid.over){
            if(grid.y < grid.height - grid.bloc.cells[grid.rot].length 
        && can_go_there(grid, grid.x, grid.y +1)) grid.y ++ ;
      else if (grid.y == 0){
          window.clearInterval(grid.interval);
          grid.cells = game_over_grid;
          grid.x = -12 ;
        }
      else {
        stockBloc(grid);
        check_full_line(grid);
        get_random_bloc(grid);
      }
    // }  
  }

  function initializeGrid(grid){
    for(i=0; i < grid.height ; i++){
      grid.cells[i] = [];
      for(j = 0 ; j < grid.width; j++) grid.cells[i][j] = 0;
    }
  }

  function stockBloc(grid){
    // grid.cells[grid.y][grid.x] = grid.bloc.id ;
    let cells = grid.bloc.cells[grid.rot];
    for(let i = 0; i < cells.length; i++) {
      for(let j = 0; j < cells[i].length ; j++){
        if(cells[i][j]) grid.cells[grid.y + i][grid.x + j] = grid.bloc.id
      }
    }
  }

  function can_go_there(grid,x ,y ){
    let res = true ;
    const bloc_cells = grid.bloc.cells[grid.rot];
    for(let i = 0; i < bloc_cells.length; i++) {
      for(let j = 0; j < bloc_cells[i].length ; j++){
        if(grid.cells[y + i][x + j] > 0  && bloc_cells[i][j]) res = false ;
      }
    }
    return res ;
  }

  function incRot(grid){
    let next_rot_width = grid.bloc.cells[(grid.rot +1) % grid.bloc.cells.length][0].length;
    let next_rot_height = grid.bloc.cells[(grid.rot +1) % grid.bloc.cells.length].length;
    // NO GO INTO OTHER BLOCS ↴
    if(can_go_there(grid,grid.x + (next_rot_width - grid.bloc.cells[grid.rot][0].length), grid.y)){
      // NO GO OFF SCREEN ON THE RIGHT ↴
      if(next_rot_width + grid.x > grid.width) {
        grid.x = grid.x - (next_rot_width + grid.x - grid.width);
      } // NO GO OFF SCREEN BOTTOM ↴
      if(next_rot_height + grid.y > grid.height){
        grid.y = grid.y - (next_rot_height + grid.y - grid.height);
      }
      grid.rot = (grid.rot +1) % grid.bloc.cells.length;
    }

  }

  function incX(grid){
    let gap = 1;
    if(grid.difficulty =='easy') gap = 2 ;
    if(grid.x < grid.width - grid.bloc.cells[grid.rot][0].length
      && can_go_there(grid, grid.x + gap , grid.y)) grid.x = grid.x + 1;

  }

  function decX(grid){
    let gap = 1;
    if(grid.difficulty =='easy') gap = 2 ;
    if(grid.x > 0
      && can_go_there(grid, grid.x - gap, grid.y )) grid.x = grid.x - 1;
  }

function check_full_line(grid){
  
  for(let i = 0; i < grid.cells.length; i++) {
    let res = true;
    for(let j = 0; j < grid.cells.length; j++) {
      if(grid.cells[i][j] == 0 ) res = false ;
  }
  if(res) {
    delete_line(grid, i);
    grid.score += 10 ;
  }
 }
}

function delete_line(grid, y){
  for(let i = 0 ; i < y ; i++){
      for(let j = 0 ; j < grid.cells[y].length; j++){
    grid.cells[y - i][j] = grid.cells[y - (i+1)][j] ;
    }
  }
  for ( let k = 0 ; k < grid.cells[y].length ; k++){
    grid.cells[0][j];
  }

}

function start(grid,mode){
  window.clearInterval(grid.interval);
  initializeModel(grid, mode);
}

function set_gamemode(mode, grid){
  switch(mode){
      case 'normal':
        grid.BLOCS = BLOCS ;
      break;
      case 'easy' :
        grid.BLOCS = BLOCS_EASY;
      break;
      case 'easier' :
        grid.BLOCS = BLOCS_EASIER;
      break;
      case 'hard' :
        grid.BLOCS = BLOCS_HARD;
      break;
    }
  }

const game_over_grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 2, 2, 2, 3, 0, 3, 4, 4, 4],
  [1, 0, 0, 2, 0, 2, 3, 3, 3, 4, 0, 0],
  [1, 0, 0, 2, 2, 2, 3, 0, 3, 4, 4, 4],
  [1, 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 0],
  [1, 1, 1, 2, 0, 2, 3, 0, 3, 4, 4, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 5, 5, 6, 0, 6, 4, 4, 4, 1, 1, 1],
  [5, 0, 5, 6, 0, 6, 4, 0, 0, 1, 0, 1],
  [5, 0, 5, 6, 0, 6, 4, 4, 4, 1, 1, 0],
  [5, 0, 5, 6, 6, 6, 4, 0, 0, 1, 0, 1],
  [5, 5, 5, 0, 6, 0, 4, 4, 4, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]