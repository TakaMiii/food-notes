const grains:{value: string, label: string}[] = [
  {
    value: 'rice',
    label: '米',
  },
  {
    value: 'noodle',
    label: '麵',
  },
  {
    value: 'bread',
    label: '麵包',
  },
  {
    value: 'wheat',
    label: '小麥',
  }, {
    value: 'corn',
    label: '玉米',
  }, {
    value: 'potato',
    label: '馬鈴薯',
  }, {
    value: 'sweet-potato',
    label: '蕃薯',
  }, {
    value: 'pumpkin',
    label: '南瓜',
  },
];

function mockGrainsApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(grains);
    }, 2000);
  });
}

async function getGrains() {
  const options = await mockGrainsApi() as {value: string, label: string}[];
  return options;
}

export {getGrains};