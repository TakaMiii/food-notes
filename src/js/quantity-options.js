const quantitySm = [];
const quantityMd = [];

for(let i=10; i<501; i+=10) {
  quantitySm.push(i);
}

for(let i=0.5; i<8.5; i+=0.5) {
  quantityMd.push(i);
}

export {quantitySm, quantityMd};