let count = 0
let countEl = document.getElementById("count-el")
let entriesEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    entriesEl.textContent += countStr
    count = 0
    countEl.textContent = count
    console.log(countEl.textContent)
}

function resetEntries() {

    entriesEl.innerText = "Previous Entries: "
    console.log(entriesEl.innerText)
}
