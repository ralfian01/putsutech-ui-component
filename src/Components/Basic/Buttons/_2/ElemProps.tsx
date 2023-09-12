import { RiUploadCloud2Line, RiLoader4Line } from 'react-icons/ri';

/**
 * 
 * Button level
 * @enum {string}
 */
export enum ButtonLevel {
    /** Primary level - Default */
    Primary = 'primary',

    /** Secondary level */
    Secondary = 'secondary',

    /** Secondary level in black and white */
    SecondaryBW = 'secondary-bw',

    /** Secondary level in flat */
    SecondaryFlat = 'secondary-flat'
}

/**
 * Button type
 * @enum {string}
 */
export enum ButtonType {
    /** Regular type - Default */
    Regular = 'regular',

    /** Circle type */
    Circle = 'circle',

    /** Capsule type */
    Capsule = 'capsule'
}

/**
 * Button size
 * @enum {string}
 */
export enum ButtonSize {
    /** Extra small size */
    ExtraSmall = 'extsm',
    
    /** Small size */
    Small = 'sm',

    /** Normal size - Default */
    Normal = 'normal',

    /** Big size */
    Big = 'big',

    /** Extra big size */
    ExtraBig = 'extbig'
}

/**
 * 
 * Button Icon
 */
export enum ButtonIcon {
    Upload,
    Loader,
  }
  
  export const ButtonIcons = {
    [ButtonIcon.Upload]: <RiUploadCloud2Line />,
    [ButtonIcon.Loader]: <RiLoader4Line />,
  };