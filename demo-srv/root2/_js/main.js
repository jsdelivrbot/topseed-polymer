//requires setup-6.1.js or higher
var TM = {

	loadLibs: function(){
		console.log('loadLibs called')

		//most of these could be in manifest
		return Promise.all([
			TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/vendor/jquery.jsForm.min.js')
			, TS.load('//cdn.jsdelivr.net/dot.js/1.1.1/doT.min.js')
			, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/webComps/tw0-1.0.js').then(function(){TW.init()}) //Standard Polyfills and Helper
			, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/webComps/tp1-1.0.js') //Late-loader Helper for Polymer components
			, TS.load('/bower_components/webcomponentsjs/HTMLImports.min.js') //Polyfill used in late-loader
			, TS.load('/bower_components/polymer/polymer.html') //Support for Polymer (1.9.3)
			//, TS.load('//cdn.jsdelivr.net/riot/3.4.4/riot+compiler.min.js') //Support for RIOT
			, TS.load('//rawgit.com/topseed/topseed-turbo/master/release/topseed-turbo-latest.js')
			, TS.load('/_js/BLX.js')
			, TS.load('/_js/BDS.js')
		])
		.then(TM.libsLoaded)
	}	

	, libsLoaded: function(){

		TS.signalAppReady()

		TT.ScontentID ='#content-wrapper'
		TT.handle(function(evt) {
			console.log(':')
			if (TT.PRE == evt.typ)  {//start
				console.log(evt.$new)
				//$('#content-wrapper').fadeTo(100,.2)
			}
			if (TT.PAGE == evt.typ)  {//new pg loaded
				$(TT.ScontentID).html(evt.$new)
				//$('#content-wrapper').fadeTo(100,1)
			}
		})
	}	
} //class

TM.loadLibs()



