import { encode } from "@jsquash/avif";
import imageCompression from "browser-image-compression"


// -- FUNCION PARA DESCARGAR ARCHIVOS --
export const downloadBlob = (blob: any, filename: any) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
};


// -- FUNCION PARA DESCARGAR TXT --
export const downloadTxtFile = (content: string, filename: string = "archivo.txt") => {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}


// -- FUNCION PARA CONVERTIR AVIF A DATA URL (Base64) --
export const avifBlobToDataUrl = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}


// -- FUNCION PARA CONVERTIR BLOB A ImageData --
export const blobToImageData = async (blob: any) => {
    const bitmap = await createImageBitmap(blob);

    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx: any = canvas.getContext("2d");

    ctx.drawImage(bitmap, 0, 0);

    return ctx.getImageData(0, 0, bitmap.width, bitmap.height);
};


// -- FUNCION PARA CONVERTIR BLOB A AVIF BLOB --
export const blobToAvifBlob = async (blob: any) => {
    const img = await blobToImageData(blob);

    const avifBuffer = await encode(img); // quality: 0-100

    return new Blob([avifBuffer], { type: 'image/avif' });
};


// -- FUNCION DE COMPRESION DE IMAGEN --
export const compressionImage = async (imageFile: any) => {
    const options = {
            maxSizeMB: 0.05,
            maxWidthOrHeight: 500,
            useWebWorker: true,
            alwaysKeepResolution: false,
    }

    return await imageCompression(imageFile, options);
};


// -- FUNCION DE ARCHIVO A BASE64 --
export const fileToBase64 = async (imageFile: File): Promise<string> => {
  const compressedFile = await compressionImage(imageFile);
  const avifBlob = await blobToAvifBlob(compressedFile);
  const base64 = await avifBlobToDataUrl(avifBlob);

  return base64;
}