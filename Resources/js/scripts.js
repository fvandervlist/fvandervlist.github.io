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

	// Function to toggle visibility based on the 'is-upcoming' class
	var toggleIsUpcoming = function () {
		var checkbox = document.getElementById('toggleIsUpcoming');
		var elements = document.querySelectorAll('.is-upcoming'); // Select all elements with the class 'is-upcoming'
		elements.forEach(function (element) {
			if (element.classList.contains('is-highlighted')) {
				// Always show elements with the 'is-highlighted' class
				element.style.removeProperty('display'); // Ensure their display is managed by the stylesheet
			} else if (checkbox.checked) {
				// If checkbox is checked, show other elements
				element.style.removeProperty('display');
			} else {
				// If checkbox is unchecked, hide other elements
				element.style.display = 'none';
			}
		});
	};
	
	// Function to toggle visibility based on specific year classes (> 5 years ago)
	var toggleIsArchived = function () {
		var checkbox = document.getElementById('toggleIsArchived');
		var years = ['y2018', 'y2017', 'y2016', 'y2015', 'y2014', 'y2013', 'y2012', 'y2011', 'y2010', 'y2009', 'y2008'];
		var elements = document.querySelectorAll(years.map(year => `.${year}`).join(',')); // Select all elements with any of the year classes
		elements.forEach(function (element) {
			if (element.classList.contains('is-highlighted')) {
				// Always show elements with the 'is-highlighted' class
				element.style.removeProperty('display'); // Ensure their display is managed by the stylesheet
			} else if (checkbox.checked) {
				// If checkbox is checked, show other elements
				element.style.removeProperty('display');
			} else {
				// If checkbox is unchecked, hide other elements
				element.style.display = 'none';
			}
		});
	};
	
	// Function to toggle visibility based on the 'is-translation' class
	var toggleIsTranslation = function () {
		var checkbox = document.getElementById('toggleIsTranslation');
		var elements = document.querySelectorAll('.is-translation'); // Select all elements with the class 'is-translation'
		elements.forEach(function (element) {
			element.style.display = checkbox.checked ? 'inline' : 'none'; // Show or hide based on checkbox state
		});
	};
	
	// Function to toggle visibility based on the 'is-emoji' class
	var toggleIsEmoji = function () {
		var checkbox = document.getElementById('toggleIsEmoji');
		var elements = document.querySelectorAll('.is-emoji'); // Select all elements with the class 'is-emoji'
		elements.forEach(function (element) {
			element.style.display = checkbox.checked ? 'inline' : 'none'; // Show or hide based on checkbox state
		});
	};

// Setup each checkbox with persistence

setupCheckbox('toggleIsUpcoming', true, toggleIsUpcoming);
setupCheckbox('toggleIsArchived', true, toggleIsArchived);
setupCheckbox('toggleIsTranslation', false, toggleIsTranslation);
setupCheckbox('toggleIsEmoji', true, toggleIsEmoji);

