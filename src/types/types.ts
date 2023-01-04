export interface ICommonPast {
    name?: string
    stylees?: React.CSSProperties
    children?: React.ReactNode
}

export interface ICommonImage extends ICommonPast {
    path: string
}