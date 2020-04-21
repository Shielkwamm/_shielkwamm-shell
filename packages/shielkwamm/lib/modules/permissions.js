import Users from 'meteor/vulcan:users';

/*

Create new custom groups

*/

Users.createGroup('_sh_');
Users.createGroup('djs');
Users.createGroup('cannons');
Users.createGroup('exhaulteds');


/*Users.groups._sh_.can([
  'comments.new',
  'comments.edit.own',
  'comments.remove.own',
]);*/