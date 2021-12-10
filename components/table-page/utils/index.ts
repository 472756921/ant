/* eslint-disable import/prefer-default-export */
export const randomNumber: number = () => Math.floor(Math.random() * 1000);
export const encodeUrl: string = url => {
  const lastIndex = url.lastIndexOf('/');
  const filePath = url.substring(0, lastIndex + 1);
  const fileName = url.substring(lastIndex + 1);
  return filePath + encodeURIComponent(fileName);
};
export const fileTypeMap: string = (name: string) => {
  const fileType = name.substring(name.lastIndexOf('.'), name.length);
  const word = '.doc.docx';
  const excel = '.xls.xlsx';
  const ppt = '.ppt.pptx';
  const txt = '.txt';
  const pdf = '.pdf';
  const image = '.jpg,.jpeg,.png,.gif,.JPG,.JPEG,.PNG,.GIF';
  const compression = '.rar.zip.cab.7z.ace.arj.bz2.gz.lha.lzh.taz.tgz.xz.txz';
  if (word.indexOf(fileType) !== -1) {
    return 'word';
  }
  if (excel.indexOf(fileType) !== -1) {
    return 'excel';
  }
  if (ppt.indexOf(fileType) !== -1) {
    return 'ppt';
  }
  if (pdf.indexOf(fileType) !== -1) {
    return 'pdf';
  }
  if (txt.indexOf(fileType) !== -1) {
    return 'txt';
  }
  if (image.indexOf(fileType) !== -1) {
    return 'image';
  }
  if (compression.indexOf(fileType) !== -1) {
    return 'compression';
  }
  return 'unknown';
};
