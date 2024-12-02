const { ipcRenderer } = require('electron');

document.getElementById('print').addEventListener('click', () => {
  ipcRenderer.invoke('get-system-info').then((info) => {
    const list = document.getElementById('system-info');
    list.innerHTML = ''; // Clear existing list

    Object.keys(info).forEach(key => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = `${key}: ${info[key]}`;
      list.appendChild(listItem);
    });
  });
});
