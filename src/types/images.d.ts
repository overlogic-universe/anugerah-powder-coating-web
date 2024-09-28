// This type is used so that Next.js recognizes the jpg image extension.
declare module "*.jpg" {
    const value: Image;
    export default value;
}

// This type is used so that Next.js recognizes the png image extension.
declare module "*.png" {
    const value: Image;
    export default value;
}