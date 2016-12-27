var path = require('path'); //npm path module, used for creating/referencing paths.

var config={
	context:path.join(__dirname,'src'), //path to client-side javascript folder. Must be absolute path
	entry:['./main.js'], //entry point for the application
	output: {
    	path: path.join(__dirname, 'app'),
    	filename: 'bundle.js',
  	},
	module:{
		loaders:[{  //Specifying the loaders(which process files before they are bundled)
			test:/\.js$/, //regex test for which files are to be transpiled
			exclude:/node_modules/, //Files which are to be excluded from preprocessing
			loaders:['babel'], //Name of loaders which will be used
		},],
	},
	resolveLoader:{
		root:[
			path.join(__dirname,'node_modules'), //Where webpack will look to resolve the loaders referenced above.
		],
	},
	resolve:{
		root:[path.join(__dirname,'node_modules')] //Where webpack will look for packages which are imported using import() or require()
	}
};
module.exports=config; //objects which are being exported through this module.