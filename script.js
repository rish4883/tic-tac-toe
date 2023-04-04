const gameBoard = (function() {
    let board = []
    board = [];
    const maxSize = 9;
    updateBoard(mark, pos) {
        if(pos < this.maxSize)
            this.board[pos] = mark;
    }
    isFull() {
        for(let i = 0; i < maxSize; i++) {
            if(this.board[i] == null)
                return false;
            else
                return true;
        }
    }

    return  {
        updateBoard,
        isFull
    }
})();

const displayController = (function() {
    
})();