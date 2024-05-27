function f1() {
    const selection = window.getSelection();
    console.log(selection);
    console.log(selection.rangeCount);
    if (selection.rangeCount) {
        const wrapper = document.createElement('b');
        const range = selection.getRangeAt(0).cloneRange();
        console.log(range);
        if (range.startContainer != range.endContainer) {
            console.log("ta em linha diferente");
            console.log(range.startContainer);
            console.log(range.endContainer);
        } else {
            console.log("ta em linha igual");
        }
        range.surroundContents(wrapper);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    else {
        alert("damn");
    }
}

function f2() {
    document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
    document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
    document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
    document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
    document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
    document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
    document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}
