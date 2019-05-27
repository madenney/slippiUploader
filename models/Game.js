
const { 
	getInfoFromFileName
} = require("../lib")

class Game {

    constructor( props ) {
    	
    	if( props.slpFileName ){
    		if( !props.slpFileName.indexOf( "_vs_" ) ){
    			throw new Error(`Invalid slpFileName in Game constructor: ${props.slpFileName}`)
        	}
        	const fileNameInfo = getInfoFromFileName( props.slpFileName )
        	this.player1 = fileNameInfo.player1
        	this.player2 = fileNameInfo.player2
        	this.unlinkedSetNumber = fileNameInfo.setNumber
        }

        
        this.slpFileName = props.slpFileName
        this.slpFilePath = props.slpFilePath

    }

}

module.exports = { Game }