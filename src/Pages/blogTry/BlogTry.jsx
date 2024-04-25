import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const BlogTry = () => ({
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="my-app-list">{children}</ul>;
    },
    [INLINES.HYPERLINK]: ({ data }, children) => {
      return (
        <a href={data.uri} className="my-ap-link">
          {children}
        </a>
      );
    },
  },
});

export const renderRichText = (text) =>
  documentToReactComponents(text, BlogTry());
