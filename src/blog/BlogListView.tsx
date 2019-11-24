import React from "react"
import Card from "./Card"
import {CardsContainer} from "./Card/CardsContainer"
import {ViewPost} from "../../pages/blog"

interface BlogListViewProps {
  posts: ViewPost[];
}

interface BlogListViewComponent extends React.FunctionComponent<BlogListViewProps> {
  Container: any;
}

const BlogListView:BlogListViewComponent = ({posts}) => {
  return (
    <BlogListView.Container breakpointCols={3} maxWidth={["none", "none", "962px"]} py={["small", "small", "regular", "xregular"]}>
      {posts.map((post, index) => (
        <Card key={`${post._id}-${index}`} {...post} />
      ))}
    </BlogListView.Container>
  )
}

BlogListView.Container = CardsContainer;

export default BlogListView;
