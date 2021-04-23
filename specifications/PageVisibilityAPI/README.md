# Page Visibility API

这个API对于节省系统资源及改善性能很有帮助，因为它可以在检测到页面不可见时暂停掉不必要的任务。

文档中说当切换到其他tab页，或者最小化浏览器窗口时，这个API会发送一个`visibilitychange`事件。

> 文档中特别指出，修改`iframe`的`display`属性并不会在这个`iframe`的document上触发该事件
