const expect = require ('chai').expect
const platzom = require ('..').default



describe ('#platzom', function (){

	it ('si termina con ar quito esas dos', function(){
		const translation = platzom("programar")
		expect(translation).to.equal("program")

	})


	it ('si inicia con z agrego pe al final', function(){
		const translation = platzom ("zorro")

		expect(translation).to.equal ("zorrope")

	})


	it ('si es mayor a 10 se parte por la mitad y agrego', function(){
		const translation = platzom ("abecedario")
		expect(translation).to.equal("abece-dario")

	})



})