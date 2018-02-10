'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = platzom;
function platzom(str) {
		var translation = str;

		//si termina con ar quito esas dos

		if (str.toLowerCase().endsWith('ar')) {

				translation = str.slice(0, -2);
		}

		//si inicia con z agrego pe al final

		if (str.toLowerCase().startsWith('z')) {
				translation += 'pe';
		}

		//si es mayor a 10 se parte por la mitad y agrego -
		var length = str.length;

		if (length >= 10) {

				var primeraParte = str.slice(0, Math.round(length / 2));
				var segundaParte = str.slice(Math.round(length / 2));
				translation = primeraParte + '-' + segundaParte;
		}

		return translation;
}