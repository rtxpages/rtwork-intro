const QRCode = () => {
    // const html5QrCode = new Html5Qrcode("reader");
    var qrScanner =null;
    return {
        start: (reader,options,qrCodeSuccessCallback)=>{
            if(qrScanner==null){
                qrScanner = new QrScanner(
                    reader,
                    qrCodeSuccessCallback,
                    options
                );
            }
            
            qrScanner.start();

            // const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            //     /* handle success */
            // };
    
            // If you want to prefer front camera
            // html5QrCode.start(cameraOptions, config, qrCodeSuccessCallback);
            
            // This method will trigger user permissions
            // Html5Qrcode.getCameras().then(devices => {
            //     /**
            //      * devices would be an array of objects of type:
            //      * { id: "id", label: "label" }
            //      */
            //     if (devices && devices.length) {
            //         var cameraId = devices[0].id;
            //         html5QrCode.start(cameraOptions, config, qrCodeSuccessCallback);
            //     }
            // }).catch(err => {
            //     // handle err
            // });
            // If you want to prefer back camera
            // 
        },
        stop: ()=>{
            // html5QrCode.stop().then((ignore) => {
            //     // QR Code scanning is stopped.
            // }).catch((err) => {
            //     // Stop failed, handle it.
            // });
            qrScanner.stop();

        }

        
    }
    
}

