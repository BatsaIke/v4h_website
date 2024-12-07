export const isProd = process.env.NODE_ENV === "production";
export const thePORT = isProd ? 7456 : 7458;
export const remoteAddress = "https://diniubire.ro";
export const remoteAddressLocal = `http://localhost:${thePORT}`;
export let destination: string = isProd ? "https://diniubire.ro" : remoteAddressLocal;
