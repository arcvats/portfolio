import Link from "next/link";
import Image from "next/image";
import { imageSizeFromFile } from "image-size/fromFile";
import path from "path";
import { MDXComponents } from "mdx/types";
import { Highlight, themes } from "prism-react-renderer";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-4">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-2 mt-4">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-lg font-semibold text-gray-900 dark:text-white mb-0 mt-0">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <div className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
      {children}
    </div>
  ),
  a: ({ href, children }) => (
    <Link
      href={href || "#"}
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-r">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const language = className?.replace("language-", "") || "";

    if (language) {
      // Code block with syntax highlighting
      return (
        <div className="relative my-6">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-t-lg border-b-0 border-gray-200 dark:border-gray-700 mb-0">
            <span className="font-medium">{language}</span>
          </div>
          <Highlight
            theme={themes.nightOwl}
            code={String(children).replace(/\n$/, "")}
            language={language as any}
          >
            {({
              className: highlightClassName,
              style,
              tokens,
              getLineProps,
              getTokenProps,
            }) => (
              <pre
                className={`${highlightClassName} p-4 rounded-b-lg overflow-x-auto mt-0 rounded-t-none`}
                style={style}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="select-none mr-4 opacity-50 text-right inline-block w-8 text-sm">
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      );
    }

    // Inline code
    return (
      <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <div className="my-6">{children}</div>,
  hr: () => <hr className="my-8 border-gray-300 dark:border-gray-600" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </tbody>
  ),
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-white">
      {children}
    </strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  img: async (props) => {
    // Copy props into new object since it's locked
    const fileName = props.src!;
    let width = 800;
    let height = 600;

    if (!props.width && !props.height) {
      const filePath = path.join(process.cwd(), "public", fileName);

      const dimensions = await imageSizeFromFile(filePath);

      width = dimensions.width;
      height = dimensions.height;
    }
    return (
      <figure>
        <Image
          src={fileName}
          alt={fileName}
          width={width}
          height={height}
          priority={true}
        />
        <figcaption className="text-xs text-gray-500 dark:text-gray-400 text-center">
          {props.title}
        </figcaption>
      </figure>
    );
  },
};

export default components;
