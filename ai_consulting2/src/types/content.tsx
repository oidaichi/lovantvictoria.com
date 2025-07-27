export interface MarkdownFrontmatter {
  title: string;
  subtitle: string;
  cta_primary: string;
  cta_secondary: string;
}

export interface MarkdownContent {
  frontmatter: MarkdownFrontmatter;
  body: string;
}