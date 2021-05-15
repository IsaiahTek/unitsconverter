class Converter{
	constructor(from, to, value){
		this.from = from;
		this.to = to;
		this.value = value;
	}
	convert_to_base(){
		return this.intermediate = this.value/this.base_rate[this.from];
	}
	convert_from_base_to_required(){
		return this.intermediate*this.base_rate[this.to]
	}
	convert(){
		this.convert_to_base();
		return this.convert_from_base_to_required();
	}
}
export default Converter