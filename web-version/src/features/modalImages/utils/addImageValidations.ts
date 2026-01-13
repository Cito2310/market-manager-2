import { UseFormRegister } from "react-hook-form";

interface props {
    register: UseFormRegister<{ name: string }>;
}

export const addImageValidations = ({ register }: props) => {
    const registerName = register("name", {
        required: "El nombre de la imagen es obligatorio",
        minLength: { value: 2, message: "El nombre de la imagen debe tener al menos 2 caracteres" },
        maxLength: { value: 30, message: "El nombre de la imagen no debe exceder los 30 caracteres" },
    });    
}