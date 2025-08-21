const CONFIG = {
  name: 'Назва сервера',
  ip: 'play.example.net',
  discord: 'https://discord.gg/yourinvite'
};

// Вставка IP
document.getElementById('server-ip').textContent = CONFIG.ip;
document.getElementById('server-ip-inline').textContent = CONFIG.ip;

// Кнопка копіювання
document.getElementById('copy-ip').addEventListener('click', async () => {
  await navigator.clipboard.writeText(CONFIG.ip);
  alert('IP скопійовано');
});

// Рік у футері
document.getElementById('year').textContent = new Date().getFullYear();
