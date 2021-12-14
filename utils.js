export function snapshot(...domes) {
    return Promise.all(domes.filter(dom => !!dom).map(dom => html2canvas(dom, {
        logging: false, // 关闭日志输出
        allowTaint: false, // 不允许跨域的图片污染canvas(taint canvas是不允许提取出数据的)
        removeContainer: true, // 清理拷贝的文档
        useCORS: false, // 尝试用cors加载域外图片
        scale: window.devicePixelRatio,
        ignoreElements: (node) => {
            // 忽略宽或高为0的元素，这些元素在android下面会报 InvalidStateError: CanvasRenderingContext2D.createPattern: Passed-in
            // canvas has width 0
            const styles = window.getComputedStyle(node)
            const width = parseInt(styles.width)
            const height = parseInt(styles.height)
            return width === 0 || height === 0
        },
    }))).then(canvases => {
        // 创建一个新的canvas
        const canvas = document.createElement('canvas')

        // 宽度求最大值
        canvas.width = canvases.reduce((max, canvas) => Math.max(max, canvas.width), 0)
        // 高度求总和
        canvas.height = canvases.reduce((total, canvas) => total + canvas.height, 0)

        const context = canvas.getContext('2d')
        let y = 0
        canvases.forEach(canvas => {
            context.drawImage(canvas, 0, y, canvas.width, canvas.height)
            y += canvas.height
        })
        return canvas
    })
}
