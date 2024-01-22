function decodeUplink(input) {
  data=input.bytes;
  final_data=[];
  var num;
  for(i = 0; i < data.length; i += 4){

  var buf = new ArrayBuffer(4);
  var view = new DataView(buf);
  

  // set bytes
  if(i<24){
  data.slice(i,i+4).reverse().forEach(function (b, i) {
    view.setUint8(i, b);
  });
  num = view.getFloat32(0);

  final_data.push(num)
  }else{
  data.slice(i,i+4).forEach(function (b, i) {
    view.setUint8(i, b);
  });
  num = view.getUint32(0);

  final_data.push(num)
    
  }
 }
 
 const dataObject = {
  lat: final_data[0],
  lng: final_data[1],
  alt: final_data[2],
  course: final_data[3],
  speed: final_data[4],
  sats: final_data[5],
  hdop: final_data[6],
  batteryVolt: final_data[7],
};
  return {
    data: {
      data: dataObject
    },
    warnings: [],
    errors: []
  };
}
