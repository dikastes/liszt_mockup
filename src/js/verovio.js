import createVerovioModule from 'verovio/wasm';
import {VerovioToolkit} from 'verovio/esm';


document.querySelectorAll('[data-verovio="mei"]')
    .forEach(verovioapp => {
        createVerovioModule().then((verovioModule) => {
                const toolkit = new VerovioToolkit(verovioModule);
                const meiURL = verovioapp.getAttribute('data-verovio-url');
/*                const options = {
                    defaultView: 'responsive', // instead of 'responsive' by default
                    documentZoom: 4 // 0-7, default is 3
                }*/
                fetch(meiURL)
                    .then(response => response.text())
                    .then(mei => {
                        toolkit.loadData(mei);
                        const svg = toolkit.renderToSVG(1, {});
                        verovioapp.innerHTML = svg;
                    });
            }
        )
    })
