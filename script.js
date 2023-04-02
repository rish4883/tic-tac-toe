const gameBoard = (function() {
    let board = []
    board = [];
    const maxSize = 9;
    updateBoard(mark, pos) {
        if(pos < this.maxSize)
            this.board[pos] = mark;
    }

    return  {
        updateBoard
    }
})();

