const table = document.getElementById('data-table');
const rows = Array.from(table.querySelectorAll('tr'));
const sortButton = document.getElementById('sort-button');
const filterInput = document.getElementById('filter-input');

sortButton.addEventListener('click', () => {
  rows.sort((a, b) => {
    const aValue = a.cells[1].textContent;
    const bValue = b.cells[1].textContent;
    return aValue.localeCompare(bValue);
  });

  rows.forEach((row) => table.appendChild(row));
});

filterInput.addEventListener('input', () => {
  const filterValue = filterInput.value.toLowerCase();

  rows.forEach((row) => {
    const name = row.cells[0].textContent.toLowerCase();
    row.style.display = name.includes(filterValue) ? 'table-row' : 'none';
  });
});
