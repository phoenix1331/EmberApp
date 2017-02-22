import Ember from 'ember';

export default Ember.Controller.extend({


	actions: {
		addTask: function(){
			alert('something happened');
		},
		addNewNote: function() {

		        var author= this.get('author');
		        var title= this.get('title');
		        var content = this.get('message');
		        var noteData = {title:title, content:content, author:author};
		        var note = this.store.createRecord('note', noteData);

		        // console.log(noteData);
		        this.set('author','');
		        this.set('title','');
		        this.set('message','');
		        note.save();
		        this.transitionToRoute('notes');
		}
	}

});
