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
.members|??|METADATA/members of members.json or result of query|[ArchiveMember]
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
  * archive.html should use dweb-archiveui instead of dweb-archive
  * Create new repo dweb-archiveui
* Refactor data
  * Reviews
    * See where UI uses reviews
    * Hang AR on AI.reviews
    * Build ArchiveReview obj
  * Related
    * Make UI use AI.related
    * Hang AM on AI.related
    * Check if Related returns data like search -> Members
  * Files
    * find all use cases of old .files
    * Look at when turned into AI._list/AI.files, 
    * AI._list rename AI.files
  * Members
    * Check dweb-mirror crawl
    * Check dweb-mirror/MirrorHTTP/advancedsearch
    * check Search.js and Collection.js
    * Check where UI - especially Tiling - uses query results
    * Result of query - stored in AI.members as ArchiveMember
