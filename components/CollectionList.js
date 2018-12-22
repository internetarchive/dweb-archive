//This has been tested on IAUX & should be moveable to IAUX just by switching the commented headers below -
//IAUX version
//import React from 'react'
//import IAReactComponent from 'iacomponents/experimental/IAReactComponent';
//import PropTypes from 'prop-types'
//!IAUX version
import React from "../ReactFake";
import IAReactComponent from './IAReactComponent';
import ArchiveMemberSearch from "@internetarchive/dweb-archivecontroller/ArchiveMemberSearch";

export default class CollectionList extends IAReactComponent {
    /* Used in IAUX, but not in ReactFake
    static propTypes = {
        collections: PropTypes.array.isRequired,
        collectionTitles: PropTypes.object, // map of collection titles - optional
    };
    */
    constructor(props) {
        super(props);
        if (typeof this.props.collectionTitles === "undefined")
            this.props.collectionTitles = {};
        this.state = {};
        this.load2 = (el) => this.load.call(this, el);
    }
    load(enclosingElement) { // Its possible RealReact will need this.load = (enclosingElement)=> {...} so that it can access "this"
        //expand a list of collections into a list of titles either through collectionTitles if supplied (e.g. from dweb gateway) or via a new Search query
        ArchiveMemberSearch.expand(this.props.collections.filter(k => !this.props.collectionTitles[k]), (err, res) => { // res = { id: AS(id) }
            const collectionTitles = Object.assign(this.props.collectionTitles, Object.map(res, (k,v)=>[k,v.title]));
            this.props.collections.forEach( collection =>
                enclosingElement.appendChild(
                    <div className="collection-item">
                        {/* ReactFake should expand "/details/coll" (with no host) to add an onclick, while if RealReact will leave as href */}
                        <a
                            href={`/details/${collection}`}
                            data-event-click-tracking={`CollectionList|${collection}`}
                        >{collectionTitles[collection] || collection}</a>
                    </div> )
            )
        })
    }

    render() { return (
        <div className="boxy collection-list">
            <section className="quick-down collection-list"  ref={this.load2}>
                <h5 className="collection-title">IN COLLECTIONS</h5>
            </section>
        </div>
    );
    }
}


