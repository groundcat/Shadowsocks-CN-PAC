import requests
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from tldextract import extract

# Specify the path to the ChromeDriver binary
chromedriver_path = './chromedriver'  # Update this to your Chromedriver path

# Create a set to store domains
domains = set()

# Read the URLs from the file
with open("websites.txt", "r") as file:
    for line in file:
        domains.add(line.strip())

# Read the whitelist domains from the file
with open("whitelist.txt", "r") as file:
    whitelist_domains = set(line.strip() for line in file)

# Set up Selenium
options = webdriver.ChromeOptions()
options.add_argument('--headless')

service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=options)

# Set timeout for page load
driver.set_page_load_timeout(20)  # set timeout to 20 seconds

# For each URL
for url in list(domains):
    print(f"Checking {url}")
    try:
        driver.get("http://" + url)
    except Exception as e:
        # If the page load fails, try with 'www.' prefix
        try:
            driver.get("http://www." + url)
        except Exception as e:
            print(f"Both http://{url} and http://www.{url} timed out. Skipping.")
            continue
    soup = BeautifulSoup(driver.page_source, "html.parser")
    for link in soup.find_all('a'):
        href = link.get('href')
        if href and urlparse(href).hostname:
            domains.add(urlparse(href).hostname)
            print(f"Found {urlparse(href).hostname} on {url}")

driver.quit()

# Extract the root domain
root_domains = set()
for domain in domains:
    tsd, td, tsu = extract(domain)  #subdomain, domain, suffix
    root_domain = '.'.join(part for part in [td, tsu] if part)
    if root_domain not in whitelist_domains:
        root_domains.add(root_domain)

# Write to file
with open("domains.txt", "w") as file:
    for domain in root_domains:
        file.write(domain + "\n")
