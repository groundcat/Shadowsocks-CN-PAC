# Shadowsocks-CN-PAC

Shadowsocks-CN-PAC is an open-source project aimed at creating rule sets for proxying traffic. 

This project is especially useful for overseas users, academics, and researchers who wish to access China-based websites or services that are geo-restricted, and also for users who want to proxy only part of their traffic to avoid exposing their IP address to China-based services.

## Key Features

1. **Multiple Rule Sets:** We provide rule sets compatible with various platforms such as Clash, PEPI, and PAC.

2. **Comprehensive Coverage:** Our rules not only cover root domains (e.g., baidu.com) but also their dependency domains (e.g., bdstatic.com).

3. **Targeted at Popular Services:** We aim to facilitate access to popular China-based services, making this project a valuable tool for anyone needing reliable access to such services.

## How to Use

Instructions for using this project will vary depending on your specific proxy application. We will provide an example here for the Clash rule set:

1. Download the Clash rule set from our repository.

    - [Clash](BackCN-Clash.yaml)

    - [PAC](BackCN-PAC.js)

    - [PEPI](BackCN-PEPI.txt)

2. Import the rule set into your Clash application.
3. Enable the rule set in the application settings.

More detailed instructions for parsing and generating rule sets are available in the `/parser` directory.

## Contributions

We welcome contributions! If you want to help us improve our rule sets, or if you have a new rule set that you'd like to share, please feel free to submit a pull request.

## Disclaimer

Please note that this project is meant for personal use only. Be aware of the rules and regulations regarding internet use in your own country and in China.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any issues or questions, please open an issue on GitHub. We will do our best to assist you.
