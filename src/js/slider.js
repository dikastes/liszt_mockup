import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = document.getElementById('slider');
const valuesForSlider = [1820, 1830, 1840, 1850, 1860, 1870, 1886]; // 16 values

var format = {
    to: function(value) {
        return valuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return valuesForSlider.indexOf(Number(value));
    }
};

noUiSlider.create(slider, {
    start: [1820, 1886],
    connect: true,
    range: { min: 0, max: valuesForSlider.length - 1 },
    step: 1,
    tooltips: true,
    format: format,
    pips: { mode: 'steps', format: format },

});