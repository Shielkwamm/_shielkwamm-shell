Package.describe({
  name: 'shielkwamm:shielkwamm',
});

Package.onUse((api) => {
  api.use(['vulcan:core']);
/*
  // when in doubt live aethetically
  api.use(['shielkwamm:color-schemes']);

  // Use your words
  api.use(['shielkwamm:lexicon']);

  // I think there for I am
  api.use(['shielkwamm:garden'])

  // It helps
  api.use(['shielkwamm:having-things']);

  // marble madness
  api.use(['shielkwamm:talk'])
*/
api.mainModule('lib/server/main.js', 'server');
api.mainModule('lib/client/main.js', 'client');
});
