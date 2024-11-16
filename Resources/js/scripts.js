// OVERRIDE HTML BASE FOR ANCHOR LINKS

document.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', function(event) {
		const href = link.getAttribute('href');

		// Check if the link is a pure anchor
		if (href && href.startsWith('#')) {
			event.preventDefault(); // Prevent the default anchor behavior

			// Update the URL hash manually
			window.history.pushState(null, null, href);

			// Scroll to the target element if it exists
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	});
});


// TOGGLE THEME

const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');
const toggleTheme = document.getElementById('toggleTheme');

// Check initial theme and set checkbox state
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'light' : 'dark');
setTheme(initialTheme);

// Listen for changes in system preference and apply if no user preference is saved
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
	if (!localStorage.getItem('theme')) { // Only apply if no user preference is set
		setTheme(event.matches ? 'light' : 'dark');
	}
});

// Update theme when checkbox changes
toggleTheme.addEventListener('change', () => {
	const newTheme = toggleTheme.checked ? 'light' : 'dark';
	setTheme(newTheme);
	localStorage.setItem('theme', newTheme); // Save user preference
});

// Function to set theme by controlling the `media` attribute
function setTheme(theme) {
	if (theme === 'light') {
		lightTheme.media = 'all'; // Enable light theme
		darkTheme.media = 'not all'; // Disable dark theme
		toggleTheme.checked = true;
	} else {
		lightTheme.media = 'not all'; // Disable light theme
		darkTheme.media = 'all'; // Enable dark theme
		toggleTheme.checked = false;
	}
}


// TOGGLE DISPLAY FILTERS

// State persistence

// Utility function to save checkbox state
function saveCheckboxState(id, isChecked) {
	localStorage.setItem(id, isChecked);
}

	// Utility function to load checkbox state
	function loadCheckboxState(id) {
		return localStorage.getItem(id) === 'true'; // Convert string to boolean
	}

// Apply persisted states and attach event listeners
function setupCheckbox(id, defaultChecked, toggleFunction) {
	const checkbox = document.getElementById(id);

	// Set initial state from localStorage or default
	const persistedState = localStorage.getItem(id);
	checkbox.checked = persistedState !== null ? JSON.parse(persistedState) : defaultChecked;

	// Attach event listener to toggle function
	checkbox.onclick = function () {
		toggleFunction();
		saveCheckboxState(id, checkbox.checked);
	};

	// Trigger the toggle function initially if checked
	if (checkbox.checked) {
		toggleFunction();
	}
}

// General toggle function for any checkbox
var setupCheckbox = function (checkboxId, defaultState, toggleFunction) {
	var checkbox = document.getElementById(checkboxId);

	// Set the checkbox state based on localStorage or the default value
	checkbox.checked = localStorage.getItem(checkboxId) === 'true' ? true : defaultState;

	// Add event listener to save the checkbox state in localStorage
	checkbox.addEventListener('change', function () {
		localStorage.setItem(checkboxId, checkbox.checked);
		toggleFunction(); // Call the toggle function when checkbox is changed
	});

	// Initial toggle based on the checkbox state
	toggleFunction();
};

// Toggle functions

var lis = document.getElementsByTagName('li');
var spans = document.getElementsByTagName('span');

	// toggleIsUpcoming function
	var toggleIsUpcoming = function () {
		var checkbox = document.getElementById('toggleIsUpcoming');
		for (var i = 0; i < lis.length; i++) {
			if (lis[i].className.includes('is-upcoming')) {
				// If the checkbox is checked, show the element; otherwise, hide it
				lis[i].style.display = checkbox.checked ? 'list-item' : 'none';
			}
		}
	};
	
	// toggleIsArchived function
	var toggleIsArchived = function () {
		var checkbox = document.getElementById('toggleIsArchived');
		for (var i = 0; i < lis.length; i++) {
			if (['y2018', 'y2017', 'y2016', 'y2015', 'y2014', 'y2013', 'y2012', 'y2011', 'y2010', 'y2009', 'y2008'].includes(lis[i].className)) {
				// If the checkbox is checked, show the element; otherwise, hide it
				lis[i].style.display = checkbox.checked ? 'list-item' : 'none';
			}
		}
	};
	
	// toggleIsTranslation function
	var toggleIsTranslation = function () {
		var checkbox = document.getElementById('toggleIsTranslation');
		for (var i = 0; i < spans.length; i++) {
			if (spans[i].className.includes('is-translation')) {
				// If the checkbox is checked, show the element; otherwise, hide it
				spans[i].style.display = checkbox.checked ? 'inline' : 'none';
			}
		}
	};
	
	// toggleIsEmoji function
	var toggleIsEmoji = function () {
		var checkbox = document.getElementById('toggleIsEmoji');
		for (var i = 0; i < spans.length; i++) {
			if (spans[i].className.includes('is-emoji')) {
				// If the checkbox is checked, show the element; otherwise, hide it
				spans[i].style.display = checkbox.checked ? 'inline' : 'none';
			}
		}
	};

// Setup each checkbox with persistence

setupCheckbox('toggleIsUpcoming', true, toggleIsUpcoming);
setupCheckbox('toggleIsArchived', true, toggleIsArchived);
setupCheckbox('toggleIsTranslation', false, toggleIsTranslation);
setupCheckbox('toggleIsEmoji', true, toggleIsEmoji);

