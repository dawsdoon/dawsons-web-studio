from pathlib import Path
ROOT = Path(r"c:\Users\sshad\Desktop\WebDev\src")
lines = (ROOT / "site" / "sections.jsx").read_text(encoding="utf-8").splitlines(keepends=True)
icons = "".join(lines[8:188])
(ROOT / "components" / "icons.jsx").write_text(
    'import React from "react";\n\n' + icons +
    "\nexport {\n  ArrowRightIcon, CheckCircleIcon, GlobeIcon, ShieldCheckIcon, WrenchIcon,\n"
    "  RocketIcon, MailIcon, PhoneIcon, CodeIcon, SparkIcon, ServerIcon,\n"
    "  ChartIcon, ZapIcon, LockIcon, LayersIcon, ActivityIcon, StudioLogoIcon,\n};\n",
    encoding="utf-8",
)
print("ok")
