
const fs = require("fs")
const { Tournament } = require("./models")

const { spawn } = require('child_process');


/* Tournament
 *  - Load Directory
 *  - - Attach .slp files to Game Objects
 *  - Group games into Set Objects
 */

 const smashggToken = "5d9c8c1a10899f7fa00b66043d74f86d"

const tourneyUrl = "https://smash.gg/tournament/half-moon-44/events"
const vodsDir = "./vods"

const main = function () {
    console.log("MAIN");

    // const tournament = new Tournament()

    // tournament.getSmashGGResults( tourneyUrl ).then( ( data ) => {
    // 	console.log("Smash.gg Results: ", data )
    // })

    // tournament.load( vodsDir )

    // tournament.doStuff()



    // GET BACK TO THIS LATER
    var x = spawn('cmd', ['/c', '"C:\\Users\\Matt\\AppData\\Roaming\\Slippi Desktop App\\dolphin\\Dolphin.exe" -i "C:\\Users\\Matt\\Documents\\autoUploader\\test.json"']);

	x.stdout.on("data", function(x) {
	    console.log("I MADE IT")
	    console.log("X", x.toString() )
	})

	x.stderr.on("err", function(){
		console.log("WHY")
	})



}

main()