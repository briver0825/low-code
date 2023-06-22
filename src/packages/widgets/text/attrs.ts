export const attrs = [
    {
        key: 'fontSize',
        name: '字号',
        type: 'input',
        group: 'style',
    },
    {
        key: 'color',
        name: '文字颜色',
        type: 'color',
        group: 'style',
    },
    {
        key: 'textAlign',
        name: '文字对齐方式',
        type: 'select',
        group: 'style',
        options: [
            {
                label: '左对齐',
                value: 'left',
            },
            {
                label: '居中对齐',
                value: 'center',
            },
            {
                label: '右对齐',
                value: 'right',
            },
        ],
    },
]
