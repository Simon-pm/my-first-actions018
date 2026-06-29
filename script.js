// GitHub Actions CI/CD Demo - script.js

document.addEventListener('DOMContentLoaded', function () {
  // แสดงวันและเวลาปัจจุบัน
  const deployTimeEl = document.getElementById('deploy-time');
  if (deployTimeEl) {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Bangkok',
    };
    const formatted = now.toLocaleDateString('th-TH', options);
    deployTimeEl.textContent = `เข้าชมเมื่อ: ${formatted} (เวลาประเทศไทย)`;
  }

  // Animation สำหรับ cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(function (card, index) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(function () {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });

  console.log('✅ GitHub Actions Deployment - Script loaded successfully!');
});
