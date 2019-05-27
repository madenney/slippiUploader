
const path = require("path")

const { 
	getDirectories,
	getFiles
} = require("../lib")

const { Game } = require("./Game")

class Tournament {

    constructor() {
        console.log("NEW Tournament")
        this.games = []
    }

    load( source ){

    	let cancel = 1
    	getDirectories( source ).forEach( vodDirectory => {
    		if( cancel++ > 1 ){ return }

    		let unfinishedSet = []
    		getFiles( vodDirectory ).forEach( ( file, index ) => {

    			const game = new Game({
    				slpFilePath: path.resolve( path.join( vodDirectory, file )),
    				slpFileName: file
    			})

    			// START HERE NEXT TIME
    			if( unfinishedSet.length ){
    				if( 
    					unfinishedSet[ unfinishedSet.length -1 ].player1 === game.player1 ){
    					unfinishedSet.push( game )
    				}
    			} else {
    				unfinishedSet.push( game )
    			}
    		})
    	})

    }

    getSmashGGResults( tourneyUrl ){
    	return new Promise( async (  resolve, reject ) => {
    		f
    	})
    }

    doStuff() {
        console.log("STUFF DONE")
    }
}

module.exports = { Tournament }