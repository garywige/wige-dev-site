# Downloads Page

This page serves as sort of a demo. As of this writing, there are only two available downloads on the page, which are both located in the [assets](../../../assets) directory. The site offers a search-by-name feature, which is entirely implemented in the template using the **ngIf** directive:

```
<div *ngIf="download.name.toLowerCase().includes(search.toLowerCase())">
```

Once there are 5+ downloads, the presentation may not look as nice and we may need to implement a container inside the mat-card that supports scrolling.
