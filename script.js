
let winningButton = 0;

function dispayButtons() {
    var numButtons = document.getElementById("numButtons").value;
    winningButton = Math.floor((Math.random() * numButtons) + 1);
    console.log("am ales butonul " + winningButton);
    for (let i = 1; i <= numButtons; ++i) {
        $('#buttonList').append(`
            <button type="button" class="btn btn-outline-primary" id="${i}" onclick='checkWinningButton(id);'>` + i + `</button>`);
    }
    $('#messageStartGame').append(`
        <div class="card-body">
            Guess the winning button!
        </div>`);
    return false;
}

function checkWinningButton(source) {
    console.log("sursa este " + source);
    console.log("winningButton este " + winningButton);
    if (Number(source) === Number(winningButton)) {
        $('#messageStartGame').remove();
        $('#messageSuccess').append(`
        <div class="card-body">
            You're a star
        </div>`);
        return false;
    }
    $('#messageStartGame').remove();
    $('#messageFail').append(`
        <div class="card-body">
            Try again :(
        </div>`);
    return false;
}
