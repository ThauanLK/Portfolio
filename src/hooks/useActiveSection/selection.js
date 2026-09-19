// A seção atual é a última cujo início passou pela linha abaixo do cabeçalho.
export function selectActiveSection(sections, activationLine, atPageEnd = false) {
  if (atPageEnd) return sections.at(-1)?.id ?? null;
  return sections.reduce((active, section) => (
    section.top <= activationLine ? section.id : active
  ), null);
}
