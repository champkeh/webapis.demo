const dataSource = {
    id: '1',
    value: '1',
    children: [
        {
            id: '2',
            value: '2',
            children: [
                {
                    id: '4',
                    value: '4',
                    children: []
                },
                {
                    id: '3',
                    value: '3',
                    children: [
                        {
                            id: '7',
                            value: '7',
                            children: []
                        },
                        {
                            id: '8',
                            value: '8',
                            children: [
                                {
                                    id: '9',
                                    value: '9',
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: '5',
            value: '5',
            children: [
                {
                    id: '6',
                    value: '6',
                    children: []
                }
            ]
        }
    ]
}

function findIdPath(targetId, node, chain) {
    if (node.id === targetId) {
        throw chain
    }

    const link = {id: node.id, chain: chain}
    node.children.forEach(child => {
        findIdPath(targetId, child, link)
    })
}

function printIdPath(result) {
    const path = []
    while (result) {
        path.push(result.id)
        result = result.chain
    }
    console.log(path.join('->'))
}

try {
    findIdPath('7', dataSource, null)
} catch (result) {
    printIdPath(result)
}

