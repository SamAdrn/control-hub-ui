export interface iProperty {
    name: string;
    label: string;
    type: string;
    default: any;
    required: boolean;
}

export interface iMetadata {
    name: string;
    namePlural: string;
    label: string;
    labelPlural: string;
    keys: string[];
    sortBy: string[];
    properties: iProperty[];
}

export interface iPage {
    pageType: 'primary' | 'child' | 'relation';
    parent: iMetadata;
    description: string;
}

export interface iPrimaryPage extends iPage {
    pageType: 'primary';
}

export interface iChildPage extends iPage {
    pageType: 'child';
    child: iMetadata;
}

export interface iRelationPage extends iPage {
    pageType: 'relation';
    link: iMetadata;
}
