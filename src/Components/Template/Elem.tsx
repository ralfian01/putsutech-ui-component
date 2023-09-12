import React from 'react';  // Import library react. Jangan edit baris ini
import * as ElemProps from "./ElemProps"; // Import library ElemProps. Jangan edit baris ini
import "./Style.scss"; // Import stylesheet css. Jangan edit baris ini

// Export ElemProps
export { ElemProps }; // Jangan edit baris ini

// Atur property/atribut komponen yang boleh diisi
interface Props {  // Jangan edit baris ini
    style?: React.CSSProperties,    // Jangan edit baris ini.
                                    // Prop style adalah property bawaan yang wajib ditulis.
                                    // Object artinya style hanya boleh diisi oleh oleh nilai bertipe Object.

    children?: React.ReactNode,     // Jangan edit baris ini.
                                    // Prop children adalah property bawaan yang wajib ditulis.
                                    // ReactNode artinya children hanya boleh diisi oleh oleh nilai bertipe  ReactNode.

    className?: string,             // Jangan edit baris ini.
                                    // Prop className adalah property bawaan yang wajib ditulis.
                                    // String artinya className hanya boleh diisi oleh nilai bertipe String.

    // ### Additional props
    prop1?: ElemProps.Prop1,        // Property/atributnya prop1 adalah property tambahan.
                                    // ElemProps.Prop1 artinya prop1 hanya bisa diisi oleh nilai bertipe  Prop1.
                                    // Tanda (?) artinya tidak wajib diisi.

    prop2: ElemProps.Prop2|null,    // Property/atributnya prop2 adalah property tambahan.
                                    // ElemProps.Prop2 artinya prop2 hanya bisa diisi oleh nilai bertipe Prop2.
                                    // Tidak anda tanda (?) artinya property wajib diisi.
};

// Atur nilai bawaan untuk property
const defaultProps: Props = {   // Jangan edit baris ini.
    style: {},                       // Jika style tambahan kosong, maka akan diisi oleh object kosong.
    className: '',                   // Jika className tambahan kosong, maka akan diisi oleh string kosong.
    prop1: ElemProps.Prop1.Enum1,    // Jika prop1 kosong, maka akan diisi oleh nilai dari ElemProps.Prop1.Enum1.
    prop2: ElemProps.Prop2.Enum1,    // Jika prop2 kosong, maka akan diisi oleh nilai dari ElemProps.Prop2.Enum1.
}

/**
 * UI Component
 * @param {Props} props - Component properties
 * @param {React.CSSProperties} props.style - Component style
 * @param {string} props.className - Component className
 * @param {Prop1.Enum1} props.prop1 - Prop1
 * @param {Prop2.Enum1} props.prop2 - Prop2
 */
const Component: React.FC<Props> = (props: Props) => {  // Jangan edit baris ini
    
    // Atur class bawaan
    const initialClass = `class-component css-${props.prop1} css-${props.prop2}`;
    const initialStyle = {};

    // Menggabungkan kelas bawaan dan kelas tambahan
    const componentClass = `${initialClass} ${props.className}`; // Jangan edit baris ini

    // Menggabungkan stylesheet bawaan dengan stylesheet tambahan
    const componentStyle = Object.assign(initialStyle, props.style); // Jangan edit baris ini

    // Komponennya
    return (
        <div
            className={componentClass}
            style={componentStyle}
        >
            {props.children}
        </div>
    );
};

// Aplikasinya nilai bawaan untuk property disini
Component.defaultProps = defaultProps; // Jangan edit baris ini

export default Component;  // Export komponennya. Jangan edit baris ini