var SIZE = 100;

const draw_square = (x, y, ctx, color) => {
    ctx.fillStyle = color ;
    ctx.strokeStyle = 'black';
    ctx.fillRect(x * SIZE, y * SIZE,SIZE, SIZE);
    // ctx.strokeRect(x * SIZE, y * SIZE, SIZE, SIZE);
  }
  
const draw_bloc = (grid, ctx) => {
    const cells = grid.bloc.cells[grid.rot];
    for(let i = 0; i < cells.length; i++) {
      for(let j = 0; j < cells[i].length ; j++){
        if(cells[i][j]) draw_square((grid.x + j), (grid.y + i), ctx, grid.bloc.color);
      }
    }
}

function initializeView(grid){
    const canvas = document.querySelector('canvas');
  
    canvas.width = grid.width * SIZE ;
    canvas.height = grid.height * SIZE ;
    
    const ctx = canvas.getContext('2d');
    dro(grid, ctx);    
}

function drawGrid(grid,ctx){
  for(let i = 0; i < grid.cells.length; i++) {
    for(let j = 0; j < grid.cells[i].length ; j++){
      let cell = grid.cells[i][j];
      if (cell > 0){
        ctx.fillStyle = BLOCS[cell].color;
        if(grid.difficulty=='normal')draw_square( j ,  i , ctx, BLOCS[cell].color);
        else if(grid.difficulty=='easy')draw_square( j ,  i , ctx, BLOCS_EASY[cell].color);
        else if (grid.difficulty=='easier')draw_square( j ,  i , ctx, BLOCS_EASIER[cell].color);
        else draw_square( j ,  i , ctx, BLOCS_HARD[cell].color)
      }
    }
  }
}

function dro(grid, ctx) {
  ctx.clearRect(0,0,grid.width * SIZE, grid.height * SIZE);
  drawGrid(grid,ctx);
  draw_bloc(grid, ctx);
  document.querySelector('#scoreboard').innerHTML = grid.score ;  
  window.requestAnimationFrame(() => dro(grid,ctx));
}