import React from "react"
import Card from "./Card"
import {CardsContainer} from "./Card/CardsContainer"
import {ViewPost} from "../../pages/blog"
import { FunctionComponent } from "../utils/function-component.interface";

interface BlogListViewProps {
  posts: ViewPost[];
}

interface BlogListViewComponent extends FunctionComponent<BlogListViewProps> {
  Container: any;
}

const BlogListView:BlogListViewComponent = ({posts}) => {
  return (
    <BlogListView.Container breakpointCols={3} maxWidth={["none", "none", "962px"]} px={["xregular", "xregular", "none", "none"]} py={["small", "small", "regular", "xregular"]}>
      {posts.map((post, index) => (
        <Card key={`${post._id}-${index}`} {...post} />
      ))}
    </BlogListView.Container>
  )
}

BlogListView.Container = CardsContainer;

export default BlogListView;
