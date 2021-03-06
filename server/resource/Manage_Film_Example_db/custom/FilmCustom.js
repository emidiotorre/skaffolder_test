
const app = require('../../../app.js');
const db_Manage_Film_Example_db = require('../../../db/Manage_Film_Example_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Film
 * 
	{
		bellezza: {
			type: 'Number'
		},
		genre: {
			type: 'String',
			enum : ["Action","Crime","Fantasy","Horror"], 
		},
		title: {
			type: 'String', 
			required : true
		},
		year: {
			type: 'Number'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		cast: [{
			type: Schema.ObjectId,
			ref : "Film"
		}],
		filmMaker: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Film"
		},
		
	}
 * 
 * 
 * 
 * 
		Name: prenota
		Description: 
		Params: 
		Name: prenota
		Description: 
		Params: 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



/*
Name: prenota
Description: 
Params: 
*/
app['get'](properties.api + '/filmsprenota', function(req, res){
	res.send([]);
});
			

/*
Name: prenota
Description: 
Params: 
*/
app['get'](properties.api + '/films/prenota', function(req, res){
	res.send([]);
});
			
