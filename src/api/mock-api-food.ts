type foodInfo = { value: {id: string, unit: string}, label: string };

const grains:foodInfo[] = [
  {
    value: {id: 'rice', unit: '碗'},
    label: '米',
  },
  {
    value: {id: 'noodle', unit: '碗'},
    label: '麵',
  },
  {
    value: {id: 'bread', unit: '片'},
    label: '麵包',
  },
  {
    value: {id: 'wheat',unit: '碗'},
    label: '小麥',

  },
  {
    value: {id: 'corn', unit: '個'},
    label: '玉米',
  },
  {
    value: {id: 'potato', unit: '個'},
    label: '馬鈴薯',
  },
  {
    value: {id: 'sweet-potato', unit: '個'},
    label: '蕃薯',
  },
  {
    value: {id: 'pumpkin', unit: '個'},
    label: '南瓜',
  },
];

const proteins:foodInfo[] = [
  {
    value: {id: 'egg', unit: '個'},
    label: '蛋',
  },
  {
    value: {id: 'beef', unit: 'g'},
    label: '牛',
  },
  {
    value: {id: 'pork', unit: 'g'},
    label: '豬',
  },
  {
    value: {id:'chicken', unit: 'g'},
    label: '雞',
  },
  {
    value: {id: 'duck', unit: 'g'},
    label: '鴨',
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