
export interface Tab {
    id: number,
    label : string
}

export interface Tabs extends Array<Tab>{}

export interface Data {
    apiUrl : string,
    id : string,
    isHosted : boolean,
    pillarId : string,
    pillarName : string,
    sectionId : string,
    sectionName : string,
    type : string,
    webPublicationDate : string,
    webTitle : string,
    webUrl : string,
}