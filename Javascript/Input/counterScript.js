
let Count = 0;
function countUp() {
    Count += 1;
    document.getElementById("counter").innerHTML = "Counter: " + Count;
}
function countDown() {
    if (Count >= 1) {
        Count -= 1;
    }
    document.getElementById("counter").innerHTML = "Counter: " + Count;
}
function countDouble() {
    Count *= 2;
    document.getElementById("counter").innerHTML = "Counter: " + Count;
}
function countHalf() {
    if (Count >= 2) {
        Count /= 2;
    }
    document.getElementById("counter").innerHTML = "Counter: " + Count;
}
function resetCount() {
    Count = 0;
    document.getElementById("counter").innerHTML = "Counter: " + Count;
}