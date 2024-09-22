export default interface TableOfContentItem {
    name: string;
    url: string;
    children: Array<TableOfContentItem>;
}
