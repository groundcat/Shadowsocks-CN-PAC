# Website Dependency Parser

This repository contains a set of scripts to parse websites and extract their dependency domains. The extracted domains can be used for various purposes such as generating rulesets for network filtering, blocking ads, or monitoring network traffic.

## Files

- `websites.txt`: This file contains a list of the top websites popular in China. The websites listed in this file will be visited by the Chrome driver for parsing their dependency domains.
- `parser.py`: This script utilizes the Chrome driver to visit the websites listed in `websites.txt` and extracts the dependency domains. These domains include CDNs and media domains that serve content for the websites.
- `whitelist.txt`: This file contains a list of domains that should never be included in the rule sets. Any domain listed in this file will be excluded from the generated rulesets.
- `remove_txt_duplicates.py`: This script removes duplicate entries from all text files in the repository, ensuring uniqueness of the entries.
- `generate_rules.py`: This script applies the whitelist from `whitelist.txt`, creates `domains_filtered.txt`, and generates Clash and PAC rulesets based on the filtered domains.

## Usage

1. Ensure you have the necessary dependencies installed. You will need:
   - Python 3.x
   - Selenium library
   - Chrome driver

2. Place the websites you want to parse in `websites.txt`, one URL per line.

3. Customize the whitelist in `whitelist.txt` if necessary. Add any domains that you want to exclude from the rule sets.

4. Run `parser.py` using the Python interpreter. This script will visit the websites using the Chrome driver, parse the dependency domains, and save the results in `domains.txt`.

5. Run `remove_txt_duplicates.py` to remove any duplicate entries from all text files in the repository. This step ensures uniqueness of the domains.

6. Run `generate_rules.py` to apply the whitelist, create `domains_filtered.txt`, and generate Clash and PAC rulesets. The rulesets will be generated based on the filtered domains, excluding the domains listed in the whitelist.

## Notes

- Make sure you have the Chrome driver executable in your system's PATH or provide the path to the driver in `parser.py`.
- It is recommended to regularly update the `websites.txt` file to ensure accurate parsing of the latest websites.
- The generated rulesets can be used with network filtering tools such as Clash or PAC (Proxy Auto-Configuration) to control access to specific domains.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your requirements.