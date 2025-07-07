
var gElHoursHand
var gElMinutesHand
var gElSecondsHand
var gH1
var gIntervalId

function init() {
    // return
    renderLines()
    gElHoursHand = document.querySelector('.hours-hand')
    gElMinutesHand = document.querySelector('.minutes-hand')
    gElSecondsHand = document.querySelector('.seconds-hand')
    gH1 = document.querySelector('h1')
    renderClock()
    gIntervalId = setInterval(renderClock, 1000)
}

function renderLines() {
    const elClock = document.querySelector('.clock')

    let strHTML = ''
    for (let i = 0; i < 12; i++) {
        const style = `transform: rotateZ(${i * 30}deg); --content: '${i || 12}'; --after-rot: -${i * 30}deg`
        strHTML += `<div style="${style}" class="clock-hand line"></div>`
    }
    elClock.innerHTML += strHTML

}


function renderClock() {
    const time = new Date()
    const seconds = time.getSeconds()
    const minuets = time.getMinutes() + seconds / 60
    const hours = (time.getHours() % 12) + minuets / 60
    renderSecondsHand(seconds)
    renderMinutesHand(minuets)
    renderHoursHand(hours)
    gH1.innerText = getTime(time)

}


function renderHoursHand(hours) {
    const deg = hours * 30
    gElHoursHand.style = `transform: rotateZ(${deg}deg)`
}

function renderMinutesHand(minuets) {
    const deg = minuets * 6
    gElMinutesHand.style = `transform: rotateZ(${deg}deg)`
}

function renderSecondsHand(seconds) {
    const deg = seconds * 6
    gElSecondsHand.style = `transform: rotateZ(${deg}deg)`
}


function getTime(time) {
    let seconds = time.getSeconds()
    let minuets = time.getMinutes()
    let hours = time.getHours()
    hours = hours < 10 ? '0' + hours : hours
    minuets = minuets < 10 ? '0' + minuets : minuets
    seconds = seconds < 10 ? '0' + seconds : seconds

    return `${hours}:${minuets}:${seconds}`
}