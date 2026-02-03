// Fibonacci Calculator - generate sequence up to a given maximum value
document.getElementById('calc').addEventListener('click', () => {
  const out = document.getElementById('output');
  const input = document.getElementById('limit').value;
  const max = Number(input);
  out.classList.remove('error');

  if (!Number.isFinite(max) || max < 0) {
    out.classList.add('error');
    out.textContent = 'Please enter a valid non-negative number.';
    return;
  }

  const seq = fibonacciUpTo(max);
  out.innerHTML = `<strong>Up to ${max}:</strong> ${seq.join(', ')} <br><small>Count: ${seq.length}</small>`;
});

function fibonacciUpTo(max) {
  if (max === 0) return [0];
  const res = [0, 1];
  while (true) {
    const a = res[res.length - 2];
    const b = res[res.length - 1];
    const next = a + b;
    if (next > max) break;
    res.push(next);
  }
  // If user requested max < 1, trim the sequence
  if (max < 1) return [0];
  return res;
}
