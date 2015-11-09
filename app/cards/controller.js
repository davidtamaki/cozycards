import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changeColor(){
			this.set("model.furColor","Yellow");
		}
	}
});
