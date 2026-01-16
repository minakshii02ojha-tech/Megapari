// Simple button click to simulate CAPTCHA verification
document.getElementById('robot-btn').addEventListener('click', function() {
    const btn = this;
    const msg = document.getElementById('success-msg');

    btn.disabled = true;
    btn.textContent = 'Verifying...';

    // Simulate loading delay
    setTimeout(() => {
        btn.style.display = 'none';
        msg.style.display = 'block';
    }, 1500);
});
