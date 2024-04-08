# How to Create Markdown Files

This documentation provides a basic tutorial on creating and formatting Markdown (`.md`) files. Markdown is a lightweight markup language with plain-text formatting syntax that can be converted to HTML. It's widely used for README files, documentation, and more.

Table of Contents:

- [Getting Started](#getting-started)
- [Headers](#headers)
- [Paragraphs and Line Breaks](#paragraphs-and-line-breaks)
- [Emphasis](#emphasis)
- [Lists](#lists)
- [Links](#links)
- [Images](#images)
- [Code](#code)
- [Tables](#tables)
- [Blockquotes](#blockquotes)
- [Horizontal Rules](#horizontal-rules)

## Getting Started

To create a Markdown file, you just need a text editor. Save the file with the extension `.md` or `.markdown`.

!!! example

    === "Code"

        ```md linenums="1"
        # My Project Documentation

        Welcome to my project! This file is written in Markdown.
        ```

    === "Preview"
        
        <span style="font-size:2em;">My Project Documentation</span>

        Welcome to my project! This file is written in Markdown.
        


## Headers

Headers are created by adding one or more `#` symbols before your header text. The number of `#` symbols corresponds to the header level.

!!! example

    === "Code"

        ```md linenums="1"
        # Header 1
        ## Header 2
        ### Header 3
        #### Header 4
        ##### Header 5
        ###### Header 6
        ```

    === "Preview"
        
        <span style="font-size:2em;">Header 1</span>

        <span style="font-size:1.8em;">Header 2</span>

        <span style="font-size:1.6em;">Header 3</span>

        <span style="font-size:1.4em;">Header 4</span>

        <span style="font-size:1.2em;">Header 5</span>

        <span style="font-size:1em;">Header 6</span>


## Paragraphs and Line Breaks

Paragraphs are just one or more lines of consecutive text followed by one or more blank lines.

To create a line break, end a line with two or more spaces, then hit Return.

!!! example

    === "Code"

        ```md linenums="1"
        This is a paragraph. It has two sentences.

        This is another paragraph.  
        This line is separated by a line break.
        ```

    === "Preview"
        
        This is a paragraph. It has two sentences.

        This is another paragraph.  
        This line is separated by a line break.


## Emphasis

You can italicize text by wrapping words in a single asterisk (`*`) or underscore (`_`). Bold text requires double asterisks (`**`) or underscores (`__`).

!!! example

    === "Code"

        ```md linenums="1"
        *This text is italicized*, and so is _this text_.

        **This text is bold**, and so is __this text__.
        ```

    === "Preview"
        
        *This text is italicized*, and so is _this text_.

        **This text is bold**, and so is __this text__.


## Lists

You can create ordered and unordered lists.

!!! example

    === "Code"

        ```md linenums="1"
        Unordered:

        - Item 1
        - Item 2
            - Subitem 2.1
            - Subitem 2.2

        ---
        Ordered:

        1. First item
        2. Second item
        ```

    === "Preview"
        
        Unordered:

        - Item 1
        - Item 2
            - Subitem 2.1
            - Subitem 2.2

        ---
        Ordered:

        1.    First item
        2.    Second item
        

## Links

To create a link, enclose the link text in brackets (`[]`) and then follow it immediately with the URL in parentheses (`()`).

!!! example

    === "Code"

        ```md linenums="1"
        This is [an example](http://example.com) link.
        ```

    === "Preview"
        
        This is [an example](http://example.com) link.


## Images

Images are similar to links, but they include a leading exclamation point (`!`), followed by the alt text in brackets, and the path or URL to the image in parentheses.

!!! example

    === "Code"

        ```md linenums="1"
        ![Picture of a titmouse](https://source.unsplash.com/Zepatsha9BA)
        ```

    === "Preview"
        
        ![Picture of a titmouse](https://source.unsplash.com/Zepatsha9BA)


## Code

For inline code, wrap the text in backticks (`` ` ``). For code blocks, use three backticks or indent with four spaces.

!!! example

    === "Code"

        ```md linenums="1"
        This is an inline `code` example.
        ```

    === "Preview"
        
        This is an inline `code` example.


## Tables

Tables are created using a combination of pipes (`|`) and dashes (`-`). The header row is separated from the body by a line of dashes.

!!! example

    === "Code"

        ```md linenums="1"
        | Header 1 | Header 2 |
        |----------|----------|
        | Row 1    | Data     |
        | Row 2    | Data     |
        ```

    === "Preview"
        
        | Header 1 | Header 2 |
        |----------|----------|
        | Row 1    | Data     |
        | Row 2    | Data     |


## Blockquotes

Blockquotes are created by prefixing lines with the `>` character.

!!! example

    === "Code"

        ```md linenums="1"
        > This is a blockquote.
        ```

    === "Preview"
        
        > This is a blockquote.


## Horizontal Rules

Horizontal rules are created by placing three or more hyphens (`---`), asterisks (`***`), or underscores (`___`) on a line by themselves.

!!! example

    === "Code"

        ```md linenums="1"
        The line below is an instance of horizontal rules.

        ---
        The rest of the text.
        ```

    === "Preview"
        
        The line below is an instance of horizontal rules.

        ---
        The rest of the text.


Congratulations, you now know the basics of Markdown! This guide covers the fundamental elements, but there's much more you can do with Markdown. Feel free to explore and experiment.