from pathlib import Path

p = Path("src/site/sections.jsx")
text = p.read_text(encoding="utf-8")
d = "motion.div"  # wrong
d = "div"

old_block = (
    f'            <{d} className="space-y-4 p-5">\n'
    f'              <{d} className="grid grid-cols-3 gap-3">\n'
    f'                {{mockup.stats.map((stat) => <{d} key={{stat}} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-xs text-slate-200">{{stat}}</{d}>)}}\n'
    f'              </{d}>'
)

new_block = (
    f'            <{d} className="space-y-4 p-4 sm:p-5">\n'
    f'              <{d} className="grid grid-cols-3 gap-1.5 sm:gap-3">\n'
    f'                {{mockup.stats.map((stat) => (\n'
    f'                  <{d}\n'
    f'                    key={{stat}}\n'
    f'                    className="flex min-h-[2.75rem] min-w-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-1 py-2 sm:min-h-[3rem] sm:rounded-2xl sm:px-2 sm:py-3"\n'
    f'                  >\n'
    f'                    <span className="block w-full break-words text-center text-[10px] font-medium leading-tight text-slate-200 sm:text-xs">{{stat}}</span>\n'
    f'                  </{d}>\n'
    f'                ))}}\n'
    f'              </{d}>'
)

if old_block not in text:
    raise SystemExit("OLD BLOCK NOT FOUND:\n" + repr(old_block[:120]))

p.write_text(text.replace(old_block, new_block, 1), encoding="utf-8")
print("done")
