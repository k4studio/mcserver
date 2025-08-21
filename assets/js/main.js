const CONFIG = {
  name: 'ZielonaGora',
  ip: 'hiiiiiiiiiiiiiiii',
  discord: 'https://discord.gg/3T8Dj4tCEj'
};

// Вставка IP
document.getElementById('server-ip').textContent = CONFIG.ip;
document.getElementById('server-ip-inline').textContent = CONFIG.ip;

// Кнопка копіювання
document.getElementById('copy-ip').addEventListener('click', async () => {
  await navigator.clipboard.writeText(CONFIG.ip);
  alert('нікнейм скопійовано');
});

// Рік у футері
document.getElementById('year').textContent = new Date().getFullYear();
