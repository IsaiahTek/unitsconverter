import Converter from './BaseConverter'
class VolumeConverter extends Converter{
	constructor(name, from, to, value){
		super(name, from, to, value)
		this.name='Volume Converter'
	}
	get units(){
		return ['cl', 'cm cube', 'ml', 'mm cube', 'litre', 'km cube', 'dl']
	}
	get base_from(){
		return 'cl'
	}
	get base_to(){
		return 'litre'
	}
	get base_rate(){
		return {'ml':1000, 'cl':100, 'dl':10, 'litre':1}
	}
}
export default VolumeConverter