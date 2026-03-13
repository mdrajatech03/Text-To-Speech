let speech = new SpeechSynthesisUtterance()

let voices = []

let voiceSelect = document.getElementById("voice")

let text = document.getElementById("text")

let speed = document.getElementById("speed")

let pitch = document.getElementById("pitch")

let count = document.getElementById("count")

let speakBtn = document.getElementById("speak")

let stopBtn = document.getElementById("stop")

let copyBtn = document.getElementById("copy")

let clearBtn = document.getElementById("clear")

window.speechSynthesis.onvoiceschanged = () => {

voices = speechSynthesis.getVoices()

voices.forEach((voice,i)=>{

voiceSelect.options[i] = new Option(voice.name,i)

})

speech.voice = voices[0]

}

voiceSelect.addEventListener("change",()=>{

speech.voice = voices[voiceSelect.value]

})

speakBtn.onclick = ()=>{

speech.text = text.value

speech.rate = speed.value

speech.pitch = pitch.value

speechSynthesis.speak(speech)

}

stopBtn.onclick = ()=>{

speechSynthesis.cancel()

}

copyBtn.onclick = ()=>{

navigator.clipboard.writeText(text.value)

alert("Text Copied")

}

clearBtn.onclick = ()=>{

text.value = ""

count.innerText = 0

}

text.addEventListener("input",()=>{

count.innerText = text.value.length

})
