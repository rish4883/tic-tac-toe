const gameBoard = (function() {
    let board = []
    board = [];
    const maxSize = 9;
   function updateBoard(mark, pos) {
        if(pos < this.maxSize)
            this.board[pos] = mark;
    }
    function checkIfOccupied(pos) {
        return this.board[pos] != null;
    }

    return  {
        updateBoard,
        checkIfOccupied
    }
})();

const displayController = (function() {
    let mark = '';
    let squares;

    function init() {
        squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', (e) => {
                // if(gameBoard.checkIfOccupied) {return;}
                // updateMark();
                // e.target.textContent = this.mark;
                // let index = e.target.id;
                // gameBoard.updateBoard(this.mark, index);
            });
        });
    }

    function clear() {
        squares.forEach( (square) => {
            square.textContent = '';
        });
    }

    return {
        init,
        clear
    }

})();

const player = function(number, mark) {
    let score;
    function setScore() {
        this.score++;
    }

    function getScore() {
        return this.score;
    }

    return {
        setScore,
        getScore
    }
}
