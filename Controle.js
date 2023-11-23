let temperature = 17;
let acStatus = false;

function updateTemperature() {
  document.getElementById('temperature').innerText = temperature;
}

function updateStatus() {
  const statusElement = document.getElementById('status');
  statusElement.innerText = acStatus ? 'Ligado' : 'Desligado';
  statusElement.style.color = acStatus ? '#4CAF50' : '#ff0000';
}

function toggleAC() {
  acStatus = !acStatus;
  updateStatus();
}

function increaseTemperature() {
  if (acStatus && temperature < 24) {
    temperature++;
    updateTemperature();
  }
}

function decreaseTemperature() {
  if (acStatus && temperature > 16) {
    temperature--;
    updateTemperature();
  }
}

// Inicialização
updateTemperature();
updateStatus();