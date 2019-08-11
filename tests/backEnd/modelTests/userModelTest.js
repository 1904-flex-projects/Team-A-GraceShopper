// get the model
const User = require('../../../server/db/models/User');
const db = require('../../../server/db/connection');

// testing the User model
describe('The `User` model', () => {
  // clearing the db first
  before(() => {
    return db.sync({ force: true });
  });

  /**
   * Create a user instance
   */

  let user;
  // beforeEach(() => {
  //   user = User.build({
  //     user fields
  //   });
  // });

  describe('required attributes', () => {
    it('includes email and password', async () => {
      //   const savedUser = await user.save();
      // check fields here
    });

    it('requires `content`', async () => {
      article.content = null;

      let result, error;
      try {
        result = await article.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when content is null');

      expect(error).to.be.an.instanceOf(Error);
    });

    it('requires `title` (in a more strict way than for `content`)', async () => {
      article.title = '';

      let result, error;
      try {
        result = await article.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when title is empty');

      expect(error).to.be.an.instanceOf(Error);
      expect(error.message).to.contain('Validation error');
    });
  });
});
