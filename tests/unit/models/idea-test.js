import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('idea', 'Idea', {
  // Specify the other units that are required for this test.
  needs: ['model:project']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
