const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







// Get the input element for search
const searchInput = document.querySelector('#content nav form .form-input input[type="search"]');
// Get all the table rows
const rows = document.querySelectorAll('.table-data table tbody tr');

// Add event listener to the search input
searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();

    // Loop through all table rows
    rows.forEach(row => {
        const brandName = row.querySelector('td p').textContent.toLowerCase();
        // If the brand name includes the search text, display the row, otherwise hide it
        if (brandName.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})
