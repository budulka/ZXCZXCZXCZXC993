class PaginationHelper {
    constructor(items, itemsOnPage) {
        this.items = items;
        this.itemsOnPage = itemsOnPage;
    }

    pageCount() {
        return Math.ceil(this.items.length / this.itemsOnPage);
    }
    itemCount() {
        return this.items.length;
    }
    pageItemCount(page) {
        if (page < 0 || page > this.pageCount()) {
            return -1;
        }
        if (page < this.pageCount() - 1) {
            return this.itemsOnPage;
        } else if (page === this.pageCount() - 1) {
            return this.items.length % this.itemsOnPage === 0 ? this.itemsOnPage : this.items.length % this.itemsOnPage;
        }
        return -1;
    }
    pageIndex(item) {
        if (this.items.length < this.itemsOnPage && this.items.length === item || this.items.length < item)
        { return -1}
        if (item >= this.items.length || item < 0 || this.items.length === 0) {
            return -1;
        }

        return Math.floor(item / this.itemsOnPage);
    }
}
let c = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', 2, 4, 6, 3, 1, 6, 8, 3, 5, 8, 0, 5, 7 ,9 ,2, 4, 6, 8], 10);
console.log(c.pageCount(), c.itemCount(), c.pageItemCount(1), c.pageIndex(40));