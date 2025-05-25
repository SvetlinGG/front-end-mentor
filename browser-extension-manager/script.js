const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const extensionsGrid = document.getElementById('extensionsGrid');

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

function createSkeletonCard() {
  const card = document.createElement('div');
  card.className = 'extension-card';
  
  card.innerHTML = `
    <div class="extension-header">
      <div class="skeleton skeleton-logo"></div>
      <div class="skeleton skeleton-title"></div>
    </div>
    <div class="skeleton skeleton-description"></div>
    <div class="extension-actions">
      <div class="skeleton skeleton-actions"></div>
    </div>
  `;
  
  return card;
}

function showLoadingState() {
  extensionsGrid.innerHTML = '';
  extensionsGrid.classList.add('loading');
  
  // Create 6 skeleton cards
  for (let i = 0; i < 6; i++) {
    extensionsGrid.appendChild(createSkeletonCard());
  }
}

async function loadExtensions() {
  try {
    showLoadingState();
    
    // Simulate slow connection with a 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = await fetch('data.json');
    const extensions = await response.json();
    
    // Clear loading state
    extensionsGrid.classList.remove('loading');
    extensionsGrid.innerHTML = '';
    
    extensions.forEach(extension => {
      const card = createExtensionCard(extension);
      extensionsGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading extensions:', error);
    extensionsGrid.innerHTML = '<p class="error">Failed to load extensions. Please try again later.</p>';
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