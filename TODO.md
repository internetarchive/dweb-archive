#TODO for refactor

Note tasks at each level should be done from inside out and bottom up.

* Split Repo
  * Create on github 
  * When tested, publish both to npm
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
