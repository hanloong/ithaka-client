import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('project', 'Project', {
  // Specify the other units that are required for this test.
  needs: ['model:idea']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
