#TODO for refactor

This file tracks progress towards refactoring the obj structure

Goal - more logical structure to ArchiveItem and then separate repo

#### Reorganize location of metadata API results
Final structure should look like
ArchiveItem

New field|Old field|API/field|Note
---------|---------|---------|----
.metadata|item.metadata|METADATA/metadata
.files|??|METADATA/files|should be [ArchiveFile]
.members \[ArchiveMember*\]|.items \[{}*\]|METADATA/members of members.json or result of query|[ArchiveMember]
.extra|item.*|METADATA/collection_order etc|TODO check matches Jim's proposal
.reviews|item.reviews|METADATA/reviews|[ArchiveReview]
.related|??|RELATED/??|[ArchiveMember]

#### ArchiveMember
Contains fields from AdvancedSearch / Search / members.json 



# TODO for Repo split

Split out UI and Functional components
**Functional**: ArchiveFile, ArchiveItem, ArchiveMember, ArchiveReview and whatever they depend on

# TASKS

Note tasks at each level should be done from inside out and bottom up.

* Split Repo
  * edit Util.json and also include from dweb-archive
* Refactor data
  * Reviews
    * See where UI uses reviews
    * Hang AR on AI.reviews
    * Build ArchiveReview obj
  * Related
    * See //TODO-REFACTOR-RELATED 
    * Make UI use AI.related
    * Hang AM on AI.related
    * Check if Related returns data like search -> Members
  * Item: - DONE - Obsolete AI.item
  * Files: - DONE - Obsolete AI.item.files; Rename AI._list to AI.files; 
  * Members - DONE - Checked: dweb-mirror crawl; dweb-mirror/MirrorHTTP/advancedsearch; Search.js and Collection.js; Check where UI - especially Tiling - uses query results; Result of query - stored in AI.members as ArchiveMember
