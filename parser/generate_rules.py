import os

from apply_whitelist import DomainFilter

def read_domains(file_path='domains.txt'):
    """Read domains from a file and return as a set"""

    df = DomainFilter('domains.txt', 'whitelist.txt', 'domains_filtered.txt')
    df.filter_domains()

    with open('domains_filtered.txt', 'r') as file:
        filtered_domains = set(line.strip() for line in file if line.strip())

    return filtered_domains


def format_rules(domains, format_string):
    """Format the domains into the specified rule format"""
    return "\n".join(format_string.format(domain=domain) for domain in domains)


def generate_rule_files(domains, template_folder='../rule_templates'):
    """Generate rule files from templates using the given domains"""

    templates = {
        'clash.yaml': ('BackCN-Clash.yaml', '- DOMAIN-SUFFIX,{domain},PROXY'),
        'pac.js': ('BackCN-PAC.js', '  "||{domain}",'),
        'pepi.txt': ('BackCN-PEPI.txt', 'DOMAIN-SUFFIX,{domain},PROXY')
    }

    for filename, (output_name, rule_format) in templates.items():
        template_path = os.path.join(template_folder, filename)
        with open(template_path, 'r') as file:
            template = file.read()

        rules = format_rules(domains, rule_format)
        new_content = template.replace("{{clash-rules}}", rules)
        new_content = new_content.replace("{{pac-rules}}", rules)
        new_content = new_content.replace("{{pepi-rules}}", rules)

        output_path = os.path.join('..', output_name)
        with open(output_path, 'w') as file:
            file.write(new_content)


if __name__ == '__main__':
    domains = read_domains()
    generate_rule_files(domains)
