import os

replacements = {
    'text-slate-800': 'text-white',
    'text-slate-700': 'text-gray-200',
    'text-slate-600': 'text-gray-300',
    'text-slate-500': 'text-gray-400',
    'text-slate-400': 'text-gray-500',
    'bg-slate-50': 'bg-slate-900/40',
    'bg-slate-100': 'bg-slate-800/50',
    'bg-slate-200': 'bg-slate-700/50',
    'border-white': 'border-white/10',
    'border-slate-100': 'border-white/5',
    'border-slate-200': 'border-white/10',
    'bg-white/70': 'bg-slate-900/40',
    'bg-white/60': 'bg-slate-900/40',
    'bg-white/50': 'bg-slate-900/20',
    'bg-white': 'bg-slate-800/40',
    'text-cyan-600': 'text-cyan-400',
    'text-cyan-700': 'text-cyan-300',
    'text-purple-600': 'text-purple-400',
    'bg-cyan-50': 'bg-cyan-900/30',
    'bg-purple-50': 'bg-purple-900/30',
    'border-cyan-100': 'border-cyan-500/30',
    'border-purple-100': 'border-purple-500/30',
    'shadow-sm': 'shadow-glow',
    'text-cyan-500': 'text-cyan-400',
    'border-slate-800': 'border-white/20',
    'bg-slate-800': 'bg-slate-800/80',
    'hover:bg-slate-200': 'hover:bg-slate-700/50',
    'hover:bg-slate-700': 'hover:bg-slate-700/80',
    'shadow-xl': 'shadow-glass',
    'shadow-2xl': 'shadow-glow',
    'shadow-md': 'shadow-glow',
    'shadow-lg': 'shadow-glow',
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
