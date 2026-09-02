import os

replacements = {
    '#00f0ff': '#3b82f6',
    '#b000ff': '#6366f1',
    '#0ea5e9': '#2563eb',
    '#06b6d4': '#3b82f6',
    '#8b5cf6': '#6366f1'
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

files = [
    'src/App.jsx',
    'src/components/3d/Universe.jsx',
    'src/components/3d/HeroObject.jsx',
    'src/components/3d/SkillConstellation.jsx'
]
for f in files:
    if os.path.exists(f):
        process_file(f)
