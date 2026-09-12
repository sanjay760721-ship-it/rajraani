import re, io, sys, json

SKIP = re.compile(r'header|mega-menu|announcement|filter-menu|top-bar|popup|newsletter|icon-bar', re.I)

def clean(t):
    t = re.sub(r'<script.*?</script>', ' ', t, flags=re.S)
    t = re.sub(r'<style.*?</style>', ' ', t, flags=re.S)
    t = re.sub(r'<[^>]+>', ' ', t)
    for a,b in [('&amp;','&'),('&nbsp;',' '),('&#39;',"'"),('&quot;','"'),('&rsquo;','\u2019'),('&ldquo;','"'),('&rdquo;','"')]:
        t = t.replace(a,b)
    return re.sub(r'\s+',' ',t).strip()

def sections(html):
    """Split on top-level shopify-section wrappers, in document order."""
    out=[]
    for m in re.finditer(r'<(div|section)[^>]*id="(shopify-section-[^"]+)"[^>]*class="([^"]*)"', html):
        out.append((m.start(), m.group(2), ' '.join(m.group(3).split())))
    res=[]
    for i,(pos,sid,cls) in enumerate(out):
        end = out[i+1][0] if i+1 < len(out) else len(html)
        res.append((sid, cls, html[pos:end]))
    return res

def kind(cls):
    for k in ['image-with-text-overlay','image-with-text','rich-text','gallery-with-text','gallery',
              'slideshow-with-text','slideshow','contact-section','FAQ','page-main','map-section',
              'heading-section','divider-section','html-section','custom-html','banner','page-details']:
        if k.lower() in cls.lower(): return k
    return cls.split()[0] if cls else '?'

def report(path):
    html = io.open(path, encoding='utf-8', errors='replace').read()
    print('#'*70); print('#', path); print('#'*70)
    for sid, cls, body in sections(html):
        if SKIP.search(sid): continue
        k = kind(cls)
        if k in ('page-details',) and 'block__' in cls:
            k = kind(cls.split('block__')[1])
        heads = [clean(h) for h in re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', body, re.S)]
        paras = [clean(p) for p in re.findall(r'<p[^>]*>(.*?)</p>', body, re.S)]
        paras = [p for p in paras if len(p) > 2]
        imgs  = re.findall(r'data-aspectratio="([^"]+)"', body)
        ctas  = [clean(a) for a in re.findall(r'<a[^>]*class="[^"]*(?:button|btn|cta)[^"]*"[^>]*>(.*?)</a>', body, re.S)]
        rev   = 'row-reverse' in body
        print(f"\n[{k}]{'  IMAGE-LEFT' if rev else ''}  imgs={imgs}")
        for h in heads[:4]: print(f"    H: {h[:100]}")
        for p in paras[:8]: print(f"    p({len(p)}): {p[:150]}")
        for c in ctas[:3]:  print(f"    CTA: {c[:50]}")

for f in sys.argv[1:]: report(f)
