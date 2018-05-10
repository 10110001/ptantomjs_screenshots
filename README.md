# phantomJs

* PhantomJS是一个基于webkit的无界面浏览器。它使用QtWebKit作为它核心浏览器的功能，使用webkit来编译解释执行JavaScript代码。任何你可以在基于webkit浏览器做的事情，它都能做到。它不仅是个隐形的浏览器，提供了诸如CSS选择器、支持Web标准、DOM操作、JSON、HTML5、Canvas、SVG等，同时也提供了处理文件I/O的操作，从而使你可以向操作系统读写文件等。PhantomJS的用处可谓非常广泛，诸如网络监测、网页截屏、无需浏览器的 Web 测试、页面访问自动化等。

*本例是一个简单的用phantomJs实现的网页截图功能基于window系统

##配置phantomJs环境变量

*把phantomJs.exe程序所在的路径配置到全局环境变量中，就可以随处调用phantomajs命令来运行脚本

===

###网页截图

*phantomjs index.js www.XXXX.com
