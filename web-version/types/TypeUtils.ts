export type TypeJoinData = "category" | "product" | "image";

export interface FooterButtonProps {
    label: string;
    variant: "primary" | "secondary" | "danger";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    isSubmit?: boolean;
}