'use strict'
loadjs.ready(['dependencyIE', 'keyLibs'], {// loaded setup libs
	success: function(){

		loadjs([
			'https://cdn.jsdelivr.net/raphael/2.2.7/raphael.js'
			,'https://cdn.jsdelivr.net/morris.js/0.5.1/morris.min.js'
			,'https://cdn.jsdelivr.net/morris.js/0.5.1/morris.css'

			], { success: function(){
				libsLoaded()
			}
	})//loadjs
	}//suc
})

function libsLoaded(){
	console.log('Loaded libs')
	
	TS.signalAppReady()

	TT.ScontentID ='#content-wrapper'
	TT.handle(function(evt) {
		console.log(':')
		if(TT.PRE==evt.typ)  {//start
			console.log(evt.$new)
			//$('#content-wrapper').fadeTo(100,.2)
		}
		if(TT.PAGE==evt.typ)  {//new pg loaded
			$(TT.ScontentID).html(evt.$new)
			//$('#content-wrapper').fadeTo(100,1)

		}
	})
}