export function dataURLtoBlob(dataURL: string) {
  const binary = atob(dataURL.split(',')[1]);
  const array = [];
  let i = 0;
  const len = binary.length;
  while (i < len) {
    array.push(binary.charCodeAt(i));
    i++;
  }
  return new Blob([new Uint8Array(array)], {
    type: 'image/png'
  });
}
