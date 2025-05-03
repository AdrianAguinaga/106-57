
function saveTask()
{
    console.log("button clicked")
}

function init() {
//load data

// hook events
$("#btnSave").click(saveTask);
}

window.onload = init;
// 