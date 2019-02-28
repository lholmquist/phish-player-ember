import Controller, {inject} from '@ember/controller';

export default Controller.extend({
  application: inject(),
    actions: {
        playTrack (track) {
            this.get('application').set('currentTrack', track);
        }
    }
});
