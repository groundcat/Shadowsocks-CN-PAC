def remove_duplicates(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()

    lines = list(set(lines))

    with open(filename, 'w') as file:
        file.writelines(lines)

# Remove duplicates from domains.txt
remove_duplicates('domains.txt')

# Remove duplicates from whitelist.txt
remove_duplicates('whitelist.txt')
