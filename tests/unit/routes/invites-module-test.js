import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invites-module', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invites-module');
    assert.ok(route);
  });
});
