import os

replacements = {
    'cyan-400': 'blue-400',
    'cyan-500': 'blue-500',
    'cyan-300': 'blue-300',
    'cyan-600': 'blue-500',
    'purple-400': 'indigo-400',
    'purple-500': 'indigo-500',
    'purple-600': 'indigo-500',
    'cyan-900': 'blue-900',
    'purple-900': 'indigo-900',
    'cyan-200': 'blue-500/50',
    'cyan-100': 'blue-500/30',
    'cyan-50': 'blue-900/20',
    'purple-100': 'indigo-500/30',
    'purple-50': 'indigo-900/20'
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

components_dir = 'src/components'
for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))
