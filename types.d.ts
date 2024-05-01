type IndustryIdentifier = {
    type: string;
    identifier: string;
};

type ReadingModes = {
    text: boolean;
    image: boolean;
};

type PanelizationSummary = {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
};

type ImageLinks = {
    smallThumbnail: string;
    thumbnail: string;
    small: string
    medium: string
    large: string
    extraLarge: string
};

type VolumeInfo = {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
};

type SaleInfo = {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice?: {
        amount: number,
        currencyCode: string
    },
    retailPrice?: {
        amount: number,
        currencyCode: string
    },
    buyLink?: string
};

type Epub = {
    isAvailable: boolean;
    acsTokenLink: string;
};

type Pdf = {
    isAvailable: boolean;
};

type AccessInfo = {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
};

type SearchInfo = {
    textSnippet: string;
};

export type Book = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
};
