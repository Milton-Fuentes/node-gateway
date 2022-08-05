export class QueryRequest  {
    //Class<T> clazz;
    filter: any;
    sorted: any;
    paging: Paging;
    public constructor(paging?: IPaging, sorted?: any, filter?: any) {
        this.paging = new Paging(paging);
        this.sorted = sorted ?? {};
        this.filter = filter ?? {};
    }

}

interface IPaging {
    startIndex: number;
    maxResults: number;
}

export class Paging {
    public startIndex: number;
    public maxResults: number;
    constructor(obj?: IPaging) {
        this.startIndex = obj?.startIndex ?? 0;
        this.maxResults = obj?.maxResults ?? 0;
    }
    public getStartIndex() {
        return this.startIndex;
    }
    public setStartIndex(startIndex: number) {
        this.startIndex = (startIndex > 0) ? startIndex : 0;
    }
    public getMaxResults() {
        return this.maxResults;
    }
    public setMaxResults(maxResults: number) {
        this.maxResults = maxResults;
    }

    public Paging(obj: IPaging) {
        this.startIndex = (obj.startIndex > 0) ? obj.startIndex : 0;
        this.maxResults = obj.maxResults;
    }

}


