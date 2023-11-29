type foodInfo = {
    value: { id: string, unit: string },
    label: string,
    group: string
};

const data: foodInfo[] = [
    {
        value: {id: 'rice', unit: '碗'},
        label: '米',
        group: 'grain'
    },
    {
        value: {id: 'noodle', unit: '碗'},
        label: '麵',
        group: 'grain'
    },
    {
        value: {id: 'bread', unit: '片'},
        label: '麵包',
        group: 'grain'
    },
    {
        value: {id: 'wheat', unit: '碗'},
        label: '小麥',

        group: 'grain'
    },
    {
        value: {id: 'corn', unit: '個'},
        label: '玉米',
        group: 'grain'
    },
    {
        value: {id: 'potato', unit: '個'},
        label: '馬鈴薯',
        group: 'grain'
    },
    {
        value: {id: 'sweet-potato', unit: '個'},
        label: '蕃薯',
        group: 'grain'
    },
    {
        value: {id: 'pumpkin', unit: '個'},
        label: '南瓜',
        group: 'grain'
    },
    {
        value: {id: 'egg', unit: '個'},
        label: '蛋',
        group: 'protein'
    },
    {
        value: {id: 'beef', unit: 'g'},
        label: '牛',
        group: 'protein'
    },
    {
        value: {id: 'pork', unit: 'g'},
        label: '豬',
        group: 'protein'
    },
    {
        value: {id: 'chicken', unit: 'g'},
        label: '雞',
        group: 'protein'
    },
    {
        value: {id: 'duck', unit: 'g'},
        label: '鴨',
        group: 'protein'
    }
];


function mockGrainsApi() {
    return new Promise((resolve) => {
        const grains = data.filter(food => food.group === 'grain');
        setTimeout(() => {
            resolve(grains);
        }, 2000);
    });
}

function mockProteinsApi() {
    return new Promise((resolve) => {
        let proteins = data.filter(food => food.group === 'proteins');
        setTimeout(() => {
            resolve(proteins);
        }, 2000);
    });
}

async function getFoodOptions(groupName: string) {
    if (groupName === 'grain') {
        const options = await mockGrainsApi() as { value: string, label: string }[];
        return options;
    }
    if (groupName === 'protein') {
        const options = await mockProteinsApi() as { value: string, label: string }[];
        return options;
    }
}

export {getFoodOptions};