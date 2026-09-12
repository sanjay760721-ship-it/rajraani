import re, io, sys, urllib.request

def clean(t):
    t = re.sub(r'<script.*?</script>',' ',t,flags=re.S)
    t = re.sub(r'<style.*?</style>',' ',t,flags=re.S)
    t = re.sub(r'<[^>]+>',' ',t)
    for a,b in [('&amp;','&'),('&nbsp;',' '),('&#39;',"'"),('&quot;','"'),('&#x27;',"'")]:
        t=t.replace(a,b)
    return re.sub(r'\s+',' ',t).strip()

for slug in sys.argv[1:]:
    html = urllib.request.urlopen('http://localhost:8080/pages/'+slug).read().decode('utf8','replace')
    i = html.find('<article')
    j = html.find('</article>')
    art = html[i:j]
    print('#'*70); print('#', slug); print('#'*70)
    # split on top-level sections/headers/figures
    for m in re.finditer(r'<(section|header|figure|div)\b[^>]*>', art):
        pass
    blocks = re.split(r'(?=<(?:section|header|figure)\b)', art)
    for b in blocks:
        if not b.strip().startswith('<'): continue
        heads=[clean(h) for h in re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', b, re.S)]
        paras=[clean(p) for p in re.findall(r'<p[^>]*>(.*?)</p>', b, re.S)]
        paras=[p for p in paras if len(p)>2]
        imgs=len(re.findall(r'<img', b))
        iframe='<iframe' in b
        if not (heads or paras or imgs or iframe): continue
        tag=re.match(r'<(\w+)', b).group(1)
        print(f"\n[{tag}] imgs={imgs}{' MAP' if iframe else ''}")
        for h in heads[:4]: print(f"    H: {h[:100]}")
        for p in paras[:8]: print(f"    p({len(p)}): {p[:130]}")
