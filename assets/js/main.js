const CONFIG = {
  name: 'ZielonaGora',
  ip: '---',
  discord: 'https://discord.gg/3T8Dj4tCEj'
};

// Вставка IP
document.getElementById('server-ip').textContent = ip;
document.getElementById('server-ip-inline').textContent = ip;

// Кнопка копіювання
document.getElementById('copy-ip').addEventListener('click', async () => {
  await navigator.clipboard.writeText(ip);
  alert('нікнейм скопійовано');
});

// Рік у футері
document.getElementById('year').textContent = new Date().getFullYear();
