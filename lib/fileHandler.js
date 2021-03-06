
const { lstatSync, readdirSync, statSync } = require("fs")
const path = require("path")


const getInfoFromFileName = fileName => {
	
	if( ! fileName.indexOf(".slp") ){
		throw new Error(`Invalid fileName. No '.slp' extension: ${fileName}`)
	}

	const vsIndex = fileName.indexOf("_vs_")
	if( !vsIndex ){
		throw new Error(`Invalid fileName. No '_vs_': ${fileName}`)
	}

	const player1 = fileName.slice( 0 , vsIndex ).replace(/_/g, " ")

	const secondHalf = fileName.slice( vsIndex + 4 )
 	let player2 = secondHalf.slice( 0, secondHalf.indexOf(".slp") - 1 ).replace(/_/g, " ")

 	while( player2[ player2.length - 1] === " ") {
 		player2 = player2.slice(0, player2.length - 1)
 	}

 	// get this based off of how many underscores there are after player2
 	const setNumber = secondHalf.slice( player2.length, secondHalf.indexOf(".slp") - 1 ).length

 	return { player1, player2, setNumber  }
}




const isDirectory = source => lstatSync( source ).isDirectory()

const getDirectories = source => {
	return readdirSync( path.resolve(source) ).map( name => {
		return path.resolve( path.join( source, name) )
	}).filter(isDirectory)
}

const getFiles = ( source, recursive = false ) => {
	if( !recursive ) {
		return readdirSync( source )
	} else {
		return walkSync( source, [] )
	}

}

const walkSync = function(dir, filelist) {
	files = readdirSync(dir);
	files.forEach(function(file) {
		if ( statSync(dir + '/' + file).isDirectory() ) {
			filelist = walkSync(dir + '/' + file, filelist);
		}
		else {
			filelist.push({
				name: file,
				path: path.resolve( dir + "/" + file )
			});
		}
	});
	return filelist;
}


module.exports = { 
	isDirectory, 
	getDirectories,
	getFiles,
	getInfoFromFileName
}