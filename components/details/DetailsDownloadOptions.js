import React from 'react';
import IAReactComponent from '../IAReactComponent';
import AnchorDetails from '../AnchorDetails';
import ArchiveMember from "@internetarchive/dweb-archivecontroller/ArchiveMember";
import AICUtil from "@internetarchive/dweb-archivecontroller/Util";
import AnchorDownload from "./AnchorDownload";

export default class DetailsDownloadOptions extends IAReactComponent {

    constructor(props) {
        super(props); //identifier, files=[ArchiveFile*] or array of any object that has metadata{format, source} and downloadable()
    }

    render() {
        // Build a dictionary of file formats
        const downloadableFilesDict = this.props.files.reduce( (res, af) => {
                if (af.downloadable()) {  // Note on image it EXCLUDED JPEG Thumb, but included JPEG*Thumb
                    const format = af.metadata.format;
                    if (!res[format]) { res[format] = []; }
                    res[format].push(af);
                }
                return res;
            }, {}
        );
        const compressURL = `https://archive.org/compress/${this.props.identifier}`; // leave as direct link, else need to zip and store each item in IPFS
        const filesCount = this.props.files_count;
        const originalFilesCount = this.props.files.filter((f)=>f.metadata.source === "original").length+1; // Adds in Archive Bittorrent
        const compressAllURL = `https://archive.org/compress/${this.props.identifier}/formats=JSON,METADATA,JPEG,ARCHIVE BITTORRENT,MUSICBRAINZ METADATA`; // As above leave as direct
        //TODO-IAUX downloadURL needs to work for mirror
        const downloadURL = (typeof DwebArchive !== "undefined" ? `https://dweb.archive.org/download/${this.props.identifier}` : `https://archive.org/download/${this.props.identifier}`

        return (
            <section className="boxy item-download-options">
                <div className="download-button" role="heading" aria-level="5">DOWNLOAD OPTIONS</div>
                {Object.keys(downloadableFilesDict).map(k => (
                    <div className="format-group">
                        <div className="summary-rite">
                            { (downloadableFilesDict[k].length > 1) ?
                                <AnchorDownload className="stealth" identifier={this.props.identifier} format={k} source={downloadableFilesDict[k]} title={k}>
                                    <span className="hover-badge-stealth"><span className="iconochive-download" aria-hidden="true"></span><span
                                    className="sr-only">download</span>{downloadableFilesDict[k].length} files</span>
                                </AnchorDownload>
                                :
                                <AnchorDownload className="stealth" identifier={this.props.identifier} filename={k} source={downloadableFilesDict[k]} title={k}>
                                    <span className="hover-badge-stealth"><span className="iconochive-download" aria-hidden="true"></span><span
                                        className="sr-only">download</span>{downloadableFilesDict[k].length} files</span>
                                </AnchorDownload>
                            }
                        </div>
                        <AnchorDownload className="format-summary download-pill" identifier={this.props.identifier} format={k}
                           source={downloadableFilesDict[k]}
                           onClick="Nav.nav_download(this)"
                           title={k}
                           data-toggle="tooltip" data-placement="auto left" data-container="body"
                           target="_blank">
                            {AICUtil.formats("format", k).downloadable} <span className="iconochive-download"
                                                                              aria-hidden="true"></span><span
                                className="sr-only">download</span>
                        </AnchorDownload>
                    </div>

                ))}
                <div className="show-all">
                    <div className="pull-right">
                        <a className="boxy-ttl hover-badge" href={compressURL}><span className="iconochive-download"
                                                                                     aria-hidden="true"></span><span
                            className="sr-only">download</span> {filesCount} Files</a><br/>
                        <a className="boxy-ttl hover-badge" href={compressAllURL}><span className="iconochive-download"
                                                                                        aria-hidden="true"></span><span
                            className="sr-only">download</span> {originalFilesCount} Original</a><br/>
                    </div>
                    <AnchorDownload className="boxy-ttl" identifier={this.props.identifier}>SHOW ALL</AnchorDownload>
                    <br clear="all" className="clearfix"/>
                </div>
            </section>
        );
    }
}


