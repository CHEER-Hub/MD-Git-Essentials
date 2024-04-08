var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome to Our Tutorials","text":"<p>Welcome to our comprehensive tutorials on working with Markdown files and Git. Whether you're a beginner looking to get started or an experienced user seeking to brush up on your skills, we've got you covered.</p>"},{"location":"index.html#about-this-site","title":"About This Site","text":"<p>This site is dedicated to offering step-by-step guides and best practices for managing your projects using Markdown and Git. Our tutorials are designed to help you learn at your own pace and become proficient in document creation, version control, and collaboration.</p>"},{"location":"index.html#why-markdown","title":"Why Markdown?","text":"<p>Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then converts to structurally valid HTML for viewing on the web. It's widely used for README files, documentation, and blogging among developers.</p>"},{"location":"index.html#why-git","title":"Why Git?","text":"<p>Git is a distributed version control system essential for tracking changes in your files and collaborating with others. It's crucial for managing complex projects and contributing to open-source software.</p>"},{"location":"index.html#getting-started","title":"Getting Started","text":"<p>To get the most out of these tutorials, we recommend starting with the basics of Markdown to familiarize yourself with simple text formatting and document creation. Then, move on to Git to understand version control and how to effectively collaborate on projects.</p>"},{"location":"index.html#quick-links","title":"Quick Links","text":"<ul> <li>Markdown Tutorials: Start with our Markdown Guide to master the basics of Markdown formatting and advanced techniques.</li> <li>Git Tutorials: Dive into our Git Guide to learn everything from Git basics to advanced version control practices.</li> </ul>"},{"location":"index.html#support","title":"Support","text":"<p>Need help or have questions along the way? Feel free to reach out to us.</p> <p>Thank you for choosing our tutorials to learn Markdown and Git. We're excited to help you on your journey to becoming more proficient in these essential tools. Happy learning!</p>"},{"location":"markdown.html","title":"How to Create Markdown Files","text":"<p>This documentation provides a basic tutorial on creating and formatting Markdown (<code>.md</code>) files. Markdown is a lightweight markup language with plain-text formatting syntax that can be converted to HTML. It's widely used for README files, documentation, and more.</p> <p>Table of Contents:</p> <ul> <li>Getting Started</li> <li>Headers</li> <li>Paragraphs and Line Breaks</li> <li>Emphasis</li> <li>Lists</li> <li>Links</li> <li>Images</li> <li>Code</li> <li>Tables</li> <li>Blockquotes</li> <li>Horizontal Rules</li> </ul>"},{"location":"markdown.html#getting-started","title":"Getting Started","text":"<p>To create a Markdown file, you just need a text editor. Save the file with the extension <code>.md</code> or <code>.markdown</code>.</p> <p>Example</p> CodePreview <pre><code># My Project Documentation\n\nWelcome to my project! This file is written in Markdown.\n</code></pre> <p>My Project Documentation</p> <p>Welcome to my project! This file is written in Markdown.</p>"},{"location":"markdown.html#headers","title":"Headers","text":"<p>Headers are created by adding one or more <code>#</code> symbols before your header text. The number of <code>#</code> symbols corresponds to the header level.</p> <p>Example</p> CodePreview <pre><code># Header 1\n## Header 2\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6\n</code></pre> <p>Header 1</p> <p>Header 2</p> <p>Header 3</p> <p>Header 4</p> <p>Header 5</p> <p>Header 6</p>"},{"location":"markdown.html#paragraphs-and-line-breaks","title":"Paragraphs and Line Breaks","text":"<p>Paragraphs are just one or more lines of consecutive text followed by one or more blank lines.</p> <p>To create a line break, end a line with two or more spaces, then hit Return.</p> <p>Example</p> CodePreview <pre><code>This is a paragraph. It has two sentences.\n\nThis is another paragraph.  \nThis line is separated by a line break.\n</code></pre> <p>This is a paragraph. It has two sentences.</p> <p>This is another paragraph. This line is separated by a line break.</p>"},{"location":"markdown.html#emphasis","title":"Emphasis","text":"<p>You can italicize text by wrapping words in a single asterisk (<code>*</code>) or underscore (<code>_</code>). Bold text requires double asterisks (<code>**</code>) or underscores (<code>__</code>).</p> <p>Example</p> CodePreview <pre><code>*This text is italicized*, and so is _this text_.\n\n**This text is bold**, and so is __this text__.\n</code></pre> <p>This text is italicized, and so is this text.</p> <p>This text is bold, and so is this text.</p>"},{"location":"markdown.html#lists","title":"Lists","text":"<p>You can create ordered and unordered lists.</p> <p>Example</p> CodePreview <pre><code>Unordered:\n\n- Item 1\n- Item 2\n    - Subitem 2.1\n    - Subitem 2.2\n\n---\nOrdered:\n\n1. First item\n2. Second item\n</code></pre> <p>Unordered:</p> <ul> <li>Item 1</li> <li>Item 2<ul> <li>Subitem 2.1</li> <li>Subitem 2.2</li> </ul> </li> </ul> <p>Ordered:</p> <ol> <li>First item</li> <li>Second item</li> </ol>"},{"location":"markdown.html#links","title":"Links","text":"<p>To create a link, enclose the link text in brackets (<code>[]</code>) and then follow it immediately with the URL in parentheses (<code>()</code>).</p> <p>Example</p> CodePreview <pre><code>This is [an example](http://example.com) link.\n</code></pre> <p>This is an example link.</p>"},{"location":"markdown.html#images","title":"Images","text":"<p>Images are similar to links, but they include a leading exclamation point (<code>!</code>), followed by the alt text in brackets, and the path or URL to the image in parentheses.</p> <p>Example</p> CodePreview <pre><code>![Picture of a titmouse](https://source.unsplash.com/Zepatsha9BA)\n</code></pre> <p></p>"},{"location":"markdown.html#code","title":"Code","text":"<p>For inline code, wrap the text in backticks (<code>`</code>). For code blocks, use three backticks or indent with four spaces.</p> <p>Example</p> CodePreview <pre><code>This is an inline `code` example.\n</code></pre> <p>This is an inline <code>code</code> example.</p>"},{"location":"markdown.html#tables","title":"Tables","text":"<p>Tables are created using a combination of pipes (<code>|</code>) and dashes (<code>-</code>). The header row is separated from the body by a line of dashes.</p> <p>Example</p> CodePreview <pre><code>| Header 1 | Header 2 |\n|----------|----------|\n| Row 1    | Data     |\n| Row 2    | Data     |\n</code></pre> Header 1 Header 2 Row 1 Data Row 2 Data"},{"location":"markdown.html#blockquotes","title":"Blockquotes","text":"<p>Blockquotes are created by prefixing lines with the <code>&gt;</code> character.</p> <p>Example</p> CodePreview <pre><code>&gt; This is a blockquote.\n</code></pre> <p>This is a blockquote.</p>"},{"location":"markdown.html#horizontal-rules","title":"Horizontal Rules","text":"<p>Horizontal rules are created by placing three or more hyphens (<code>---</code>), asterisks (<code>***</code>), or underscores (<code>___</code>) on a line by themselves.</p> <p>Example</p> CodePreview <pre><code>The line below is an instance of horizontal rules.\n\n---\nThe rest of the text.\n</code></pre> <p>The line below is an instance of horizontal rules.</p> <p>The rest of the text.</p> <p>Congratulations, you now know the basics of Markdown! This guide covers the fundamental elements, but there's much more you can do with Markdown. Feel free to explore and experiment.</p>"}]}