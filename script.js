const container = document.querySelector('.container');

function createGrid(dimension) {
    for ( let i = 0; i < dimension*dimension; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${dimension})`;
        cell.style.height = `calc(100% / ${dimension})`;
        cell.addEventListener('click', () => {
        cell.style.backgroundColor =  'black' ; 
        })
        container.appendChild(cell);
    }
}
createGrid(16);

