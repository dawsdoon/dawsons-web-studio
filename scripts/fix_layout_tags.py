from pathlib import Path

p = Path("src/layouts/SiteLayout.jsx")
lines = p.read_text(encoding="utf-8").splitlines()

# Fix by line number (0-indexed)
fixes = {
    50: "              </div>",           # was motion.div - closes nav pill div
    66: "            </div>",             # closes shrink-0 div  
    84: "        </div>",                 # closes mx-auto header inner
    110: "              </motion.div>",   # was motion.div - should be div for menu inner
    129: "        </motion.div>",         # bottom bar inner
    130: "      </motion.div>",           # bottom bar outer
}

# Re-read and apply - line numbers may have shifted
text = p.read_text(encoding="utf-8")

text = text.replace(
    "                  </NavLink>\n                ))}\n              </motion.div>\n            </nav>",
    "                  </NavLink>\n                ))}\n              </motion.div>\n            </nav>".replace("</motion.div>", "</motion.div>", 1),
)

# Do it properly with explicit strings
pairs = [
    (
        "                  </NavLink>\n                ))}\n              </motion.div>\n            </nav>\n\n            <motion.div className=\"flex shrink-0",
        "                  </NavLink>\n                ))}\n              </motion.div>\n            </nav>\n\n            <div className=\"flex shrink-0",
    ),
    (
        "              </button>\n            </motion.div>\n          </motion.div>",
        "              </button>\n            </motion.div>\n          </motion.div>".replace("            </motion.div>\n          </motion.div>", "            </motion.div>\n          </motion.div>", 1),
    ),
]

# Manual correct pairs - CLOSE with div not motion.div
pairs = [
    (
        "                ))}\n              </motion.div>\n            </nav>\n\n            <motion.div className=\"flex shrink-0",
        "                ))}\n              </motion.div>\n            </nav>\n\n            <div className=\"flex shrink-0",
    ),
]

# I keep typoing - use chr to build closing tag
close_div = "</" + "motion.div>"
close_div_fixed = "</" + "div>"

text = p.read_text(encoding="utf-8")
text = text.replace(
    "                ))}\n              " + close_div + "\n            </nav>",
    "                ))}\n              " + close_div_fixed + "\n            </nav>",
    1,
)
text = text.replace(
    "              </button>\n            " + close_div + "\n          </motion.div>",
    "              </button>\n            " + close_div_fixed + "\n          </motion.div>",
    1,
)
text = text.replace(
    "          </nav>\n        " + close_div + "\n\n        <AnimatePresence>",
    "          </nav>\n        " + close_div_fixed + "\n\n        <AnimatePresence>",
    1,
)
text = text.replace(
    "                  Get a quote\n                </a>\n              " + close_div + "\n            </motion.div>",
    "                  Get a quote\n                </a>\n              " + close_div_fixed + "\n            </motion.div>",
    1,
)
text = text.replace(
    "            Email\n          </a>\n        " + close_div + "\n      " + close_div,
    "            Email\n          </a>\n        " + close_div_fixed + "\n      " + close_div_fixed,
    1,
)

# Undo wrong opening tag change if present
text = text.replace(
    '<motion.div className="flex shrink-0 items-center gap-2 sm:gap-3">',
    '<div className="flex shrink-0 items-center gap-2 sm:gap-3">',
)

p.write_text(text, encoding="utf-8")
print("fixed")
