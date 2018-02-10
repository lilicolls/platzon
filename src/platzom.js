

export default function platzom(str) {
		let translation = str;

		//si termina con ar quito esas dos

		if (str.toLowerCase().endsWith('ar')) {

			translation = str.slice(0,-2)
		}
		
		//si inicia con z agrego pe al final

		if (str.toLowerCase().startsWith('z')) {
			translation+= 'pe';

		}	

		//si es mayor a 10 se parte por la mitad y agrego -
		let length = str.length

		if (length >= 10) {

			let primeraParte= str.slice(0 , Math.round(length/2)) 
			let segundaParte=  str.slice(Math.round(length/2))
			translation = `${primeraParte}-${segundaParte}`
		}

	return translation

	}