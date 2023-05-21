class DomainFilter:
    def __init__(self, domains_file, whitelist_file, output_file):
        self.domains_file = domains_file
        self.whitelist_file = whitelist_file
        self.output_file = output_file

    def filter_domains(self):
        with open(self.domains_file, 'r') as df:
            domains = df.read().splitlines()

        with open(self.whitelist_file, 'r') as wf:
            whitelist = wf.read().splitlines()

        filtered_domains = [domain for domain in domains if domain not in whitelist]

        with open(self.output_file, 'w') as of:
            for domain in filtered_domains:
                of.write(f"{domain}\n")

# Using the class
# df = DomainFilter('domains.txt', 'whitelist.txt', 'domains_filtered.txt')
# df.filter_domains()
