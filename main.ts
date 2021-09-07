input.onButtonPressed(Button.A, function () {
    heartbeats(1)
})
input.onButtonPressed(Button.AB, function () {
    heartbeats(3)
})
function heartbeats (beats: number) {
    for (let index = 0; index < beats; index++) {
        heartbeat()
    }
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.B, function () {
    heartbeats(2)
})
input.onGesture(Gesture.Shake, function () {
    heartbeats(4)
})
function heartbeat () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
}
