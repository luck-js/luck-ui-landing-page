import React from "react"
// @ts-ignore
import unified from "unified"
import remarkParse from "remark-parse"
// @ts-ignore
import remarkSlug from "remark-slug"
// @ts-ignore
import remarkRehype from "remark-rehype"
// @ts-ignore
import rehypeReact from "rehype-react"
// @ts-ignore
import rehypeRaw from "rehype-raw"

function makeCreateElement(components: any) {
  return function(component: any, props: any, children: any) {
    const Tag =
      (components && component && components[component]) || component || "div"

    return <Tag {...props}>{children}</Tag>
  }
}

export const getProcessor = (components: any) => {
  const createElement = makeCreateElement(components)

  return unified()
  // @ts-ignore
    .use(remarkParse)
    .use(remarkSlug)
    .use(remarkRehype, { allowDangerousHTML: true })
    .use(rehypeRaw)
    .use(rehypeReact, { createElement })
}
