export class ServiceItem{
    title:string
    slug:string
    category:string
    subcategory?:string
    type:string
    tileImage:string
    tileText:string
    images?: string[]
    recentInstallImages?: string[]
    video?:string
    colorSet?: string[]
    // For Products Only
    bullets?: string[]
    thumbImages?: string[]
    productOverview?:string
    technicalSpecs?:string
    options?:string
    relatedProducts?:string
    warranty?:string
    // For Services Only
    serviceImgCaption?:string
    textList?:string[]
}
