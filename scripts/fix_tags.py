from pathlib import Path

p = Path("src/site/sections.jsx")
text = p.read_text(encoding="utf-8")

text = text.replace(
    "            </motion.a>\n          );\n        })}\n      </motion.div>\n    </SectionReveal>\n  );\n}\n\nexport function ComparisonCell",
    "            </Link>\n          );\n        })}\n      </motion.div>\n    </SectionReveal>\n  );\n}\n\nexport function ComparisonCell",
    1,
)

text = text.replace(
    "        </ul>\n      </motion.div>\n    </FadeIn>\n  );\n}\n\nexport function CareMonitoringTeaser",
    "        </ul>\n      </div>\n    </FadeIn>\n  );\n}\n\nexport function CareMonitoringTeaser",
    1,
)

p.write_text(text, encoding="utf-8")
print("done")
