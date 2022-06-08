import http from "../http-common";

class FileService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  download(file) {
    return http.get(`/files/${file}.pdf`, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      responseType: 'blob' 
    })
  }

  show(file) {
    return http.get(`/images/${file}.jpg`, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      responseType: 'blob' 
    })
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new FileService();
