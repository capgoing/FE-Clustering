const imageImport = import.meta.glob('../../assets/images/navBar/*.png', { eager: true });

export const images = Object.keys(imageImport).reduce((acc, key) => {
    const path = key.replace('../../assets/images/navBar/', '').replace('.png', '');
    acc[path] = imageImport[key].default;
    return acc;
}, {});