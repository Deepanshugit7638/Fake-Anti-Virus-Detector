
const scanButton = document.getElementById('start-scan');
const scanStatus = document.getElementById('scan-status');
const progressBar = document.getElementById('progress');
const fakeFilesList = document.getElementById('fake-files');
const result = document.getElementById('result');
const buyNowButton = document.getElementById('buy-now');
const educationalPopup = document.getElementById('educational-popup');
const fakeAvWindow = document.querySelector('.fake-av-window');

const fakeFiles = [
  'C:/Windows/System32/drvirus.dll',
  'C:/Program Files/BrowserSpy/malware.exe',
  'C:/Users/User/Downloads/hackedfile.zip',
  'C:/Temp/keylogger.txt',
  'C:/Malicious/spyware.py',
  'C:/GameCheats/cheatengine.vbs',
  'C:/System/fakealert.scr'
];

const threatNames = [
  'Trojan.GenericKD',
  'W32.Scareware.FakeAV',
  'PUA:Win32/KeyLogger',
  'Adware.PopUp.Bomb',
  'Backdoor.Win32.Agent',
  'RiskWare.Tool.Cheat',
  'Fake.Alert.9'
];

scanButton.addEventListener('click', () => {
  scanButton.disabled = true;
  scanStatus.textContent = 'Scanning...';
  progressBar.style.width = '0%';
  fakeFilesList.innerHTML = '';
  result.classList.add('hidden');

  let progress = 0;
  let fileIndex = 0;

  const scanInterval = setInterval(() => {
    if (progress < 100) {
      progress += 5;
      progressBar.style.width = `${progress}%`;

      if (fileIndex < fakeFiles.length) {
        const li = document.createElement('li');
        li.textContent = `Scanning: ${fakeFiles[fileIndex]} - ${threatNames[fileIndex]}`;
        li.classList.add('threat-item');
        fakeFilesList.appendChild(li);
        fileIndex++;
      }
    } else {
      clearInterval(scanInterval);
      scanStatus.textContent = '⚠ Threats Detected!';
      result.classList.remove('hidden');
    }
  }, 300);
});

buyNowButton.addEventListener('click', () => {
  fakeAvWindow.classList.add('hidden');
  educationalPopup.classList.remove('hidden');
});