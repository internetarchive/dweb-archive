//import React from './ReactFake';

import Details from './Details';

export default class AV extends Details {
    setupPlaylist(type) { //TODO could order the playability and pick by preference //TODO consolidate naming setupPlaylist and setPlaylist
        this.setPlaylist(type);
    }

}
