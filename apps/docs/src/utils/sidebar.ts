type MarkdownFrontmatter = {
  title: string;
  section: string;
};

type MarkdownFile = {
  frontmatter: MarkdownFrontmatter;
};

type NavigationItem = {
  title: string;
  path: string;
};

export type Section = "Components" | "Guide";

function transformPath(path: string) {
  const newPath = path.replace(/\.mdx$/, "").replace(/^\./, "");

  if (newPath.endsWith("index")) {
    return newPath.replace(/\/index$/, "");
  }

  return newPath;
}

function transformToNavigationItems(files: Record<string, MarkdownFile>) {
  return Object.entries(files).reduce<Record<string, NavigationItem[]>>((acc, [key, value]) => {
    const { title, section } = value.frontmatter;

    if (!acc[section]) {
      acc[section] = [];
    }

    return { ...acc, [section]: [...acc[section], { title, path: transformPath(key) }] };
  }, {});
}

export function getNavigationItemEntries(files: Record<string, MarkdownFile>) {
  const sections = ["Guide", "Components"];
  const entries = transformToNavigationItems(files);

  return Object.entries(entries).sort((a, b) => sections.indexOf(a[0]) - sections.indexOf(b[0])) as [
    Section,
    NavigationItem[],
  ][];
}
