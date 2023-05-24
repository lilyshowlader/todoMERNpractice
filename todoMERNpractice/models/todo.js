import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema 

const ToDo = new Schema ({
	name: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},
	
	date: {
		type: Date,
		default: function () {
      return new Date().setFullYear(new Date().getFullYear() + 1)
    },
    required: true 
	}
})

export {
	ToDo
}