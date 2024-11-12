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

var lis = document.getElementsByTagName('li') ;
var tds = document.getElementsByTagName('td') ;
var trs = document.getElementsByTagName('tr') ;
var sections = document.getElementsByTagName('section') ;
var spans = document.getElementsByTagName('span') ;
var marks = document.getElementsByTagName('mark') ;
var smalls = document.getElementsByTagName('small') ;
var allTags = document.getElementsByTagName('*') ;


// toggleIsUpcoming

var toggleIsUpcoming = function() {
	for (var i = 0, l = lis.length; i < l; i++) {
		if (lis[i].getAttribute('class') == 'y2025 is-upcoming'
		|| lis[i].getAttribute('class') == 'y2022 is-upcoming')
			if (lis[i].style.display == 'none') lis[i].style.display = 'list-item' ;
			else lis[i].style.display = 'none' ;
	}
}

document.getElementById('toggleIsUpcoming').checked = true ;
document.getElementById('toggleIsUpcoming').onclick = toggleIsUpcoming ;

// toggleIsArchived (> 5 YRS AGO)

var toggleIsArchived = function() {
	for (var i = 0, l = lis.length; i < l; i++) {
		if (lis[i].getAttribute('class') == 'y2018'
		|| lis[i].getAttribute('class') == 'y2017'
		|| lis[i].getAttribute('class') == 'y2016'
		|| lis[i].getAttribute('class') == 'y2015'
		|| lis[i].getAttribute('class') == 'y2014'
		|| lis[i].getAttribute('class') == 'y2013'
		|| lis[i].getAttribute('class') == 'y2012'
		|| lis[i].getAttribute('class') == 'y2011'
		|| lis[i].getAttribute('class') == 'y2010'
		|| lis[i].getAttribute('class') == 'y2009'
		|| lis[i].getAttribute('class') == 'y2008')
			if (lis[i].style.display == 'none') lis[i].style.display = '' ;
			else lis[i].style.display = 'none' ;
	}
	for (var i = 0, l = trs.length; i < l; i++) {
		if (trs[i].getAttribute('class') == 'tr-item y2018'
		|| trs[i].getAttribute('class') == 'tr-item y2018 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2017'
		|| trs[i].getAttribute('class') == 'tr-item y2017 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2016'
		|| trs[i].getAttribute('class') == 'tr-item y2016 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2015'
		|| trs[i].getAttribute('class') == 'tr-item y2015 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2014'
		|| trs[i].getAttribute('class') == 'tr-item y2014 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2013'
		|| trs[i].getAttribute('class') == 'tr-item y2013 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2012'
		|| trs[i].getAttribute('class') == 'tr-item y2012 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2011'
		|| trs[i].getAttribute('class') == 'tr-item y2011 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2010'
		|| trs[i].getAttribute('class') == 'tr-item y2010 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2009'
		|| trs[i].getAttribute('class') == 'tr-item y2009 tr-istype-pinned'
		|| trs[i].getAttribute('class') == 'tr-item y2008'
		|| trs[i].getAttribute('class') == 'tr-item y2008 tr-istype-pinned')
			if (trs[i].style.display == 'none') trs[i].style.display = '' ;
			else trs[i].style.display = 'none' ;
	}
}

document.getElementById('toggleIsArchived').checked = true ;
document.getElementById('toggleIsArchived').onclick = toggleIsArchived ;

// toggleIsMarked

var toggleIsMarked = function() {
	for (var i = 0, l = marks.length; i < l; i++) {
		if (marks[i].getAttribute('class') == 'is-marked')
			if (marks[i].style.backgroundColor == '') marks[i].style.backgroundColor = 'rgba(255,254,209,1)' ;
			else marks[i].style.backgroundColor = '' ;
	}
	for (var i = 0, l = spans.length; i < l; i++) {
		if (spans[i].getAttribute('class') == 'legend-value is-marked')
			if (spans[i].style.display == 'inline') spans[i].style.display = 'none' ;
			else spans[i].style.display = 'inline' ;
	}
}

document.getElementById('toggleIsMarked').checked = false ;
document.getElementById('toggleIsMarked').onclick = toggleIsMarked ;

// toggleIsTranslation

