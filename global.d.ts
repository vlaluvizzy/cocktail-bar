interface Window {
    fetch: typeof fetch;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
