function initializeController(grid){

    document.querySelectorAll('button').forEach(function(el){
        el.addEventListener('click', function() {
            start(grid,el.id);
        });
      });
    document.onkeydown = (event) => {

        switch(event.code) {
            case 'ArrowUp' :
                incRot(grid);
            break;
            case 'ArrowRight':
                incX(grid);
            break;
            case 'ArrowDown' :
                update(grid);
            break;
            case 'ArrowLeft':
                decX(grid);
            break;
            case 'Space':
                start(grid, grid.difficulty);
            break;
        }
    }
}



