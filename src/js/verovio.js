import createVerovioModule from 'verovio/wasm';
import {VerovioToolkit} from 'verovio/esm';


document.querySelectorAll('[data-verovio="mei"]')
    .forEach(verovioapp => {
        createVerovioModule().then((verovioModule) => {
                const toolkit = new VerovioToolkit(verovioModule);
                const meiURL = verovioapp.getAttribute('data-verovio-url');
                toolkit.setOptions({
                    scale: 50,
                //    pageHeight: 100,
                 // landscape: true,
                   // adjustPageWidth: true,
                    adjustPageHeight: true,
                });
           //   toolkit.select({measureRange: "1-8"})

            // ToDo: Error handling
                fetch(meiURL)
                    .then(response => response.text())
                    .then(mei => {
                        toolkit.loadData(mei);
                        const svg = toolkit.renderToSVG(1);
                        verovioapp.innerHTML = svg;
                    });
            }
        )
    })
