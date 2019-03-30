# Shadowsocks-Back-China-PAC

翻墙回国PAC规则

PAC file for Shadowsocks in purpose of reverse-proxy some Chinese websites

# 下载

[PAC](https://raw.githubusercontent.com/yzyjim/Shadowsocks-Back-China-PAC/master/Shadowsocks-Back-CN-PAC.js)

[PEPI](https://raw.githubusercontent.com/yzyjim/Shadowsocks-Back-China-PAC/master/Shadowsocks-Back-CN-PEPI.txt)

# 在Shadowsocks/ShadowsocksR客户端中使用

[下载 Mac OS X 客户端](https://github.com/shadowsocks/shadowsocks-iOS/wiki/Shadowsocks-for-OSX-Help)

[下载 Windows 客户端](https://github.com/shadowsocksrr/shadowsocksr-csharp/releases)

以 Mac OS X 为例，运行客户端并连接服务器，点击小飞机图标，选择PAC自动代理模式。

访问路径 `~/.ShadowsocksX-NG/gfwlist.js`

在弹出的文件夹中，将`gfwlist.js`文件备份，然后编辑，用[Shadowsocks-Back-CN-PAC.js](https://github.com/yzyjim/Shadowsocks-Back-China-PAC/blob/master/Shadowsocks-Back-CN-PAC.js)中的内容替换`gfwlist.js`中的内容。
