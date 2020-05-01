import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesPartiesFragment on HandleParty {
     _id
     createdAt
     isMod
     party {
       ...FlatPartiesFragment
     }
     handle {
       ...FlatHandlesFragment
     }
   }
`);

registerFragment(`
  fragment HandlePartiesBadge on HandleParty {
    _id
    createdAt
    isMod
    connectionStatus
    party {
      ...HandleBadgeParties
    }
  }
`);

registerFragment(`
  fragment HandlesPartyBadge on HandleParty {
    _id
    createdAt
    isMod
    connectionStatus
    handle {
      _id
      name
      parties {
        ...HandlePartiesBadge
      }
      inventory
    }
  }
  `
  );
