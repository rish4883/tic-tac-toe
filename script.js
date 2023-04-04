// Game board module which tracks the marks on the board and updates it when needed
const gameBoard = (function() {
    let board = []
    const maxSize = 9;
    

    function updateBoard(mark, pos) {
        if(pos < maxSize)
            board[pos] = mark;
    }

    // Function takes in an index and returns true if any element is present in index
    function checkIfOccupied(pos) {
        return board[pos] != null;
    }

    const getMarkOnBoard = (pos) => board[pos];
    

    return  {
        updateBoard,
        checkIfOccupied,
        getMarkOnBoard
    }
})();


// Module to control the display on webpage. 
const displayController = (function() {
    let squares;

    function init() {
        squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', (e) => {
                let index = e.target.id;
                let mark = game.getMarkToDisplay(index);
                e.target.textContent = mark;
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

// Factory function to create player objects 
const player = function(number, mark) {
    let score;
    const setScore = () => {score++};

    const getScore = () => score;

    return {
        setScore,
        getScore
    }
}

const game = (function() {
        
    let player1;
    let player2;
    let move;
    let win;

    function startGame() {
        move = 0;
        player1 = player(1, 'X');
        player2 = player(2, 'O');
        displayController.init();
    }

    function getMarkToDisplay(index) {
        if(gameBoard.checkIfOccupied(index-1))
            return gameBoard.getMarkOnBoard(index-1)
        else {
            move++;

            let mark = move % 2 != 0 ? 'X' : 'O';
            gameBoard.updateBoard(mark, index-1)
            trackGameStatus()
            return mark
            
        }
    }

    function trackGameStatus() {
        if(move>=9) {
            win = 'tie';
        }


    }
    
    return {
        startGame,
        getMarkToDisplay
    }


})();

game.startGame();