var toggleIsTranslation = function() {
	for (var i = 0, l = spans.length; i < l; i++) {
		if (spans[i].getAttribute('class') == 'is-translation'
		|| spans[i].getAttribute('class') == 'is-translation is-comment')
			if (spans[i].style.display == 'inline') spans[i].style.display = 'none' ;
			else spans[i].style.display = 'inline' ;
	}
	for (var i = 0, l = allTags.length; i < l; i++) {
		if (allTags[i].getAttribute('class') == 'is-translation'
		|| allTags[i].getAttribute('class') == 'summary is-translation'
		|| allTags[i].getAttribute('class') == 'summary-contd is-translation'
		|| allTags[i].getAttribute('class') == 'keywords is-translation'
		|| allTags[i].getAttribute('class') == 'article-keypoints is-translation')
			if (allTags[i].style.display == 'block') allTags[i].style.display = 'none' ;
			else allTags[i].style.display = 'block' ;
	}
}

document.getElementById('toggleIsTranslation').checked = false ;
document.getElementById('toggleIsTranslation').onclick = toggleIsTranslation ;

// toggleIsEmoji

var toggleIsEmoji = function() {
	for (var i = 0, l = spans.length; i < l; i++) {
		if (spans[i].getAttribute('class') == 'is-emoji'
		|| spans[i].getAttribute('class') == 'is-emoji blockquote-quo')
			if (spans[i].style.display == 'none') spans[i].style.display = '' ;
			else spans[i].style.display = 'none' ;
	}
}

document.getElementById('toggleIsEmoji').checked = true ;
document.getElementById('toggleIsEmoji').onclick = toggleIsEmoji ;

// toggleExpands

var toggleExpands = function() {
	for (var i = 0, l = spans.length; i < l; i++) {
		if (spans[i].getAttribute('class') == 'td-link-expands'
		|| spans[i].getAttribute('class') == 'byline-expands'
		|| spans[i].getAttribute('class') == 'legend-values-expands')
			if (spans[i].style.display == 'inline') spans[i].style.display = 'none' ;
			else spans[i].style.display = 'inline' ;
	}
	for (var i = 0, l = spans.length; i < l; i++) {
		if (spans[i].getAttribute('class') == 'th-expands'
		|| spans[i].getAttribute('class') == 'td-expands')
			if (spans[i].style.display == 'none') spans[i].style.display = 'inline' ;
			else spans[i].style.display = 'none' ;
	}
	for (var i = 0, l = allTags.length; i < l; i++) {
		if (allTags[i].getAttribute('class') == 'th-expands'
		|| allTags[i].getAttribute('class') == 'td-expands'
		|| allTags[i].getAttribute('class') == 'byline shortcuts')
			if (allTags[i].style.display == 'inline') allTags[i].style.display = 'none' ;
			else allTags[i].style.display = 'inline' ;
	}
	for (var i = 0, l = allTags.length; i < l; i++) {
		if (allTags[i].getAttribute('class') == 'header-anchors'
		|| allTags[i].getAttribute('class') == 'solid shortcuts'
		|| allTags[i].getAttribute('class') == 'summary-expands'
		|| allTags[i].getAttribute('class') == 'y2025 is-details'
		|| allTags[i].getAttribute('class') == 'y2024 is-details'
		|| allTags[i].getAttribute('class') == 'y2023 is-details'
		|| allTags[i].getAttribute('class') == 'y2022 is-details'
		|| allTags[i].getAttribute('class') == 'y2021 is-details'
		|| allTags[i].getAttribute('class') == 'y2020 is-details'
		|| allTags[i].getAttribute('class') == 'y2019 is-details'
		|| allTags[i].getAttribute('class') == 'y2018 is-details'
		|| allTags[i].getAttribute('class') == 'y2017 is-details'
		|| allTags[i].getAttribute('class') == 'y2016 is-details'
		|| allTags[i].getAttribute('class') == 'y2015 is-details'
		|| allTags[i].getAttribute('class') == 'y2014 is-details'
		|| allTags[i].getAttribute('class') == 'y2013 is-details'
		|| allTags[i].getAttribute('class') == 'y2012 is-details'
		|| allTags[i].getAttribute('class') == 'is-details')
			if (allTags[i].style.display == 'block') allTags[i].style.display = 'none' ;
			else allTags[i].style.display = 'block' ;
	}
	for (var i = 0, l = smalls.length; i < l; i++) {
		if (smalls[i].getAttribute('class') == 'is-notif')
			if (smalls[i].style.display == 'none') smalls[i].style.display = '' ;
			else smalls[i].style.display = 'none' ;
	}
}

document.getElementById('toggleExpands').checked = false ;
document.getElementById('toggleExpands').onclick = toggleExpands ;

