/**
 * ElemProps Button version 2
 */

import { RiUploadCloud2Line, RiLoader4Line } from "react-icons/ri"; //import remix icon upload and loader
import { FcGoogle } from "react-icons/fc"; //import google icon

/**
 *
 * Button level
 * @enum {string}
 */
export enum ButtonLevel {
    /** Primary level - Default */
    Primary = "primary",

    /** Secondary level */
    Secondary = "secondary",

    /** Secondary level in black and white */
    SecondaryBW = "secondary-bw",

    /** Secondary level in flat */
    SecondaryFlat = "secondary-flat",

    /** Disabled level */
    Disabled = "disabled",
}

/**
 * Button type
 * @enum {string}
 */
export enum ButtonType {
    /** Regular type - Default */
    Regular = "regular",

    /** Circle type */
    Circle = "circle",

    /** Capsule type */
    Capsule = "capsule",
}

/**
 * Button size
 * @enum {string}
 */
export enum ButtonSize {
    /** Extra small size */
    ExtraSmall = "extsm",

    /** Small size */
    Small = "sm",

    /** Normal size - Default */
    Normal = "normal",

    /** Big size */
    Big = "big",

    /** Extra big size */
    ExtraBig = "extbig",
}

/**
 * Button Icon
 * @enum {icon}
 */
export const ButtonIcon = {
    /** Upload icon */
    Upload: <RiUploadCloud2Line />,

    /** Loader icon */
    Loader: <RiLoader4Line />,

    /**Google icon */
    Google: <FcGoogle />,

}
