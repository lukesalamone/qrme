
console.log('hi')

var qrmeFrameId = 'qrme-frame';
var url = window.location.href;

// build frame to display

var frame = document.createElement('div');
var canvas = document.createElement('canvas');

canvas.width = 360;
canvas.height = 360;

frame.id = qrmeFrameId;
frame.appendChild(canvas);
frame.onclick = onFrameClicked;

document.body.appendChild(frame);
drawQrCodeForUrl(url, canvas);


///////////////////////////////////////////////////////////////////////////////

function drawQrCodeForUrl(url, canvas){
    let ecl = qrcodegen.QrCode.Ecc.HIGH;
    let segs = qrcodegen.QrSegment.makeSegments(url);

    var qr = qrcodegen.QrCode.encodeSegments(segs, ecl, 1, 40, -1, true);
    qr.drawCanvas(8, 4, canvas);
    canvas.style.removeProperty("display");
}

function onFrameClicked(event){
    let element = document.getElementById(qrmeFrameId);
    element.parentNode.removeChild(element);
}
