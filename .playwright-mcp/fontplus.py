"""Add +2px to <p> font sizes between lg and 2xl (1024px to 1407px).

For every <p ... className="..."> with a static class string, compute the effective font-size at
lg / xl / 2xl from its text-[Npx] classes (falling back to the global p rule: 12px below 2xl,
14.4px at 2xl), then replace the lg/xl/2xl size tokens with
  lg:text-[(lg+2)px] xl:text-[(xl+2)px] 2xl:text-[2xl px]
so only lg..xl grow and 2xl+ is unchanged.

Usage: python fontplus.py [--write]
"""
import re, sys, glob, os

WRITE = '--write' in sys.argv
ROOT = 'D:/wamp/www/AI_Build/dsu-frontend/src'
ORDER = ['', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
GLOBAL_P = {'': 12, '2xl': 14.4, '3xl': 18}
NAMED = {'xs': 12, 'sm': 14, 'base': 16, 'lg': 18, 'xl': 20, '2xl': 24, '3xl': 30}

SIZE_TOKEN = re.compile(r'^(?:(sm|md|lg|xl|2xl|3xl):)?text-(?:\[(\d+(?:\.\d+)?)px\]|(xs|sm|base|lg|xl|2xl|3xl))$')


def parse(tokens):
    sizes = {}
    for t in tokens:
        m = SIZE_TOKEN.match(t)
        if not m:
            continue
        bp = m.group(1) or ''
        sizes[bp] = float(m.group(2)) if m.group(2) else float(NAMED[m.group(3)])
    return sizes


def effective(sizes, bp):
    val = None
    for b in ORDER:
        if ORDER.index(b) > ORDER.index(bp):
            break
        if b in sizes:
            val = sizes[b]
    if val is None:
        # fall back to the global p rule
        for b in ORDER:
            if ORDER.index(b) > ORDER.index(bp):
                break
            if b in GLOBAL_P:
                val = GLOBAL_P[b]
    return val


def fmt(v):
    return str(int(v)) if float(v).is_integer() else str(v)


def rewrite_classes(cls):
    tokens = cls.split()
    sizes = parse(tokens)
    e_lg, e_xl, e_2xl = effective(sizes, 'lg'), effective(sizes, 'xl'), effective(sizes, '2xl')
    keep = []
    for t in tokens:
        m = SIZE_TOKEN.match(t)
        if m and (m.group(1) in ('lg', 'xl', '2xl')):
            continue
        keep.append(t)
    keep += ['lg:text-[%spx]' % fmt(e_lg + 2), 'xl:text-[%spx]' % fmt(e_xl + 2), '2xl:text-[%spx]' % fmt(e_2xl)]
    return ' '.join(keep), (e_lg, e_xl, e_2xl)


P_STATIC = re.compile(r'(<p\b[^>]*?\bclassName=)"([^"]*)"', re.S)
changed_files = 0
changed_p = 0
skipped = []
for path in sorted(glob.glob(ROOT + '/**/*.jsx', recursive=True)):
    s = open(path, encoding='utf-8', newline='').read()
    crlf = '\r\n' in s
    t = s.replace('\r\n', '\n')

    def sub(m):
        global changed_p
        cls = m.group(2)
        if '${' in cls or 'sr-only' in cls or re.search(r'\bhidden\b', cls) and not re.search(r'(sm|md|lg|xl|2xl):', cls):
            skipped.append((path, cls[:60]))
            return m.group(0)
        new, eff = rewrite_classes(' '.join(cls.split()))
        changed_p += 1
        return m.group(1) + '"' + new + '"'

    t2 = P_STATIC.sub(sub, t)
    if t2 != t:
        changed_files += 1
        if WRITE:
            open(path, 'w', encoding='utf-8', newline='').write(t2.replace('\n', '\r\n') if crlf else t2)
print('p elements rewritten:', changed_p, 'in', changed_files, 'files; skipped:', len(skipped))
for p_, c in skipped[:10]:
    print('  skipped', os.path.relpath(p_, ROOT), '|', c)
