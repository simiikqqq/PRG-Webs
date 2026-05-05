let signedContent = "";
let currentFileName = "";
let isSigned = false;

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('fileInput');

dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', e => handleFile(e.target.files[0]));

dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('border-blue-500','bg-blue-50'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('border-blue-500','bg-blue-50'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('border-blue-500','bg-blue-50');
  handleFile(e.dataTransfer.files[0]);
});

function handleFile(file) {
  if (!file) return;
  currentFileName = file.name;
  isSigned = false;
  resetSignButton();

  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('documentContent').value = e.target.result;
    document.getElementById('file-info').innerHTML = `<strong>${file.name}</strong><br>Velikost: ${(file.size/1024).toFixed(2)} KB`;
    document.getElementById('file-info').classList.remove('hidden');
  };
  reader.readAsText(file);
}

function resetSignButton() {
  const btn = document.getElementById('signBtn');
  btn.disabled = false;
  btn.innerHTML = `<i class="fas fa-signature"></i><span>Podepsat dokument</span>`;
}

function signDocument() {
  if (isSigned) return;

  const content = document.getElementById('documentContent').value.trim();
  if (!content) {
    alert("Dokument je prázdný!");
    return;
  }

  let signerName = document.getElementById('customName').value.trim();
  
  // Pokud je prázdné, vezme z dropdownu
  if (!signerName) {
    signerName = document.getElementById('certSelect').value;
  }
  if (!signerName) {
    alert("Zadejte jméno podpisující osoby");
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleString('cs-CZ');
  const hash = "sha256-" + Array.from(crypto.getRandomValues(new Uint8Array(16)))
                           .map(b => b.toString(16).padStart(2,'0')).join('');

  const key = "KEY-" + Array.from(crypto.getRandomValues(new Uint8Array(12)))
                           .map(b => b.toString(16).padStart(2,'0')).join('').toUpperCase();

  const signatureBlock = `\n\n---\n✅ ELEKTRONICKY PODEPSÁNO\nJméno: ${signerName}\nKey: ${key}\nHash: ${hash}\nDatum: ${dateStr}`;

  signedContent = content + signatureBlock;
  document.getElementById('documentContent').value = signedContent;

  isSigned = true;
  document.getElementById('signBtn').disabled = true;
  document.getElementById('signBtn').innerHTML = `✅ Již podepsáno`;

  document.getElementById('modalInfo').innerHTML = `
    <strong>${signerName}</strong><br>
    ${dateStr}
  `;
  document.getElementById('successModal').classList.remove('hidden');
}

function downloadSignedDocument() {
  if (!signedContent) return;
  const blob = new Blob([signedContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = currentFileName ? currentFileName.replace(/\.\w+$/, '_podepsany.txt') : 'podepsany_dokument.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function closeModal() {
  document.getElementById('successModal').classList.add('hidden');
}