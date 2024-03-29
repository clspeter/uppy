const uploaderOptions = {
    language: 'zh-TW',
    list: {
        method: 'get',
        url: '',
        data: {},
        headers: { Authorization: 'Bearer ' },
        success: () => { },
        error: () => { },
    },
    upload: {
        method: 'post',
        url: '',
        data: {},
        headers: { Authorization: 'Bearer ' },
        success: () => { },
        error: () => { },
    },
    download: {
        method: 'get',
        url: '',
        data: {},
        headers: { Authorization: 'Bearer ' },
        success: () => { },
        error: () => { },
    },
    allowedFileTypes: ['pdf', 'jpg', 'png'],
    maxFileSize: 1024 * 1024 * 10,
    maxTotalFileSize: 1024 * 1024 * 100,
    maxNumberOfFiles: 10,
    minNumberOfFiles: 0,
    useReload: true,
    useEditor: true,
    pdfPreview: () => { },
    imagePreview: () => { },
  }