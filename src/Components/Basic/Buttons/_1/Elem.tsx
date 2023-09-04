import "./Style.scss";

// Props yang tersedia
interface Props {
    type: ButtonType
};


// Enum untuk prop type
export enum ButtonType {
    A = 'a',
    B = 'b',
    C = 'c'
}

// Komponen
export function Button1(props: Props) {

    return (
        <button className={`button1${props.type}`}>
            Klik tombol
        </button>
    );
}