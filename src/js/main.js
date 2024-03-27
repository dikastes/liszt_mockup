// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Popover, Dropdown, Collapse, Tooltip } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

// enable tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach(tooltip => {
    new Tooltip(tooltip)
  })

// first simple variant for the text-collapse of long texts after 12 Lines
// Todo: animation?, labels in language and number of lines from data attribute?
    document.querySelectorAll('.text-collapse').forEach(function(el) {
        let lineHeigtInPx = parseFloat(getComputedStyle(el).lineHeight);
        if(el.scrollHeight > lineHeigtInPx * 12){
            let button = document.createElement('button');
            button.innerText = 'Gesamten Text anzeigen';
            button.className = 'show-more btn btn-link ps-0';
            button.setAttribute('aria-expanded', "false");
            el.parentNode.insertBefore(button, el.nextSibling);
            button.style.display = "block";
            button.addEventListener('click', function(){
                el.style.webkitLineClamp = 'unset';
                el.style.overflow = 'visible';
                button.setAttribute('aria-expanded', "true");
                button.style.display = "none";
            });
        }
    });

