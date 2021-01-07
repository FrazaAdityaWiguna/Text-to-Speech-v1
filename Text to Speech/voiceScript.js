var voiceList = document.getElementById("voiceList")
var txtInput = document.getElementById("txtInput")
var btnSpeak = document.getElementById("btnSpeak")

var voiceSpeechSynthesis = window.speechSynthesis;
var voices = [];

GetVoices();

if( speechSynthesis !==  undefined ){
    speechSynthesis.onvoiceschanged = GetVoices;
}

btnSpeak.addEventListener('click', ()=>{
    var toSpeack = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeack.voice = voice;
        }
    })
    voiceSpeechSynthesis.speak(toSpeack)
})

function GetVoices(){
    voices = voiceSpeechSynthesis.getVoices();
    voiceList.innerHTML = '';
    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedindex = 0;
}

