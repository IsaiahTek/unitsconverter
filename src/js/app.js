import {createApp} from 'vue'
import AngleConverter from './converters/AngleConverter'
import AreaConverter from './converters/AreaConverter'
import DataConverter from './converters/DataConverter'
import LengthConverter from './converters/LengthConverter'
import MassConverter from './converters/MassConverter'
import TemperatureConverter from './converters/TemperatureConverter'
import TimeConverter from './converters/TimeConverter'
import VolumeConverter from './converters/VolumeConverter'
const converters = {
    'length':new LengthConverter(),
    'area':new AreaConverter(),
    'volume':new VolumeConverter(),
    'mass':new MassConverter(),
    'time':new TimeConverter(),
    'angle':new AngleConverter(),
    'temperature':new TemperatureConverter(),
    'data':new DataConverter(),
}
const style = "body{background-color: #00274e;}.app-title{color: white;}input, select{color: #FFFFFF;background-color: #566775;}ul li, select{background-color: #00274e !important;}ul li.active{color: white;}ul li.active,section.conversion-box,.dropdown-btn{background-color: #001325;}section.conversion-box{color: white;border-left: unset;border-radius:5px;}section.nav{color: #ececec;}ul li:nth-child(3n + 1){color:#4dff2d;}ul li:nth-child(3n + 2){color:#55c8f5;}ul li:nth-child(3n){color:#ffc72e}"
const theme = "<style>"+style+"</style>"
// CONFIGURE ADDS
function configAds(){
	if(typeof admob != "undefined"){
		admob.banner.config({
			id:'ca-app-pub-4080611919888715/1682896300',
		})
		admob.banner.prepare()
		admob.banner.show()

        admob.interstitial.config({
			id:'ca-app-pub-4080611919888715/1051313240'
        })
        // admob.interstitial.prepare()

        admob.rewardvideo.config({
			id:'ca-app-pub-4080611919888715/1051313240',
        })
        // admob.rewardvideo.prepare()
	}
}
// END ADS CONFIG

createApp({
    el:'#app',
        data(){
            return{
                loading:false,
                converters:converters,
                converter_id:'length',
                from:'cm',
                to:'m',
                input_1:0,
                input_2:0,
                focused_input:null,
                show_converters:false,
                is_dark_theme:1,
                dark_theme:theme,
            }
        },
    components:{
        //
    },
    methods:{
        setConverter(){
            this.from = this.converter.base_from;
            this.to = this.converter.base_to;
            this.toggle()
          },
        toggle(){
            if(typeof admob != "undefined"){
                admob.rewardvideo.prepare()
                admob.rewardvideo.show()
            }
            return this.show_converters = !this.show_converters;
        },
        toggle_theme(){
            if(typeof admob != "undefined"){
                admob.rewardvideo.prepare()
                admob.rewardvideo.show()
            }
            this.is_dark_theme = !this.is_dark_theme;
        }
    },
    computed:{
        theme_type(){
            return this.is_dark_theme?'Day Light?':'Night Mode?'
        },
        converting_options(){
            return this.converter.units;
        },
        converter(){
            return converters[this.converter_id]
        },
        input1:{
            set(inp1){
                this.input_1 = inp1
                let convta = new this.converter.constructor(this.from, this.to, this.input_1);
                this.input_2 = convta.convert();
            },
            get(){
                return this.input_1
            }
        },
        input2:{
            set(inp2){
                this.input_2 = inp2;
                let convta = new this.converter.constructor(this.to, this.from, this.input_2);
                this.input_1 = convta.convert();
            },
            get(){
                return this.input_2;
            }
        }
    },
    watch:{
        from(){
            if(this.focused_input == 2){
                this.input2 = this.input_2;
            }else{
                this.input1 = this.input_1;
            }
        },
        to(){
            if(this.focused_input == 2){
                this.input2 = this.input_2
            }else{
                this.input1 = this.input_1
            }
        }
    }
}).mount('#app')