const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('dark-theme', savedTheme === 'dark');
  body.classList.toggle('light-theme', savedTheme === 'light');
} else {
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

async function loadExtensions() {
  try {
    const response = await fetch('data.json');
    const extensions = await response.json();
    
    extensions.forEach(extension => {
      const card = createExtensionCard(extension);
      extensionsGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading extensions:', error);
  }
}

function createExtensionCard(extension) {
  const card = document.createElement('div');
  card.className = 'extension-card';
  
  card.innerHTML = `
    <div class="extension-header">
      <img src="${extension.logo}" alt="${extension.name} logo" class="extension-logo">
      <h2 class="extension-name">${extension.name}</h2>
    </div>
    <p class="extension-description">${extension.description}</p>
    <div class="extension-actions">
      <label class="toggle-switch">
        <input type="checkbox" ${extension.isActive ? 'checked' : ''}>
        <span class="toggle-slider"></span>
      </label>
      <button class="remove-btn">Remove</button>
    </div>
  `;

  const removeBtn = card.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => {
    card.remove();
  });

  return card;
}

loadExtensions();