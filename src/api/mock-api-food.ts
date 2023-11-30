type foodInfo = {
    id: string,
    unit: string,
    label: string,
    group: string
};

const data: foodInfo[] = [
    {
        id: 'rice',
        unit: '碗',
        label: '米',
        group: 'grain'
    },
    {
        id: 'noodle',
        unit: '碗',
        label: '麵',
        group: 'grain'
    },
    {
        id: 'bread',
        unit: '片',
        label: '麵包',
        group: 'grain'
    },
    {
        id: 'wheat',
        unit: '碗',
        label: '小麥',
        group: 'grain'
    },
    {
        id: 'corn', unit: '個',
        label: '玉米',
        group: 'grain'
    },
    {
        id: 'potato', unit: '個',
        label: '馬鈴薯',
        group: 'grain'
    },
    {
        id: 'sweet-potato', unit: '個',
        label: '蕃薯',
        group: 'grain'
    },
    {
        id: 'pumpkin', unit: '個',
        label: '南瓜',
        group: 'grain'
    },
    {
        id: 'egg', unit: '個',
        label: '蛋',
        group: 'protein'
    },
    {
        id: 'beef', unit: 'g',
        label: '牛',
        group: 'protein'
    },
    {
        id: 'pork', unit: 'g',
        label: '豬',
        group: 'protein'
    },
    {
        id: 'chicken', unit: 'g',
        label: '雞',
        group: 'protein'
    },
    {
        id: 'duck', unit: 'g',
        label: '鴨',
        group: 'protein'
    },
    {
        id: 'broccoli', unit: 'g',
        label: '花椰菜',
        group: 'vegetable'
    },
    {
        id: 'cabbage', unit: 'g',
        label: '高麗菜',
        group: 'vegetable'
    },
    {
        id: 'spinach', unit: 'g',
        label: '菠菜',
        group: 'vegetable'
    },
    {
        id: 'tomato', unit: 'g',
        label: '番茄',
        group: 'vegetable'
    },
    {
        id: 'apple', unit: '個',
        label: '蘋果',
        group: 'fruit'
    },
    {
        id: 'banana', unit: '個',
        label: '菠菜',
        group: 'fruit'
    },
    {
        id: 'orange', unit: '個',
        label: '橘子',
        group: 'fruit'
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

async function getFoodOptionsByFoodGroup(groupName: string) {
    if (groupName === 'grain') {
        const options = await mockGrainsApi() as { value: string, label: string }[];
        return options;
    } else if (groupName === 'protein') {
        const options = await mockProteinsApi() as { value: string, label: string }[];
        return options;
    }
}

async function getFoodOptionsByFoodLabel(text: string) {
    const options = data.filter(food => food.label.match(`${text}`));
    return options;
}


export {getFoodOptionsByFoodGroup, getFoodOptionsByFoodLabel};