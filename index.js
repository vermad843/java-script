//nested for loops ;

let grid = [];

for (let row = 0; row < 20; row++) {
    let cols = [];
  for (let col = 0; col < 20; col++) {
     cols.push({
       row,
       col
     })
  }  
  grid.push(cols);
}

console.log(grid);