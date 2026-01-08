let filesScanned = 0;
let urlsChecked = 0;
let threatsBlocked = 0;

function scanFile() {
    const result = document.getElementById("fileResult");
    filesScanned++;

    const isMalicious = Math.random() < 0.3;

    if (isMalicious) {
        result.innerHTML = "❌ Threat detected! File blocked.";
        threatsBlocked++;
        document.getElementById("riskScore").innerText = "High";
    } else {
        result.innerHTML = "✅ File is safe.";
    }

    updateDashboard();
}

function checkURL() {
    const url = document.getElementById("urlInput").value;
    const result = document.getElementById("urlResult");
    urlsChecked++;

    if (url.includes("http")) {
        result.innerHTML = "⚠️ Suspicious URL detected!";
        threatsBlocked++;
        document.getElementById("riskScore").innerText = "Medium";
    } else {
        result.innerHTML = "✅ URL appears safe.";
    }

    updateDashboard();
}

function updateDashboard() {
    document.getElementById("filesScanned").innerText = filesScanned;
    document.getElementById("urlsChecked").innerText = urlsChecked;
    document.getElementById("threatsBlocked").innerText = threatsBlocked;
}

const tips = [
    "Do not open email attachments from unknown senders.",
    "Keep your operating system updated.",
    "Use strong, unique passwords.",
    "Backup data regularly to offline storage."
];

let tipIndex = 0;

function nextTip() {
    document.getElementById("tipResult").innerText = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
}
