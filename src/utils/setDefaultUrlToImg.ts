export const setDefaultUrlToImg = (img?: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${img}`;
};
