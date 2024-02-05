export const getSizes = (images: any) => {
  let sizes: any = [];

  images.forEach((image: any) => {
    const width = image.offsetWidth;
    const height = image?.offsetHeight;
    sizes.push({
      width,
      height,
    });
  });
  return sizes;
};
