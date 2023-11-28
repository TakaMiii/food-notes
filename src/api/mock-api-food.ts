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

const proteins:{value: string, label: string}[] = [
  {
    value: 'beef',
    label: '牛',
  },
  {
    value: 'pork',
    label: '豬',
  },
  {
    value: 'chicken',
    label: '雞',
  }
]

function mockGrainsApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(grains);
    }, 2000);
  });
}

function mockProteinsApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(proteins);
    }, 2000);
  });
}
async function getFoodOptions(groupName:string) {
  if(groupName === 'grain') {
    const options = await mockGrainsApi() as {value: string, label: string}[];
    return options
  }
  if(groupName === 'protein') {
    const options = await mockProteinsApi() as {value: string, label: string}[];
    return options
  }

}

export {getFoodOptions};